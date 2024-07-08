import axios from "axios";
var parseString = require("xml2js").parseString;

export const getWielerflitsFeed = async () => {
  const response = await axios.get("https://wielerflits.nl/feed", {
    headers: {
      "Content-Type": "text/xml",
    },
  });

  function parseXml(xml: any) {
    return new Promise((resolve, reject) => {
      parseString(xml, (err: any, result: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.rss.channel[0].item);
        }
      });
    });
  }

  if (!response) return;

  const result: any = await parseXml(response.data);

  if (!result) return;

  const formattedResult = result
    .filter((x: any) => !x.title[0].includes("Winactie:"))
    .map((item: any) => {
      return {
        title: item.title[0],
        link: item.link[0],
        pubDate: item.pubDate[0],
        description: item.description[0],
        image: item.image[0],
        source: "Wielerflits",
        category: "Sport",
      };
    });

  return formattedResult;
};

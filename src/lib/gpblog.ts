import axios from "axios";
var parseString = require("xml2js").parseString;

export const getGPBlogFeed = async () => {
  const response = await axios.get("https://www.gpblog.com/nl/rss/index.xml", {
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

  const result: any = await parseXml(response?.data);

  console.log(result);

  if (!result) return;

  const formattedResult = result.map((item: any) => {
    return {
      title: item.title[0],
      link: item.link[0],
      pubDate: item.pubDate[0],
      description: item.description[0],
      image: item.enclosure[0].$.url,
      source: "GPBlog",
      category: "Sport",
    };
  });

  return formattedResult;
};

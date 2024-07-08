import { getGPBlogFeed } from "./gpblog";
import { getNOSFeed } from "./nos";
import { getWielerflitsFeed } from "./wielerflits";

export const getAllItems = async () => {
  let newsItems: any[] = [];

  const wielerflits = await getWielerflitsFeed();
  newsItems.push(wielerflits);

  const nos = await getNOSFeed();
  newsItems.push(nos);

  const gpblog = await getGPBlogFeed();
  newsItems.push(gpblog);

  newsItems = newsItems.flat().sort((a: any, b: any) => {
    return new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf();
  });

  if (!newsItems) return;

  return newsItems;
};

export const getItemsByCategory = async (category?: string) => {
  const newsItems = await getAllItems();

  if (!newsItems) return;

  if (!category) return newsItems;

  return newsItems.filter((item: any) => item.category.toLowerCase() == category);
};

import getCollection, { URLS_COLLECTION } from "@/db";

export async function getUrl(alias: string) {
  const urls = await getCollection(URLS_COLLECTION);
  const entry = await urls.findOne({ alias });

  if (entry && entry.url) {
    return entry.url;
  } else {
    return null;
  }  
}

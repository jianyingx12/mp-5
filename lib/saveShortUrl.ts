"use server";
import getCollection, { URLS_COLLECTION } from "@/db";
import { UrlProps } from "@/types";

export async function saveUrl({ alias, url }: UrlProps) {
  const urls = await getCollection(URLS_COLLECTION);

  const existing = await urls.findOne({ alias });
  if (existing) {
    throw new Error("Alias already exists");
  }

  const validUrl = /^https?:\/\/.+/;
  if (!url.match(validUrl)) {
    throw new Error("Invalid URL");
  }

  await urls.insertOne({ alias, url });
  return null
}


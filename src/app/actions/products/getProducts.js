"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const getProducts = async () => {
  const products = await dbConnect(collectionNames.PRACTICE_DATA)
    .find({})
    .toArray();
  return products;
};

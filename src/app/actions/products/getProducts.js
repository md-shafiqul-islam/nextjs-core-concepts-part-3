"use server";

import dbConnect from "@/lib/dbConnect";

export const getProducts = async () => {
  const products = await dbConnect("practice-data").find({}).toArray();
  return products;
};

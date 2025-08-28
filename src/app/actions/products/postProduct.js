"use server";

import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const postProduct = async (postedData) => {
  const result = await dbConnect("practice-data").insertOne(postedData);
  revalidatePath("/products");
  return result;
};

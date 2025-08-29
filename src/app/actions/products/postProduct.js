"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const postProduct = async (postedData) => {
  const result = await dbConnect(collectionNames.PRACTICE_DATA).insertOne(
    postedData
  );
  revalidatePath("/products");
  return result;
};

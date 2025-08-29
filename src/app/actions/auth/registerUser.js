"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  try {
    // Need to check if unique username was given

    const result = dbConnect(collectionNames.TEST_USER).insertOne(payload);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = await params;
  const singleData = await dbConnect(collectionNames.PRACTICE_DATA).findOne({
    _id: new ObjectId(id),
  });

  return Response.json(singleData);
}

export async function DELETE(req, { params }) {
  const { id } = await params;
  const response = await dbConnect(collectionNames.PRACTICE_DATA).deleteOne({
    _id: new ObjectId(id),
  });

  return Response.json(response);
}

export async function PATCH(req, { params }) {
  const { id } = await params;
  const postedData = await req.json();

  const filter = { _id: new ObjectId(id) };
  const updatedResponse = await dbConnect(
    collectionNames.PRACTICE_DATA
  ).updateOne(filter, { $set: { ...postedData } }, { upsert: true });

  return Response.json(updatedResponse);
}

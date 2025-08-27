"use server";
import dbConnect, { collectionNames } from "@/Lib/dbConnec";
import bcrypt from "bcryptjs";

export const registerUser = async (payload) => {
  const userCollection = dbConnect(collectionNames.userCollection);
  // Validation

  const { email, password } = payload;
  if (!email || !password) return null;

  const user = await userCollection.findOne({ email: payload.email });
  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;
    const result = await userCollection.insertOne(payload);
    result.insertedId = result.insertedId.toString();
    return result;
  }
  return null;
};

"use server";

import dbConnect, { collectionNames } from "@/Lib/dbConnec";

import bcrypt from "bcryptjs";

export const loginUser = async (payload) => {
  const { email, password } = payload;

  const userCollection = dbConnect(collectionNames.userCollection);
  const user = await userCollection.findOne({ email });

  if (!user) return null;
  const isPasswordOK = bcrypt.compare(user.password, password);
  if (!isPasswordOK) return null;

  return user;
};

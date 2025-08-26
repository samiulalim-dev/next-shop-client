
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req) {
  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return new Response(JSON.stringify({ error: "All fields are required." }), {
      status: 400,
    });
  }
  try {
    const client = await clientPromise;
    const db = client.db();
    const usersCollection = db.collection("users");
    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists." }), {
        status: 400,
      });
    }
    // Add user
    await usersCollection.insertOne({ name, email, password });
    return new Response(JSON.stringify({ success: true }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Registration failed." }), {
      status: 500,
    });
  }
}

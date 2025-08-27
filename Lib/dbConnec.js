import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNames = {
  userCollection: "test_user",
  productCollection: "product_data",
};

export default function dbConnect(collectionName) {
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fe99gj2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.DB_NAME).collection(collectionName);
}

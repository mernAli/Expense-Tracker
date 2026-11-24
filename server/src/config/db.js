import mongoose from "mongoose";
import { env } from "./env.js";

export const connectDB = async () => {
  if (!env.mongoUri) {
    throw new Error("MONGO_URI is missing. Add it to server/.env");
  }
  await mongoose.connect(env.mongoUri);
  console.log(`MongoDB connected: ${mongoose.connection.name}`);
};

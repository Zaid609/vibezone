import mongoose from "mongoose";

let isConnected = false; // Track connection status

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);  // Make sure 'strictQuery' is enabled

  if (isConnected) {
    console.log("MongoDB is already connected.");
    return;
  }

  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI);  // No need for `useNewUrlParser` and `useUnifiedTopology`

    isConnected = true;
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
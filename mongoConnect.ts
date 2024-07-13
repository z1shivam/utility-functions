import { env } from "@/env";
import mongoose from "mongoose";

// Before you use
// 1. Install mongoose
// 2. Setup env like in t3 builder

export const dbConnect = async () => {
  try {
    if (
      mongoose.connections &&
      mongoose.connections[0] &&
      mongoose.connections[0].readyState === 1
    ) {
      console.log(`Database already connected!!`);
      return;
    }
    const { connection } = await mongoose.connect(env.MONGO_URL, {
      dbName: env.MONGO_DB,
    });
    console.log(`Database connected to ${connection.name}`);
  } catch (error: any) {
    console.error(`Database connection failed: ${error.message}`);
  }
};

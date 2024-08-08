import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: process.env.MONGO_DB_NAME,
    });
  } catch (err) {
    console.log("Conexion :", err);
  }
};

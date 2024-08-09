import mongoose from "mongoose";

const StorageScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const storageModel = mongoose.model("storage", StorageScheme);

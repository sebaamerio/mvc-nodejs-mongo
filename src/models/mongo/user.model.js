import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 1,
      max: 50,
    },
    lastname: {
      type: String,
      required: true,
      min: 1,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    date_birth: {
      type: Date,
      required: false,
    },
    rol: {
      type: Schema.Types.ObjectId,
      ref: "rol",
      requierd: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const userModel = mongoose.model("User", userSchema);

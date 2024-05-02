import mongoose from "mongoose";

//Count Table Schema
const schema = new mongoose.Schema(
  {
    count: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Count = mongoose.model("Count", schema);

import mongoose from "mongoose";

//Content Table Schema
const schema = new mongoose.Schema(
  {
    componentNumber: {
      type: Number,
      required: [true, "Please Send Component Number"],
    },
    content: {
      type: String,
      required: [true, "Please Send Component Content"],
    },
  },
  {
    timestamps: true,
  }
);

export const Content = mongoose.model("Content", schema);

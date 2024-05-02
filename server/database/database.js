import mongoose from "mongoose";

//Database Connection to MongoDB Atlas  Function
export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB Connected with ${connection.host}`);
};

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `MongoDB connect Successfully !! DB Host: ${process.env.MONGODB_URI}`
    );
  } catch (err) {
    console.log(`MongoDB Connection Error :${err}`);
    process.exit(1);
  }
};

export default connectDB;

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      `MongoDB connect successfully !!! DB Host: ${process.env.MONGODB_URL}`
    );
  } catch (err) {
    console.log(`MongoDB connect err: ${err.message}`);
  }
};
export default connectDB;

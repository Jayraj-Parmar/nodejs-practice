import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const user = mongoose.model("user", userSchema);

export default user;

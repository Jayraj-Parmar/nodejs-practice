import mongoose from "mongoose";
const employeeSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, enum: ["male", "female"], required: true },
    department: {
      type: String,
      enum: [
        "Web Development",
        "Front-end Devlopement",
        "Backend Devlopment",
        "Full Stack Devlopment",
      ],
      required: true,
    },
  },
  { timestamps: true }
);
const employee = mongoose.model("employee", employeeSchema);
export default employee;
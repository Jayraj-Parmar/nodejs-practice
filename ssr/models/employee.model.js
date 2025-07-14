import mongoose from "mongoose";
const employeeSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, enum: ["Male", "Memale"], required: true },
    department: {
      type: String,
      enum: [
        "Web Development",
        "Frontend Devlopement",
        "Backend Devlopment",
        "Full Stack Devlopment",
      ],
      required: true,
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  { timestamps: true }
);
const employee = mongoose.model("employee", employeeSchema);
export default employee;

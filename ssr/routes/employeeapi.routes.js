import express from "express";
import {
  handleCreateEmployee,
  handleDeleteEmployee,
} from "../controllers/employeeapi.controller.js";
import checkDuplicate from "../middleware/checkduplicate.middleware.js";
const empApiRoute = express.Router();
empApiRoute.post(
  "/createemployee",
  checkDuplicate(["email"]),
  handleCreateEmployee
);
empApiRoute.delete("/deleteemployee", handleDeleteEmployee);
export default empApiRoute;

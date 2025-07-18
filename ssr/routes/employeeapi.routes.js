import express from "express";
import {
  handleCreateEmployee,
  handleDeleteEmployee,
  handleGetEmployeeById,
  handleUpdateEmployee,
} from "../controllers/employeeapi.controller.js";
import checkDuplicate from "../middleware/checkduplicate.middleware.js";
import employee from "../models/employee.model.js";
const empApiRoute = express.Router();
empApiRoute.post(
  "/createemployee",
  checkDuplicate(["email"], employee),
  handleCreateEmployee
);
empApiRoute.delete("/deleteemployee", handleDeleteEmployee);
empApiRoute.get("/employee/:id", handleGetEmployeeById);
empApiRoute.patch("/updateemployee", handleUpdateEmployee);

export default empApiRoute;

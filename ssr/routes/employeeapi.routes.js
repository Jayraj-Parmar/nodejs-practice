import express from "express";
import { handleCreateEmployee } from "../controllers/employeeapi.controller.js";
import checkDuplicate from "../middleware/checkduplicate.middleware.js";
const empApiRoute = express.Router();
empApiRoute.post(
  "/createemployee",
  checkDuplicate(["email"]),
  handleCreateEmployee
);
export default empApiRoute;

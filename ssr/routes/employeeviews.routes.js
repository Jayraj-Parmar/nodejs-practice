import express from "express";
import {
  handleGetAllEmployee,
  handleCreateEmployee,
  handleDeleteEmployee,
} from "../controllers/employeeviews.controller.js";
const empRouter = express.Router();
empRouter.get("/employeedata", handleGetAllEmployee);
empRouter.get("/createemployee", handleCreateEmployee);
empRouter.get("/deleteemployee", handleDeleteEmployee);
export default empRouter;

import express from "express";
import {
  handleGetAllEmployee,
  handleCreateEmployee,
  handleDeleteEmployee,
  handleUpdateEmployee,
} from "../controllers/employeeviews.controller.js";
const empRouter = express.Router();
empRouter.get("/employeedata", handleGetAllEmployee);
empRouter.get("/createemployee", handleCreateEmployee);
empRouter.get("/deleteemployee", handleDeleteEmployee);
empRouter.get("/updateemployee", handleUpdateEmployee);
export default empRouter;

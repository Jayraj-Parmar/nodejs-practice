import express from "express";
import {
  handleGetAllEmployee,
  handleCreateEmployee,
} from "../controllers/employeeviews.controller.js";
const empRouter = express.Router();
empRouter.get("/employeedata", handleGetAllEmployee);
export default empRouter;
empRouter.get("/createemployee", handleCreateEmployee);

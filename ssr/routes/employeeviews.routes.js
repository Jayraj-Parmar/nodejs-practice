import express from "express";
import { handleGetAllEmployee } from "../controllers/employeeviews.controller.js";
const empRouter = express.Router();
empRouter.get("/employeedata", handleGetAllEmployee);
export default empRouter;

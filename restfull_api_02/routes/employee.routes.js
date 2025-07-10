import express from "express";
import checkDuplicate from "../middleware/checkduplicate.middleware.js";
import {
  handleGetAllEmployee,
  handleGetEmployeeById,
  handleUpdateEmployeeDataById,
  handleDeleteEmployeeDatById,
  createEmployee,
} from "../controllers/employee.controller.js";

const router = express.Router();

router.get("/api/employee", handleGetAllEmployee);
router.post("/createemployee", checkDuplicate(["email"]), createEmployee);
router
  .route("/employee/:id")
  .get(handleGetEmployeeById)
  .patch(handleUpdateEmployeeDataById)
  .delete(handleDeleteEmployeeDatById);

export default router;

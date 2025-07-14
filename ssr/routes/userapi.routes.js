import express from "express";
import {
  createUserSignUp,
  loginUser,
} from "../controllers/userapi.controller.js";
import checkDuplicate from "../middleware/checkduplicate.middleware.js";
import user from "../models/user.model.js";
const userApiRoute = express.Router();

userApiRoute.post(
  "/signup",
  checkDuplicate(["username", "email"], user),
  createUserSignUp
);
userApiRoute.post("/login", loginUser);

export default userApiRoute;

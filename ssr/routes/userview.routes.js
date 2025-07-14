import express from "express";
import {
  createUserSignUp,
  loginUser,
} from "../controllers/userviews.controller.js";

const userViewRoute = express.Router();

userViewRoute.get("/signup", createUserSignUp);
userViewRoute.get("/login", loginUser);

export default userViewRoute;

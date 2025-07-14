import user from "../models/user.model.js";
import { v4 as uuidv4 } from "uuid";
import { setUser } from "../utils/auth.js";

const createUserSignUp = async (req, res) => {
  try {
    user.create(req.body);
    res.redirect("/employee/employeedata");
  } catch (error) {
    res.status(500).json({ error: "Server Error", message: error.message });
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const loggedInUser = await user.findOne({ email, password });
    if (!loggedInUser) {
      return res.render("login", { error: "Invalid email or pasword !" });
    }
    const sessionId = uuidv4();
    setUser(sessionId, loggedInUser);
    res.cookie("uid", sessionId);
    res.redirect("/employee/employeedata");
  } catch (error) {
    res.status(500).json({ error: "Server Error", message: error.message });
  }
};

export { createUserSignUp, loginUser };

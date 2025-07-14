// import user from "../models/user.model.js";
const createUserSignUp = async (req, res) => {
  try {
    res.render("signup");
  } catch (error) {
    res.status(500).json({ error: "Server Error", message: error.message });
  }
};
const loginUser = async (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    res.status(500).json({ error: "Server Error", message: error.message });
  }
};

export { createUserSignUp, loginUser };

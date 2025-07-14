import { getUser } from "../utils/auth.js";

const restrictToLoggedInUserOnly = (req, res, next) => {
  const userId = req.cookies.uid;
  if (!userId) return res.redirect("/login");
  const user = getUser(userId);
  if (!user) return res.redirect("/login");
  req.user = user;
  next();
};

export default restrictToLoggedInUserOnly;

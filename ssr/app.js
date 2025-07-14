import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.config.js";
import empRouter from "./routes/employeeviews.routes.js";
import empApiRoute from "./routes/employeeapi.routes.js";
import methodOverride from "method-override";
import userViewRoute from "./routes/userview.routes.js";
import userApiRoute from "./routes/userapi.routes.js";
import cookieParser from "cookie-parser";
import restrictToLoggedInUserOnly from "./middleware/auth.middleware.js";
dotenv.config();

// Middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(methodOverride("_method"));
app.use(cookieParser());

//MongoDB connection
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at Port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB connect err: ${err.message}`);
  });

//Routes
app.use("/employee", restrictToLoggedInUserOnly, empRouter);
app.use("/employee", restrictToLoggedInUserOnly, empApiRoute);
app.use(userViewRoute);
app.use(userApiRoute);

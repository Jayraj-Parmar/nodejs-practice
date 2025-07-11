import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.config.js";
import empRouter from "./routes/employeeviews.routes.js";
import empApiRoute from "./routes/employeeapi.routes.js";
dotenv.config();

// Middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "./views");
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
app.use(empRouter);
app.use(empApiRoute);

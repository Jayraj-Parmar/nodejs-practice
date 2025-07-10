import express from "express";
import router from "./routes/employee.routes.js";
import connectDB from "./config/db.config.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extende  d: false }));
app.use(router);
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server is running at port: ${process.env.PORT}`)
    );
  })
  .catch((err) => {
    console.log("MongoDB connection faild !!! ", err);
  });

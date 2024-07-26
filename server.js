import * as dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import express from "express";
import mongoose from "mongoose";
const app = express();
import morgan from "morgan";
import cookieParser from "cookie-parser";

//import
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";

//middlewares
app.use(cookieParser());
app.use(express.json());

// routers
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});

//router middleware
app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => console.log(`Server running on port ${port} ...`));
} catch (error) {
  console.log(error);
  process.exit(1);
}

app.use(express.json());

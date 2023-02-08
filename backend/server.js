import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import userRouter from "./routes/userRoutes.js";
import cors from "cors";

const port = 8000;
const app = express();
dotenv.config();

const corsOptions = {
  origin: `http://localhost:3000`,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/seed", seedRouter);
app.use("/api/users", userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

//making login screen
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

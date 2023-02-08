import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";
import expressAsyncHandler from "express-async-handler";

const userRouter = express.Router();

userRouter.post(
  "/signin",

  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.signinEmail });
    if (user) {
      if (bcrypt.compareSync(req.body.signinPassword, user.password)) {
        res.send({
          _id: user._id,
          firstName: user.firstName,
          surName: user.surName,
          email: user.email,
          dateOfBirth: user.dateOfBirth,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);

userRouter.post(
  "/signup",
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      firstName: req.body.signupFirstName,
      surName: req.body.signupSurName,
      email: req.body.signupEmail,
      password: bcrypt.hashSync(req.body.signupPassword),
      dateOfBirth: req.body.dateOfBirth,
      gender: req.body.signupGender,
    });

    const user = await newUser.save();
    res.send({
      _id: user._id,
      firstName: user.firstName,
      surName: user.surName,
      email: user.email,
      dateOfBirth: user.dateOfBirth,
      isAdmin: user.isAdmin,
      token: generateToken(user),
    });
  })
);

export default userRouter;

import express from "express";
import { userRegister, userLogin } from "../controllers/userController.js";
import { userMiddleware } from "../middleware/userMiddleware.js";

const userRouter = express.Router();

userRouter.post("/signup", userRegister);
userRouter.post("/login", userLogin);
userRouter.get("/profile", userMiddleware, (req, res) => {
  res.json({ message: "This is your profile", user: req.user });
});

export default userRouter;




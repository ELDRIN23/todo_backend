import  User  from "../models/userModel.js";
import {generateToken} from "../Utils/generateToken.js";
import bcrypt from "bcrypt";

//userRegister

export const userRegister = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "all feilds are required" });
    }

    const userExsists = await User.findOne({ username });

    if (userExsists) {
      return res.status(400).json({ message: "username already exsists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = new User({
      username,
      password: hashedPassword,
    });
    await userData.save();

    const token = generateToken(userData._id);

    res.json({ data: userData,token, message: "username registered successfully" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error!" });
  }
};

//userLogin

export const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "all feilds are required" });
    }

    const userExsists = await User.findOne({ username });

    if (!userExsists) {
      return res.status(400).json({ message: "user not found" });
    }

    const isVerified = await bcrypt.compare(password, userExsists.password);
    if (!isVerified) {
      return res.status(400).json({ message: "invalid username or password!" });
    }

    const token = generateToken(userExsists._id);



    return res.json({
      data: userExsists,
      token,
      message: "user login successfully completed",
    });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error!" });
  }
};

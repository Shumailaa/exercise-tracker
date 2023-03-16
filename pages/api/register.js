import User from "@/database/models/users";
import dbConnect from "../../database/dbConnect";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function register(req, res) {
  dbConnect.connect();
  const { user_name, email, password } = req.body;
  console.log(req.body);
  if (!email || !password || !user_name) {
    return res.status(404).json({ success: false, msg: "Fieled are required" });
  }
  try {
    const findUser = await User.findOne({ email: email });
    if (findUser) {
      return res
        .status(302)
        .json({ success: false, msg: "email already exist" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const createUser = await User.create({
      user_name: user_name,
      email: email,
      password: passwordHash,
    });
    if (!createUser) {
      return res.status(404).json({ success: false, msg: "Register Failed" });
    }
    console.log("created ", createUser);
    return res
      .status(201)
      .json({
        success: true,
        msg: "Successfully Registered",
        data: createUser,
      });
  } catch (error) {
    return res.status(500).json({ success: false, msg: "server error" });
  }
}

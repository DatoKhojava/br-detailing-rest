import * as argon2 from "argon2";
import { Router } from "express";
import jwt from "jsonwebtoken";
import UserModel from "../mongodb/schema/user.schema";

const controller = Router();

controller.post("/login", async (req: any, res: any) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email }).select("+password");

  if (!user)
    return res.status(403).send({ message: "📧 Provided email is incorrect" });

  try {
    const passwordMatch = await argon2.verify(user.password, password);

    if (passwordMatch) {
      const access_token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET ?? "",
        { expiresIn: "1h" }
      );

      return res.status(200).send({
        message: "✅ Auth successful",
        access_token,
      });
    } else {
      return res.status(401).send({ message: "❌ Auth failed" });
    }
  } catch (error) {
    return res.status(400).send({
      message: "❌ Something went wrong! unable to login into user account",
      error,
    });
  }
});

export default controller;

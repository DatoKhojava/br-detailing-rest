import { Router, Request, Response } from "express";
import UserModel from "../mongodb/schema/user.schema";
import jwt from "jsonwebtoken";

const controller = Router();

controller.post("/", async (req: any, res: any) => {
  const { name, lastname, privateNumber, email, password } = req.body;

  const exUser = await UserModel.findOne({ privateNumber });

  if (exUser)
    return res
      .status(403)
      .send({ message: "🪪 Provided user ID already exist" });

  try {
    const newUser = await UserModel.create({
      name,
      lastname,
      privateNumber,
      email,
      password,
    });

    const access_token = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET ?? "",
      {
        expiresIn: "1h",
      }
    );

    res.status(201).send({
      message: "👤 new user created successfully",
      access_token,
    });
  } catch (error) {
    return res.status(400).send({
      message: "❌ Something went wrong! we can't create new user",
      error,
    });
  }
});

export default controller;

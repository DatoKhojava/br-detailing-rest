import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import UserModel from "../mongodb/schema/user.schema";

interface IJwtPayload extends JwtPayload {
  userId: string;
}

export default async function authMiddleware(
  req: any,
  res: any,
  next: NextFunction
) {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token)
      return res.status(403).send({ message: "🔑 Token is required" });

    const decode = jwt.verify(token, process.env.JWT_SECRET!) as IJwtPayload;

    const user = await UserModel.findById(decode.userId);

    if (!user) return res.status(403).send({ message: "👤 User not found" });

    req.user = { id: user.id };
    next();
  } catch (error) {
    console.log("❌ Something went wrong! ", error);
  }
}

import mongoose, { Schema } from "mongoose";
import { IUser } from "../model/user.model";

const UserSchema = new Schema<IUser>(
  {
    name: { type: String },
    lastname: { type: String },
    privateNumber: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true, select: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUser>("User", UserSchema);
export default User;

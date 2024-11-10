import * as argon2 from "argon2";
import mongoose, { Schema } from "mongoose";
import { IUser } from "../model/user.model";


const UserScheme = new Schema<IUser>(
  {
    name: { type: String },
    lastname: { type: String },
    privateNumber: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true, select: false },
    phoneNumber: { type: String },
  },
  {
    timestamps: true,
  }
);

UserScheme.pre("save", async function (next) {
  this.password = await argon2.hash(this.password);
  next();
});

const User = mongoose.model<IUser>("User", UserScheme);
export default User;

import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  lastname: string;
  privateNumber: string;
  email: string;
  password: string;
}

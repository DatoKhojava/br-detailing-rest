import { Document } from "mongoose";

export interface ICategory extends Document {
  value: string;
  localization: [
    {
      value: string;
      lang: string;
    }
  ];
}

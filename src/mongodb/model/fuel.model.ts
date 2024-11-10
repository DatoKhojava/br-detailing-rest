import { Document } from "mongoose";

export interface IFuel extends Document {
  value: string;
  localization: [
    {
      value: string;
      lang: string;
    }
  ];
}

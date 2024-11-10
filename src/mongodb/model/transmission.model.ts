import { Document } from "mongoose";

export interface ITransmission extends Document {
  value: string;
  localization: [
    {
      name: string;
      lang: string;
    }
  ];
}

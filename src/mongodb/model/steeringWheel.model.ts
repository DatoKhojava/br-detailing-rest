import { Document } from "mongoose";

export interface ISteeringWheel extends Document {
  value: string;
  localization: [
    {
      value: string;
      lang: string;
    }
  ];
}


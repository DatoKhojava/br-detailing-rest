import { Document } from "mongoose";

export interface IDriveWheels extends Document {
  value: string;
  localization: [
    {
      value: string;
      lang: string;
    }
  ];
}

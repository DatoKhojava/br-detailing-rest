import mongoose, { Schema } from "mongoose";
import { IDriveWheels } from "../model/driveWheels.model";

const DriveWheelsScheme = new Schema<IDriveWheels>({
  value: String,
  localization: [{ value: String, lang: String }],
});

const DriveWheels = mongoose.model<IDriveWheels>(
  "DriveWheels",
  DriveWheelsScheme
);
export default DriveWheels;

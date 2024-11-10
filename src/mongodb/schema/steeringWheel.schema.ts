import mongoose, { Schema } from "mongoose";
import { ISteeringWheel } from "../model/steeringWheel.model";

const steeringWheelScheme = new Schema<ISteeringWheel>({
  value: String,
  localization: [{ value: String, lang: String }],
});

const steeringWheel = mongoose.model<ISteeringWheel>(
  "steeringWheel",
  steeringWheelScheme
);
export default steeringWheel;

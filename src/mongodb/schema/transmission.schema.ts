import mongoose, { Schema } from "mongoose";
import { ITransmission } from "../model/transmission.model";

const TransmissionScheme = new Schema<ITransmission>({
  value: String,
  localization: [
    {
      name: String,
      lang: String,
    },
  ],
});

const Transmission = mongoose.model<ITransmission>(
  "Transmission",
  TransmissionScheme
);
export default Transmission;

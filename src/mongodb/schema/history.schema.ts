import mongoose, { Schema } from "mongoose";
import { IHistory } from "../model/history.model";

const HistoryScheme = new Schema<IHistory>(
  {
    vehicleId: { type: String, required: true },
    startDate: { type: String, required: true },
    serialNumber: { type: String, required: true },
    problemType: { type: String, required: true },
    servicePrice: { type: String, required: true },
    endDate: { type: String, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const History = mongoose.model<IHistory>("History", HistoryScheme);
export default History;

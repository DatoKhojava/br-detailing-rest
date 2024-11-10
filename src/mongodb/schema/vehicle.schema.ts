import mongoose, { Schema } from "mongoose";
import { IVehicle } from "../model/vehicle.model";

const VehicleScheme = new Schema<IVehicle>(
  {
    manufacturer: { type: String, required: true },
    carModel: { type: String, required: true },
    // location: { type: String },
    status: { type: Boolean, required: true },
    year: { type: String, required: true },
    fuel: { type: String, required: true },
    engine: { type: Number, required: true },
    mileage: { type: Number, required: true },
    category: { type: String, required: true },
    transmission: {type: String, required: true},


    serialNumber: { type: String, required: true },
    vinCode: { type: String, required: true },
    // transmition: { type: String, required: true },
    // techPassport: string image
    // gallery: string image
  },
  { timestamps: true }
);

const Vehicle = mongoose.model<IVehicle>("Vehicle", VehicleScheme);
export default Vehicle;

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
    transmission: { type: String, required: true },
    steeringWheel: { type: String, required: true },
    driveWheels: { type: String, required: true },
    // technicalInspection: {type: Boolean}
    // catalyst: {type: Boolean}
    serialNumber: { type: String, required: true, unique: true },
    airbags: { type: Boolean, required: true },
    vinCode: { type: String, required: true, unique: true },
    // gallery: { type: String },
  },
  { timestamps: true }
);

const Vehicle = mongoose.model<IVehicle>("Vehicle", VehicleScheme);
export default Vehicle;

import mongoose, { Schema } from "mongoose";
import { IFuel } from "../model/fuel.model";

const FuelScheme = new Schema<IFuel>({
  value: String,
  localization: [{ value: String, lang: String }],
});

const Fuel = mongoose.model<IFuel>("Fuel", FuelScheme);
export default Fuel;

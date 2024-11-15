import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware";
import VehicleModel from "../mongodb/schema/vehicle.schema";

const controller = Router();

controller.post("/", authMiddleware, async (req: any, res: any) => {
  const {
    manufacturer,
    carModel,
    status,
    year,
    fuel,
    engine,
    mileage,
    category,
    transmission,
    steeringWheel,
    driveWheels,
    serialNumber,
    airbags,
    vinCode,
  } = req.body;

  const checkData = await VehicleModel.find({ vinCode });

  if (checkData.length > 0)
    return res
      .status(403)
      .send({ message: "🔍 Provided Vin Code already exist in database" });

  try {
    const newVehicle = await VehicleModel.create({
      manufacturer,
      carModel,
      status,
      year,
      fuel,
      engine,
      mileage,
      category,
      transmission,
      steeringWheel,
      driveWheels,
      serialNumber,
      airbags,
      vinCode,
    });

    res
      .status(200)
      .send({ message: "🚗 New vehicle added successfully", newVehicle });
  } catch (error) {
    return res.status(400).send({
      message: "❌ Something went wrong! we can't add new car",
      error,
    });
  }
});

controller.get("/", authMiddleware, async (req: any, res: any) => {
  try {
    const vehicles = await VehicleModel.find();

    return res.status(200).send(vehicles);
  } catch (error) {
    return res.status(400).send({
      message: "❌ Something went wrong!",
      error,
    });
  }
});

controller.get("/:vinCode", async (req: any, res: any) => {
  const vinCode = req.params.vinCode;

  try {
    const vehicleWithVinCode = await VehicleModel.find({ vinCode });

    if (vehicleWithVinCode.length < 1)
      return res.status(403).send("🔍 Car with provided VinCode does not exist");

    return res.status(200).send(vehicleWithVinCode);
  } catch (error) {
    return res.status(400).send({
      message: "❌ Something went wrong!",
      error,
    });
  }
});

export default controller;

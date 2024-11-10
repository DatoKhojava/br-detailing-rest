import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware";
import VehicleModel from "../mongodb/schema/vehicle.schema";

const controller = Router();

controller.post("/", authMiddleware, async (req: any, res: any) => {
  const userId = req.user.id;
  const { manufacturer, carModel, serialNumber, vinCode, year, fuel } =
    req.body;

  try {
    const newVehicle = await VehicleModel.create({
      userId,
      manufacturer,
      carModel,
      serialNumber,
      vinCode,
      year,
      fuel,
    });

    res.status(200).send(newVehicle);
  } catch (error) {
    return res.status(400).send({
      message: "❌ Something went wrong! we can't add new car",
      error,
    });
  }
});

export default controller;

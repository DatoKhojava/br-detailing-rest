import { Router } from "express";
import Fuel from "../mongodb/schema/fuel.schema";

const controller = Router();

controller.post("/", async (req: any, res: any) => {
  const { value, localization } = req.body;

  const exFuelType = await Fuel.findOne({ value });

  if (exFuelType)
    return res
      .status(403)
      .send({ message: "🛞 Provided fuel type already exist!" });

  try {
    const newFuelType = await Fuel.create({
      value,
      localization,
    });

    res.status(201).send({
      message: "🛞 new fuel type is added successfully",
      newFuelType,
    });
  } catch (error) {
    return res.status(400).send({
      message: "❌ Something went wrong! we can't create new fuel type",
      error,
    });
  }
});

controller.get("/", async (req: any, res: any) => {
  const lang = req.headers["accept-language"];

  const results = await Fuel.find(
    {
      localization: {
        $elemMatch: { lang },
      },
    },
    {
      "localization.$": 1,
      value: 1,
    }
  );

  return res.status(200).send({ results });
});

export default controller;

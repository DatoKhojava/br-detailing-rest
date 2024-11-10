import { Router } from "express";
import Wheel from "../mongodb/schema/steeringWheel.schema";

const controller = Router();

controller.post("/", async (req: any, res: any) => {
  const { value, localization } = req.body;

  try {
    const newWheel = await Wheel.create({ value, localization });

    return res.status(200).send({
      newWheel,
    });
  } catch (error) {
    return res.status(400).send({
      message: "❌ Something went wrong!",
      error,
    });
  }
});

controller.get("/", async (req: any, res: any) => {
  const lang = req.headers["accept-language"];

  const results = await Wheel.find(
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

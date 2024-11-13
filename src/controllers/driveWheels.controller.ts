import { Router } from "express";
import DriveWheels from "../mongodb/schema/driveWheels.schema";
import authMiddleware from "../middleware/authMiddleware";

const controller = Router();

controller.post("/", authMiddleware, async (req: any, res: any) => {
  const { value, localization } = req.body;

  const existingRecord = await DriveWheels.findOne({ value });

  if (existingRecord)
    return res
      .status(403)
      .send({ message: "🛞 Provided record type already exist!" });

  try {
    const newRecord = await DriveWheels.create({
      value,
      localization,
    });

    res.status(201).send({
      message: "🛞 new record is added successfully",
      newRecord,
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

  const results = await DriveWheels.find(
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

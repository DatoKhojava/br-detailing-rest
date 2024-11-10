import { Router } from "express";
import Transmission from "../mongodb/schema/transmission.schema";

const controller = Router();

controller.get("/", async (req: any, res: any) => {
  const lang = req.headers["accept-language"];

  const results = await Transmission.find(
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

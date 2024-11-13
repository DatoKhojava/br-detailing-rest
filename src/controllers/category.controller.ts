import { Router } from "express";
import Category from "../mongodb/schema/category.chema";
import authMiddleware from "../middleware/authMiddleware";

const controller = Router();

controller.post("/", authMiddleware, async (req: any, res: any) => {
  const { value, localization } = req.body;

  const exFuelType = await Category.findOne({ value });

  if (exFuelType)
    return res
      .status(403)
      .send({ message: "🛞 Provided category type already exist!" });

  try {
    const newCategory = await Category.create({ value, localization });

    return res.status(200).send({
      message: "✅ new category added successfully",
      newCategory,
    });
  } catch (error) {
    return res.status(400).send({
      message: "❌ Something went wrong! unable to add new category",
      error,
    });
  }
});

controller.get("/", async (req: any, res: any) => {
  const lang = req.headers["accept-language"];

  const results = await Category.find(
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

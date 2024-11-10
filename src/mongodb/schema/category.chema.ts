import mongoose, { Schema } from "mongoose";
import { ICategory } from "../model/category.model";

const CategoryScheme = new Schema<ICategory>({
  value: String,
  localization: [{ value: String, lang: String }],
});

const Category = mongoose.model<ICategory>("Category", CategoryScheme);
export default Category;

import { Express } from "express";
import mongooseConnect from "../mongodb/mongodb";

const appSetup = async (app: Express) => {
  try {
    await Promise.all([mongooseConnect]);

    console.log("💾 Database connected successfully!");
    const port = process.env.APP_PORT || 8000;

    app.listen(port, () => {
      console.log(`🚀 Server started on port: ${port}`);
      console.log(`📒 API documentation on http://localhost:${port}/docs`);
    });
  } catch (error: unknown) {
    console.log("🚧 Unable to start the app!");
    console.error(error);
  }
};

export default appSetup;

import { Express, Request, Response } from "express";
import {
  userRouter,
  authRouter,
  vehicleRouter,
  transmissionRouter,
  categoryRouter,
  fuelRouter,
  steeringWheelRouter,
} from "../controllers";
// import SwaggerUi from "swagger-ui-express"

// import swaggerSpec from "../utils/swagger";

const routerSetup = (app: Express) =>
  app
    .get("/", (req: Request, res: Response) => {
      res.send("Welcome to Express & TypeScript Server");
    })
    .use("/api/users", userRouter)
    .use("/api/auth", authRouter)
    .use("/api/transmissions", transmissionRouter)
    .use("/api/vehicles", vehicleRouter)
    .use("/api/categories", categoryRouter)
    .use("/api/fuel", fuelRouter)
    .use("/api/wheelSide", steeringWheelRouter);
// .use("/docs", SwaggerUi.serve, SwaggerUi.setup(swaggerSpec))

export default routerSetup;

import { Express, Request, Response } from "express";
import { userRouter } from "../controllers";

const routerSetup = (app: Express) =>
  app
    .get("/", (req: Request, res: Response) => {
      res.send("Welcome to Express & TypeScript Server");
    })
    .use("/api/users", userRouter);

export default routerSetup;

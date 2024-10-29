import { Express, Request, Response } from "express";

const routerSetup = (app: Express) =>
  app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Express & TypeScript Server");
  });

export default routerSetup;

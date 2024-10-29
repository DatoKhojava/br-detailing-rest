import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { appSetup, routerSetup, securitySetup } from "./startup";

//For env File
dotenv.config();

const app = express();

appSetup(app);
securitySetup(app, express);
routerSetup(app);
// const port = process.env.APP_PORT || 8000;

// app.listen(port, () => {
//   console.log(`Server is Fire at http://localhost:${port}`);
// });

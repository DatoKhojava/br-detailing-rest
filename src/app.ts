import dotenv from "dotenv";
import express from "express";
import { appSetup, routerSetup, securitySetup } from "./startup";

dotenv.config();

const app = express();

appSetup(app);
securitySetup(app, express);
routerSetup(app);

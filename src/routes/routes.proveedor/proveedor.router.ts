import express, {Router} from "express";
import { httpGetProveedorData } from "./proveedor.controller.js";

export const proveedorRouter: Router = express.Router();

proveedorRouter.get("/", httpGetProveedorData);

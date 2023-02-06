import express, {Router} from "express";
import { 
    httpGetListaServicios, httpCreateServicio, 
    httpModifyServicio, httpDeleteServicio 
} from "./servicios.controller.js";

export const serviciosRouter: Router = express.Router();

serviciosRouter.get("/", httpGetListaServicios);

serviciosRouter.post("/crear", httpCreateServicio);

serviciosRouter.patch("/modificar", httpModifyServicio);

serviciosRouter.delete("/borrar", httpDeleteServicio);
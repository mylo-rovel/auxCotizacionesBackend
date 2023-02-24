import express, {Router} from "express";
import { 
    httpGetListaServicios, httpCreateServicio, 
    httpModifyServicio, httpDeleteServicio 
} from "./servicios.controller.js";

export const serviciosRouter: Router = express.Router();

serviciosRouter.get("/", httpGetListaServicios);

serviciosRouter.post("/crear", httpCreateServicio);

//todo: find out why this endpoint DOES NOT work if we
//todo: use .patch() or .delete() methods
//todo: somehow, only .get() and .post() methods work
//? this should be .patch()
serviciosRouter.post("/modificar", httpModifyServicio);

//? this should be .delete()
serviciosRouter.post("/borrar", httpDeleteServicio);
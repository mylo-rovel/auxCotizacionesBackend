import express, {Router} from "express";
import { httpGetCliente, httpGetRutsClientes } from "./clientes.controller.js";

export const clientesRouter: Router = express.Router();

clientesRouter.get("/", httpGetRutsClientes);

clientesRouter.get("/:rut", httpGetCliente);
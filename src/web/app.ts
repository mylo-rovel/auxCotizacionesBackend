import express, {Express} from "express";
//? security dependencies
import cors from "cors";
import helmet from "helmet";
import { corsOptions } from "./corsSecuritySetup.utils.js";
//? general utilities dependencies
import morgan from "morgan";
//? routers dependencies
import { 
    proveedorRouter, serviciosRouter, 
    clientesRouter, cotizacionesRouter
} from "../routes/index.js";

export const app: Express = express();

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("combined"));

//! (checkLoggedIn) => route we want to protect
//? --------------------   ROUTES   --------------------
app.use('/api/data/clientes', clientesRouter);
app.use('/api/data/proveedor', proveedorRouter);
app.use('/api/data/servicios', serviciosRouter);
app.use('/api/data/cotizaciones', cotizacionesRouter);
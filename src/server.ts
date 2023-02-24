import http from "http";
import { app }  from "./web/app.js";
import * as dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { ProveedorDbClient } from "./dbClient/index.js";
import { generateBaseProveedorData } from "./utils/index.js";

//? LOAD ALL THE ENVIRONMENT VARIABLES FROM THE .env FILE INTO process.env OBJECT
//? process.env OBJECT WORKS SOME SORT AS A DICTIONARY 
dotenv.config();

export const prismaClient = new PrismaClient({
    // log: ['query', 'info', 'warn', 'error']
    log: ['info', 'warn', 'error']
});

const PORT = process.env["WEB_API_PORT"];

const httpServer:http.Server = http.createServer(app);

if (PORT) {
    httpServer.listen(PORT, () => {
        console.log("Server ONLINE!\nListening on PORT:", PORT);
        const proveedorBaseData = generateBaseProveedorData();
        ProveedorDbClient.setProveedorData(proveedorBaseData)
    })
}
else {
    console.log("ERROR AT LOADING ENVIRONMENT VARIABLES");
}
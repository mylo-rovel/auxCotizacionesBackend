import http from "http";
import { app }  from "./web/app.js";
import * as dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

//? LOAD ALL THE ENVIRONMENT VARIABLES FROM THE .env FILE INTO process.env OBJECT
//? process.env OBJECT WORKS SOME SORT AS A DICTIONARY 
dotenv.config();

export const prismaClient = new PrismaClient({log:["query"]});

const PORT = process.env["WEB_API_PORT"];

const httpServer:http.Server = http.createServer(app);

if (PORT) {
    httpServer.listen(PORT, () => {
        console.log("Server ONLINE!\nListening on PORT:", PORT);
    })
}
else {
    console.log("ERROR AT LOADING ENVIRONMENT VARIABLES");
}
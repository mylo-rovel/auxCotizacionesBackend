import { Request, Response } from "express";

import { ServiciosDbClient } from "../../dbClient/index.js";
import { bodyIsReceivedServicio, bodyIsServiciosPair } from "../../models/input.js"; 
 
export const httpGetListaServicios = async (_:Request, res:Response) => {
    console.log("Obteniendo lista de servicios");

    const listaServicios = await ServiciosDbClient.getListaServicios();
    return res.status(200).json(listaServicios);
}

export const httpCreateServicio = async (req:Request, res:Response) => {
    console.log("Creando servicio");
    
    const reqBody = req.body;
    if (!(bodyIsReceivedServicio(reqBody))) {
        return res.status(400).json("Información enviada no válida"); 
    }
    
    const prismaResponse = await ServiciosDbClient.createServicio(reqBody);
    return res.status(200).json(prismaResponse); 
}

export const httpModifyServicio = async (req:Request, res:Response) => {
    console.log("Modificando servicio");
    
    const reqBody = req.body;
    if (!(bodyIsServiciosPair(reqBody))) {
        return res.status(400).json("Información enviada no válida"); 
    }
    
    const prismaResponse = await ServiciosDbClient.modifyServicio(reqBody);
    return res.status(200).json(prismaResponse); 
}

export const httpDeleteServicio = async (req:Request, res:Response) => {
    console.log("Borrando servicio");
    
    const reqBody = req.body;
    if (!(bodyIsReceivedServicio(reqBody))) {
        return res.status(400).json("Información enviada no válida"); 
    }
    
    const prismaResponse = await ServiciosDbClient.deleteServicio(reqBody);
    return res.status(200).json(prismaResponse); 
}
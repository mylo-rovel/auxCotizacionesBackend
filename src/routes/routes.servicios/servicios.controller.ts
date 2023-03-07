import { Request, Response } from "express";

import { fechaStrIsValid } from "../../utils/index.js";
import { ServiciosDbClient } from "../../dbClient/index.js";
import { bodyIsReceivedServicio, bodyIsIdJSON } from "../../models/index.js"; 
import { newTrabajoReceived_expectedID } from "../../utils/generalData/generalData.js";
 

//* --------------------------------------------------------------------------------------
//* --------------------------------------------------------------------------------------
//* LEER ---------------------------------------------------------------------------------
export const httpGetListaServicios = async (req:Request, res:Response) => {
    const fechaObjetivo = req.params['fecha_objetivo'];
    console.log("\nObteniendo lista de servicios del día", fechaObjetivo);
    if (fechaObjetivo) {
        //* CHEQUEAR SI LA FECHA ES VALIDA
        if (!(fechaStrIsValid(fechaObjetivo))) return res.status(400).json("Fecha entregada NO VÁLIDA")        
        const listaServicios = await ServiciosDbClient.getListaServicios(fechaObjetivo);
        return res.status(200).json(listaServicios);
    }
    return res.status(400).json("Fecha no entregada");
}

export const httpGetServiciosPorID = async (req:Request, res:Response) => {
    const rawIdObjetivo = req.params['id'];
    console.log("\nObteniendo trabajo de id:", rawIdObjetivo);
    //* CHEQUEAR SI LA ID ES VALIDA
    const idObjetivo = Number(rawIdObjetivo);
    if ( idObjetivo > 0) {
        const trabajoEncontrado = await ServiciosDbClient.getServiciosPorID(idObjetivo);
        const statusCodeDevolver = (trabajoEncontrado) ? 200 : 404;
        return res.status(statusCodeDevolver).json(trabajoEncontrado);
    }
    return res.status(400).json('ID entregada errónea');
}


//* --------------------------------------------------------------------------------------
//* --------------------------------------------------------------------------------------
//* CREAR - MODIFICAR - BORRAR -----------------------------------------------------------

export const httpCreateServicio = async (req:Request, res:Response) => {
    console.log("Creando servicio");
    
    const reqBody = req.body;
    if (!(bodyIsReceivedServicio(reqBody))) {
        return res.status(400).json("Información enviada no válida"); 
    }

    //* CHECK IF THE RECEIVED ID IS VALID
    if (reqBody.id !== newTrabajoReceived_expectedID) return res.status(400).json("Información enviada no válida. ID incorrecta"); 

    const prismaResponse = await ServiciosDbClient.createServicio(reqBody);
    return res.status(201).json(prismaResponse); 
}


export const httpModifyServicio = async (req:Request, res:Response) => {
    console.log("Modificando servicio");
    
    const reqBody = req.body;
    if (!(bodyIsReceivedServicio(reqBody))) {
        return res.status(400).json("Información enviada no válida"); 
    }

    //* CHECK IF THE RECEIVED ID IS VALID
    //TODO: REMEMBER THAT THE ID IS VALID ONLY IF IT'S GREATER OR EQUAL TO 1 (minimum id)
    //TODO:  => THIS IS BECAUSE IF THE ID IS AT LEAST 1, THE ENTRY WAS PREVIOUSLY CREATED
    if (reqBody.id < 1) return res.status(400).json("Información enviada no válida. ID incorrecta"); 

    const prismaResponse = await ServiciosDbClient.modifyServicio(reqBody);
    return res.status(200).json(prismaResponse); 
}

export const httpDeleteServicio = async (req:Request, res:Response) => {
    console.log("Borrando servicio");
    
    const reqBody_id = req.body;
    if (!(bodyIsIdJSON(reqBody_id))) {
        return res.status(400).json("Información enviada no válida"); 
    }

    //* CHECK IF THE RECEIVED ID IS VALID
    //TODO: REMEMBER THAT THE ID IS VALID ONLY IF IT'S GREATER OR EQUAL TO 1 (minimum id)
    //TODO:  => THIS IS BECAUSE IF THE ID IS AT LEAST 1, THE ENTRY WAS PREVIOUSLY CREATED
    if (reqBody_id.id < 1) return res.status(400).json("Información enviada no válida. ID incorrecta"); 
    
    const prismaResponse = await ServiciosDbClient.deleteServicio(reqBody_id.id);
    return res.status(200).json(prismaResponse); 
}
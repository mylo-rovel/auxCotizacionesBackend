import { Request, Response } from 'express';

import { CotizacionesDbClient } from '../../dbClient/index.js';
import { bodyIsValidCotizacion } from '../../models/input.js'; 
 
export const httpGetListaCotizaciones = async (_:Request, res:Response) => {
    console.log('Obteniendo lista de cotizaciones');

    const listaServicios = await CotizacionesDbClient.getListaCotizaciones();
    return res.status(200).json(listaServicios);
}

export const httpRegistrarCotizacion = async (req:Request, res:Response) => {
    const reqBody = req.body;
    if (!(bodyIsValidCotizacion(reqBody))) {
        return res.status(400).json('Cotización enviada no válida'); 
    }
    
    const prismaResponse = await CotizacionesDbClient.registrarCotizacion(reqBody);
    return res.status(200).json(prismaResponse); 
}

export const httpObtenerCotizacionPorFecha = async (req:Request, res:Response) => {
    
    const reqBody = req.body;
    // if (!(bodyIsReceivedServicio(reqBody))) {
    //     return res.status(400).json('Información enviada no válida'); 
    // }
    
    // const prismaResponse = await CotizacionesDbClient.getCotizacionesPorFecha(reqBody);
    // return res.status(200).json(prismaResponse); 
}

export const httpObtenerCotizacionEspecifica = async (req:Request, res:Response) => {
    const rawCotizacionID = req.params['coti_id'] || 0;
    const cotiID = Number(rawCotizacionID);
    
    //* if the id is NOT greater than 0, do not continue
    if (!(cotiID > 0)) {
        return res.status(400).json('Información enviada no válida'); 
    }
    
    const prismaResponse = await CotizacionesDbClient.getCotizacionEspecifica(cotiID);
    return res.status(200).json(prismaResponse); 
}
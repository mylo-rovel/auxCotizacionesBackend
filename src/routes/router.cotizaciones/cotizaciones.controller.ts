import { Request, Response } from 'express';

import { CotizacionesDbClient } from '../../dbClient/index.js';
import { bodyIsValidCotizacion } from '../../models/index.js'; 
import { testIfRutIsValid } from '../../utils/index.js';
 

//* ---------------------------------------------------------------------------------------
//* ---------------------------------------------------------------------------------------
//* GET - REQUESTS -----------------------------------------------------------------------

export const httpGetListaCotizaciones = async (_:Request, res:Response) => {
    console.log('Obteniendo lista de cotizaciones');

    const listaServicios = await CotizacionesDbClient.getListaCotizaciones();
    return res.status(200).json(listaServicios);
}

export const httpObtenerCotizacionPorFecha = async (req:Request, res:Response) => {
    
    const reqBody = req.body;
    // if (!(bodyIsReceivedServicio(reqBody))) {
    //     return res.status(400).json('Información enviada no válida'); 
    // }
    
    // const prismaResponse = await CotizacionesDbClient.getCotizacionesPorFecha(reqBody);
    return res.status(200).json(reqBody); 
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



//* ---------------------------------------------------------------------------------------
//* ---------------------------------------------------------------------------------------
//* POST - REQUESTS -----------------------------------------------------------------------

export const httpRegistrarCotizacion = async (req:Request, res:Response) => {
    const reqBody = req.body;
    console.log('reqBody', reqBody);
    
    if (!(bodyIsValidCotizacion(reqBody))) {
        return res.status(400).json('Cotización enviada no válida'); 
    }
    
    const receivedRutIsValid = testIfRutIsValid(reqBody.clienteData.rut);
    //* IF IS NOT VALID, REPLACE IT WITH AN EMPTY STRING => LATER WE WILL HANDLE IT
    if (!receivedRutIsValid) {
        reqBody.clienteData.rut = '';
    }

    const prismaResponse = await CotizacionesDbClient.registrarCotizacion(reqBody);
    return res.status(200).json(prismaResponse); 
}
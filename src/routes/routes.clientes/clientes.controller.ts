import { Request, Response } from "express";

import { testIfRutIsValid } from "../../utils/index.js";
import { ClientesDbClient } from "../../dbClient/index.js";


export const httpGetRutsClientes = async (_:Request, res:Response) => {
    console.log("Obteniendo lista de ruts de clientes");
    const prismaResponse = await ClientesDbClient.getListaRutsClientes();
    return res.status(200).json(prismaResponse);
}
 
export const httpGetCliente = async (req:Request, res:Response) => {
    console.log("Obteniendo cliente objetivo");
    const rutCliente = req.params['rut'];
    if (rutCliente) {
        //* CHECK IF THE RUT HAS AT LEAST A VALID FORMAT
        if (!(testIfRutIsValid(rutCliente))) return res.status(400).json("Rut entregado NO VÁLIDO")
        
        const prismaResponse = await ClientesDbClient.getCliente(rutCliente);
        return res.status(200).json(prismaResponse);
    }
    return res.status(400).json("Rut no entregado");
}
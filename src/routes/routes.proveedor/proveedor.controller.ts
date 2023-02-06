import { Request, Response } from "express";

import { ProveedorDbClient } from "../../dbClient/index.js";

export const httpGetProveedorData = async (_:Request, res:Response) => {
    console.log("Obteniendo datos del proveedor de servicios");
    const datosProveedor = await ProveedorDbClient.getProveedorData();
    return res.status(200).json(datosProveedor);
}

import { prismaClient } from "../../server.js";

export class ServiciosSolicitadosDbClient {
    
    public static async getListaServiciosSolicitados() {
        return await prismaClient.servicio_por_cotizacion.findMany();
    }

}
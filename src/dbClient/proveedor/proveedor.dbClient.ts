import { prismaClient } from "../../server.js";


export class ProveedorDbClient {
    
    public static async getProveedorData() {
        //? We know for sure that we only have 1 proveedor
        return await prismaClient.proveedor.findMany();
    }
}
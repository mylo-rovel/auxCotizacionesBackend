import { prismaClient } from "../../server.js";
import { getTodaysDateString } from "../../utils/index.js";
import { IInputClienteData } from "../../models/input.js";
import { Prisma } from "@prisma/client";

export class ClientesDbClient {
    
    public static async getCliente(rut:string) {
        return await prismaClient.cliente.findFirst({
            where: {
                rut
            }
        });
    }

    public static async getListaRutsClientes() {
        return await prismaClient.cliente.findMany({
            select: {
                rut: true,                
            }
        });
    }

    
    public static async createEmptyClienteEntry(tx: Prisma.TransactionClient) {
        const todaysDate = getTodaysDateString();

        return await tx.cliente.create({
            data: {
                nombre: '',
                rut: '',
                email: '',
                telefono: 0,
                direccion: '',
                contacto: '',
                created_at: todaysDate,
                updated_at: todaysDate
            }
        });
    }
}
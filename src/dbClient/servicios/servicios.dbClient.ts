import { prismaClient } from "../../server.js";
import { IReceivedServicio } from "../../models/index.js";
import { getTodaysDateString } from "../../utils/index.js";

export class ServiciosDbClient {
    
    public static async getListaServicios(fechaObjetivo: string) {
        return await prismaClient.servicio_realizado.findMany({
            where: {
                fecha_realizacion: fechaObjetivo
            }
        });
    }

    public static async getServiciosPorID(id: number) {
        return await prismaClient.servicio_realizado.findUnique({
            where: {
                id
            }
        });
    }

    public static async createServicio(reqBody: IReceivedServicio) {
        const todaysDate = getTodaysDateString();
        try {
            await prismaClient.servicio_realizado.create({
                data: {
                    detalle_servicio: reqBody.detalle_servicio, 
                    equipo: reqBody.equipo,           
                    codigo: reqBody.codigo,
                    info_adicional: reqBody.info_adicional,
                    valor: reqBody.valor,
                    fecha_realizacion: reqBody.fecha_realizacion,
                    created_at: todaysDate,
                    updated_at: todaysDate
                }
              })
    
            return 'Registro de trabajo CREADO exitosamente';
        }
        catch(error) {
            console.log('\n\n\n\n\n\n',error)
            return 'Error al crear el registro de trabajo'
        }
    }

    public static async modifyServicio(reqBody: IReceivedServicio) {
        const todaysDate = getTodaysDateString();
        try {
            await prismaClient.servicio_realizado.update({
                where: {
                  id: reqBody.id
                },
                data: {
                    detalle_servicio: reqBody.detalle_servicio, 
                    equipo: reqBody.equipo,           
                    codigo: reqBody.codigo,
                    info_adicional: reqBody.info_adicional,
                    valor: reqBody.valor,
                    fecha_realizacion: reqBody.fecha_realizacion,
                    updated_at: todaysDate
                },
              })

              return 'Registro de trabajo MODIFICADO exitosamente';
        }
        catch(error) {
            console.log('\n\n\n\n\n\n',error)
            return 'Error al modificar el registro de trabajo referenciado'
        }
    }

    public static async deleteServicio(idToDelete: number) {
        try {
            await prismaClient.servicio_realizado.delete({
                where: {
                    id: idToDelete
                }
              })
    
            return 'Registro de trabajo ELIMINADO exitosamente';
        }
        catch(error) {
            console.log('\n\n\n\n\n\n',error)
            return 'Error al eliminar el registro de trabajo referenciado'
        }
    }
}
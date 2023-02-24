import { prismaClient } from "../../server.js";
import { getTodaysDateString } from "../../utils/index.js";
import { IReceivedServicio, serviciosPair } from "../../models/index.js";

export class ServiciosDbClient {
    
    public static async getListaServicios() {
        return await prismaClient.servicio.findMany();
    }

    public static async createServicio(reqBody: IReceivedServicio) {
        const todaysDate = getTodaysDateString();
        try {
            await prismaClient.servicio.create({
                data: {
                    descripcion: reqBody.descripcion,
                    valor_unitario: reqBody.valor_unitario,
                    created_at: todaysDate,
                    updated_at: todaysDate
                }
              })
    
            return 'Servicio CREADO exitosamente';
        }
        catch(error) {
            console.log('\n\n\n\n\n\n',error)
            return 'Error al crear el servicio enviado'
        }
    }

    public static async modifyServicio(reqBody: serviciosPair) {
        const todaysDate = getTodaysDateString();

        const oldServicio = reqBody.old_servicio;
        const newServicio = reqBody.new_servicio;
        
        try {
            await prismaClient.servicio.update({
                where: {
                  descripcion: oldServicio.descripcion,              
                },
                data: {
                  descripcion: newServicio.descripcion,
                  valor_unitario: newServicio.valor_unitario,
                  updated_at: todaysDate
                },
              })
    
            return 'Servicio MODIFICADO exitosamente';
        }
        catch(error) {
            console.log('\n\n\n\n\n\n',error)
            return 'Error al modificar el servicio enviado'
        }
    }

    public static async deleteServicio(reqBody: IReceivedServicio) {
        try {
            await prismaClient.servicio.delete({
                where: {
                    descripcion: reqBody.descripcion
                }
              })
    
            return 'Servicio ELIMINADO exitosamente';
        }
        catch(error) {
            console.log('\n\n\n\n\n\n',error)
            return 'Error al eliminar el servicio enviado'
        }
    }
}
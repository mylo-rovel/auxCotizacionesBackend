import { ClientesDbClient } from '../index.js';
import { prismaClient } from '../../server.js';
import { getTodaysDateString } from '../../utils/index.js';
import { ICotizacionRecibida } from '../../models/index.js';

export class CotizacionesDbClient {

    public static async getListaCotizaciones() {
        return await prismaClient.cotizacion.findMany(
            // {select: {
            //     id: true,
            //     fecha: true,
            //     valido_hasta: true,
            //     created_at: true,
            //     cliente_id: true,
            // }}
        )
    }

    //? LA IDEA ES QUE SEPAMOS LA ID LUEGO DE HABER BUSCADO POR FECHA
    public static async getCotizacionEspecifica(targetID: number) {
        return await prismaClient.cotizacion.findUnique({
            where: {
                id: targetID
            }
        })
    }
    
    //? LA IDEA ES QUE BUSCANDO POR FECHA OBTENGAMOS LA ID ESPECÍFICA BUSCADA
    public static async getCotizacionesPorFecha(fechaCreacion: string) {
        return await prismaClient.cotizacion.findMany({
            where: {
                fecha: fechaCreacion
            }
        })
    }
    
    public static async registrarCotizacion(cotizacionData: ICotizacionRecibida) {
        let transactionResponse = '';
        const todaysDate = getTodaysDateString();
        const {
            clienteData, clienteEsNuevo, 
            fechaCotizacion, fechaValidezCoti, 
            serviciosSolicitados, idClienteSiEsViejo,
            formaPago
        } = cotizacionData;

        try {
            transactionResponse =  await prismaClient.$transaction(async (tx) => {
                let targetClienteID = 0;
                let todaysDateClientEntry = todaysDate; //? JUST AN AUXILIAR VAR
    
                //* Si el cliente es nuevo, creamos un cliente casi vacío (casi pq sólo las fechas no se modificaran)
                //* De esta forma, siempre actualizamos el cliente con los datos recibidos
                if (clienteEsNuevo) {
                    const clienteConIDBueno = await ClientesDbClient.createEmptyClienteEntry(tx);
                    targetClienteID = clienteConIDBueno.id;
                    todaysDateClientEntry = clienteConIDBueno.updated_at;
                } else {
                    if (idClienteSiEsViejo === 0) return 'Error al registrar los servicios entregados. ID inválido';
                    targetClienteID = idClienteSiEsViejo;
                }
                
                const clienteGuardar = await tx.cliente.update({
                    where: {
                        id: targetClienteID
                    },
                    data: {
                        nombre: clienteData.nombre,
                        rut: clienteData.rut.toUpperCase(),
                        email: clienteData.email,
                        telefono: clienteData.telefono,
                        direccion: clienteData.direccion,
                        contacto: clienteData.contacto,
                        updated_at: todaysDateClientEntry
                    }
                });
    
                //? CREANDO LA COTIZACIÓN PARA ACTUALIZARLA Y OBTENER SU ID
                const cotizacionGuardar = await tx.cotizacion.create({
                    data: {
                        number_id: 0,
                        fecha: fechaCotizacion,
                        valido_hasta: fechaValidezCoti,
                        cliente_id: clienteGuardar.id,
                        forma_pago: formaPago,
                        anulada: false,
                        created_at: todaysDate,
                        updated_at: todaysDate
                    }
                })
                
                const cotizacionID = cotizacionGuardar.id;
    
                await tx.cotizacion.update({
                    where: { id: cotizacionID },
                    data: { number_id: (cotizacionID + 157) }
                })
    
                const listaServiciosRegistrar = serviciosSolicitados.map((servicioSolicitado) => {
                        return {
                            cotizacion_id: cotizacionID,
                            servicio_id: servicioSolicitado.id,
                            
                            created_at: todaysDate,
                            updated_at: todaysDate
                        }
                    }
                )

                await tx.servicio_por_cotizacion.createMany({
                    data: listaServiciosRegistrar
                });
    
                return 'Datos del documento guardados EXITOSAMENTE';
            })
        }
        catch {
            transactionResponse = 'Error al registrar los servicios entregados'
        }
        finally {
            return transactionResponse;
        }

    }
}
import { prismaClient } from "../../server.js";
import { proveedorBaseData } from '../../models/index.js';
import { getTodaysDateString } from "../../utils/index.js";
import { proveedorDataObjIsValid } from "../../utils/index.js";



export class ProveedorDbClient {
    
    public static async getProveedorData() {
        //? We know for sure that we only have 1 proveedor
        return await prismaClient.proveedor.findMany();
    }

    public static async setProveedorData(proveedorBaseData: proveedorBaseData) {
        const todaysDate = getTodaysDateString();

        //* CHEQUEAR SI LOS CAMPOS ESTÁN VACIOS
        const dataIsValid = proveedorDataObjIsValid(proveedorBaseData);
        if (!dataIsValid) {
            const mensajeAlerta = 'INICIO INCORRECTO. DATOS PROVEEDOR NO VÁLIDOS. AL MENOS 1 CAMPO TIENE VALOR NO PERMITIDO';
            console.log(mensajeAlerta);
            return mensajeAlerta;
        }

        const proveedorArr = await prismaClient.proveedor.findMany();

        const numeroProveedor = Number(proveedorBaseData.PROVEEDOR_TELEFONO);

        if (proveedorArr.length === 1){ 
            // console.log('\n\n\nENTRADA DE PROVEEDOR ENCONTRADA EN BASE DE DATOS');
        }else {
            if (proveedorArr.length > 1){
                prismaClient.proveedor.deleteMany();
                console.log('\n\n\nBORRANDO TODAS LAS ENTRADAS DE PROVEEDOR EN BASE DE DATOS');
            }
            await prismaClient.proveedor.create({
                data: {                    
                    razon_social: proveedorBaseData.PROVEEDOR_RAZONSOCIAL,
                    rut: proveedorBaseData.PROVEEDOR_RUT,
                    giro: proveedorBaseData.PROVEEDOR_GIRO,
                    direccion: proveedorBaseData.PROVEEDOR_DIRECCION,
                    telefono: (numeroProveedor > 0) ? numeroProveedor : 0,
                    email: proveedorBaseData.PROVEEDOR_EMAIL,
                    ciudad: proveedorBaseData.PROVEEDOR_CIUDAD,
                    created_at: todaysDate,
                    updated_at: todaysDate
                }
            });
            console.log('\n\n\nCREANDO ENTRADA ÚNICA DE PROVEEDOR EN BASE DE DATOS');
        }
        return 'INICIO CORRECTO';
    }
}
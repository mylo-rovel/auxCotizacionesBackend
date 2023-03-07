import { IInputClienteData} from '../index.js';

interface IReceivedServicioDocumento {
    id: number;
}

export interface ICotizacionRecibida {
    fechaCotizacion: string;
    fechaValidezCoti: string;
    clienteEsNuevo: boolean;
    idClienteSiEsViejo: number;
    formaPago: string;

    clienteData: IInputClienteData;
    serviciosSolicitados: IReceivedServicioDocumento[];
}

const auxTestCotizacionSingleValues = (proxyInput: ICotizacionRecibida): boolean => {
    return (
        (typeof proxyInput.fechaCotizacion      === 'string')   &&
        (typeof proxyInput.fechaValidezCoti     === 'string')   &&
        (typeof proxyInput.clienteEsNuevo       === 'boolean')  &&
        (typeof proxyInput.idClienteSiEsViejo   === 'number')   &&
        (typeof proxyInput.formaPago            === 'string')
    )
}

const auxTestCotizacionClienteData = (proxyClienteData: IInputClienteData): boolean => {
    return (
        (typeof proxyClienteData.nombre     === 'string') &&
        (typeof proxyClienteData.rut        === 'string') &&
        (typeof proxyClienteData.email      === 'string') &&
        (typeof proxyClienteData.telefono   === 'number') &&
        (typeof proxyClienteData.direccion  === 'string') &&
        (typeof proxyClienteData.contacto   === 'string') &&
        (typeof proxyClienteData.created_at === 'string') &&
        (typeof proxyClienteData.updated_at === 'string')
    )
}

const auxTestCotizacionServiciosSolicitados = (proxyServSoliArr: IReceivedServicioDocumento[]): boolean => {
    if (proxyServSoliArr.length === 0) return false;
    return proxyServSoliArr.every(item => {
        return (typeof item.id === 'number');
    })
}

export const bodyIsValidCotizacion = (reqBody: unknown): reqBody is ICotizacionRecibida => {
    try {
        //? if it's a valid "CotizacionRecibida", it will have no problem
        const proxyInput = reqBody as ICotizacionRecibida;

        return (
            auxTestCotizacionSingleValues(proxyInput) && 
            auxTestCotizacionClienteData(proxyInput.clienteData) &&
            auxTestCotizacionServiciosSolicitados(proxyInput.serviciosSolicitados)
        )
    }
    catch {
        console.log("reqBody no era ICotizacionRecibida")
        return false;
    }
}


/*
EJEMPLO COTIZACION A GUARDAR
{
    "fechaCotizacion": "04-02-2023",
    "fechaValidezCoti": "24-02-2023",
    "clienteEsNuevo": "true",
    "clienteData": {
        "nombre": "Pedrito1",
        "rut": "123456789-k",
        "email": "pedrito@gaa.com",
        "telefono": 912341234,
        "direccion": "por ahí",
        "contacto": "no sé",
        "created_at": "",
        "updated_at": ""
    },
    "serviciosSolicitados": [
        {
            "id": 1
        },
        {
            "id": 2
        },
        {
            "id": 3
        }
    ] 
}
*/
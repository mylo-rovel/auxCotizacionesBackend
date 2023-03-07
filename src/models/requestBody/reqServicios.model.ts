//PRISMA SCHEMA model servicio_realizado
/*
  id                Int    @default(autoincrement())
  detalle_servicio  String
  equipo            String
  codigo            String
  info_adicional    String
  valor             Int
  fecha_realizacion String
*/

export interface IReceivedServicio {
    id:                 number;
    detalle_servicio:   string;
    equipo:             string;
    codigo:             string;
    info_adicional:     string;
    valor:              number;
    fecha_realizacion:  string;
}

export interface IIdJSON {
    id: number;
}

export const bodyIsReceivedServicio = (reqBody: unknown): reqBody is IReceivedServicio => {
    try {
        //? if it's "receivedServicio", it will have no problem
        const proxyInput = reqBody as IReceivedServicio;
        //* 'destructuring' the object
        const proxyDetalleServicio = proxyInput.detalle_servicio;
        const proxyEquipo = proxyInput.equipo;
        const proxyCodigo = proxyInput.codigo;
        const proxyInfoAdicional = proxyInput.info_adicional;
        const proxyValor = proxyInput.valor;
        const proxyFecha = proxyInput.fecha_realizacion;

        return (
            (typeof proxyDetalleServicio === 'string') &&
            (typeof proxyEquipo === 'string') &&
            (typeof proxyCodigo === 'string') &&
            (typeof proxyInfoAdicional === 'string') &&
            (typeof proxyValor === 'number') &&
            (typeof proxyFecha === 'string')
        )
    }
    catch {
        console.log("reqBody no era receivedServicio")
        return false;
    }
}


export const bodyIsIdJSON = (reqBody: unknown): reqBody is IIdJSON => {
    try {
        //? if it's "IIdJSON", it will have no problem
        const proxyInput = reqBody as IIdJSON;

        return (typeof proxyInput.id === 'number');
    }
    catch {
        console.log("reqBody no era IdJSON")
        return false;
    }
}
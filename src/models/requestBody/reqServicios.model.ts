export interface IReceivedServicio {
    descripcion: string;
    valor_unitario: number;
}

export type serviciosPair = {
    old_servicio: IReceivedServicio,
    new_servicio: IReceivedServicio
}


export const bodyIsReceivedServicio = (reqBody: unknown): reqBody is IReceivedServicio => {
    try {
        //? if it's "receivedServicio", it will have no problem
        const proxyInput = reqBody as IReceivedServicio;
        const proxyDescripcion = proxyInput.descripcion;
        const proxyValorUnitario = proxyInput.valor_unitario;
        return (
            (typeof proxyDescripcion === 'string') && 
            (typeof proxyValorUnitario === 'number')
        )
    }
    catch {
        console.log("reqBody no era receivedServicio")
        return false;
    }
}

export const bodyIsServiciosPair = (reqBody: unknown): reqBody is serviciosPair => {
    try {
        //? if it's "serviciosTuple", it will have no problem
        const proxyInput = reqBody as serviciosPair;

        const oldServicio = proxyInput.old_servicio;
        const newServicio = proxyInput.new_servicio;

        const validOldServicio = (
            (typeof oldServicio.descripcion === 'string') && 
            (typeof oldServicio.valor_unitario === 'number')
        )
        const validNewServicio = (
            (typeof newServicio.descripcion === 'string') && 
            (typeof newServicio.valor_unitario === 'number')
        )
        return validOldServicio && validNewServicio;
    }
    catch {
        console.log("reqBody no era serviciosTuple")
        return false;
    }
}
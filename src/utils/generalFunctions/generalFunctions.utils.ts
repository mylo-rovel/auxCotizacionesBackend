import { proveedorBaseData } from "../../models";

const get2DigitsNumberString = (inputNumb: number) => {
    const strInput = `${inputNumb}`
    if (strInput.length >= 2) return strInput;    
    return "0"+strInput;
}

export const getTodaysDateString = () => {
    const nowDate = new Date();
    const nowDay = get2DigitsNumberString(nowDate.getDate());
    const nowMonth = get2DigitsNumberString(nowDate.getMonth()+1);
    const nowYear = nowDate.getFullYear();
    
    return `${nowDay}-${nowMonth}-${nowYear}`;
}

export const testIfRutIsValid = (rutStr: string): boolean => {
    const regex = /^[\d]{8}(-)[\dkK]$/;
    // const rutToUse = "12345678-k".toUpperCase();
    const rutToUse = rutStr.toUpperCase();        
    return (regex.test(rutToUse) && (rutToUse.length === 10));
}

export const generateBaseProveedorData = (): proveedorBaseData => {
    const PROVEEDOR_RAZONSOCIAL = process.env['PROVEEDOR_RAZONSOCIAL'];
    const PROVEEDOR_RUT = process.env['PROVEEDOR_RUT'];
    const PROVEEDOR_GIRO = process.env['PROVEEDOR_GIRO'];
    const PROVEEDOR_DIRECCION = process.env['PROVEEDOR_DIRECCION'];
    const PROVEEDOR_TELEFONO = process.env['PROVEEDOR_TELEFONO'];
    const PROVEEDOR_EMAIL = process.env['PROVEEDOR_EMAIL'];
    const PROVEEDOR_CIUDAD = process.env['PROVEEDOR_CIUDAD'];

    const allFieldsAreDefined = (
    Boolean(PROVEEDOR_RAZONSOCIAL) &&
    Boolean(PROVEEDOR_RUT) &&
    Boolean(PROVEEDOR_GIRO) &&
    Boolean(PROVEEDOR_DIRECCION) &&
    Boolean(PROVEEDOR_TELEFONO) &&
    Boolean(PROVEEDOR_EMAIL) &&
    Boolean(PROVEEDOR_CIUDAD)
    )
    
    if (allFieldsAreDefined) {
        //* USAMOS as string PORQUE YA CHEQUEAMOS SI SON UNDEFINED
        //* SI HAY AL MENOS 1 QUE SEA UNDEFINED, allFieldsAreDefined es false
        return {
            PROVEEDOR_RAZONSOCIAL: PROVEEDOR_RAZONSOCIAL as string,
            PROVEEDOR_RUT: PROVEEDOR_RUT as string,
            PROVEEDOR_GIRO: PROVEEDOR_GIRO as string,
            PROVEEDOR_DIRECCION: PROVEEDOR_DIRECCION as string,
            PROVEEDOR_TELEFONO: PROVEEDOR_TELEFONO as string,
            PROVEEDOR_EMAIL: PROVEEDOR_EMAIL as string,
            PROVEEDOR_CIUDAD: PROVEEDOR_CIUDAD as string,
        }
    }
    else {
        console.log('\n\n\n\n FALTAN DATOS DE PROVEEDOR');
        console.log('\n AGREGAR VALORES DE PROVEEDOR AL ARCHIVO .env');
        return {
            PROVEEDOR_RAZONSOCIAL: '',
            PROVEEDOR_RUT: '',
            PROVEEDOR_GIRO: '',
            PROVEEDOR_DIRECCION: '',
            PROVEEDOR_TELEFONO: '',
            PROVEEDOR_EMAIL: '',
            PROVEEDOR_CIUDAD: '',
        }
    };
}

export const proveedorDataObjIsValid = (proveedorBaseData: proveedorBaseData): boolean => {
    const objValuesArr = Object.values(proveedorBaseData);
    for (let currentValue of objValuesArr) {
        //* SI DETECTAMOS 1 CAMPO QUE SEA '', DIREMOS QUE EL OBJ ESTÁ "MALO"
        if (currentValue === '') return false;
    }
    return true;
}


export const fechaStrIsValid = (fechaStr: string): boolean => {
    try {
        //? IF SOMETHING FAILS AND GIVE US AN ERROR, WE WILL RETURN false AS RETURN VALUE
        //* declaring the array as unknown[] allow us to change the elements type
        const proxyFechaInputArr: unknown[] = fechaStr.split('-');
        if (!(proxyFechaInputArr.length === 3)) return false;
        
        const fechaDay = Number(proxyFechaInputArr[0]);
        const fechaMonth = Number(proxyFechaInputArr[1]);
        const fechaYear = Number(proxyFechaInputArr[2]);

        return (
            ((fechaDay   > 0) && (fechaDay   < 32))     &&
            ((fechaMonth > 0) && (fechaMonth < 13))     &&
            ((fechaYear  > 0) && (fechaYear  < 9999))
        );
    }
    catch {
        return false;
    }
}
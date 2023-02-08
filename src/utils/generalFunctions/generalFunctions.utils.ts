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
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
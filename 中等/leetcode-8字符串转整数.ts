
function myAtoi(str: string): number {
    str = str.trim();
    let numStr:string = '';
    for (let i = 0; i < str.length; i++) {
        if (i === 0 && (str[i] === '+' || str[i] === '-')) {
            numStr = str[i];
            continue;
        }
        if (10 > Number(str[i]) && str[i] !== ' ') {
            numStr += str[i];
        } else {
            break;
        }
    }

    let num:number = Number(numStr);
    let maxInt:number = Math.pow(2, 31) - 1;
    let minInt:number = -Math.pow(2, 31);
    return num > maxInt && maxInt ||
        (num < minInt && minInt) ||
        num;

};


function reverse(x: number): number {
    let ans:string = Math.abs(x).toString()
    let len:number = ans.length
    if (ans[len - 1] == '0') len -= 1
    let temp = ''
    for (let i = 0; i < len; i++) {
        temp += ans[len - 1 - i]
    }
    let y:number = parseInt(temp)
    if(x < 0){
        return y <= Math.pow(2,31) ? -y : 0;
    }else{
        return y < Math.pow(2,31) ? y : 0;
    }
};


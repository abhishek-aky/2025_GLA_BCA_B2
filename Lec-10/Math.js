function add(num1, num2){
    let n1 = num1;
    let n2 = num2;
    return n1+n2;
}
function sub(num1, num2){
    let n1 = num1;
    let n2 =num2;
    return n1-n2;
}
function multi(num1, num2){
    let n1 = num1;
    let n2 = num2;
    return n1*n2;
}
function divi(num1, num2){
    let n1 = num1;
    let n2 = num2;
    if(num2 === 0) return "Infinity Mathematical Error";
    return n1/n2;
}


module.exports = {add, sub, multi, divi};


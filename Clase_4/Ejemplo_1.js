let suma;
let resta;
let multiplicacion;
let division;

function sum (a, b){
    let resultado = a+b;
    return resultado;
}
function res (a, b){
    let resultado = a-b;
    return resultado;
}
function mul(a, b){
    let resultado
    if(a === 0 || b===0){
        resultado = "Todo numero multiplicado por cero es igual a cero";
    }
    else{
        resultado = a*b;
    }
    return resultado;
}
function div (a, b){
    let resultado
    if(b===0){
        resultado = "No existe la division entre 0";
    }
    else{
        resultado = a/b;
    }
    return resultado;
}
let a = 2;
let b = 5;
suma = sum(a,b);
resta = res(a,b);
multiplicacion = mul(a,b);
division = div(a,b);
console.log("======= OPERACIONES =======")
console.log("Valor 1: "+a);
console.log("Valor 2: "+b);
console.log("Suma: "+suma);
console.log("Resta: "+resta);
console.log("Multiplicacion: "+multiplicacion);
console.log("Division: "+division);
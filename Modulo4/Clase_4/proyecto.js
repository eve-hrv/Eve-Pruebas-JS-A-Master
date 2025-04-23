const invitados = ["Anna", "Diana", "Edgar", "Ferson", "Paola", "Paula"];

function encontrarParejas (arr){
    let inicio = 0;
    let siguiente =1;

    
    while (inicio < arr.length){
        if(arr[inicio][0] === arr[siguiente][0]){
            return [arr[inicio], arr[siguiente]];
            inicio = arr.length;
        }
        if(arr[inicio][0] !== arr[siguiente][0]){
            siguiente++;
            inicio++;
        }
    }
}

console.log(encontrarParejas(invitados));
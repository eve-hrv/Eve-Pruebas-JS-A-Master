const regalos =["pelota", "muñeca", "rompecabezas", "carro", "peluche"];

function buscarRegalos(arr, busqueda, index=0){
    if(index === arr.length){
        return `${busqueda} no se encontró en los regalos`;
    }
    if(arr[index] === busqueda){
        return `${busqueda} se encuentra en la posicion ${index} del arreglo de regalos`;
    }else{
        return buscarRegalos(arr, busqueda, index + 1);
    }
}
console.log(buscarRegalos(regalos, "carro"));
console.log(buscarRegalos(regalos, "muñeca"));
console.log(buscarRegalos(regalos, "trompo"));
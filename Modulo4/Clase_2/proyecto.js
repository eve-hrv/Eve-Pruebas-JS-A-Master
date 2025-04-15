listaDeCompras =[];

agregarProducto = (producto, arreglo) => {
    arreglo.push(producto);
}
eliminarProducto = (producto, arreglo) => {
    let indice = arreglo.indexOf(producto);
    if(indice !== -1){
        arreglo.splice(indice, 1);
    }
}
mostrarProductos = (arreglo)=>{
    for(let i = 0; i < arreglo.length; i++){
        console.log(arreglo[i]);
    }
}

agregarProducto("Leche", listaDeCompras);
agregarProducto("Pan", listaDeCompras);
agregarProducto("Huevo", listaDeCompras);
agregarProducto("Jugo", listaDeCompras);
mostrarProductos(listaDeCompras);
console.log("=======================")
eliminarProducto("Leche", listaDeCompras);
mostrarProductos(listaDeCompras);
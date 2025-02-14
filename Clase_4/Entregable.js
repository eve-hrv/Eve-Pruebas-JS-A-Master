let LibrosLeidos = ["Aura", "Batallas en el desierto", "Como agua para chocolate"]
console.log("Libros leidos: "+LibrosLeidos)

function agregarLibros (libro, arreglo){
    arreglo.push(libro)
}

function mostrarLibros(arreglo){
    console.log(arreglo)
}

agregarLibros("Cien años de soledad", LibrosLeidos)
mostrarLibros("Libros leidos: "+LibrosLeidos)
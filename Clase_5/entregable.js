let libros = [
    libro1 = {
    titulo : "Pedro Páramo",
    autor : "Juan Rulfo",
    año : 1955,
    estado : "disponible",
    mostrar : function(tit, au, ano,est){
        console.log("El libro "+tit+", fue publicado en el año "+ano+" y escrito por "+au);
        console.log("Estatus: "+est);
    }
    
},
    libro2 = {
    titulo : "Aura",
    autor : "Carlos Fuentes",
    año : 1962,
    estado : "prestado",
    mostrar : function(tit, au, ano,est){
        console.log("El libro "+tit+", fue publicado en el año "+ano+" y escrito por "+au);
        console.log("Estatus: "+est);
    }
},
    libro3 = {
    titulo : "Como agua para chocolate",
    autor : "Laura Esquivel",
    año : 1989,
    estado : "disponible",
    mostrar : function(tit, au, ano,est){
        console.log("El libro "+tit+", fue publicado en el año "+ano+" y escrito por "+au);
        console.log("Estatus: "+est);
    }
},
    libro4 = {
    titulo : "Los detectives salvaje",
    autor : "Roberto Bolaño",
    año : 1998,
    estado : "disponible",
    mostrar : function(tit, au, ano,est){
        console.log("El libro "+tit+", fue publicado en el año "+ano+" y escrito por "+au);
        console.log("Estatus: "+est);
    }
},
    ibro5 = {
    titulo : "La muerte de Artemio Cruz",
    autor : "Carlos Fuentes",
    año : 1962,
    estado : "prestado",
    mostrar : function(tit, au, ano,est){
        console.log("El libro "+tit+", fue publicado en el año "+ano+" y escrito por "+au);
        console.log("Estatus: "+est);
    }
}
]
tamaño = libros.length;
for(let i=0; i<tamaño; i++){
    let tituloL = libros[i].titulo;
    let añoL = libros[i].año;
    let autorL = libros[i].autor;
    let estatusL = libros[i].estado;

    libros[i].mostrar(tituloL, autorL, añoL, estatusL)
}
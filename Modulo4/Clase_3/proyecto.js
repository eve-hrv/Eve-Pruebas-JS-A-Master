let productos = [
    {
        nombre: "Leche",
        precio: 22,
        categoria: "Alimentos"
    },
    {
        nombre: "Pan",
        precio: 15,
        categoria: "Alimentos"
    },
    {
        nombre: "Deshodorante",
        precio: 150,
        categoria: "Higiene"
    },
    {
        nombre: "Detergente",
        precio: 120,
        categoria: "Limpieza"
    },
    {
        nombre: "Jugo",
        precio: 35,
        categoria: "Alimentos"
    }
];

let preciosAccesibles = productos.filter(producto => producto.precio <=100);
console.log(preciosAccesibles);

let productosOrdenados = productos.sort ((a,b) => a.nombre.localeCompare(b.nombre));
console.log(productosOrdenados);

let nombreProductos = productos.map(producto => producto.nombre);
console.log(nombreProductos);

// Mostrando los productos
productos.forEach(producto =>
    console.log(`Nombre: ${producto.nombre} 
    Precio: ${producto.precio} 
    Categoria: ${producto.categoria} 
    =========================`)
);
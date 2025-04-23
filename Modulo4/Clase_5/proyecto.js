const texto = "Hola soy un texto de prueba en un archivo de javascript y quiero saber la palabra mas larga, esternomascloideo";

function palabraMasLarga(texto) {
    const palabras = texto.split(" ");
    let palabraLarga = "";
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > palabraLarga.length) {
            palabraLarga = palabras[i];
        }
    }
    return palabraLarga;
}
console.log(palabraMasLarga(texto));
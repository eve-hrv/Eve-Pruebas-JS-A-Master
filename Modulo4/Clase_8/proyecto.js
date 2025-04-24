const fs = require("fs");
const filePath = "./notas.json";

function leerArchivo() {
    let texto;

    try {
        texto = fs.readFileSync(filePath, 'utf8');
        
        if (texto.trim() === "") {
            return [];
        }

        return JSON.parse(texto);

    } catch (err) {
       
        return [];
    }
}

function agregarNota(titulo, contenido) {
    let notas = leerArchivo();
    notas.push({ nombre: titulo, nota: contenido });
    let nuevoTexto = JSON.stringify(notas, null, 2);
    fs.writeFileSync(filePath, nuevoTexto, 'utf8');
    console.log(` Nota "${titulo}" agregada exitosamente`);
}

function eliminarNota(titulo) {
    let notas = leerArchivo();
    let indice = notas.findIndex(nota => nota.nombre === titulo);

    if (indice !== -1) {
        notas.splice(indice, 1);
        let nuevoTexto = JSON.stringify(notas, null, 2);
        fs.writeFileSync(filePath, nuevoTexto, 'utf8');
        console.log(` Nota "${titulo}" eliminada exitosamente`);
    } else {
        console.log(` Nota "${titulo}" no encontrada`);
    }
}
function mostrarNotas() {
    let notas = leerArchivo();
    if (notas.length === 0) {
        console.log("No hay notas guardadas");
    } else {
        console.log("Notas guardadas:");
        for (let i = 0; i < notas.length; i++) {
            console.log(`- ${notas[i].nombre}: ${notas[i].nota}`);
        }
    }
}
mostrarNotas();

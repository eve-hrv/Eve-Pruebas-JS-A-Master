//importar fs
const fs = require("fs");

const filePath = './example.txt';

console.log(fs.existsSync(filePath));

// Leer el archivo
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
fs.readFile("./noExiste.txt", 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

const fileContent = fs.readFileSync(filePath, 'utf8');
console.log(`Datos del archivo ${fileContent.toString()}`);


// Escribir en el archivo
/*fs.writeFile(filePath, 'Hola, mundo!', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Archivo escrito exitosamente');
});*/
// Escribir en el archivo con append
fs.appendFile(filePath, '\nOtra cosa!', (err) => {
    if (err) {
        console.error(err);
        return;
    }
});

fs.unlink(filePath, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Archivo eliminado');
}
);


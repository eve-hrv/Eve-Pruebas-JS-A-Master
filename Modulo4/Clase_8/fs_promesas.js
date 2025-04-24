const fs = require('node:fs/promises');
const filePath = './example.txt';
//fs.readFile(filePath, "utf8").then((data) => {
//    console.log(data);
//});
async function leerArchivo (){
const fileContents = await fs.readFile(filePath, "utf8");
console.log(fileContents);}

leerArchivo();
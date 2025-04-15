//ARROW FUNCTION

var sum = (a, b) =>{
    return a+b;
}

console.log(sum(4,12)); 

// STRING TEMPLATES / LITERALS

let eve = {
    nombre: "Evelyn",
    edad: 19,
    ciudad: "EdMx"
}
let rosa = {
    nombre: "Rosaura",
    edad: 39,
    ciudad: "Hidalgo"
}
let imprimir_p = (persona) =>{
    console.log(`El nombre de la persona es ${persona.nombre}`);
}

imprimir_p(eve);
imprimir_p(rosa);

//DESTRUCTUTACION DE OBJETOS

let imprimir_p_destructurada = ({nombre, edad, ciudad}) =>{
    console.log(`El nombre de la persona es ${nombre},
    su edad es ${edad} 
    y vive en ${ciudad}`);
}
imprimir_p_destructurada(eve);
imprimir_p_destructurada(rosa);

//DESTRUCTUTACION DE ARREGLOS

let lista_alumnos = [
    "Ana", "Luis", "Pedro", "Evelyn"
]

let primeros_alumnos = ([alumno1, alumno2, alumno3]) =>{
    console.log(alumno1);
    console.log(alumno2);
    console.log(alumno3);
}

primeros_alumnos(lista_alumnos);


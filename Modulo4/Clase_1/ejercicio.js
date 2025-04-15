contactos =[
    {
        nombre: "Heriberto",
        puesto: "Gerente",
        correo: "herihdz@correo.com",
        numero: "5555555555"
    },
    {
        nombre: "Evelyn",
        puesto: "Desarrolladora",
        correo: "eve.tor@correo.com",
        numero: "8888888888"
    },
    {
        nombre: "Rosaura",
        puesto: "Analista",
        correo: "rosasal@correo.com",
        numero: "7777777777"
    }
]

let generarTarjeta = ({nombre, puesto, correo, numero}) => {
    console.log(`Nombre: ${nombre}`);
    console.log(`Puesto: ${puesto}`);
    console.log(`Correo: ${correo}`);
    console.log(`Número: ${numero}`);
    console.log("-------------------------");
}

for(let i =0; i < contactos.length; i++){
    generarTarjeta(contactos[i]);
}
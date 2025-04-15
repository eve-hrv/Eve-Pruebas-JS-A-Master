let precio_niños = ({avion, camion}) => {
    let precio_avion = avion * 0.8;
    let precio_camion = camion * 0.8;
    console.log("PRECIO DE NIÑOS:");
    console.log(`El precio del avión para niños es: ${precio_avion}`);
    console.log(`El precio del camión para niños es: ${precio_camion}`);
}
let precio_adultos = ({avion, camion}) => {
    console.log("PRECIO DE ADULTOS:");
    console.log(`El precio del avión para adultos es: ${avion}`);
    console.log(`El precio del camión para adultos es: ${camion}`);
}

let viajes = [
    {
    destino: "Guadalajara-Centro",
    avion: 2500,
    camion: 1800
    },
    {
        destino: "Oaxaca-Centro",
        avion: 3000,
        camion: 1600
    },
    {
        destino: "Veracruz-Puerto",
        avion: 2000,
        camion: 1900
    },
    {
        destino: "Cancún",
        avion: 3200,
        camion: 2300
    }
];
console.log("VIAJES DISPONIBLES");
for (let i = 0; i < viajes.length; i++) {
    let viaje = viajes[i];
    console.log(`DESTINO: ${viaje.destino}`);
    precio_adultos(viaje);
    precio_niños(viaje);
}

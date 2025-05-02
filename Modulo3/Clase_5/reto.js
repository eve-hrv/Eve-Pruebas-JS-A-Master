let marvel_movies = {
    "Iron Man": {
        year: 2008,
        characters: [
            {
                name: "Tony Stark",
                age: 51
            },
            {
                name: "Pepper Potts",
                age: 18
            }
        ]
    },
    "Captain America": {
        year: 2011,
        characters: [
            {
                name: "Steve Rogers",
                age: 94
            },
            {
                name: "Bucky Barnes",
                age: 32
            }
        ]
    }
}

// 1. Edad de "Steve Rogers"
console.log(marvel_movies["Captain America"].characters[0].age)

// 2. Nombre del segundo personaje de "Iron Man"
console.log(marvel_movies["Iron Man"].characters[1].name) 

// 3. Promedio de edad de los personajes de las películas de Marvel
function promedio_edades(objeto_principal){
    let pelis = Object.keys(objeto_principal);
    let tamaño1 = pelis.length;
    let edades=0;
    let promedio;
    let cantidad=0;
    for(let i=0; i<tamaño1; i++){
        let nombrePeli = pelis[i];
        let tamaño2 = objeto_principal[nombrePeli].characters.length;
        for(let j=0; j<tamaño2; j++){
            edades += objeto_principal[nombrePeli].characters[j].age;
            cantidad+=1;
        }
    }
    promedio=edades/cantidad;
    console.log(promedio);
}

promedio_edades(marvel_movies);

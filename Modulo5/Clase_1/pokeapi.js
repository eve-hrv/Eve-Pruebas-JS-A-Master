const requestOptions = {
    method : "GET",
    redirect: "follow"
};

fetch("https://pokeapi.co/api/v2/pokemon/ditto", requestOptions)
//fetch("https://pokeapi.co/api/v2/pokemon/lapras", requestOptions)

.then((response) => response.json())
.then((result => {
    //console.log(result);
    console.log(`La experiencia base de este pokemon es: ${result.base_experience}`);

    let abilities_string ="";
    for(let i=0; i<result.abilities.length; i++){
        console.log(result.abilities[i].ability.name);
    }
}));
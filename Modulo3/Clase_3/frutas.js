let frutas = ["manzana", "mango", "mango", "uva", "manzana","mango", "manzana", "manzana" ]
let manzana = 0;
let uvas = 0;
let mango = 0;

for(let i=0; i<frutas.length; i++){
    if(frutas[i]=== "manzana"){
        manzana+=1;
    }
    else if(frutas[i] === "uva"){
        uvas += 1;
    }
    else if(frutas[i] === "mango"){
        mango += 1;
    }
}
console.log("Manzanas:"+manzana);
console.log("Uvas:"+uvas);
console.log("Mangos:"+mango);
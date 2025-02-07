const nota = -1;

if(nota>100 || nota<0){
    console.log("Ingrese un número que este en los rangos de 0 a 100");
}
else if(nota>=90){
    console.log("Excelente");
}
else if(nota>=75 && nota<=89){
    console.log("Bien");
}
else if(nota>=60 && nota<=74){
    console.log("Suficiente");
}
else{
    console.log("No aprueba");
}
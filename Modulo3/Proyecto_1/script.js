let button = document.getElementById("button");
let comentario = document.getElementById("nom");
let comentarios = document.getElementById("comentarios");

let objeto_contenedor = {
  contenido: [],
};

//======================================================================
if(localStorage.getItem("comentarios")) { 
    let comentarios_JSON = localStorage.getItem("comentarios");
    objeto_contenedor = JSON.parse(comentarios_JSON);

    for(let i = 0; i < objeto_contenedor.contenido.length; i++) {
        agregar_comentario_a_comentarios(objeto_contenedor.contenido[i]);
    }
}
//================= Funciones =================
function agregar_comentario_a_comentarios(entrada) {
    let nuevo_elemento = document.createElement("div");
    nuevo_elemento.innerHTML = entrada;

    let boton_eliminar_comentario = document.createElement("button");
    boton_eliminar_comentario.innerHTML = "❎";

    nuevo_elemento.appendChild(boton_eliminar_comentario);
    comentarios.appendChild(nuevo_elemento);

    boton_eliminar_comentario.addEventListener("click", function(event) {
        let indice = objeto_contenedor.contenido.indexOf(entrada);
        if (indice !== -1) {
            objeto_contenedor.contenido.splice(indice, 1);
        }

        let comentarios_JSON = JSON.stringify(objeto_contenedor);
        localStorage.setItem("comentarios", comentarios_JSON);

        comentarios.removeChild(nuevo_elemento);
    });

}
button.addEventListener("click", function(event) {
    let ahora = new Date();
    let fecha = ahora.toLocaleDateString();
    let horaMinutos = ahora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    let nuevo_comentario = comentario.value + " - " + fecha + " - " + horaMinutos;

    agregar_comentario_a_comentarios(nuevo_comentario);
    objeto_contenedor.contenido.push(nuevo_comentario);
    let comentarios_JSON = JSON.stringify(objeto_contenedor);
    localStorage.setItem("comentarios", comentarios_JSON);

    comentario.value = "";
});

let Button = document.getElementById("button")
let Result = document.getElementById("comentarios")

button.addEventListener("click", () => {
    
    original_html = Result.innerHTML
    Result.innerHTML += "<h3>" + Fecha.value + " - " + Nombre.value +"</h3><br>"
})


// Acceder a los inputs

let Nombre = document.getElementById("nom")
let Fecha = document.getElementById("fecha")

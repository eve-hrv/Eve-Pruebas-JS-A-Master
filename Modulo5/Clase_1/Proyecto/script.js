const boton = document.getElementById("btn1");
const texto = document.getElementById("estatus");
let npedido = 0;
function obtenerPedido(){
    const select = document.getElementById("donas");
    const valorSeleccionado = select.value; 
    const textoSeleccionado = select.options[select.selectedIndex].text;
    return textoSeleccionado;
}

function analizandoPedido(pedido){
    setTimeout(() => {
        texto.innerHTML = `Analizando pedido ${pedido}`;
    }, 1000);
}
function enProceso(){
    setTimeout(() => {
        texto.innerHTML = `En proceso...`;
    }, 4000);
}
function preparando (nomPedido){
    setTimeout(() => {
        texto.innerHTML = `Preparando la dona de ${nomPedido}`;
    }, 8000);
}
function completado(npedido, nompedido){
    setTimeout(() => {
        texto.innerHTML = `Pedido ${npedido} completado - ${nompedido}`;
    }, 15000);
}

boton.addEventListener("click", function(event) {
    npedido++;
    const pedido = obtenerPedido();
    analizandoPedido(npedido);
    enProceso();
    preparando(pedido);
    completado(npedido, pedido);
});

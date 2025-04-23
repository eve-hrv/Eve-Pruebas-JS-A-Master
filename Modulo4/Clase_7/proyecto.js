function encontrarMaximo(arr, inicio = 0, fin = arr.length - 1) {
    if (inicio === fin) {
        return arr[inicio];
    }
    const medio = Math.floor((inicio + fin) / 2);
    const maxIzquierda = encontrarMaximo(arr, inicio, medio);
    const maxDerecha = encontrarMaximo(arr, medio + 1, fin);
    return Math.max(maxIzquierda, maxDerecha);
}

console.log(encontrarMaximo([1, 3, 5, 7, 9, 13, 5, 12]));
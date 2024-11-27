// escribe tu respuesta acá
function sumarRangoNumeros(inicio, fin) {
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
        suma += i;
    }
    return suma;
}
// código de prueba
console.log(sumarRangoNumeros(0, 10)) // 55
console.log(sumarRangoNumeros(12, 14)) // 39
console.log(sumarRangoNumeros(5, 5)) // 0
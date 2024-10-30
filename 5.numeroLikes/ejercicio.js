// escribe tu respuesta acá
function likes(numero) {
    if (numero < 1000) {
        return (numero);

    } else if (numero < 1000000) {
        let mil = numero / 1000;
        if (mil % 1 >= 0.5) mil++; 
        return (mil | 0) + "K"; 

    } else {
        let millon = numero / 1000000;
        if (millon % 1 >= 0.5) millon++; 
        return (millon | 0) + "M"; 
    }
}

// código de prueba
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"
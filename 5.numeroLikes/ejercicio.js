// escribe tu respuesta acá
function likes(num) {
    if (num < 1000) {
      return String(num);
    } else if (num >= 1000 && num < 1000000) {
      return (num / 1000 | 0) + "K";
    } else {
      return (num / 1000000 | 0) + "M";
    }
  }
// código de prueba
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"
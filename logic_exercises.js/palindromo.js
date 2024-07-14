// Palíndromo: Escribe una función llamada is_palindrome que tome una
// cadena de texto como entrada y devuelva true si es un palíndromo
// (se lee igual de izquierda a derecha que de derecha a izquierda) y false en caso contrario.

function isPalindrome(text) {
    const cleanedText = text.toLowerCase().replace(/[\W_]/g, '');
    return cleanedText === cleanedText.split('').reverse().join('');
}

// Ejemplo de uso
console.log(isPalindrome("Anita lava la tina"));  // true
console.log(isPalindrome("hola"));  // false

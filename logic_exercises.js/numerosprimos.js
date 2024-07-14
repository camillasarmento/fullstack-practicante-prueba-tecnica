// Números Primos: Escribe una función llamada prime_numbers que tome un
// número n como entrada y devuelva todos los números primos menores o iguales a n.

function primeNumbers(n) {
    if (n < 2) {
        return [];
    }

    let primes = [];
    for (let num = 2; num <= n; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }

    return primes;
}

// Ejemplo de uso
console.log(primeNumbers(20));  // [2, 3, 5, 7, 11, 13, 17, 19]

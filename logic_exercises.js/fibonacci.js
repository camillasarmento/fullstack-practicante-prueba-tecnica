// Fibonacci: Escribe una función llamada fibonacci que tome un número n
// como entrada y devuelva los primeros n números de la secuencia de Fibonacci.

function fibonacci(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }

    let fibSeq = [0, 1];
    for (let i = 2; i < n; i++) {
        let nextFib = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
        fibSeq.push(nextFib);
    }

    return fibSeq;
}

// Ejemplo de uso
console.log(fibonacci(10));  // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

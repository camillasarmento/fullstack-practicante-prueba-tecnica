// Ordenamiento de Burbuja: Implementa el algoritmo de ordenamiento de
// burbuja en una función llamada bubble_sort que tome una lista de números
// como entrada y devuelva la lista ordenada de menor a mayor.

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Ejemplo de uso
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));  // [11, 12, 22, 25, 34, 64, 90]

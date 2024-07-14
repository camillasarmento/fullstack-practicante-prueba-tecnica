// Búsqueda Binaria: Escribe una función llamada binary_search que
// implemente el algoritmo de búsqueda binaria. La función debe tomar
// una lista ordenada y un elemento como entrada, y devolver la posición
// del elemento en la lista o -1 si el elemento no está en la lista.

function binarySearch(arr, x) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === x) {
            return mid;
        } else if (arr[mid] < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

// Ejemplo de uso
const sortedList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(sortedList, 5));  // 4
console.log(binarySearch(sortedList, 10));  // -1

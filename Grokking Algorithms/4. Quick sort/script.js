/**
 * Задание 1. Функция суммы через рекурсию.
 */
function sum(array){
    if(array.length < 2){
        return array[0] ?? 0;
    }
    return array[0] + sum( array.slice(1));
}

console.log("Recursion sum:", sum(sumData));

/**
 * Задание 2. Алгоритм Евклида.
 */
function nod(a, b){
   if(a === 0){
    return b;
   }
   if(b === 0){
    return a;
   }
   if(a < b){
    return nod(a, b - Math.floor(b/a)*a);
   }
   return nod(b, a - Math.floor(a/b)*b);
}

console.log("GCD, Euclidean algorithm:", nod(270, 192));

/**
 * Задание 3. Бинарный поиск.
 */
function binarySearch(array,l,r, elem){
    const count = r - l + 1;
    const medium = l + (count % 2 === 0 ? count / 2 - 1 : Math.floor(count / 2)); 
    const currentItem = array[medium]

    if(currentItem === elem){
        return medium;
    } 
    if(currentItem < elem) {
        return binarySearch(array, medium, r, elem);
    }
    return binarySearch(array, l, medium, elem);
}

console.log("Binary search:", binarySearch(sumData, 0, sumData.length - 1, 5))

/**
 * Задание 4. Быстрая сортировка.
 */
function quickSort(array){
    if(array.length < 2){
        return array;
    }

    const medIndex = Math.floor(array.length / 2);
    const supportElement = array[medIndex];
    const smallerElements = array.filter((item, i) => item <= supportElement && i !== medIndex);
    const biggerElements = array.filter(item => item > supportElement);

    return [...quickSort(smallerElements), supportElement, ...quickSort(biggerElements)];
}

console.log("Quick sort:", quickSort([0,5,6,1,2,9,8,0,2,3,6,5]))
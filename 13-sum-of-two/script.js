/*
 * Задача 13: «Сумма двух»
 *
 * Напишите функцию sumOfTwo(arr, num). Её аргументы: массив целых чисел arr
 * и целое число num. Функция должна вернуть true, если в переданном массиве
 * есть какие-то два числа, чья сумма равна num. Если же такой пары чисел нет,
 * функция должна вернуть false.
 * 
*/

function sumOfTwo(arr, sum) {
    const diff = [sum - arr[0]]
    for (let i = 1; i < arr.length; i++) {
        if (diff.includes(arr[i])) {
            return true
        } else {
            const searchVal = sum = arr[i]
            diff.push(searchVal)
        }
    }
    return false
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(sumOfTwo([1, 2, 3, 4, 5], 4)); // true (так как 1 + 3 === 4)
console.log(sumOfTwo([2, 5, 3, 4, 1], 10)); // false
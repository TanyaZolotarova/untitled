//------------------------------------ЗАДАЧА № 5------------------------------------------------------------

// 5. Напишите функцию, которая конкатенирует исходный массив с другими массивами или примитивными значениями
//
// const arr1 = [1];
// const arr2 = concatArray(arr1, 2, [3], [[4]]);
//
// console.log(arr2); // [1, 2, 3, [4]]
// console.log(arr1); // [1]

// --------------------------------решение-------------------------------------------

// const arr1 = [1];
// const arr2 = concatArray(arr1, 2, [3], [[4]]);
//
//
// function concatArray(arr, ...arr2) {
//
//     return concatArr = arr.concat(...arr2);
// }
//
// console.log(arr2);
// console.log(arr1);


const arr15 = [1];                                                                         //5

Array.prototype.concatArray = function(arr,...arr25){
    return arr25.concat(...this);
}

console.log([arr15, 2, [3], [[4]]].concatArray());
console.log(arr15);
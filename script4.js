//------------------------------------ЗАДАЧА № 4-----------------------------------------------------------------

// 4. Напишите функцию, которая удалит из массива все "отрицательные" типы данных (false, null, 0, "", undefined, NaN)
//
// const arr1 = clearArray([1, 0, 2, false, '', 3]);
//
// console.log(arr1); // [1, 2, 3]

// ---------------------------------решение----------------------------------------------

// const arr1 = clearArray([1, 0, 2, false, '', 3]);
//
// function clearArray(arr) {
//
//     return arr.filter (Boolean);
// }
// console.log(arr1);

Array.prototype.clearArray = function () {                                                  //4
    return this.filter ((v) => Boolean(v));
}
console.log([1, 0, 2, false, '', 3].clearArray());
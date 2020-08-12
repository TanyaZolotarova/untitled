//-----------------------------------------ЗАДАЧА № 2-------------------------------------------------------------------

//2. Напишите функцию неглубокого копирования массива, учитывая, что исходный массив может быть произвольной длины, но не глубже массива в массиве

//const arr1 = [[1,2], [3,4]];
//const arr2 = aCopy(arr1);

//arr1.push([5,6]);

//console.log(arr1); // [[1,2], [3,4], [5,6]]
//console.log(arr2); // [[1,2], [3,4]]

// --

//const arr1 = [['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']];
//const arr2 = aCopy(arr1);

//arr1.unshift(['z']);

//console.log(arr1); // [['z'], ['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']]
//console.log(arr2); // [['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']]


//  -------------------------------------решение----------------------------------------
// const arr1 = [[1,2], [3,4]];
// const arr2 = aCopy(arr1);
//
// arr1.push([5,6]);
//

// function aCopy(arr) {
//     const  tempArray = new Array(...arr);
//     return tempArray;
// }
// console.log(arr1);
// console.log(arr2);
// -----------------------------------------решение--------------------------------------
const arr1 = [['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']];




Array.prototype.aCopy = function () {
    const  tempArray = new Array(...this);
    return tempArray;

}
const arr2 = arr1.aCopy();
arr1.unshift(['z']);

console.log(arr1.aCopy(arr1));
console.log(arr2.aCopy(arr2));
//------------------------------------ЗАДАЧА № 18 ------------------------------------------------------------

// 18. Напишите функцию, которая вернет разницу двух массивов (т.е. элементы, которых нет в исходных массивах)
//
// const arr1 = [1, 2, 'a'];
// const arr2 = [1, 2, 3, 4, 'b'];
//
// console.log(diff(arr1,arr2)) // [a,3,4,b]

//------------------------------------РЕШЕНИЕ-------------------------------------------------------------------

const arr1 = [1, 2, 'a'];
const arr2 = [1, 2, 3, 4, 'b'];

// function diff(arr1, arr2) {
//     return arr1.concat(arr2).filter(function(val, index, arr){
//         return arr.indexOf(val) === arr.lastIndexOf(val);
//     });
// }

// function diff(incomingFirstArray, incomingSecondArray) {
//     const resultArray = new Array(...incomingFirstArray,...incomingSecondArray);
//     return resultArray.filter(function(value){
//         return resultArray.indexOf(value) === resultArray.lastIndexOf(value);
//
//
// })
// console.log(diff(arr1,arr2))

// function diff(arr1, arr2) {
//     return arr1.concat(arr2).filter(function(val, index, arr){
//         return arr.indexOf(val) === arr.lastIndexOf(val);
//     });
// }

const arr228 = [1, 2, 'a'];                                                                 //18
const arr18 = [1, 2, 3, 4, 'b'];
const arrtest = [];


Array.prototype.diff = function (a1,a2){
    return a1.concat(a2).filter(function(val, index, a1){
        return a1.indexOf(val) === a1.lastIndexOf(val);
    });
}
console.log(arrtest.diff(arr18,arr228)) // [a,3,4,b]

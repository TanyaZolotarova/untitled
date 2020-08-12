//----------------------------------------ЗАДАЧА № 16--------------------------------------------------------------

// 16. Напишите функцию, которая найдет високосные года в указанном диапазоне дат
//
// console.log(findYear(2000,2018)); // [2000,2004,2008,2012,2016]

// ------------------------------------решение-------------------------------------------

// function findYear (start, end) {
//     var result = [];
//     for (var i = start; i <= end; i++) {
//         if (i % 4 === 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }
//
// console.log(findYear(2000,2018));


// let result = [];
// Array.prototype.findYear = function (start, end) {
//
//     for (let i = start; i <= end; i++) {
//         if (i % 4 === 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }
//
// console.log(result.findYear(2000,2018)); // [2000,2004,2008,2012,2016]


let result = [];                                                                            //16
Array.prototype.findYear = function (start, end) {

    for (let i = start; i <= end; i++) {
        if (i % 4 === 0) {
            this.push(i);
        }
    }
    return this;
}

console.log(result.findYear(2000,2018)); // [2000,2004,2008,2012,2016]
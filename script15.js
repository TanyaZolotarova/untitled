//----------------------------------ЗАДАЧА № 15--------------------------------------------------------------------

// 15. Напишите функцию которая преобразует массив из чисел в строку через указанный разделитель, оставив только четные числа или не четные цифры, в зависимости от третьего аргумента (true - четные, false - нечетные)
//
// const arr = [1,2,3,4,5,6,7,8,9];
//
// console.log(implode(arr, ':', true)); // '2:4:6:8'
// console.log(implode(arr, '*', false)); // '1*3*5*7*9'

//-----------------------------------РЕШЕНИЕ-------------------------------------------------------------------------

// const arr = [1,2,3,4,5,6,7,8,9];
//
// function implode (arrr, strdot, bool) {
//     if (bool == true) {
//         var arr2 = arrr.filter(number => !(number % 2)).join(strdot);
//         return arr2;
//     } else {
//         var arr3 = arrr.filter(number => (number % 2)).join(strdot);
//         return  arr3
//     }
//     ;
//
// }

// console.log(implode(arr, ':', true)); // '2:4:6:8'
// console.log(implode(arr, '*', false)); // '1*3*5*7*9'



const arr215 = [1,2,3,4,5,6,7,8,9];

Array.prototype.implode2 = function (separator, boolArgument) {
    return new Array(...this)
        .filter(number => boolArgument ? !(number % 2) : (number % 2))
        .join(separator);
}

console.log(arr215.implode2(':', true)); // '2:4:6:8'
console.log(arr215.implode2('*', false)); // '1*3*5*7*9'
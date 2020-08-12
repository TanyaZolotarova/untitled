//---------------------------------ЗАДАЧА № 14------------------------------------------------------------------

// 14. Напишите функцию которая преобразует массив в строку через указанный разделитель
//
// const arr = ['a','b','c'];
//
// console.log(implode(arr, '-')); // 'a-b-c'

//-------------------------------------Решение----------------------------------------------------------------

//  const arr = ['a','b','c'];
// function implode(arr, strdot){
//     return arr.join('-');
//  }
//
// console.log(implode(arr, '-'));

const arr214 = ['a','b','c'];                                                               //14


Array.prototype.implode = function (separator) {
    return new Array(...this).join(separator);
}

console.log(arr214.implode('-')); // 'a-b-c'
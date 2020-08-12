//-------------------------------------------ЗАДАЧА № 3--------------------------------------------------------


// 3. Напишите функцию, которая принимает на входе массив и число, обозначающее размер группы, на которые нужно разделить исходный массив
//
// const arr1 = splitArray(['a', 'b', 'c', 'd', 'e', 'f'], 2);
//
// console.log(arr1); // [['a', 'b'], ['c', 'd'], ['e', 'f']]


// ----------------------------решение-----------------------------------


// const arr1 = splitArray(['a', 'b', 'c', 'd', 'e', 'f'], 2);
//
// function splitArray(arr, size = 2) {
//     return arr.map((x, i) => i % size == 0 && arr.slice(i, i + size)).filter(x => x)
// }
//
// console.log(arr1);


// Array.prototype.pluck = function (field){        //функция, которая берет массив объектов и возвращает массив значений определенного поля
//     const filtered = this.map(it => it[field]);
//     return filtered;
// }

Array.prototype.splitArray = function( chunks) {
    return this.map((x, i) => i % chunks == 0 && this.slice(i, i + chunks)).filter(x => x)
}
console.log(['a', 'b', 'c', 'd', 'e', 'f', 'test'].splitArray(2));
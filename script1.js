//--------------------------------ЗАДАЧА № 1--------------------------------------------------------------

//1. Напишите функцию, которая берет массив объектов и возвращает массив значений определенного поля:
//const chars = [
//  { 'name': 'tony', 'age': 20 },
//  { 'name': 'feel', 'age': 30 }
//];

//console.log(pluck(chars, 'name')); // ['tony', 'feel']

// -----------------------------------------решение--------------------------------------
const chars = [
{ 'name': 'tony', 'age': 20 },
 { 'name': 'feel', 'age': 30 }
];

// function pluck(arr, field){
// const filtered = arr.map(it => it[field]);
// return filtered
// }

Array.prototype.pluck = function (field){
 const filtered = this.map(it => it[field]);
 return filtered;
}

console.log(chars.pluck('name'));



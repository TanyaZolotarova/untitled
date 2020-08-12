// 13. Напишите функцию, которая вернет массив с группированными элементами исходных массивов. Логика группировки: первая группа состоит из всех первых элементов исходных массивов, вторая группа - из вторых элементов и т.д.
//
// console.log(group(['a', 'b'], [1, 2], [true, false]));
// // [['a', 1, true], ['b', 2, false]]


//--------------------------------решение--------------------------------------------------------------


// const group = (...allArrays) => {
//     return [...allArrays].reduce((acc, curr) => {
//         return [[ ...(acc[0] || []) , curr[0]], [...(acc[1] || []), curr[1]]]
//     }, [])
// };
//
// console.log(group(['a','b'], ['1','2'], [true,false]));




// console.log(group(['a', 'b'], [1, 2], [true, false]));
// // [['a', 1, true], ['b', 2, false]]
// function group(...arg) {
//     let arr = []
//     for(let i = 0; i < arg[0].length; i++)  {
//         let a = []
//         arg.forEach((items, index) => {
//             a.push(arg[index][i])
//         })
//         arr.push(a)
//     }
//     return arr;
// }

// Array.prototype.group = function(...arg){
//
//     for(let i = 0; i < this[0].length; i++)  {
//         let a = []
//         this.forEach((items, index) => {
//             a.push(this[index][i])
//         })
//         arr.push(a)
//
// }
//     let arr113 = [];
//     console.log(arr113.group(['a', 'b'], [1, 2], [true, false]));


Array.prototype.group = function() {
    let arr = [];
    for(let i = 0; i < this[0].length; i++)  {
        let a = []
        this.forEach((items, index) => {
            a.push(this[index][i])
        })
        arr.push(a)
    }
    return arr;
};
let arr67 = [['a','b'], ['1','2'], [true,false]];
console.log(arr67.group());
//--------------------------------ЗАДАЧА № 17--------------------------------------------------------------------
//
// 17. Напишите функцию, которая перемешает массив в случайном порядке
//
/* console.log(rnd([1,2,3,4,5,6])); // [6,1,5,4,3,2] */

//--------------------------------------РЕШЕНИЕ-----------------------------------------------------------



// function rnd(arr){
//     let j, temp;
//     for(let i = arr.length - 1; i > 0; i--){
//         j = Math.floor(Math.random()*(i + 1));
//         temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = temp;
//     }
//     return arr;
// }

// console.log(rnd([1,2,3,4,5,6]));


Array.prototype.rnd = function (arr){
    for (let i = this.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
    return this;
}
const arr17 = [1,2,3,4,5,6];
console.log(arr17.rnd());
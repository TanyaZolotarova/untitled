
//--------------------------------------ЗАДАЧА № 9-----------------------------------------------------------

// 9. Напишите функцию, которая вернет массив с всеми элементами исходного массива, кроме последней ячейки
//
// const arr1 = [1,2,3,4];
// const arr2 = init(arr1);
//
// console.log(arr2); // [1,2,3]

//---------------------------------решение---------------------------------------------
//
// const arr1 = [1,2,3,4];
// const arr2 = init(arr1);
//
// function init(incomingArray) {
//     return  incomingArray.slice(0,incomingArray.length-1);
// }




// Array.prototype.init = function(arr){
//     return this.slice(0, arr.length-1);
// }
// const arr1 = [1,2,3,4];
// const arr2 = init(arr1);
// console.log(arr2.init());


Array.prototype.init = function () {
    return this.slice(0,this.length-1);
}
const arr9 = [1,2,3,4];
const arr29 = arr9.init();
console.log(arr29);
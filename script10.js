//-----------------------------------ЗАДАЧА № 10-------------------------------------------------------------

// 10. Напишите функцию, которая вернет массив с всеми значениями, которые повторяются в исходном массиве
//
// const arr1 = [1,2,3,4,2,5,6,1,3];
// const arr2 = uni(arr1);
//
// console.log(ar2); // [1,2,3]

//--------------------------------решение--------------------------------------




// function uni(arr){
//     return arr.filter((v, i, a) => {
//         return a.indexOf(v) !== i
//     }).sort()
// }

// try with MAP !

Array.prototype.uni = function (arr){
    return this.filter((v, i, a) =>{
        return a.indexOf(v) !== i
    }).sort()

}


// const arr1 = [1,2,3,4,2,5,6,1,3];
// const arr2 = uni(arr1);


const arr2 = [1,2,3,4,2,5,6,1,3].uni();
console.log(arr2); // [1,2,3]
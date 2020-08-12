//----------------------------------------ЗАДАЧА № 11--------------------------------------------------------------

// 11. Напишите функцию, которая вернет элемент из массива по указанному индексу. Но если индекс отрицательный, то считаем с конца массива
//
// const arr = ['a', 'b', 'c', 'd'];
//
// console.log(nfa(array, 1)); // 'b'
// console.log(nfa(array, -2); // 'c';

//------------------------------------РЕШЕНИЕ--------------------------------------------------------------------

const arr = ['a', 'b', 'c', 'd'];

function nfa(arr,index){
    if(index > 0) {
        var arr2 = (arr[index]);
        return arr2;
    }
    else {
        index = (index * -1);
        var arr2 = (arr[index]);
        return arr2;
    }

}

console.log(nfa(arr, 1)); // 'b'
console.log(nfa(arr, -2)); // 'c';

const arr211 = ['a', 'b', 'c', 'd'];                                                        //11

// Array.prototype.nfa = function (index){
//     let tempArray = new Array(...this);
//     return index > 0 ? tempArray[index] : tempArray[index * -1];
// }
//
// console.log(arr211.nfa(1)); // 'b'
// console.log(arr211.nfa(-2)); // 'c';
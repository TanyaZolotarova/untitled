Array.prototype.pluck = function (field){        //функция, которая берет массив объектов и возвращает массив значений определенного поля
    const filtered = this.map(it => it[field]);
    return filtered;
}
const chars = [
    { 'name': 'tony', 'age': 20 },
    { 'name': 'feel', 'age': 30 }
];
console.log(chars.pluck('name'));



Array.prototype.aCopy = function () {          //  функция неглубокого копирования массива
    const  tempArray = new Array(...this);
    return tempArray;

}
const arr1 = [['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']];
const arr2 = arr1.aCopy();
arr1.unshift(['z']);

console.log(arr1.aCopy(arr1));
console.log(arr2.aCopy(arr2));



Array.prototype.splitArray = function( chunks) {    //функция, которая принимает на входе массив и число, обозначающее размер группы, на которые нужно разделить исходный массив
    return this.map((x, i) => i % chunks == 0 && this.slice(i, i + chunks)).filter(x => x)
}
console.log(['a', 'b', 'c', 'd', 'e', 'f', 'test'].splitArray(2));




Array.prototype.clearArray = function () {     //функция, которая удалит из массива все "отрицательные" типы данных (false, null, 0, "", undefined, NaN)
    return this.filter ((v) => Boolean(v));
}
console.log([1, 0, 2, false, '', 3].clearArray());





Array.prototype.concatArray = function(arr,...arr25){  //функция, которая конкатенирует исходный массив с другими массивами или примитивными значениями
    return arr25.concat(...this);
}
const arr15 = [1];
console.log([arr15, 2, [3], [[4]]].concatArray());
console.log(arr15);




Array.prototype.rm = function(remove = 1){  //функция, которая удалит указанное кол-во элементов с начала исходного массива. Аргумент функции, который означает кол-во элементов, опциональный и равен 1 по умолчанию.Если элементов меньше, чем указанное кол-во для удаления - вернуть пустой массив
    return [...this].slice(remove);
}

console.log(([1, 2, 3].rm())); // [2, 3]

console.log(([1, 2, 3].rm(2))); // [3]

console.log(([1, 2, 3].rm(5))); // []

console.log(([1, 2, 3].rm(0))); // [1, 2, 3]



Array.prototype.rm2 = function(remove2 = 1){    //Аналогично предыдущей функции только удаление с конца массива
    return [...this].reverse().slice(remove2).reverse();
}

console.log([1, 2, 3].rm2()); // [1, 2]
console.log([1, 2, 3].rm2(2));
console.log([1, 2, 3].rm2(5));
console.log([1, 2, 3].rm2(0));


Array.prototype.replaceIn = function (symbl, start = 0, end = this.length-1) {  // функция, которая принимает массив, символ для замены, с какой ячейки начинать заменять и на какой остановиться.
    return this.map((item,index) => {
        return index >= start & index <= end ? symbl : item;
    });
}
const arr2copy1 = [4, 6, 8, 10].replaceIn('*',1,2);
console.log(arr2copy1); // [4, '*', '*', 10]*/




Array.prototype.init = function () {   //функция, которая вернет массив с всеми элементами исходного массива, кроме последней ячейки
    return this.slice(0,this.length-1);
}
const arr9 = [1,2,3,4];
const arr29 = arr9.init();
console.log(arr29);


Array.prototype.uni = function (arr){  //функция, которая вернет массив с всеми значениями, которые повторяются в исходном массиве
    return this.filter((v, i, a) =>{
        return a.indexOf(v) !== i
    }).sort()
}
const arr210 = [1,2,3,4,2,5,6,1,3].uni();
console.log(arr210); // [1,2,3]




Array.prototype.nfa = function (index){    //функция, которая вернет элемент из массива по указанному индексу. Но если индекс отрицательный, то считаем с конца массива
    let tempArray = new Array(...this);
    return index > 0 ? tempArray[index] : tempArray[index * -1];
}
const arr211 = ['a', 'b', 'c', 'd'];
console.log(arr211.nfa(1)); // 'b'
console.log(arr211.nfa(-2)); // 'c';





Array.prototype.implode = function (separator) {  //функция которая преобразует массив в строку через указанный разделитель
    return new Array(...this).join(separator);
}
const arr214 = ['a','b','c'];
console.log(arr214.implode('-'));






Array.prototype.implode2 = function (separator, boolArgument) {   //функция которая преобразует массив из чисел в строку через указанный разделитель, оставив только четные числа или не четные цифры, в зависимости от третьего аргумента (true - четные, false - нечетные)
    return new Array(...this)
        .filter(number => boolArgument ? !(number % 2) : (number % 2))
        .join(separator);
}
const arr215 = [1,2,3,4,5,6,7,8,9];
console.log(arr215.implode2(':', true)); // '2:4:6:8'
console.log(arr215.implode2('*', false)); // '1*3*5*7*9'



Array.prototype.somenotodd = function(){   //решение в одну строчку, которое считает сумму квадратных корней для всех чётных чисел внутри массива
    return this.filter(element => !(element % 2))
        .reduce((accumulator, element) => accumulator + Math.sqrt(element), 0)
};
const arr = [1, 4, 3, 0, 4, 5, 4];
console.log(arr.somenotodd());



     let result = [];
    Array.prototype.findYear = function (start, end) {    //функция, которая найдет високосные года в указанном диапазоне дат

        for (let i = start; i <= end; i++) {
            if (i % 4 === 0) {
                this.push(i);
            }
        }
        return this;
    }

    console.log(result.findYear(2000,2018)); // [2000,2004,2008,2012,2016]




Array.prototype.rnd = function (arr){   //функция, которая перемешает массив в случайном порядке
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






Array.prototype.diff = function (a1,a2){  //функция, которая вернет разницу двух массивов (т.е. элементы, которых нет в исходных массивах)
    return a1.concat(a2).filter(function(val, index, a1){
        return a1.indexOf(val) === a1.lastIndexOf(val);
    });
}
const arr228 = [1, 2, 'a'];
const arr18 = [1, 2, 3, 4, 'b'];
const arrtest = [];
console.log(arrtest.diff(arr18,arr228)) // [a,3,4,b]





Array.prototype.sort2 = function (){   //функция, которая сортирует массив по убыванию
    return this.sort();
}
const arr219 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(arr219.sort2()); // [-4,1,2,3,3,5,6,7,8]



Array.prototype.mostcommon = function() {    //функция, которая вернет самый частый элемент массива
    let resultArray = new Array(...this);
    resultArray.sort(), most = [undefined , 0], counter = 0;
    resultArray.reduce(function (old,chr) {
        old == chr ? ++counter > most[1] && (most = [chr, counter]) : (counter = 1)
        return chr;
    });
    return (most[0]);
}
const arr220 = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];
console.log(arr220.mostcommon());


Array.prototype.group = function() {    //функцию, которая вернет массив с группированными элементами исходных массивов. Логика группировки: первая группа состоит из всех первых элементов исходных массивов, вторая группа - из вторых элементов и т.д.
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
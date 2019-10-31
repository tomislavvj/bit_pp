
/* Zadatak 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 
 */
"use strict"

function vowels(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "a":
            case "A":
            case "e":
            case "E":
            case "i":
            case "I":
            case "o":
            case "O":
            case "U":
            case "u":
                count++;
        }
    }
    return count;
}
console.log(vowels("Danas je lep dan"));

/* Zadatak 2. 
Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
 */
'use strict'

function combine(arrayLetter, arrayNumber) {
    var result = [];
    for (var i = 0; i < arrayLetter.length; i++) {
        result[result.length] = arrayLetter[i];
        result[result.length] = arrayNumber[i];
    }
    return result;
}
console.log(combine(["a", "b", "c"], [1, 2, 3]));

/* Zadatak 3. 
Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
 */
'use strict'

function rotate(array, k) {
    var newArray = [];
    var m;
    if (k % array.length !== 0) {
        m = k % array.length


        for (var i = m; i < array.length; i++) {
            newArray[i - m] = array[i];
        }
        for (var i = 0; i < m; i++) {
            newArray[newArray.length] = array[i];
        }
    }
    else {
        newArray = array;
    }
    return newArray;
}
console.log(rotate([1, 2, 3, 4, 5, 6], 35));



/* Zadatak 4. 
Write a function that takes a number and returns array of its digits.
 */
'use strict'


function digits(num) {
    var res = [];
    var numStr = "" + num;
    for (var i = 0; i < numStr.length; i++) {
        res[numStr.length - 1 - i] = num % 10;
        num = (num - (num % 10)) / 10;
    }
    return res;
}
console.log(digits(12345));


function digits1(x) {
    var str = "";
    str += x;
    var c = [];
    for (var i = 0; i < str.length; i++) {
        c[c.length] = parseInt(str[i]);
    }
    return c;
}
console.log(digits1(12345));

/* Zadatak 5. Write a program that prints a multiplication table for numbers up to 12. */

function multiplicationRow(a, b) {
    return a + ' * ' + b + ' = ' + a * b;
}

function mulTableForNumber(number) {
    var table = '';

    for (var j = 1; j <= 9; j++) {
        table += multiplicationRow(number, j);

        if (j !== 9) {
            table += '\n';
        }
    }
    return table;
}
function multiple(x) {
    var table = "";

    for (var i = 1; i <= x; i++) {
        table += '\n---------------\n';
        table += mulTableForNumber(i);
        table += '\n---------------\n';
    }

    return table;
}
console.log(multiple(3));


'use strict'
function multiple(x) {
    var res = '';
    for (var i = 1; i <= x; i++) {
        for (var j = 1; j <= 9; j++) {
            res += i + ' * ' + j + ' = ' + i * j + '\n';
        }
    }
    return res;
}
console.log(multiple(3));


/* Zadatak 6. Write a function to input temperature in Centigrade and convert to Fahrenheit.*/


function converter(f) {
    var c = 0;
    c = (5 / 9) * (f - 32);
    return c;
}
console.log(converter(70));


/* Zadatak 7. Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
  */

'use strict'
function checkIfNumber(array) {
    var c = [];
    for (var i = 0; i < array.length; i++) {
        var converted = parseFloat(array[i]);
        if (array[i] === converted && converted !== Infinity) {
            c[c.length] = array[i];
        }
    }
    return c;
}

function maxNumber(array) {

}

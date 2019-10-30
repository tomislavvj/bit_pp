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




function combine(arrayLetter, arrayNumber) {
    var result = [];
    for (var i = 0; i < arrayLetter.length; i++) {
        result[result.length] = arrayLetter[i];
        result[result.length] = arrayNumber[i];
    }
    return result;
}
console.log(combine(["a", "b", "c"], [1, 2, 3]));




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
    else{
        newArray=array;
    }
    return newArray;
}
console.log(rotate([1, 2, 3, 4, 5, 6], 35));







function digits(num) {
    var res = [];

}




var x = 123456;
var res;
res = String(x);
console.log(res.length);
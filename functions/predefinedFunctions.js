"use strict;"

function convert(array) {
    var res = [];
    for (var i = 0; i < array.length; i++) {
        if (!parseInt(array[i])) {
            continue;
        }
        else {
            res[res.length] = array[i];
        }
    }
    return res;
}
console.log(convert(["1", "21", undefined, "42", "1e+3", Infinity]));






function joinElements(array2) {
    var res2 = "";
    for (var i = 0; i < array2.length; i++) {
        if (array2[i] === 0 || typeof array2[i] === "boolean") {
            res2 += array2[i];
        }
        if (!parseInt(array2[i])) {
            continue;
        }
        else {
            res2 += array2[i];
        }
    }
    return res2;
}
console.log(joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));





function falsyValues(array3) {
    var res3 = []
    for (var i = 0; i < array3.length; i++) {
        if (!parseInt(array3[i])) {
            continue;
        }
        else {
            res3[res3.length] = array3[i];
        }
    }
    return res3;
}
console.log(falsyValues([NaN, 0, 15, false, -22, '', undefined, 47, null]));






function caclucateInteger(array4) {
    var counter = 0;
    for (i = 0; i < array4.length; i++) {
        if (Number.isInteger(array4[i])) {
            counter++;
        }
    }
    return counter;
}
console.log(caclucateInteger([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));




/* 
function caclucateFloat(array5) {
    var counter = 0;
    for (var i = 0; i < array5.length; i++) {
        if (typeof array5[i] === "number") {
            if (Number.isInteger(array5[i]) &&  !isNaN(array5[i])) {
                continue;
            }
            else {
                counter++;
            }
        }
    }
    return counter;
}
console.log(caclucateFloat([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));
 */


function caclucateFloat(array5) {
    var counter = 0;
    for (var i = 0; i < array5.length; i++) {
        if (typeof array5[i] === "number") {
            if (!isNaN(array5[i]) && array5[i] % 1 !== 0) {

                counter++;
            }
        }
    }
    return counter;
}
console.log(caclucateFloat([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));
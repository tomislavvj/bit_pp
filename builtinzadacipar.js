/* 1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1] */




/* 2.Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]  */


function removeDuplicate(input) {
    var newArray = [];

    for (var i = 0; i < input.length; i++) {

        if (newArray.indexOf(input[i]) === -1) {
            newArray.push(input[i]);
        }
    }
    return newArray;
}
console.log(removeDuplicate([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));


/* 3.Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true */


function oddArray(input) {
    if (input.length % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}
var input = [1, 2, 9, 2, 1];
console.log(oddArray(input));


/* 3.b.Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4 */

function underMiddle(array) {
    if (array.length % 2 === 0) {
        return "error";
    } else {
        var middle = Math.floor(array.length / 2);

        return middle;
    }
}

array = [-1, 8.1, 3, 6, 2.3, 44, 2.11];
console.log(underMiddle(array));


4./* Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 } */

function smallestElement(array) {
    var res = {};
    var min = Math.min(array);
    return min;
}

array = [1, 4, -2, 11, 8, 1, -2, 3];
console.log((array));



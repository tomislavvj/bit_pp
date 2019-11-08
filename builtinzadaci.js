/* 1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1] */


a = [2, 4, 7, 11, -2, 1];
b = [];

for (var i = 0; i < a.length; i++) {
    b.push(a[i]);
    b.push(a[i]);
}
a = b;
console.log(b);


/* function removeDuplicate(input) {
    var newArray = [];

    for (var i = 0; i < input.length; i++) {

        if (newArray.indexOf(input[i]) === -1) {
            newArray.push(input[i]);
        }

    }
    return newArray;
}
console.log(removeDuplicate([8, 13, 8, 9, 12, 8, 1, 1, 4, 13])); */


var array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

var a = array.sort();

console.log(a);


function reverseArray() {

}
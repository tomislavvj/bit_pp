
// Umesto broja ispisuje zvezdicu
// for (i = 1; i <= 100; i++) {
//     if (i % 4 === 0) {
//         console.log("*");
//     }
//     else console.log(i)
// }


// Umesto broja ne ispisuje nista
// result = ""
// for (i = 1; i <= 100; i++) {
//     if (i % 4 !== 0) {
//         result += i;
//     }
// }
// console.log(result + "");



// Umesto broja ne ispisuje nista, uz pomoc continue
// for (i = 1; i <= 100; i++) {
//     if (i % 4 === 0) {
//         continue;
//     }
//     console.log(i);
// }



// Stampaj sve brojeve od 100 do 0
// for(i=100; i>=1; i--){
//     console.log(i);
// }


// Ispisi poslednji broj u zadatom opsegu koji je deljiv sa 4
// var start = 34;
// var end = 99;
// var x = 4;

// var result;
// for (var number = end; number >= start; number--) {
//     if (number % 4 === 0) {
//         result = number;
//         break;
//     }
// }
// console.log(result);




// 1.Write a program that checks if a given element e is in the array a. 

// var a = [5, -4, 2, 3, 7];
// var e = 3;

// for (i = 0; i <= a.length; i++) {
//     if (e === a[i]) {
//         console.log("yes " + a[i]);
//     }
// }

// 2.Write a program that multiplies every positive element of a given array by 2.

// var niz = [-3, 11, 5, 3.4, -8];
// var result;

// for (i = 0; i < niz.length; i++) {
//     if (niz[i] > 0) {
//         niz[i] = (niz[i] * 2);
//     }
// }
// console.log(niz);



// 3.
// var a = [4, 2, 2, -1, 6];
// var min = a[0];
// var ind = [];
// for (i = 0; i < a.length; i++) {
//     if (min > a[i]) {
//         min = a[i];
//         ind = i;
//         console.log(i);
//     }
// }
// console.log(a[ind]);
// console.log(ind);


// 4.
// var a = [4, 2, 2, -1, 6];
// var min = a[0];
// var minNext;
// for (i = 0; i < a.length; i++) {
//     if (a[i] < min) {
//         minNext = min;
//         min = a[i];
//     }
// } console.log(minNext);


var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];


for (i = 0; i < a.length; i++) {
    console.log(a[i] + " " + b[i]);

}

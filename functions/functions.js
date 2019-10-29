function max(a, b) {
    var max = a;
    if (b > a) { max = b }
    return ("Maximum is: " + max);
}

function odd(a) {
    if (a % 2 !== 0) { return "Yes" }
    else { return "No" };
}

function threedigit(a) {
    if (a > 99 && a < 1000) { return "Yes" }
    else { return "No" };
}

function armean(a, b, c, d) {
    return (a + b + c + d) / 4;
}

function square(a) {
    var result = "";

    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            if ((i === 0) || (i === (a - 1)) || (j === 0) || j === (a - 1)) {

                result += " * ";
            }

            else {

                result += "   ";
            }
        }
        result += "\n";
    }
    return result;
}

function chart(a, b, c) {
    var i = 0;
    var result = "";

    for (var i = 0; i < a + b + c + 3; i++) {
        if (i === a || i === (a + b + 1) || i === (a + b + c + 2)) {
            result += "\n"
        }
        else result += "*";
    }
    return result;
}

function numberdigit(a) {

    var count = 0;

    while (a >= 1) {
        a /= 10;
        count++
    }
    return count;
}

function appearances(a, e) {
    count = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) { count++ }
    }
    return count;
}

var res1 = max(-45);
var res2 = odd(-45);
var res3 = threedigit(45);
var res4 = armean(45, 5, 66, 3);
var res5 = square(7);
var res6 = chart(10, 0, 4);
var res7 = numberdigit(15454654464);
var res8 = appearances([2, 4, 7, 8, 7, 7, 1], 7);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);
console.log(res6);
console.log(res7);
console.log(res8);
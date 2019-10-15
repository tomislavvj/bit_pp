/*var dayOfWeek = 6;
var currentMonth = "";


switch (dayOfWeek) {
    case 1: currentMonth = "Monday";

    case 2: currentMonth = "Tuesday";

    case 3: currentMonth = "Wednesday";

    case 4: currentMonth = "Thursday";

    case 5: currentMonth = "Friday";
        console.log("It’s weekday");
        break;
    case 6: currentMonth = "Saturday";

    case 7: currentMonth = "Sunday";
        console.log("It’s weekend");
        break;
    default: currentMonth = "Input must be a number between 1 and 7";
        break;
}

 Exercise 4
Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. All other cases output a message explaining that input must be a number between 1 and 12.
		For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”.


var monthOfYear = 1;
var currentMonth = "";


switch (monthOfYear) {
    case 12: currentMonth = "December";
        break;
    case 1: currentMonth = "January";
        break;
    case 2: currentMonth = "February";
        break;
    case 3: currentMonth = "March";
        break;
    case 4: currentMonth = "April";
        break;
    case 5: currentMonth = "May";
        break;
    case 6: currentMonth = "Jun";
        break;
    case 7: currentMonth = "July";
        break;
    case 8: currentMonth = "August";
        break;
    case 9: currentMonth = "September";
        break;
    case 10: currentMonth = "October";
        break;
    case 11: currentMonth = "November";
        break;
    default: currentMonth = "Input must be a number between 1 and 12";
        break;
}
console.log(currentMonth);

Exercise 5
Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12.

var monthOfYear = 1;
var currentMonth = "";


switch (monthOfYear) {
    case 12: currentMonth = "December";
    case 1: currentMonth = "January";
    case 2: currentMonth = "February";
        console.log("Winter");
        break;
    case 3: currentMonth = "March";
    case 4: currentMonth = "April";
    case 5: currentMonth = "May";
        console.log("Spring");
        break;
    case 6: currentMonth = "Jun";
    case 7: currentMonth = "July";
    case 8: currentMonth = "August";
        console.log("Summer");
        break;
    case 9: currentMonth = "September";
    case 10: currentMonth = "October";
    case 11: currentMonth = "November";
        console.log("Fall");
        break;
    default: currentMonth = "Input must be a number between 1 and 12";
        break;
}

Exercise 5
Write a program that for a string input of a grade from “A”-“F” outputs a proper info message about that grade in the following manner: A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed". Input different from letters A-F outputs a message "Unknown grade".

var grade = "A";
var infoMessage = "";

switch (grade) {
    case "A": infoMessage = "Good job";
        break;
    case "B": infoMessage = "Pretty good";
        break;
    case "C": infoMessage = "Passed";
        break;
    case "D": infoMessage = "Not so good";
        break;
    case "F": infoMessage = "Failed";
        break;
    default: infoMessage = "Unknown grade";
        break;
}
console.log(infoMessage);

Exerceise 7
Write a program that takes as input a city name and outputs the country where the city is.You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities.Note that each country must have a different number of cities.Input different from the listed cities should output a message"Please choose a different city".

var city = "London";

switch (city) {
    case "Paris":
    case "Lyon":
    case "Nice":
        console.log("France");
        break;
    case "London":
    case "Manchester":
    case "Liverpul":
        console.log("England");
        break;
    case "New York":
    case "Washington":
    case "Seatle":
    case "Detroit":
        console.log("USA");
        break;
    case "Barcelona":
    case "Madrid":
    case "Seville":
    case "Valencia":
        console.log("Spain");
        break;
    default: console.log("Please choose a different city");
} 


Exercise 8
Write a program that takes as input two numbers and a string denoting the operation(“+”, “-”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!*/

var firstNumber = 2;
var secondNumber = 3;
var operation = "/";
var result;

switch (operation) {
    case "-": result = firstNumber - secondNumber;
        break;
    case "+": result = firstNumber + secondNumber;
        break;
    case "*": result = firstNumber * secondNumber;
        break;
    case "/":
        if (secondNumber !== 0) { result = firstNumber / secondNumber; }
        else console.log("Can not divide by 0");
        break;
}
if (typeof (result) !== "undefined") console.log(result);
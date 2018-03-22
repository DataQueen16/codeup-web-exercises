"use strict";
(function () {
    // Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

    // For example, showMultiplicationTable(7) should output
    // 7 x 1 = 7
    // 7 x 2 = 14
    // 7 x 3 = 21
    // 7 x 4 = 28
    // 7 x 5 = 35
    // 7 x 6 = 42
    // 7 x 7 = 49
    // 7 x 8 = 56
    // 7 x 9 = 63
    // 7 x 10 = 70

    var num = prompt("Please pick a positive number bewteen 1 and 10");

    function showMultiplicationTable(num) {
        for (var multiply = 1; multiply < 11; multiply++) {
            var total = num * multiply;
            console.log(num + " * " + multiply + " = " + total);
        }

    }

    (showMultiplicationTable(num));


    // Create a for loop that uses console.log to create the output shown below.
    //
    //
    // 1
    // 22
    // 333
    // 4444
    // 55555
    // 666666
    // 7777777
    // 88888888
    // 999999999


})();
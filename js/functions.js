"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
(function() {

    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * /
    function sayHello(name) {
        return "Hello " + name;
    }


    var myName = "Jennifer";
    sayHello(myName);
    var helloMessage = console.log(sayHello(myName));


    /**
     * TODO:
     * Create a function called 'isTwo' that takes a number as a parameter.
     * /
    //Random # generator now
    var random = Math.floor((Math.random() * 3) + 1);

    var num = parseInt(prompt("What number do you want to enter?"));

    function isTwo(num) {
        return num === 2;
    }

     console.log("random: " + random);
     console.log("Result: " + isTwo(random));


    /**
     * TODO:
     * Create a function named 'calculateTip' to calculate a tip on a bill
     * /
    // console.log(alert("Let's calculate your tip today!"));
    // var billAmount = parseFloat(prompt("What was the total bill amount?"));
    // var tipPercent = parseInt(prompt("What percentage do you want to use - 10%, 15%, or 20%?"));
    //
    //
    function calculateTip(billAmount, tipPercent) {
        return billAmount * (tipPercent/100);
    }

    var finalTipAmount = (calculateTip(billAmount, tipPercent));
    console.log("Your total tip amount is: $" + finalTipAmount.toFixed(2));


    /**
     * TODO:
     * Create a function named `applyDiscount`.
     */
    alert("Let's figure out your discount!");
    var price = parseFloat(prompt("What is the cost of your item?"));
    var discountPercent = parseFloat(prompt("What is the discount today? \nHint - it needs to be a decimal between 0 and 1."));

    function applyDiscount(price, discountPercent) {
        return price * discountPercent;
    }

    var totalDiscount = (applyDiscount(price, discountPercent));
    console.log("Your total discount will be $" + totalDiscount.toFixed(2));

    /**
     * Extra Functions:
     * Write a function named identity that defines one parameter and returns the argument it was called with.
     */
    function identity(input) {
        return input;
    }

    var input = prompt("Tell me something about yourself -");
    var inputResult = identity(input);
    console.log("I wonder why you decided to tell me this - " + inputResult);

    /**
     * Extra Functions:
     * Write a function named isOdd that accepts a number and returns true if the passed number is odd, otherwise false
     * @returns {boolean}
     */
    function isOdd(numOdd) {
        return (num % 2) == 1;
    }

    var numOdd = parseInt(prompt("Enter an even or odd number please"));
    var oddNumber = (isOdd(numOdd));
    console.log("It is " + oddNumber + " that your number is Odd.");


    /**
     * Extra Functions:
     * Write a function named isEven that accepts a number and returns true if the passed number is even, otherwise false
     * @returns {boolean}
     */
    function isEven(number) {
        return (num % 2) == 0;
    }

    var number = parseInt(prompt("Enter an even or odd number please"));
    var evenNumber = (isEven(number));
    console.log("It is " + evenNumber + " that your number is Even.");


    /**
     * Extra Functions:
     * Write a function named isPositive that returns true if the passed number is greater than 0
     * @returns {boolean}
     */
    // function isPositive(posNumber) {
    //     return posNumber > 0;
    // }
    //
    // var posNumber = parseFloat(prompt("Please enter any number - positive or negative:"));
    // var yesPositive = (isPositive(posNumber));
    // console.log("Well, it's " + yesPositive + " that you gave me a positive number.");


    /**
     * Extra Functions:
     * Write a function named decrement that accepts a number and returns the number minus 1
     */
    // function decrement(numDecrement) {
    //     return num - 1;
    // }
    //
    // var numDecrement = parseFloat(prompt("Give me a number:"));
    // var finalTotal = (decrement(numDecrement));
    // console.log("Your final number is: " + finalTotal);


    /**
     * Extra Functions:
     * Write a function named hasSpaces that accepts a string and returns true if the string contains any space characters
     */
    // function hasSpaces(text) {
    //     return text.indexOf(" ") >= 0;
    // }
    //
    // var text = prompt("Please provide a word or sentence:");
    // var result = (hasSpaces(text));
    // console.log("Whitespaces included? " + result);


    /**
     * Extra Functions:
     * Write a function named isFive that accepts a number and returns true if the number is equal to 5
     */
    // function isFive(numFive) {
    //     return num === 5;
    // }
    //
    // var numFive = parseInt(prompt("Please provide a number:"));
    // var correct = (isFive(numFive));
    // console.log("Value provided equals 5? " + correct);


    /**
     * Extra Functions:
     * Write a function named square that accepts a number and returns the number times itself
     */
    // function square(numSquare) {
    //     return numSquare * numSquare;
    // }
    //
    // var numSquare = parseInt(prompt("Please provide a number:"));
    // var squareTotal = (square(numSquare));
    // console.log(numSquare + " squared = " + squareTotal);


    /**
     * Extra Functions:
     * Write a function named cube that accepts a number and returns the number times itself times itself
     */
    // function cube(num3) {
    //     return (num3 * num3 * num3);
    // }
    //
    // var num3 = parseInt(prompt("Please type a number"));
    // var numCubed = (cube(num3));
    // console.log(num3 + " cubed = " + numCubed);

    /**
     * Extra Functions:
     * Write a function named half that accepts a number and returns the number halved
     */
    // function half(numH) {
    //     return numH/2;
    // }
    //
    // var numH = parseInt(prompt("Please provide a number"));
    // var numHalf = (half(numH));
    // console.log(numH + " divided in half = " + numHalf);

    /**
     * Extra Functions:
     * Write a function named double that accepts a number and returns the number doubled
     */
    // function double(num2) {
    //     return num2 * 2;
    // }
    //
    // var num2 = parseInt(prompt("Enter a number: "));
    // var numDouble = (double(num2));
    // console.log("Here is " + num2 + " doubled: " + numDouble);


    /**
     * Extra Functions:
     * Write a function named isValidPassword that accepts a string and returns a boolean value based on the rules from the working with data types exercise
     */
    function isValidPassword(username, password) {
        var isPasswordLongEnough = thePassword.length > 5;
        var isUsernameShortEnough = username.length < 20;
        var passwordIncludesUsername = thePassword.indexOf(username) != -1;
        var usernameHasWhiteSpace = username !== username.trim();
        var passwordHasWhiteSpace = password !== password.trim();

        return (
            isPasswordLongEnough &&
            isUsernameShortEnough &&
            ! passwordIncludesUsername &&
            ! usernameHasWhiteSpace &&
            ! passwordHasWhiteSpace
        );
    }

    var username = prompt("Enter your Username:");
    var thePassword = prompt("Enter your password: ");
    var validPassword = (isValidPassword(thePassword));
    console.log("Did you follow the rules? " + validPassword);

})();



/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

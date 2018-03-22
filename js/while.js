"use strict";

(function () {
    // var num = 2;
    // console.log(num);
    //
    // while(num !== 65536) {
    //     var total = num += num;
    //     console.log(total);
    // }

    // An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number between 50 and 100 representing the        amount of cones to sell. Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop      to log to the console the amount of cones sold to each person. This is how you get the random numbers.
    // This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;
    // This expression will generate a random number between 1 and 5


    do {
        var numSold = Math.floor(Math.random() * 5) + 1;
        switch (numSold) {
                case "5":
                        console.log("You're a great customer. Thank you and tell your friends!");
                        break;
                case "4":
                        console.log("You're a good customer. But buying 4 means you can buy 5.");
                        break;
                case "3":
                        console.log("Well, 3 is just so-so. I think you can do better. Look in your wallet for more money.");
                        break;
                case "2":
                        console.log("That's just sad. Look for change. Hell, ask for change!");
                        break;
                case "1":
                        console.log("You must be a child to buy so little. I'm gonna let it go.");
                        break;
                default:
                        console.log("Leave before I get out the stick!");
                        break;
        }

        if(numSold > allCones) {
            allCones -= allCones;
        } else {
            allCones -= numSold;
        }
        console.log(allCones);

    } while (allCones > 0);

    // var i = 10;
    //
    // do {
    //     console.log('while loop iteration #' + i);
    //     i++;
    // } while (i < 10);

})();
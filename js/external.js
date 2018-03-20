"use strict";

//This calculates the cost of your movie rentals
alert("Greetings! Let's calculate your movies.");

var mermaid = prompt("How many days did you rent The Little Mermaid?");
var brotherBear = prompt("How many days did you rent Brother Bear?");
var hercules = prompt("How many days did you rent Hercules?");

mermaid = parseInt(mermaid);
brotherBear = parseInt(brotherBear);
hercules = parseInt(hercules);

var total = alert("Your total movie cost is $" + ((3 * mermaid) + (3 * brotherBear) + (3 *hercules)) + ".");


//Now we calculate your weekly pay from Amazon, Google, and Facebook
alert("Now it's time to calculate your weekly pay.")

var google = parseFloat(prompt("How many hours this week (Sun - Sat) did you work for Google?"));
var amazon = parseFloat(prompt("How many hours this week (Sun - Sat) did you work for Amazon?"));
var facebook = parseFloat(prompt("How many hour this week (Sun - Sat) did you work for Facebook?"));

var googleRate = google * 400;
var amazonRate = amazon * 380;
var facebookRate = facebook * 350;

var totalPay = alert("Your pay this week, without taxes or deductions is: $" + (googleRate + amazonRate + facebookRate));


//Checking college class availability
alert("Let's see if you are eligible for Chemistry 101.");

var studentClassSchedule = confirm("Do you have a class at 9 am on Wed, Thurs, and Fri?");
var isClassFull = prompt("How many students are listed here?.......21");

if ((isClassFull <= 25) && (studentClassSchedule = false)) {
    alert("Welcome to Chemistry 101!");
} else if ((isClassFull >= 26) || (studentClassSchedule = true)){
    alert("I am so sorry! This class is full. You need to pick another course at this time.");
}


//Offering a product to buyers
var product = prompt("How many items did you buy?");
var expired = confirm("Has the offer expired?");
var premiumMember = confirm("Are you a premium member?");

if (((product > 2) && (expired = false)) || ((premiumMember = true) && (expired = false))) {
    alert("We are more than happy to give you the necessary discount!");
} else {
    alert("I am so sorry! We cannot offer you this deal at this time. Please check back again for further offers.");
}
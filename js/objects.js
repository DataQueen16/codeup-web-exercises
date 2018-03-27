(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // var person = {
    //     firstName: "Jennifer",
    //     lastName: "Walker",
    //
    // };
    //
    // console.log(person.firstName + " " + person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // person.sayHello = function () {
    //     console.log("Hey there " + person.firstName + " " + person.lastName);
    // }
    //
    // person.sayHello();


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    // shoppers.forEach(function(shopper, index) {
    //         if (shopper.amount > 200) {
    //             var finalCost = shopper.amount * .88;
    //             return console.log(shoppers[0].name + " spent $" + shoppers[0].amount + " and got a 12% discount, giving a final total of  $" + finalCost);
    //         } else {
    //             return console.log(shoppers[0].name + " spent $" + shoppers[0].amount + " and got no discount, giving a final total of  $" + shoppers[0].amount);
    //         }
    // });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {"title1": "Where the sidewalk ends"
            "author": {
                "firstName": "Shel",
                "lastName": "Silverstein"
                }
            },
        {"title2": "Midnight in the Garden of Good and Evil"},
        {"title3": "The Masque of Red Death"},
        {"title4": "The Awakening"},
        {"title5": "The Casque of Amontillado"}
        ];

    // "title1".author.firstName = "Shel";
    // "title1".author.lastName = "Silverstein";
    //
    // "title2".author.firstName = "John";
    // "title2".author.lastName = "Berendt";
    //
    // "title3".author.firstName = "Edgar Allen";
    // "title3".author.lastName = "Poe";
    //
    // "title4".author.firstName = "Kate";
    // "title4".author.lastName = "Chopin";
    //
    // "title5".author.firstName = "Edgar Allen";
    // "title5".author.lastName = "Poe";


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();

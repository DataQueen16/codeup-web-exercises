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

    person.sayHello = function () {
        console.log("Hey there " + person.firstName + " " + person.lastName);
    }

    person.sayHello();


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

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper) {
            if (shopper.amount > 200) {
                var finalCost = shopper.amount * .88;
                return console.log(shopper.name + " spent $" + shopper.amount.toFixed(2) + " and got a 12% discount, with a reduced total of  $" + finalCost.toFixed(2));
            } else {
                return console.log(shopper.name + " spent $" + shopper.amount.toFixed(2) + " and got no discount, giving a final price of  $" + shopper.amount.toFixed(2));
            }
    });


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
        {"title": "Where the sidewalk ends",
            "author": {
                "firstName": "Shel",
                "lastName": "Silverstein"
                }
            },

        {"title": "Midnight in the Garden of Good and Evil",
            "author": {
                "firstName": "John",
                "lastName": "Berendt"
                }
            },

        {"title": "The Masque of Red Death",
            "author": {
                "firstName": "Edgar Allen",
                "lastName": "Poe"
                }
            },

        {"title": "The Awakening",
            "author": {
                "firstName": "Kate",
                "lastName": "Chopin"
                }
            },

        {"title": "The Casque of Amontillado",
            "author": {
                "firstName": "Edgar Allen",
                "lastName": "Poe"
                }
            }
        ];

    books.forEach(function(book, i) {
        console.log("Book # " + (i + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    });

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     */

    /* Example Console Output:
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

    var books = [
        createBook("Where the sidewalk ends", "Shel Silverstein"),

        createBook("Midnight in the Garden of Good and Evil", "John Berendt"),

        createBook("The Masque of Red Death", "Edgar Allen Poe"),

        createBook("The Awakening", "Kate Chopin"),

        createBook("The Casque of Amontillado", "Edgar Allen Poe")
            ];

    function createBook(title, author){
        var name = author.split(" ");
        return {title: title, author: {
            firstName[0],
                lastName: name[0]
            }
        };
    }

    function showBookInfo(book, index) {
        console.log("Book # " + (index + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log('---------');
    }

    books.forEach(showBookInfo); //Not calling function myself, just passing it
    //books.forEach(function() {});  -- same as above

    books.push(createBook("Where the sidewalk ends", "Shel Silverstein"));
    books[4] = createBook("The Raven", "Edgar Allen Poe");  //Reassigning one element in an array

})();

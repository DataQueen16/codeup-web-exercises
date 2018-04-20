const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];



let threeOrMore = users.filter(function(users) {
    return users.languages.length >= 3;
});
console.log(threeOrMore);


let userEmails = users.map(function (users) {
    return users.email;
});

console.log(userEmails);


// keys are ids and the values are objects that represent each user

let idObject = users.reduce((Ids, user) => {
    Ids[user.id] = user;
    return Ids;
}, {});

console.log(idObject);
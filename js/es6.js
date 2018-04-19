/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

const name = 'jennifer';
const email = 'dataqueen16@gmail.com';
const languages = ['java, c++, javascript'];

// const name = 'monica';

users.push({name, email, languages});

let emails = [];
let names = [];


users.forEach(user => {
    emails.push(user.email); // populate emails
    names.push(user.name)  // populate names
});


let developers = [];

users.forEach(({name, email, languages}) => {
  developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}`);
});


let list = '<ul>';


for (const developer of developers){
    list += '<li>' + developer + '</li>';
}
list += '</ul>';

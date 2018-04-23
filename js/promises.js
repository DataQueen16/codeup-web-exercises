



function wait(num) {
    const promise = new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve();
       }, num)
    });
    return promise;
}

// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

const getGithubUsers = () => {
    let request = fetch('data/users.json');
    return request.then(response => response.json())
};



    const request = fetch('https://api.github.com/users/DataQueen16/events', {headers: {'Authorization': 'token 035d254bd28229cd8a9f7a7d53d9b81b4c101184'}});
request
    .then(response => response.json())
    .then(events => console.log(events[0].created_at))
;

request.catch(error => console.log(error));

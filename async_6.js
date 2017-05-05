const fetch = require("node-fetch");

async function fetchGitHubUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch (url);
    return await response.json();
      
}

fetchGitHubUser("mariusschul")
    .then(user => {
        console.log(user.name);
        console.log(user.location);
    });
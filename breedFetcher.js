const request = require('request');

const url = "https://api.thecatapi.com/v1/breeds/search?q=";
const breedName = process.argv[2]; // users provide any breed name to search

request(url + breedName, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    const firstEntry = data[0];
    if (firstEntry === undefined) {
      console.log("the requested breed is not found");
    } else {
      console.log(firstEntry.description);
    }
  }
});
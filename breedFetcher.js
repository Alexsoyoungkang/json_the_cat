const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      const firstEntry = data[0];
      if (!firstEntry) {
        callback(`the requested breed, ${breedName} is not found`, null);
      } else {
        callback(null, firstEntry.description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
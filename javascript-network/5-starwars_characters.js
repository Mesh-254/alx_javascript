#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request.get(url, function (error, response, body) {
  if (error) {
    console.error(error);
  }

  const movieData = JSON.parse(body);
  // Loop through the characters and print their names
  movieData.characters.forEach((actors) => {
    // created a nested request to get character names
    request.get(actors, function (error, response, body) {
      // If there is an error log it out
      if (error) {
        console.error(error);
      }
      // Parse the data into json format
      const characterData = JSON.parse(body);
      // Print the name of each actor in the film
      console.log(characterData.name);
    });
  });
});

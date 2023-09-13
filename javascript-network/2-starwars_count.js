#!/usr/bin/node

const request = require('request');

const url = process.argv[2];
const characterId = 18;

request.get(url, function (error, response, body) {
  let count = 0;
  if (error) {
    console.error(error);
  }
  const filmData = JSON.parse(body);

  filmData.results.forEach(film => {
    film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
    count ++;
  }
    
  );

  console.log(count)

  // for (let i = 0; filmData.results[i] !== undefined; i++) {
  //   if (filmData.results[i].characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
  //     count++;
  //   }
  // }
  // console.log(count);
});

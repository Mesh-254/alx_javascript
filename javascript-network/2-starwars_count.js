#!/usr/bin/node

const request = require('request');

const url = process.argv[2];
const characterId = 18;

request(url, (error, response, body) => {
  if (body) {
    const filmsData = JSON.parse(body).results;

    // Filter films where Wedge Antilles is present
    const filmsWithWedgeAntilles = filmsData.filter(film =>
      film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
    );

    // Count the number of films with Wedge Antilles
    const numberOfFilms = filmsWithWedgeAntilles.length;

    console.log(numberOfFilms);
  }
});

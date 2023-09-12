#!/usr/bin/node

const req = require('request');

const id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

const films = [];

req.get(url, { encoding: 'utf-8' })
  .on('data', data => {
    films.push(data);
  })
  .on('complete', () => {
    const object = JSON.parse(films);
    console.log(object.title);
  })
  .on('error', error => {
    console.log(error);
  });

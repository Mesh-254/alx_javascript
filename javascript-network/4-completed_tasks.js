#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request.get(url, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  const todos = JSON.parse(body);
  //object to store the number of completed tasks by user ID
  const completed = {};
  // Loop through the todos and count completed tasks by user
  todos.forEach(todo => {
    if (todo.completed === true) {
      if (!completed[todo.userId]) {
        completed[todo.userId] = 1;
      } else {
        completed[todo.userId]++;
      }
    }
  });
  console.log(completed);
});

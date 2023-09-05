#!/usr/bin/node
exports.addMeMaybe = function (number, theFunction) {
  //  increments and calls a function.
  theFunction(++number);
};

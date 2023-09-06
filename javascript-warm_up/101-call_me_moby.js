#!/usr/bin/node
exports.callMeMoby = function (x, theFunction) {
  for (let h = 1; h <= x; h++) {
    theFunction();
  }
};

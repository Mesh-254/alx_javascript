#!/usr/bin/node
exports.callMeMoby = function (x, theFunction) {
  for (let h = 0; h <= x; h++) {
    theFunction();
  }
};

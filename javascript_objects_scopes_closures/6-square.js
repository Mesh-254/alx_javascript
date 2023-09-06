#!/usr/bin/node
const Square1 = require('./5-square');
class Square extends Square1 {
  constructor (size) {
    super(size, size);
    this.size = size;
  }

  charPrint (c) {
    if (c === undefined) {
      for (let i = 1; i <= this.size; i++) {
        console.log('X'.repeat(this.size));
      }
    } else {
      for (let i = 1; i <= this.size; i++) {
        console.log(c.repeat(this.size));
      }
    }
  }
}
module.exports = Square;

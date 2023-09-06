#!/usr/bin/node
const Square1 = require('./5-square');
class Square extends Square1 {
  constructor (size) {
    super(size, size);
    this.size = size;
  }

  charPrint (c) {
    if (c === undefined) {
      for (let i = 1; i <= this.height; i++) {
        console.log('X'.repeat(this.width));
      }
    } else {
      for (let i = 1; i <= this.height; i++) {
        console.log(c.repeat(this.width));
      }
    }
  }
}
module.exports = Square;

#!/usr/bin/node
const Square = require('./6-square');

const s1 = new Square(4);
s1.charPrint();

s1.charPrint('C');

const s2 = new Square(5);
s2.charPrint('KKK');


const s3 = new Square(5);
s3.charPrint('D');


const s4 = new Square(3);
s4.charPrint('D');
s4.double();
s4.charPrint('O');
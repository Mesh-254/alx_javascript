#!/usr/bin/node

const request = require('request');

const fs = require('fs');

const url = process.argv[2];

request.get(url).pipe(fs.createWriteStream(`${process.argv[3]}`, 'utf-8'));

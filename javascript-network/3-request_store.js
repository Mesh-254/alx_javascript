#!/usr/bin/node

const request = require('request');

const fs = require('fs');

const url = process.argv[2];

request.get(url, { encoding: 'utf-8' }).pipe(fs.createWriteStream(`${process.argv[3]}`));

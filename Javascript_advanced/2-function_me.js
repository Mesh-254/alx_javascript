#!/usr/bin/node
'use strict';
// function that accepts one argument fullName (string)
function welcomeMessage (fullName) {
  alert('Welcome ' + fullName);
}
const guillaume = welcomeMessage('guillaume');
const alex = welcomeMessage('alex');
const fred = welcomeMessage('fred');

guillaume();
alex();
fred();

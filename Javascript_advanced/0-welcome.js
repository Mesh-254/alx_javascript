#!/usr/bin/node
"use strict";
// shebang
// function welcome that takes two arguements 
function welcome(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    // function to display fullname
    function displayFullName() {
        alert('Welcome ' + fullName + '!');
    }
    displayFullName();
}
welcome('Holberton', 'School');

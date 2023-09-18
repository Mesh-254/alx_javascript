#!/usr/bin/node
// shebang

// function welcome that takes two arguements 
function welcome(firstName: string, lastName: string) {
    let fullName  = firstName + ' ' + lastName;
    // function to display fullname
    function displayFullName(){
        alert('Welcome ' + fullName + '!');
    }
    displayFullName();
}

welcome('Holberton', 'School');

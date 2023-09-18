#!/usr/bin/node
"use strict";
const globalVariable = 'welcome';
// outer function
function outer() {
    alert(globalVariable);
    const course = 'Holberton';
    // inner function
    function inner() {
        alert(globalVariable + ' ' + course);
        const exclamation = '!';
        //  function inception
        function inception() {
            alert(globalVariable + ' ' + course + ' ' + exclamation);
        }
        inception();
    }
    inner();
}
outer();

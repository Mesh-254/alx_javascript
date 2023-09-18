#!/usr/bin/node

// fucntion to divide 
function divideBy(firstNumber: number){
    return function (secondNumber: number) {
        return secondNumber / firstNumber;
    }
}

// function to add numbers 
function addBy(firstNumber: number){
    return function (secondNumber:number){
        return secondNumber + firstNumber
    }
}
const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10  = divideBy(10);
const divideBy100  = divideBy(100);

console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));
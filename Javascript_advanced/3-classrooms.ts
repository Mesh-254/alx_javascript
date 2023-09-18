#!/usr/bin/node

function createClassRoom(numbersOfStudents: number){
    // function that takes into argument seat(number)
    function studentSeat(seat: number){
        // anonymous function to return seat number
        return function(){
            return seat;
        }        
    }
    let students  = [];
    for(let i = 0; i<= numbersOfStudents;i++){
        let seatNumber = studentSeat(i + 1);
        students.push(seatNumber)
    }
    return students
}
const classRoom = createClassRoom(10);
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
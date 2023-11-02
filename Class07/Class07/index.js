
console.log("Question 1:");
function maximum(num1 , num2, num3 ) {
    var max = 0;
    if (num1 >= num2 && num1 >= num3) {
        max = num1;
    } else if (num2 >= num1 && num2 >= num1) {
        max = num2;
    } else if (num3 >= num1 && num3 >= num2){
        max = num3;}
    return max;
}
console.log(maximum(12, 18, 3)); //18
console.log(maximum(100, 4, 20)); //100
console.log(maximum(24, 41, 87)); //87

//Question 2
console.log("Question 2:");
function diceRoll() {
    var random = (Math.floor(Math.random() * 6) + 1 ) % 6;
    return random;
}


function isWinner(number) {
    if (number== 4) {
        console.log("Winner");
    } else {
        console.log("You Lost");
    }
}
var number = diceRoll();
isWinner(number);


//Question 3
console.log("Question 3:");
function fibonacci(number) {
    if (number == 0 || number == 1) {
        return number;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
var count = fibonacci(8);
console.log(count); //21


//Question 4

console.log("Question 4:");
function capitalise(location) {
    return location[0].toUpperCase() + location.substring(1);
}

function checkLocation(location) {
    var locationFormatted = capitalise(location);
    if (locationFormatted === "Vancouver") {
        console.log("Is is rainy here.");
    }
}
checkLocation("vancouver");
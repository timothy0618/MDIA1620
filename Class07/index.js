//Question 1:
console.log("Question 1:");
/**
 * @desc Find the maximun number
 * @param {Number} num1 The input number 1 
 * @param {Number} num2 The input number 2 
 * @param {Number} num3 The input number 3
 * @returns 
 */
function maximum(num1 = 0, num2 = 0, num3 = 0) {
    var max = 0;
    if (num1 >= num2) {
        max = num1;
    } else {
        max = num2;
    }
    if (!(max >= num3)) {
        max = num3;
    }
    return max;
}
console.log(maximum(12, 18, 3)); //18
console.log(maximum(100, 4, 20)); //100
console.log(maximum(24, 41, 87)); //87

//Question 2
console.log("Question 2:");
/**
 * @Desc Get the random number 1-6
 * @returns {Number} 
 */
function diceRoll() {
    var random = Math.ceil(Math.random() * 6) % 6;
    return random;
}
/**
 * @eesc Check the winner if the number more or equile 4, your are a winner, else You Lost
 * @param {Number} num The input number
 */
function isWinner(num) {
    if (num== 4) {
        console.log("Winner");
    } else {
        console.log("You Lost");
    }
}
var number = diceRoll();
isWinner(number);


//Question 3
console.log("Question 3:");
/**
 * @desc Catalate the fibonacci
 * @param {Number} num the input Number
 */
function fibonacci(num) {
    if (num == 0 || num == 1) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}
var count = fibonacci(8);
console.log(count); //21


//Question 4
console.log("Question 4:");
/**
 * @desc Upper case the string
 * @param {String} location  The input String
 * @returns - return the string is all Capitalise. 
 */
function capitalise(location) {
    return location[0].toUpperCase() + location.slice(1);
}

/**
 * @desc This function is for checking location.
 * @param {String} location input location
 */
function checkLocation(location) {
    var locationFormatted = capitalise(location);
    if (locationFormatted === "Vancouver") {
        console.log("Is is rainy here.");
    }
}
checkLocation("vancouver");

//Question 5
console.log("Question 5:");
/**
 * create two function which are get random number and calclator
 * The get random number is no arguments and retrun the random number, which between -5 and 6
 * the calclator has one argument called x, in the function calculator the randomNumber time x.
 * final, formate the string and console.log the result like:
 * console.log(`The random Number is __randomNumber__, and the input number is __x__, random number time input number is __num__`);
 */

/**
 * @desc get the random number between -6 and 5.
 * @returns randomNumber between -6 - 5
 */
function getRandomNumber() {
    var randomNumber = Math.ceil(Math.random() * 11) - 6;
    var randomNumber = randomNumber.toFixed();
    return randomNumber;
}

/**
 *  @desc calculate the input number time the random number, the value of random number is between -6 and 5. finally console.log the result.
 *  @x input the number. 
 */
function calculator(x) {
    var randomNumber = getRandomNumber();
    var num = x * randomNumber;
    console.log(`The random Number is ${randomNumber}, and the input number is ${x}, random number time input number is ${num}`);
}

calculator(3);


//Question 6
console.log("Question 6:");
/**
 * Create the function key, this function have one argument, 
 * return the uppercase word for the argument
 * 
 * Create the function cutwork word, this function have two arguments,
 * The first argument is word, second argument is number 
 * just return the word string before the number.
 * 
 * Create the function call print title, this function have two arguments 
 * the first argument is title, second argument is keyword
 * using the key function to upper case the keyword
 * console.log the result without 2 character
 * 
 * writing the outcome
 */

/**
 * @desc the function is formatted the word/
 * @param {String} word  The input word 
 * @returns upper case the wrod
 */
function key(word) {
    return word.toUpperCase();
}

/**
 * @desc this function if for cutting the word
 * @param {*} word 
 * @param {*} number 
 * @returns 
 */
function cutWord(word, number) {
    return word.slice(number);
}

/**
 * @desc this function formate the string
 * @param {*} title The title
 * @param {*} keyword The keyword for uppercase
 * @returns 
 */
function printTitle(title, keyword) {
    var str = cutWord(title + " " + key(keyword), 3);
    console.log(str);
}

printTitle("Hello world", "world"); // lo world WORLD
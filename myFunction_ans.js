/**
 * This assignment is build up a program for learning function. 
 * When you finish the assignment, you will learning how to create and call function
 */

/**
 * Step 1: Set up the function of generate Number to contain the default parameter of 'max' and 'startFromZero'
 *         the function is called as generateNumber(:number, boolean);  
 * Step 2: Inside the function, Initialise a variable called 'random number' as null; 
 *         using the if-else statement, if startFromZero is true write the follow code
 *         randomNumber = Math.floor(Math.random() * max);
 *         if startFromZero is not true, write the follow code
 *         randomNumber = Math.ceil(Math.random() * max);
 * 
 * Step 3: return the randomNumber
 * 
 * Step 4: before if-else statement, console.out the function and default parameter, the result like : generateNumber(max, startFromZero)
 * 
 * Step 5:After the function, using your knowledge to run the function 
 * 
 * 
 * 
 * Step 6: Set up the function of generate Number to contain the default parameter of max
 * Step 7: Inside the function, return the function generateNumber(max, false);
 * Step 8: before the return, console.log the function and default parameter, the result like: generateNumber(max)
 * 
 * Step 8: before the function, put the follow code: ( try to guest the result )
 *         console.log(generateNumber(10));
 * 
 * Step 9: Set up the function of generate Number with no default parameter
 * Step 10: Inside the function, return the function generateNumber(10);
 * Step 11: before the return, console.log the function and default parameter, the result like: generateNumber()
 * Step 12: run the generateNumber(), guest what will happen.
 * 
 * Now we have three function, which are generateNumber(), generateNumber(max), and generateNumber(max, generateNumber)      
 * Do you know the difference? try to write the description, paramaters and return for each function.
 * 
 */


/**
 * 
 * @returns {Number} - return the random number start from 1 to 5;
 */
function generateNumber(){
    console.log(`1. execute the function generateNumber()`);
    var max = 5;
    return generateNumber(max, false);
}

/**
 * 
 * @param {*} max  - The number determines the maximun of reandom number will generate
 * @returns {Number} - return the random number start from 1;
 */

function generateNumber(max){
    console.log(`2. execute the function generateNumber(max)`);
    return generateNumber(max, false); // what is difference if I change the false to true?
}

/**
 * @desc This function using for gerenter random number
 * @param {Number} max - The number determines the maximun of reandom number will generate
 * @param {boolean} startFromZero - The parmeter to determine the the random number start from zero or one (true start for zeor, fealse for one)
 * @returns - return the random number based on the condition 
*/
function generateNumber(max, startFromZero){
    console.log(`3. execute the function generateNumber(max, startFromZero)`);
    var randomNumber;
    if(startFromZero) randomNumber =  Math.floor(Math.random() * max);
    else if (!startFromZero) randomNumber = Math.ceil(Math.random() * max);
    return randomNumber;

   // return startFromZero?Math.floor(Math.random()*max): Math.ceil(Math.random() * max); // I try to put the script into one line.
}


console.log( generateNumber() ); // return the random number 5  
// I try to execute this function, but result alway return NaN, that is not my expectation
// My expectation is return the randomNumber and the range if from 1-5, How can I fixed it.
console.log( generateNumber(5) ); //return the random numer 1-5
// When I execute this function, My explain result will be: 
// 2. execute the function generateNumber(max)
// 3. execute the function generateNumber(max, startFromZero)
// ${randomNumer}
// Actuality the console isn't out put "2. execute the function generateNumber(max)". Why the code skip this console.out?
//  

console.log( generateNumber(5,true) ); //return the random numer 0-4

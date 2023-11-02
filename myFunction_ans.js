
/**
 * @desc This function using for gerenter random number
 * @param {Number} max - The number determines the maximun of reandom number will generate, default value = 5
 * @param {boolean} startFromZero - The parmeter to determine the the random number start from zero or one (true start for zeor, fealse for one), default value = false
 * @returns - return the random number based on the condition 
*/
function generateNumber(max = 5, startFromZero = false) {
    var randomNumber;
    console.log(`3. execute the function generateNumber(max, startFromZero)`);
    console.log(`The value of max: ${max}`);
    console.log(`The value of startFromZero: ${startFromZero}`);
    if (startFromZero) randomNumber = Math.floor(Math.random() * max)
    else if (!startFromZero) randomNumber = Math.ceil(Math.random() * max);
    else randomNumber = Math.ceil(Math.random() * max);
    var i = 0;
    do {
        i++;

    } while (i < 10);
    console.log(`i:${i}`);
    return randomNumber;

    // return startFromZero?Math.floor(Math.random()*max): Math.ceil(Math.random() * max); // I try to put the script into one line.
}




console.log(generateNumber()); // return the random number 5  
console.log(generateNumber(5)); //return the random numer 1-5
console.log(generateNumber(5, true)); //return the random numer 0-4

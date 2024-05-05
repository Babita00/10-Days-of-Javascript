
/*
Task

Variables named , , and  are declared for you in the editor below. You must use the  operator to perform the following sequence of operations:

Convert  to an integer (Number type), then sum it with  and print the result on a new line using console.log.
Convert  to a floating-point number (Number type), then sum it with  and print the result on a new line using console.log.
Print the concatenation of  and  on a new line using console.log. Note that  must be printed first.
*/
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    let secondNum = parseInt(secondInteger);
    const firstInteger = 4;
    console.log(secondNum + firstInteger);
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    let secondFloat = parseFloat(secondDecimal);
    const firstDecimal = 4.0;
    console.log(secondFloat + firstDecimal);
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    console.log(firstString + secondString);

}

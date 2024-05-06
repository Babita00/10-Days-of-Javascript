/*
Task

Complete the function in the editor below by returning a RegExp object, , that matches every integer in some string .

Constraints

The length of string  is  .
It's guaranteed that string  contains at least one integer.
*/

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */

    let re = /\d+/g;
    /*
     * Do not remove the return statement
     */
    return re;
}


function main() {
    const re = regexVar();
    const s = readLine();

    const r = s.match(re);

    for (const e of r) {
        console.log(e);
    }
}

/*
Task

Declare a constant variable, , and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
Read a number, , denoting the radius of a circle from stdin.
Use  and  to calculate the  and  of a circle having radius .
Print  as the first line of output and print  as the second line of output.
*/
function main() {

    const r = readLine();

    const PI = 3.141592653589793238462643383279502884197;
    let area = PI * r * r;
    let perimeter = 2 * PI * r;
    console.log(area);
    console.log(perimeter);


    try {
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch (error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}
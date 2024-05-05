/*

Task

Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).
*/

let fact = 1;
function factorial(n) {
    for (let i = n; i >= 1; i--) {
        fact = fact * i;

    }
    return fact;
}

function main() {
    const n = +(readLine());

    console.log(factorial(n));
}

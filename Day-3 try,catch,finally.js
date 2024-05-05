/*
Task

Complete the reverseString function; it has one parameter, . You must perform the following actions:

Try to reverse string  using the split, reverse, and join methods.
If an exception is thrown, catch it and print the contents of the exception's  on a new line.
Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
*/

function reverseString(s) {
    try {
        let split = s.split("");
        let reverse = split.reverse();
        let final = reverse.join("");
        console.log(final);

    }

    catch {
        console.log("s.split is not a function ");
        console.log(s);
    }
}


function main() {
    const s = eval(readLine());

    reverseString(s);
}
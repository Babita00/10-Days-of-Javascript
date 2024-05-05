/*
Task

Complete the following functions in the editor below:

getArea(length, width): Calculate and return the area of a rectangle having sides  and .

getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides  and .
The values returned by these functions are printed to stdout by locked stub code in the editor.


*/

function getArea(length, width) {
    let area = length * width;
    // Write your code here

    return area;
}


function getPerimeter(length, width) {
    let perimeter = 2 * length + 2 * width;
    // Write your code here

    return perimeter;
}

function main() {
    const length = +(readLine());
    const width = +(readLine());

    console.log(getArea(length, width));
    console.log(getPerimeter(length, width));
}
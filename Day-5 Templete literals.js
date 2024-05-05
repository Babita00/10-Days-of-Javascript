/*
Task

The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.

Complete the function in the editor so that it does the following:

Finds the initial values of  and  by plugging the area and perimeter values into the formula:
where  is the rectangle's area and  is its perimeter.
Creates an array consisting of  and  and sorts it in ascending order.
Returns the sorted array.
*/
function sides(literals, ...expressions) {
    const area = expressions[0];
    const perimeter = expressions[1];

    const s1 = (perimeter + Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
    const s2 = (perimeter - Math.sqrt(perimeter * perimeter - 16 * area)) / 4;

    return [s1, s2].sort((a, b) => a - b);

}


function main() {
    let s1 = +(readLine());
    let s2 = +(readLine());

    [s1, s2] = [s1, s2].sort();

    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

    console.log((s1 === x) ? s1 : -1);
    console.log((s2 === y) ? s2 : -1);
}
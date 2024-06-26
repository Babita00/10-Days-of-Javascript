/*
Task

Complete the function in the editor. It has two parameters:  and . It must return an object modeling a rectangle that has the following properties:

length: This value is equal to a .
width: This value is equal to b.
perimeter: This value is equal to 2(a+b)
area: This value is equal to a.b
Note: The names of the object's properties must be spelled correctly to pass this challenge.
*/

function Rectangle(a, b) {

    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;

}


function main() {
    const a = +(readLine());
    const b = +(readLine());

    const rec = new Rectangle(a, b);

    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}
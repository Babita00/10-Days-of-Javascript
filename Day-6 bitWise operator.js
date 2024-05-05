/*
Task

We define  to be a sequence of distinct sequential integers from  to ; in other words,S={1,2,3,4.....n} .
 We want to know the maximum bitwise AND value of any two integers, a and b (where a<b), in sequence S that is also less than  a  integer given by K.

Complete the function in the editor so that given n and k , it returns the maximum a & b < k.

Note: The  symbol represents the bitwise AND operator.
*/

function getMaxLessThanK(n, k) {
    let max = -1;
    for (let a = 1; a <= n; a++) {
        for (let b = a + 1; b <= n; b++) {
            let andValue = a & b;
            if (andValue < k && andValue > max) {
                max = andValue;
            }
        }
    }
    return max;
}

function main() {
    const q = +(readLine());

    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);

        console.log(getMaxLessThanK(n, k));
    }
}
/*
Function Description

Complete the getSecondLargest function in the editor below.

getSecondLargest has the following parameters:

int nums[n]: an array of integers
Returns

int: the second largest number in 
Input Format

The first line contains an integer, , the size of the  array.
The second line contains  space-separated numbers that describe the elements in .


*/



function getSecondLargest(nums) {
    // Complete the function
    const uniqueNums = nums.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });

    const sortedUniqueNums = uniqueNums.sort((a, b) => b - a);

    return sortedUniqueNums[1];

}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);

    console.log(getSecondLargest(nums));
}
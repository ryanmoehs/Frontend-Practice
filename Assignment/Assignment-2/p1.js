/*
Even or Odd Number
Function to check whether the given number is Even or Odd.
@params = integer number
@return = returns "Even" if the number is even "Odd" otherwise.

Examples:
-----------------------------------
Input: 2
Output: Even
-----------------------------------
Input: 3
Output: Odd
-----------------------------------
Input: 0
Output: Even
-----------------------------------
Input: -2
Output: Even
-----------------------------------
*/

function evenOrOdd(num) {
    // Your code here
    if (num % 2 == 0){
        return "Even";
    } else {
        return "Odd";
    }
}
module.exports = evenOrOdd;
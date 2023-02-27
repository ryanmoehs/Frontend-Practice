/* 
Reversed String
Write a function that takes a string as an argument and returns a new string that contains the original string in reverse.
@params = string
@return = returns the reversed string

Examples:
-----------------------------------
Input: "Hello"
Output: "olleH"
-----------------------------------
Input: "How are you?"
Output: "?uoy era woH"
-----------------------------------
Input: "I am a student"
Output: "tneduts a ma I"
-----------------------------------
*/

function reverseString(str) {
    // Your code here
    return str.split("").reverse().join("");
}
module.exports = reverseString;
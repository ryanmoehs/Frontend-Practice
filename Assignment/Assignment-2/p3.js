/* 
Sort Array by String Length
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
@params = array of strings
@return = returns the sorted array

Examples:
------------------------------------------------------
Input: ["Telescopes", "Glasses", "Eyes", "Monocles"]
Output: ["Eyes", "Glasses", "Monocles", "Telescopes"]
------------------------------------------------------
Input: ["", "Moderately", "Brains", "Pizza"]
Output: ["", "Pizza", "Brains", "Moderately"]
------------------------------------------------------
Input: ["Longer", "Longest", "Short"]
Output: ["Short", "Longer", "Longest"]
------------------------------------------------------
*/

function sortByLength(arr) {
    // Your code here
    let sorted = arr.sort((a,b) => a.length - b.length);
    return sorted;
}
module.exports = sortByLength;
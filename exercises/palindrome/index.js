// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

	//The every() method tests whether all elements 
	//in the array pass the test implemented by the provided function.

	//not the best way to solve it because you are comparing every element in the array to the one at the end,
	//but you really can stop in the middle.  so this does more work than needed
	return str.split('').every((char, i) => {
		// if str.length = 3: abc
		//3 - 0 -1 = 2  str[2]
		//3 -1 -1 =  1 str[1]
		//3 -2 -1 = 0	str[0]
		console.log(str.length - i -1);
		return char === str[str.length - i -1];
	});

}

module.exports = palindrome;

// solution #1:

// function palindrome(str) {
// 	let reversed = '';
// 	for(let char of str) {
// 		reversed = char + reversed;
// 	}
// 	return str === reversed;

// }

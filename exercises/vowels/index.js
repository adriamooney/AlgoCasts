// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


function vowels(str) {

	// []  -- match all characters in brackets
	// /g  don't stop at first match
	// /i case insensitive
	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
	//same as:
	// if(matches) {
	// 	return matches.length;
	// }
	// else {
	// 	return  0;
	// }

}

module.exports = vowels;

//solution #1

// function vowels(str) {

// 	let numVowels = 0;
// 	//strings and arrays  have the 'includes' method.
// 	const vowelCheck = ['a', 'e', 'i', 'o', 'u'];
// 	for(char of str.toLowerCase()) {

// 		//includes, is same as:
// 		// if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
// 		if(vowelCheck.includes(char)) {
// 			numVowels ++;
// 		}
// 	}
// 	return numVowels;
// }
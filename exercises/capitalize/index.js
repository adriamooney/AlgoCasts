// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	//solution: #2
	//create string 'result', containing first letter of original string, capitalized
	// for each character in string
		// if the character to the left is a space
		// 	capitalize it and add it to 'result'
		// else
		// 	add to 'result'
		let result = str[0].toUpperCase();
		
		for(let i = 1; i<str.length; i++) {
			if(str[i -1] === ' ') {
				result += str[i].toUpperCase();
			}
			else {
				result += str[i]; 
			}
		}
		return result;
}

module.exports = capitalize;

//solution #1

// function capitalize(str) {
 
// //Each of the characters in a string correspond to an index number, 
// //starting with 0.
// //Using square bracket notation, we can access any character in the string:
// //str[0]

// //this is the exact same as using the charAt method:
// // console.log(str.charAt(0));

// // const word = 'there';
// // word[0].toUpperCase();

// //The slice() method extracts a section of a string and returns it as a new string.
// //str.slice(beginIndex[, endIndex])
// // word.slice(1);  --> extracts every character after the first one (0), and returns
// // a new string

// 	const words = [];
// 	for(word of str.split(' ')) {
		
// 		words.push(word.charAt(0).toUpperCase() + word.slice(1));
		
// 	}
// 	return words.join(' ');

// }

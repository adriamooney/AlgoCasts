// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

	let max = 0;
	let maxChar = '';

	//building an object which counts the number of characters that 
	//occur in a string is the best way to solve problems like this
	// {'H': 1, 'e': 1, l: 2, o: 1}
	const charMap = {};
	for(let char of str) {
		//this works too:
		//charMap[char] = charMap[char] +1 || 1;
		//if the key exists, then increment its value by 1 rather than
		//creating the key again:
		if(charMap[char]) {
			charMap[char]++;
		}
		//or else just set the value of the key to 1
		else {
			charMap[char] = 1;
		}
	}

	//iterating objects use 'in'.  iterating strings and arrays use 'of'
	for (let char in charMap) {
		if(charMap[char] > max) {
			max = charMap[char]; //set the value, or number
			maxChar = char; //key, or character that occurs most often 
		}
		
	}

	return maxChar

}

module.exports = maxChar;

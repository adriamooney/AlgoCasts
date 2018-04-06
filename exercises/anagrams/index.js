// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// NOTES:
//word.replace(/[^\w]/g, "").toLowerCase();
	// /pattern/modifiers;
	// [^]  -- Find any character NOT between the brackets
	// \w  -- Matches any alphanumeric character including the underscore. 
	// /g  -- The g modifier finds all matches rather than stopping after the first match

	//replace the non alphanumeric, and turn into lowercase
	// const strA = stringA.replace(/[^\w]/g, "").toLowerCase();


function anagrams(stringA, stringB) {
	return cleanAndSort(stringA) === cleanAndSort(stringB);
}

const cleanAndSort = (str) => {
	//take replace non alphanumeric
	//turn into lowercase,
	//turn into an array, to sort the array (in alpha order)
	//join the array back into a string
	return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

module.exports = anagrams;


// solution #1

// function anagrams(stringA, stringB) {

// 	//create 2 character maps
// 	const charMapA = genCharMap(stringA);
// 	const charMapB = genCharMap(stringB);

// 	//compare the character maps and 
// 	//see if they have the same length, and the same key values

// 	//get all keys from an object:
// 	// Object.keys(obj);  //keys from object, as an array
// 	// Object.keys(obj).length; //number of keys in object

// 	//if there are not the same number of keys in the objects,
// 	//  then it can't be an anagram, so return false;
// 	if(Object.keys(charMapA).length !== Object.keys(charMapB).length) {
// 		return false;
// 	}

// 	//iterate over an object, use 'in'.
// 	for(let key in charMapA) {
// 		//for example:
// 		//charMapA['H'], charMapB['H']
// 		//so if charMapB['H'] doesn't exist, then return false
// 		//and stop because it is not an anagram
// 		if(charMapA[key] !== charMapB[key]) {
// 			return false;
// 		}
// 	}
// 	//otherwise, return true
// 	//always remember return statement, and what they are asking to return.
// 	return true;

// }

// //helper function creates a charmap object:
// const genCharMap = (str) => {
	
// 	const charMap = {};

// 	for(let char of str.replace(/[^\w]/g, "").toLowerCase()) {

// 		charMap[char] = charMap[char] +1 || 1;
// 		//same as above:
// 		// if(charMap[char]) {
// 		// 	charMap[char]++;
// 		// }
// 		// else {
// 		// 	charMap[char] =1;
// 		// }
// 	}
// 	return charMap;
// }
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	//look this up, I don't understand this one
	return str.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;


// solution #1:
// function reverse(str) {
// 	return str.split('').reverse().join('');
// }

// solution #2:

// function reverse(str) {
// 	let reversed = '';

// 	for(let character of str) {
// 		reversed = character + reversed;
// 		console.log(reversed);
// 	}
// 	return reversed;
// }
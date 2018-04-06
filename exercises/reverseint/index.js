// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

	const reversed = n.toString().split('').reverse().join('');

	// if(n < 0 ) {
	// 	return parseInt(reversed) * -1;
	// }

	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
	
	//The Math.sign() function returns the sign of a number, 
	//indicating whether the number is positive, negative or zero.
	//output is 1 for positive, -1 for nevative.
	//so if n is negative, the reversed number will be multiplied by -1, to produce
	//the negative number when needed
	console.log(parseInt(reversed));
	return parseInt(reversed) * Math.sign(n);

}

module.exports = reverseInt;

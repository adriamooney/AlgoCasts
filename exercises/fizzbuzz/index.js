// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
	// % 'modulo' is the integer remainder of dividing var1 by var2
	//so 12 % 3 would be 0, since 3 goes into 12.
	// so to find if a multiple of 3, just do i % 3, if it equals 0, then i is a multiple of 3

	for(let i = 1; i <=n; i++) {
		//check to see if the number is a multiple of both
		//3 and 5
		if(i % 3 === 0 && i % 5 === 0) {
			console.log("fizzbuzz");
		}
		else if(i % 3 === 0) {
			//is it a multiple of 3?
			console.log("fizz");
		}
		else if(i % 5 === 0) {
			//is it a multiple of 5?
			console.log("buzz");
		}
		else {
			console.log(i);
		}
	}
}

module.exports = fizzBuzz;

// my solution:
//above solution is better
// function fizzBuzz(n) {

// 	for(let i = 1; i <= n; i++) {
// 		if(i % 3 === 0 && i % 5 !== 0) {
// 			console.log("fizz");
// 		}
// 		else if(i % 5 === 0 && i % 3 !== 0) {
// 			console.log("buzz");
// 		}
// 		else if(i % 5 === 0 && i % 3 === 0) {
// 			console.log("fizzbuzz");
// 		}
// 		else {
// 			console.log(i);
// 		}
// 	}
// }

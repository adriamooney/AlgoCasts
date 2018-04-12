// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
	//this is a recursive solution:
	//base case.
	if(n === row) {
		return;
	}

	if( n === stair.length) {
		console.log(stair);
		steps(n, row + 1);
		return;
	}

	if(stair.length <= row) {
		stair += '#';
	}
	else {
		stair += ' ';
	}

	steps(n, row, stair);
}

module.exports = steps;

//solution #1

// function steps(n) {

// 	//iterate through rows
// 	//create empty string 'stair'
// 	//from 0 to n
// 		//if current column is equal to or less than the current row
// 			//add a '#' stair
// 		//else 
// 			//add a space to stair



// //loop through n

// //row-> '#  '
// 	//  '## '

// 	for(let row = 0; row< n; row++) {
// 		let stair = '';
// 		for(let col = 0; col <n; col ++ ) {
// 			if(col <= row) {
// 				stair += '#';
// 			}
// 			else {
// 				stair +=' ';
// 			}
// 		}
// 		//prints one console log for each row
// 		console.log(stair);
// 	}

// }







// recursion tips:
// figure out the bare minimum
// pieces of information to represent the problem

// give reasonable defaults to the bare minimum pieces of information

// check the base case.  if there is no more work to do, return

// do some work.  call your function again, making sure the arguments have changed.  
// otherwise you will have an infinite recursive loop

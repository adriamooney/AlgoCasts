// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'  

//last row is always going to have an odd number of columns
// is it n * 2 - 1?   


function pyramid(n, row=0, level='') {

	const midpoint = Math.floor((n*2 -1) / 2);

	if (row === n) {
		return;
	}

	if(level.length === 2*n -1) {
		console.log(level);
		return pyramid(n, row+1);
	}

	let add;

	//I don't really get why this works
	if(midpoint - row <= level.length && midpoint + row >= level.length) {
		add = '#';
	}
	else {
		add = ' ';
	}
 
 	pyramid(n, row, level + add);

}





module.exports = pyramid;

//solution #1

// function pyramid(n) {

// 	const midpoint = Math.floor((n*2 -1) / 2);


// 	for(let row = 0;row<n;row++) {
// 		let level = '';

// 			for(let col = 0; col < n *2 -1; col++ ) {

// 				//calculate midpoint of our row:
// 				//math.floor rounds down to nearest integer
// 				//so if n is 3, midpoint is 2
// 				//if 2 - 0 <= 0 && 2 + 0 >= 0  -->  ' '
// 				// 2 - 0 <=  1 &&  2 + 0 >= 1 -->  '  '
// 				// 2-0 <= 2 && 2+ 0 >= 2  --> '  #'
// 				// 2 - 0 <= 3 && 2+0 >=3 --> '  # '
// 				// 2-0 <= 4 && 2+0 >=4 --> '  #  '
				
				//how does this work?
// 				if(midpoint - row <= col && midpoint + row >= col) {
// 					level += '#';
// 				}
// 				else {
// 					level += ' ';
// 				}

				

// 			}

// 			console.log(level);

// 	}

	// // from 0 to n iterate through rows
	// create an empty string 'level'
	// // from 0 to ??? columns
	// // 	if  the column should have a #
	// // 		add # to level
	// // 	else 
	// // 		add a space to level
	// // 	console log 'level'


	// // 	if n is 1, then just one column
	// // 	if n is 2 then 3 columns
	// // 	if n is 3 then 5 columns
	// // 	4, 7
	// // 	5 , 9
// }

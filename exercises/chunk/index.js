// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	// create empty 'chunked' array
	// create 'index' starting at 0
	// while index is less than array.length
	// 	push a slice of length 'size' from 'array' into 'chunked'
	// 	add 'size' to 'index'

	// array slice method:
	// returns a shallow copy of a portion of an array into a 
	// new array object selected from begin to end (END NOT INCLUDED). 

		const chunked = [];
		let index = 0;
		while(index < array.length) {
			//given chunk([1, 2, 3, 4, 5], 2))
		// 	//first one would be (0, 2) ->  [1, 2]
			chunked.push(array.slice(index, index + size));
			//increment index by the size
			//so next one would be  (2, 4) -> [3, 4]

			//next would be (4, 6) -> [5] then the while loop would stop

			index += size;
		}
		return chunked;

}

module.exports = chunk;

// solution #1:

// function chunk(array, size) {
// 	//create a new array to hold the chunks
// 	const chunked = [];

// 	//for each element in the unchunked array:

// 	for(let el of array) {
// 		//retrieve the last element in 'chunked'
// 		//if last element does not exist, or if it's length
// 		//is equal to chunk size -> push a new chunk into 'chunked'
// 		//with current element.  
// 		//ELSE add the current element into the last chunk
// 		const lastChunk = chunked[chunked.length -1];
// 		if(!lastChunk || lastChunk.length === size) {
// 			// let newChunk = [];
// 			// newChunk.push(el);
// 			// chunked.push(newChunk);
// 			//SAME AS ABOVE, rather than creating newChunk array:
// 			chunked.push([el]);
// 		}
// 		else {
// 			lastChunk.push(el);
// 		}

// 	}
// 	console.log(chunked);
// 	return chunked;


// }

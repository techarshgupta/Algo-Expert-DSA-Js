// Write a function that takes in an n x m two-dimensional array (that can be
// square-shaped when n == m) and returns a one-dimensional array of all the
// array's elements in zigzag order.

// Zigzag order starts at the top left corner of the two-dimensional array, goes
// down by one element, and proceeds in a zigzag pattern all the way to the
// bottom right corner.

// Sample
// array = [
//   [1,  3,  4, 10],
//   [2,  5,  9, 11],
//   [6,  8, 12, 15],
//   [7, 13, 14, 16],
// ]

// Sample Output
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

function zigzagTraverse(array) {
	if (array.length === 1) return array[0];

	if (array[0].length === 1) {
		return array.map((subArr) => subArr[0]);
	}
	// Write your code here.
	let row = 0;
	let column = 0;
	let rowMax = array.length - 1;
	let columnMax = array[0].length - 1;

	const zigZag = [array[row][column]];

	while (row < rowMax || column < columnMax) {
		//Zig Zag Right
		row + 1 <= rowMax ? row++ : column++;
		zigZag.push(array[row][column]);
		while (row > 0 && column < columnMax) {
			row--;
			column++;
			zigZag.push(array[row][column]);
		}

		//Check if the zag right was our last item
		if (column + 1 > columnMax && row + 1 > rowMax) break;

		//Zig Zag Left		
		column + 1 <= columnMax ? column++ : row++;
		zigZag.push(array[row][column]);
		while (row < rowMax && column > 0) {
			row++;
			column--;
			zigZag.push(array[row][column]);
		}
	}

	return zigZag;
}
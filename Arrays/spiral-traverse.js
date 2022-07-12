// Write a function that takes in an n x m two-dimensional array (that can be
// square-shaped when n == m) and returns a one-dimensional array of all the
// array's elements in spiral order.

// Spiral order starts at the top left corner of the two-dimensional array, goes
// to the right, and proceeds in a spiral pattern all the way until every element
// has been visited.

// Sample Input
// [
//   [1,   2,  3, 4],
//   [12, 13, 14, 5],
//   [11, 16, 15, 6],
//   [10,  9,  8, 7],
// ]

// Sample Output
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

function spiralTraverse(array) {
	// Write your code here.
	let rowPointer = 0;
	let columnPointer = 0;
	let rowEnd = array.length - 1;
	let columnEnd = array[0].length - 1;
	
	let answer = [];
	
	while (rowPointer <= rowEnd && columnPointer <= columnEnd) {
		for (let col = columnPointer; col <= columnEnd; col++) {
			answer.push(array[rowPointer][col]);
		}
		
		for (let row = rowPointer + 1; row <= rowEnd; row++) {
			answer.push(array[row][columnEnd]);
		}
									
		for (let col = columnEnd - 1; col >= columnPointer; col--) {
			if (rowPointer === rowEnd) break;
			answer.push(array[rowEnd][col])
		}
		
		for (let row = rowEnd - 1; row > rowPointer; row--) {
			if (columnPointer === columnEnd) break;
			answer.push(array[row][columnPointer])
		}
		
		rowPointer++;
		columnPointer++;
		rowEnd--;
		columnEnd--;
	}

	return answer;
}
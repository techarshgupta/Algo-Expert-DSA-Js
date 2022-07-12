// Write a function that takes in a non-empty array of integers and returns the
// maximum sum that can be obtained by summing up all of the integers in a non-empty
// subarray of the input array. A subarray must only contain adjacent numbers.

// Sample Input
// array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]

// Sample Output
// 19 // [1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1]

function kadanesAlgorithm(array) {
	// Write your code here.
	let max = array[0];
	let current = array[0];

	for (let i = 1; i < array.length; i++) {
		const item = array[i];
		current = Math.max(item, (item + current));
		if (current > max) max = current;
	}

	return max;
}

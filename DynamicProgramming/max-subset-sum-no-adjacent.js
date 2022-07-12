// Write a function that takes in an array of positive integers and returns the
// maximum sum of non-adjacent elements in the array.

// If a sum can't be generated, the function should return 0.
// Sample array = [75, 105, 120, 75, 90, 135]

// Sample Output
// 330 // 75 + 120 + 135</span>

function maxSubsetSumNoAdjacent(array) {
	// Write your code here.
	if (!array.length) return 0;
	if (array.length === 1) return array[0];
	
	let first = array[0], second = Math.max(array[0], array[1]);
	
	for (let i = 2; i < array.length; i++) {
		const current = Math.max(second, first + array[i]);
		first = second;
		second = current;
	}
	
	return second;
}
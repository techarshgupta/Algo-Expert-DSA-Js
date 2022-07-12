// Write a function that takes in a non-empty array of distinct integers and an
// integer representing a target sum. The function should find all quadruplets in
// the array that sum up to the target sum and return a two-dimensional array of
// all these quadruplets in no particular order.

// If no four numbers sum up to the target sum, the function should return an
// empty array.

// Sample Input
// array = [7, 6, 4, -1, 1, 2]
// targetSum = 16

// Sample Output
// [[7, 6, 4, -1], [7, 6, 1, 2]] // the quadruplets could be ordered differently

function fourNumberSum(array, targetSum) {
	// Write your code here.
	const pairSums = {};
	const quads = [];
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = i + 1; j < array.length; j++) {
			const currentSum = array[i] + array[j];
			const diff = targetSum - currentSum;
			if (pairSums[diff] === undefined) continue

			pairSums[diff].forEach((pair) => quads.push([...pair, array[i], array[j]]));
		}
		for (let j = i - 1; j >= 0; j--) {
			const pairSum = array[i] + array[j];
			pairSums[pairSum] === undefined ? pairSums[pairSum] = [[array[i], array[j]]] : pairSums[pairSum].push([array[i], array[j]]);
		}
	}

	return quads;
}
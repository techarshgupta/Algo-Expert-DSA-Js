// Write a function that takes in a non-empty array of integers and returns the
// greatest sum that can be generated from a strictly-increasing subsequence in
// the array as well as an array of the numbers in that subsequence.

// A subsequence of an array is a set of numbers that aren't necessarily adjacent
// in the array but that are in the same order as they appear in the array. For
// instance, the numbers <span>[1, 3, 4]</span> form a subsequence of the array
// <span>[1, 2, 3, 4]</span>, and so do the numbers <span>[2, 4]</span>. Note
// that a single number in an array and the array itself are both valid
// subsequences of the array.

// You can assume that there will only be one increasing subsequence with the
// greatest sum.

// Sample Input
// array = [10, 70, 20, 30, 50, 11, 30]

// Sample Output
// [110, [10, 20, 30, 50]] // The subsequence [10, 20, 30, 50] is strictly increasing and yields the greatest sum: 110.</span>

function maxSumIncreasingSubsequence(array) {
	// Write your code here.
	const sequences = new Array(array.length);
	const sums = array.map(num => num);
	let maxSumIdx = 0;

	for (let i = 0; i < array.length; i++) {
		const currentNum = array[i];
		for (let j = 0; j < i; j++) {
			const otherNum = array[j];
			if (otherNum < currentNum && sums[j] + currentNum >= sums[i]) {
				sums[i] = sums[j] + currentNum;
				sequences[i] = j;
			}
		}
		if (sums[i] >= sums[maxSumIdx]) maxSumIdx = i;
	}

	return [sums[maxSumIdx], buildSequence(array, sequences, maxSumIdx)];
}

function buildSequence(array, sequences, currentIdx) {
	const sequence = [];
	while (currentIdx !== undefined) {
		sequence.unshift(array[currentIdx]);
		currentIdx = sequences[currentIdx];
	}

	return sequence;
}
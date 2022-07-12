// Write a function that takes in an array of at least two integers and that
// returns an array of the starting and ending indices of the smallest subarray
// in the input array that needs to be sorted in place in order for the entire
// input array to be sorted (in ascending order).

// If the input array is already sorted, the function should return
// [-1, -1].

// Sample Input
// array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]

// Sample Output
// [3, 9]

function subarraySort(array) {
	// Write your code here.
	let minOutOfOrder = Infinity;
	let maxOutOfOrder = -Infinity;

	for (let i = 0; i < array.length; i++) {
		const current = array[i];
		if (isOutOfOrder(i, current, array)) {
			minOutOfOrder = Math.min(minOutOfOrder, current);
			maxOutOfOrder = Math.max(maxOutOfOrder, current);
		}
	}

	if (minOutOfOrder === Infinity) return [-1, -1]; //for sorted arrays

	let left = 0;
	let right = array.length - 1;
	while (minOutOfOrder >= array[left]) {
		left++;
	}

	while (maxOutOfOrder <= array[right]) {
		right--;
	}

	return [left, right];
}

function isOutOfOrder(i, num, array) {
	if (i === 0) {
		return num > array[i + 1];
	} else if (i === array.length - 1) {
		return num < array[i - 1];
	} else {
		return num > array[i + 1] || num < array[i - 1];
	}
}
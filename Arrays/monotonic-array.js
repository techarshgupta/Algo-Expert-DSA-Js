// Write a function that takes in an array of integers and returns a boolean
// representing whether the array is monotonic.

// An array is said to be monotonic if its elements, from left to right, are
// entirely non-increasing or entirely non-decreasing.

// Note that empty arrays and arrays of one element are monotonic.

// Sample Input
// [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

// Sample Output
// true

const isMonotonic = (array) => {
	let isNonDecreasing = true;
	let isNonIncreasing = true;

	for (let i = 1; i < array.length; i++) {
		if (array[i] < array[i - 1]) isNonDecreasing = false;
		if (array[i] > array[i - 1]) isNonIncreasing = false;
	}

	return isNonDecreasing || isNonIncreasing;
}
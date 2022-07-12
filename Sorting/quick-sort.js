// Write a function that takes in an array of integers and returns a sorted
// version of that array. Use the Quick Sort algorithm to sort the array.

// If you're unfamiliar with Quick Sort, we recommend watching the Conceptual
// Overview section of this question's video explanation before starting to code.

// Sample Input
// array = [8, 5, 2, 9, 5, 6, 3]

// Sample Output
// [2, 3, 5, 5, 6, 8, 9]

function quickSort(array) {
	// Write your code here.
	if (array.length < 1) return array;

	const pivot = array[0];
	const leftArray = [];
	const rightArray = [];

	for (const elem of array.slice(1, array.length)) {
		elem < pivot ? leftArray.push(elem) : rightArray.push(elem);
	}

	return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

function swap(i, j, array) {
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

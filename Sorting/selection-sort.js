// Write a function that takes in an array of integers and returns a sorted
// version of that array. Use the Selection Sort algorithm to sort the array.

// If you're unfamiliar with Selection Sort, we recommend watching the Conceptual
// Overview section of this question's video explanation before starting to code.

// Sample Input
// array = [8, 5, 2, 9, 5, 6, 3]

// Sample Output
// [2, 3, 5, 5, 6, 8, 9]

function selectionSort(array) {
	// Write your code here.
	for (let i = 0; i < array.length; i++) {
		let currentSmallestIndex = i;
		for (let j = i; j < array.length; j++) {
			if (array[j] < array[currentSmallestIndex]) {
				currentSmallestIndex = j;
			}
		}
		
		if (i !== currentSmallestIndex) {
			//swap
			const temp = array[i];
			array[i] = array[currentSmallestIndex];
			array[currentSmallestIndex] = temp;
		}
	}

	return array;
}
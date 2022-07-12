// Write a function that takes in an array of integers and returns a sorted
// version of that array. Use the Bubble Sort algorithm to sort the array.

// If you're unfamiliar with Bubble Sort, we recommend watching the Conceptual
// Overview section of this question's video explanation before starting to code.

// Sample Input
// array [8, 5, 2, 9, 5, 6, 3]

// Sample Output
// [2, 3, 5, 5, 6, 8, 9]

function bubbleSort(array) {
	// Write your code here.
	let isSorted = false;
	let counter = 0;
	
	while (!isSorted) {
		isSorted = true;
		
		for (let i = 0; i < array.length - 1 - counter; i++) {
			//Set two values to compare
			let current = array[i];
			let next = array[i+1];

			if (next < current) {
				isSorted = false;
				//Swap values
				array[i] = next
				array[i+1] = current;
			}
		}
		
		counter++;
	}

	return array;
}
// Write a function that takes in two non-empty arrays of integers, finds the
// pair of numbers (one from each array) whose absolute difference is closest to
// zero, and returns an array containing these two numbers, with the number from
// the first array in the first position.

// You can assume that there will only be one pair of numbers with the smallest
// difference.

// Sample Input
// [-1, 5, 10, 20, 28, 3]
// [26, 134, 135, 15, 17]

// Sample Output
// [28, 26]

function smallestDifference(arrayOne, arrayTwo) {
	// Write your code here.
	const sortArray = (array) => array.sort((a, b) => a - b);
	const sortedArrayOne = sortArray(arrayOne);
	const sortedArrayTwo = sortArray(arrayTwo);

	let indexOne = 0;
	let indexTwo = 0;
	let smallest = Infinity;
	let current = Infinity;
	let smallestPair = [];
	
	while (indexOne < sortedArrayOne.length && indexTwo < sortedArrayTwo.length) {
		let firstNumber = sortedArrayOne[indexOne];
		let secondNumber = sortedArrayTwo[indexTwo];
		
		if (firstNumber < secondNumber) {
			current = secondNumber - firstNumber;
			indexOne++;
		} else if (secondNumber < firstNumber) {
			current = firstNumber - secondNumber;
			indexTwo++;
		} else {
			return [firstNumber, secondNumber];
		}
		
		if (current < smallest) {
			smallest = current;
			smallestPair = [firstNumber, secondNumber];
		}
	}
	
	return smallestPair;
}
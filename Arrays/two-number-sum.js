//   Write a function that takes in a non-empty array of distinct integers and an
//   integer representing a target sum. If any two numbers in the input array sum
//   up to the target sum, the function should return them in an array, in any
//   order. If no two numbers sum up to the target sum, the function should return
//   an empty array.


// Note that the target sum has to be obtained by summing two different integers
// in the array; you can't add a single integer to itself in order to obtain the
// target sum.


// You can assume that there will be at most one pair of numbers summing up to
// the target sum.

const twoNumberSum = (array, targetSum) => {
	const hash = {};

	//Loop through and check hash for number needed
	for (const currentNumber of array) {
		const numberNeeded = targetSum - currentNumber;

		if (hash[numberNeeded]) {
			return [currentNumber, numberNeeded];
		} else {
			//store in hash
			hash[currentNumber] = true;
		}
	}

	return [];
}
/**
const twoSum = (nums, target) => {
	const sortedNums = nums.map((num, index) => {
		return { num, index }
	}).sort((a, b) => a.num - b.num);

	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		const currentSum = sortedNums[left].num + sortedNums[right].num;
		if (currentSum === target) {
			return [sortedNums[left].index, sortedNums[right].index];
		} else if (currentSum < target) {
			left++;
		} else {
			right--;
		}
	}
};

const twoSum = (nums, target) => {
	const numsHash= {};

	for (let i = 0; i < nums.length; i++) {
		const currentVal = nums[i];
		const currentDiff = target - currentVal;
		if (numsHash[currentDiff] !== undefined) {
			return [i, numsHash[currentDiff]]
		} else {
			numsHash[currentVal] = i;
		}
	}
}
*/
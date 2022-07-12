// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// Follow up: Could you write an algorithm with O(log n) runtime complexity ?

// 	Example 1:

// Input: nums = [5, 7, 7, 8, 8, 10], target = 8
// Output: [3, 4]
// Example 2:

// Input: nums = [5, 7, 7, 8, 8, 10], target = 6
// Output: [-1, -1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1, -1]

const searchRange = (nums, target) => {
	if (nums.length === 0) return [-1, -1];

	const targetRange = [-1, -1];
	let leftPointer = 0;
	let rightPointer = nums.length - 1;

	while (leftPointer < nums.length) {
		if (nums[leftPointer] === target) {
			targetRange[0] = leftPointer;
			break;
		}

		leftPointer++;
	}

	while (rightPointer >= 0) {
		if (nums[rightPointer] === target) {
			targetRange[1] = rightPointer;
			break;
		}

		rightPointer--;
	}

	return targetRange;
};
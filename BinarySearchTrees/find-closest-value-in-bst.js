// Write a function that takes in a Binary Search Tree (BST) and a target integer
// value and returns the closest value to that target value contained in the BST.

// You can assume that there will only be one closest value.

// Each BST node has an integer value, a left child node, and a right child node. A node is
// said to be a valid BST node if and only if it satisfies the BST
// property: its value is strictly greater than the values of every
// node to its left; its value is less than or equal to the values
// of every node to its right; and its children nodes are either valid
// <BST nodes themselves or None / null.

// Sample Input
//           10
//        /     \
//       5      15
//     /   \   /   \
//    2     5 13   22
//  /           \
// 1            14
// target = 12

// Sample Output
// 13

function findClosestValueInBst(tree, target) {
	// Write your code here.
	let closestValue = tree.value;
	
	while (tree !== null) {
		const closestValueAbsolute = getAbsoluteValue(target, closestValue);
		const currentValueAbsolute = getAbsoluteValue(target, tree.value);

		if (closestValueAbsolute > currentValueAbsolute) {
			closestValue = tree.value;
		}
		
		if (target < tree.value) {
			tree = tree.left;
		} else if (target > tree.value) {
			tree = tree.right;
		} else {
			break;
		}
	}

	return closestValue;
}

function getAbsoluteValue(num1, num2) {
	return Math.abs(num1 - num2);
}
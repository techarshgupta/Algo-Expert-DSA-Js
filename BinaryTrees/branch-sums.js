// Write a function that takes in a Binary Tree and returns a list of its branch
// sums ordered from leftmost branch sum to rightmost branch sum.

// A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
// branch is a path of nodes in a tree that starts at the root node and ends at
// any leaf node.

// Each BinaryTree node has an integer value, a
// left child node, and a right child node. Children
// nodes can either be BinaryTree nodes themselves or
// >None / null.

// Sample Input
// tree =     1
//         /     \
//        2       3
//      /   \    /  \
//     4     5  6    7
//   /   \  /
//  8    9 10

// Sample Output
// [15, 16, 18, 10, 11]
// 15 == 1 + 2 + 4 + 8
// 16 == 1 + 2 + 4 + 9
// 18 == 1 + 2 + 5 + 10
// 10 == 1 + 3 + 6
// 11 == 1 + 3 + 7

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
	constructor(value) {
	  	this.value = value;
	  	this.left = null;
	  	this.right = null;
	}
}
  
function branchSums(root) {
// Write your code here.
	let sums = [];
	calculateBranchSums(root, 0, sums);
	return sums;
}

function calculateBranchSums(node, runningSum, sums) {
	if (node === null) return
	
	const newRunningSum = runningSum + node.value;
	if (node.left === null && node.right === null) {
		sums.push(newRunningSum);
		return;
	}
	
	calculateBranchSums(node.left, newRunningSum, sums);
	calculateBranchSums(node.right, newRunningSum, sums);
}
  
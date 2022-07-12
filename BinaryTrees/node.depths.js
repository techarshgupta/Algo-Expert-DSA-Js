// The distance between a node in a Binary Tree and the tree's root is called the
// node's depth.

// Write a function that takes in a Binary Tree and returns the sum of its nodes'
// depths.

// Each BinaryTree node has an integer value, a
// left child node, and a right child node. Children
// nodes can either be BinaryTree nodes themselves or
// None / null.

// Sample Input
// tree =    1
//        /     \
//       2       3
//     /   \   /   \
//    4     5 6     7
//  /   \
// 8     9

// Sample Output
// 16

function nodeDepths(root, depth = 0) {
	// Write your code here.
	if (root === null) return 0;
	return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
}

// This is the class of the input binary tree.
class BinaryTree {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
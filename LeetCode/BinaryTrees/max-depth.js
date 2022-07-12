// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:


// Input: root = [3, 9, 20, null, null, 15, 7]
// Output: 3
// Example 2:

// Input: root = [1, null, 2]
// Output: 2
// Example 3:

// Input: root = []
// Output: 0
// Example 4:

// Input: root = [0]
// Output: 1

// const maxDepth = (root, depth = 0) => {
// 	if (!root) return depth;

// 	return Math.max(maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1));
// };

//Iterative Solution

const maxDepth = (root) => {
	if (!root) return 0;

	const queue = [{ node: root, depth: 1 }];
	let maxDepth = 1;

	while (queue.length) {
		const { node, depth } = queue.shift();
		maxDepth = Math.max(maxDepth, depth);

		if (node.left) addNodeToQueue(queue, node.left, depth + 1);
		if (node.right) addNodeToQueue(queue, node.right, depth + 1);
	}

	return maxDepth;
}

const addNodeToQueue = (queue, node, depth) => {
	queue.push({ node, depth });
}
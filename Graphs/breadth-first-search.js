// You're given a Node class that has a name and an
// array of optional children nodes. When put together, nodes form
// an acyclic tree-like structure.

// Implement the breadthFirstSearch method on the
// Node class, which takes in an empty array, traverses the tree
// using the Breadth-first Search approach (specifically navigating the tree from
// left to right), stores all of the nodes' names in the input array, and returns
// it.

// If you're unfamiliar with Breadth-first Search, we recommend watching the
// Conceptual Overview section of this question's video explanation before
// starting to code.

// Sample Input
// graph = A
//      /  |  \
//     B   C   D
//    / \     / \
//   E   F   G   H
//      / \   \
//     I   J   K

// Sample Output
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]

class Node {
	constructor(name) {
		this.name = name;
		this.children = [];
	}

	addChild(name) {
		this.children.push(new Node(name));
		return this;
	}

	breadthFirstSearch(array) {
		// Write your code here.
			let queue = [this]
			
			while (queue.length > 0) {
				const current = queue.shift();
				array.push(current.name);
				for (const child in current.children) {
					queue.push(child);
				}
			}
			
			return array;
	}
}
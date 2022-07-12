// Write a function that takes in a non-empty sorted array of distinct integers,
// constructs a BST from the integers, and returns the root of the BST.

// The function should minimize the height of the BST.

// You've been provided with a BST class that you'll have to use to
// construct the BST.

// A BST is valid if and only if all of its nodes are valid
// BST nodes.

// Note that the BST class already has an insert method
// which you can use if you want.

// Sample Input
// array = [1, 2, 5, 7, 10, 13, 14, 15, 22]

// Sample Output
//          10
//        /     \
//       2      14
//     /   \   /   \
//    1     5 13   15
//           \       \
//            7      22
// This is one example of a BST with min height</span>
// that you could create from the input array.</span>
// You could create other BSTs with min height</span>

function minHeightBst(array) {
	// Write your code here.
	return constructMinHeightBst(array, null, 0, array.length - 1)
}

function constructMinHeightBst(array, bst, startIdx, endIdx) {
	if (endIdx < startIdx) return;
	
	const midIdx = Math.floor((endIdx + startIdx) / 2);
	const valueToAdd = array[midIdx];
	
	!bst ? bst = new BST(valueToAdd) : bst.insert(valueToAdd);

	constructMinHeightBst(array, bst, startIdx, midIdx - 1);
	constructMinHeightBst(array, bst, midIdx + 1, endIdx);
	
	return bst;
}
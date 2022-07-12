// You're given three inputs, all of which are instances of an
// AncestralTree class that have an ancestor property
// pointing to their youngest ancestor. The first input is the top ancestor in an
// ancestral tree (i.e., the only instance that has no ancestor--its
// ancestor property points to None /null), and the other two inputs are descendants in the ancestral
// tree.

// Write a function that returns the youngest common ancestor to the two
// descendants.

// Note that a descendant is considered its own ancestor. So in the simple
// ancestral tree below, the youngest common ancestor to nodes A and B is node A.

// // The youngest common ancestor to nodes A and B is node A.</span>
//   A
//  /
// B

// Sample Input
// // The nodes are from the ancestral tree below.</span>
// topAncestor = node A
// descendantOne = node E
// descendantTwo = node I
//           A
//        /     \
//       B       C
//     /   \   /   \
//    D     E F     G
//  /   \
// H     I

// Sample Output
// node B

// This is an input class. Do not edit.
class AncestralTree {
	constructor(name) {
		this.name = name;
		this.ancestor = null;
	}
}
  
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
// Write your code here.
	const descendantOneDepth = depthHelper(descendantOne);
	const descendantTwoDepth = depthHelper(descendantTwo);

	if (descendantOneDepth === descendantTwoDepth) {
		return findYoungest(descendantOne, descendantTwo)
	} else if (descendantOneDepth < descendantTwoDepth) {
		const diff = descendantTwoDepth - descendantOneDepth;
		descendantTwo = getLevelDescendant(descendantTwo, diff);
		return findYoungest(descendantOne, descendantTwo)
	} else {
		const diff = descendantOneDepth - descendantTwoDepth;
		descendantOne = getLevelDescendant(descendantOne, diff);
		return findYoungest(descendantOne, descendantTwo)
	}
}

function getLevelDescendant(descendant, diff) {
	let counter = 0;
	while (counter !== diff) {
		descendant = descendant.ancestor;
		counter++;
	}
	return descendant;
}

function findYoungest(descendantOne, descendantTwo) {
		while (descendantOne !== descendantTwo) {
				descendantOne = descendantOne.ancestor;
				descendantTwo = descendantTwo.ancestor;
		}
		return descendantOne;
}

function depthHelper(descendant) {
	let depth = 0;
	while (descendant.ancestor) {
		depth++;
		descendant = descendant.ancestor;
	}
	return depth;
}
  
// Given a nested list of integers, return the sum of all integers in the list weighted by their depth.

// Each element is either an integer, or a list-- whose elements may also be integers or other lists.

// Different from the previous question where weight is increasing from root to leaf, now the weight is defined from bottom up.i.e., the leaf level integers have weight 1, and the root level integers have the largest weight.

// 	Example 1:

// Input: [[1, 1], 2, [1, 1]]
// Output: 8
// Explanation: Four 1's at depth 1, one 2 at depth 2.
// Example 2:

// Input: [1, [4, [6]]]
// Output: 17
// Explanation: One 1 at depth 3, one 4 at depth 2, and one 6 at depth 1; 1 * 3 + 4 * 2 + 6 * 1 = 17.

const depthSumInverse = (nestedList) => {
	const sumDepthStack = depthHelper(nestedList);
	const maxDepth = Math.max(...sumDepthStack.map(a => a.depth));

	return sumDepthStack.reduce((acc, cur) => (acc + cur.val * (maxDepth + 1 - cur.depth)), 0);
}

const depthHelper = (list, results = [], depth = 1) => {
	for (const elem of list) {
		if (elem.isInteger()) {
			results.push({
				'val': elem.getInteger(),
				'depth': depth
			});
		}
		else {
			depthHelper(elem.getList(), results, depth + 1);
		}
	}

	return results;
}
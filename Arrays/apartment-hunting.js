// You're looking to move into a new apartment on specific street, and you're
// given a list of contiguous blocks on that street where each block contains an
// apartment that you could move into.

// You also have a list of requirements: a list of buildings that are important
// to you. For instance, you might value having a school and a gym near your
// apartment. The list of blocks that you have contains information at every
// block about all of the buildings that are present and absent at the block in
// question. For instance, for every block, you might know whether a school, a
// pool, an office, and a gym are present.

// In order to optimize your life, you want to pick an apartment block such that
// you minimize the farthest distance you'd have to walk from your apartment to
// reach any of your required buildings.

// Write a function that takes in a list of contiguous blocks on a specific
// street and a list of your required buildings and that returns the location
// (the index) of the block that's most optimal for you.

// If there are multiple most optimal blocks, your function can return the index
// of any one of them.

// Sample Input
// blocks = [
//   {
// 	"gym": false,
//     "school": true,
//     "store": false,
//   },
//   {
// 	"gym": true,
//     "school": false,
//     "store": false,
//   },
//   {
// 	"gym": true,
//     "school": true,
//     "store": false,
//   },
//   {
// 	"gym": false,
//     "school": true,
//     "store": false,
//   },
//   {
// 	"gym": false,
//     "school": true,
//     "store": true,
//   },
// ]
// reqs = ["gym", "school", "store"]

// Sample Output
// 3 // at index 3, the farthest you'd have to walk to reach a gym, a school, or a store is 1 block; at any other index, you'd have to walk farther

function apartmentHunting(blocks, reqs) {
	// Write your code here.
	const minDistancesFromBlocks = reqs.map(req => getMinDistances(blocks, req));
	const maxDistancesFromBlocks = getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks);
	return getIndexAtMinValue(blocks, maxDistancesFromBlocks);
}

function getMinDistances(blocks, req) {
	const minDistances = new Array(blocks.length);
	let closestReqIdx = Infinity;

	for (let i = 0; i < blocks.length; i++) {
		if (blocks[i][req]) closestReqIdx = i;
		minDistances[i] = distanceBetween(i, closestReqIdx);
	}

	for (let i = blocks.length - 1; i >= 0; i--) {
		if (blocks[i][req]) closestReqIdx = i;
		minDistances[i] = Math.min(minDistances[i], distanceBetween(i, closestReqIdx));
	}
	return minDistances;
}

function getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks) {
	const maxDistancesAtBlocks = new Array(blocks.length);
	for (let i = 0; i < blocks.length; i++) {
		const minDistancesAtBlock = minDistancesFromBlocks.map(distances => distances[i]);
		maxDistancesAtBlocks[i] = Math.max(...minDistancesAtBlock);
	}

	return maxDistancesAtBlocks;
}

function getIndexAtMinValue(blocks, maxDistancesFromBlocks) {
	let minIndex = 0;
	let minValue = Infinity;
	for (let i = 0; i < blocks.length; i++) {
		if (maxDistancesFromBlocks[i] < minValue) {
			minIndex = i;
			minValue = maxDistancesFromBlocks[i];
		}
	}

	return minIndex;
}

function distanceBetween(a, b) {
	return Math.abs(a - b);
}
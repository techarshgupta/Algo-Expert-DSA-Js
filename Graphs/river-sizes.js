// You're given a two-dimensional array (a matrix) of potentially unequal height
// and width containing only 0s and 1s. Each
// 0 represents land, and each 1 represents part of a
// river. A river consists of any number of 1s that are either
// horizontally or vertically adjacent (but not diagonally adjacent). The number
// of adjacent 1s forming a river determine its size.

// Note that a river can twist. In other words, it doesn't have to be a straight
// vertical line or a straight horizontal line; it can be L-shaped, for example.

// Write a function that returns an array of the sizes of all rivers represented
// in the input matrix. The sizes don't need to be in any particular order.

// // Sample Input
// // matrix = [
// //   [1, 0, 0, 1, 0],
// //   [1, 0, 1, 0, 0],
// //   [0, 0, 1, 0, 1],
// //   [1, 0, 1, 0, 1],
// //   [1, 0, 1, 1, 0],
// // ]

// // Sample Output
// // [1, 2, 2, 2, 5] // The numbers could be ordered differently.</span>

// // The rivers can be clearly seen here:
// // [
// //   [1,  ,  , 1,  ],
// //   [1,  , 1,  ,  ],
// //   [ ,  , 1,  , 1],
// //   [1,  , 1,  , 1],
// //   [1,  , 1, 1,  ],
// // ]

function riverSizes(matrix) {
	// Write your code here.
	const sizes = [];
	const visited = matrix.map((row) => row.map((item) => false));

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (visited[i][j]) continue;
			traverseNode(i, j, matrix, visited, sizes);
		}
	}

	return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
	let currentRiverSize = 0;
	const nodesToExplore = [[i, j]];
	while (nodesToExplore.length) {
		const currentNode = nodesToExplore.pop();
		const [i, j] = currentNode;
		if (visited[i][j]) continue;
		visited[i][j] = true;
		if (matrix[i][j] === 0) continue;
		currentRiverSize++;
		const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
		for (const neighbor of unvisitedNeighbors) {
			nodesToExplore.push(neighbor);
		}
	}

	if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
	const unvisitedNeighbors = [];
	if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
	if (i < matrix.length - 1 && !visited[i + 1][j]) unvisitedNeighbors.push([i + 1, j]);
	if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);
	if (j < matrix[0].length - 1 && !visited[i][j + 1]) unvisitedNeighbors.push([i, j + 1]);
	return unvisitedNeighbors
}
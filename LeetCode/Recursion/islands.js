// Given an m x n 2d grid map of '1's(land) and '0's(water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.You may assume all four edges of the grid are all surrounded by water.
// 	Example 1:

// Input: grid = [
// 	["1", "1", "1", "1", "0"],
// 	["1", "1", "0", "1", "0"],
// 	["1", "1", "0", "0", "0"],
// 	["0", "0", "0", "0", "0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
// 	["1", "1", "0", "0", "0"],
// 	["1", "1", "0", "0", "0"],
// 	["0", "0", "1", "0", "0"],
// 	["0", "0", "0", "1", "1"]
// ]
// Output: 3


// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

const numIslands = (grid) => {
	let islandsCount = 0;

	for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
		for (let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
			if (grid[rowIndex][colIndex] === '1') {
				islandsCount++;
				convertLandToWater(rowIndex, colIndex, grid);
			}
		}
	}

	return islandsCount;
};

const convertLandToWater = (rowIn, colIn, grid) => {
	if (grid[rowIn] === undefined || grid[rowIn][colIn] === undefined || grid[rowIn][colIn] === '0') return;
	grid[rowIn][colIn] = '0';
	convertLandToWater(rowIn + 1, colIn, grid);
	convertLandToWater(rowIn - 1, colIn, grid);
	convertLandToWater(rowIn, colIn + 1, grid);
	convertLandToWater(rowIn, colIn - 1, grid);
}
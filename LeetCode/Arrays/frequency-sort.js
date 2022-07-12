// Given a string, sort it in decreasing order based on the frequency of characters.

// 	Example 1:

// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// 	So 'e' must appear before both 'r' and 't'.Therefore "eetr" is also a valid answer.
// 		Example 2:

// Input:
// "cccaaa"

// Output:
// "cccaaa"

// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.
// 	Example 3:

// Input:
// "Aabb"

// Output:
// "bbAa"

// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

const frequencySort = (s) => {
	const characterHash = {};
	for (const char of s) {
		!characterHash[char] ? characterHash[char] = 1 : characterHash[char]++;
	}

	//Sort the keys from most to least frequent, then create a string with repeating values
	return Object.keys(characterHash)
		.sort((a, b) => characterHash[b] - characterHash[a])
		.reduce((acc, cur) => acc + cur.repeat(characterHash[cur]), '');
};
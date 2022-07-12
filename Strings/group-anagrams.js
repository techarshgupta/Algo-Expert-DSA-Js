// Write a function that takes in an array of strings and groups anagrams together.

// Anagrams are strings made up of exactly the same letters, where order doesn't
// matter. For example, "cinema" and "iceman" are
// anagrams; similarly, "foo" and "ofo" are anagrams.

// Your function should return a list of anagram groups in no particular order.

// Sample Input
// words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]

// Sample Output
// [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]

function groupAnagrams(words) {
	// Write your code here.
	const anagramHash = {};

	for (const word of words) {
		const sortedWord = word.split('').sort().join('');

		if (anagramHash[sortedWord]) {
			anagramHash[sortedWord].push(word);
		} else {
			anagramHash[sortedWord] = [word];
		}
	};

	return Object.values(anagramHash);
}
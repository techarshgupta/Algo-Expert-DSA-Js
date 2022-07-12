// Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.It is guaranteed there is at least one word that isn't banned, and that the answer is unique.
// Words in the list of banned words are given in lowercase, and free of punctuation.Words in the paragraph are not case sensitive.The answer is in lowercase.

// 	Example:

// Input:
// paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// banned = ["hit"]
// Output: "ball"
// Explanation:
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice(and no other word does), so it is the most frequent non - banned word in the paragraph.
// Note that words in the paragraph are not case sensitive,
// 	that punctuation is ignored(even if adjacent to words, such as "ball,"),
// and that "hit" isn't the answer even though it occurs more because it is banned.

const mostCommonWord = (paragraph, banned) => {
	const bannedWordHash = {};
	banned.forEach((bannedWord) => bannedWordHash[bannedWord] = true);

	const words = paragraph.replace(/\W/g, ' ').toLowerCase().split(' ');

	const frequencyHash = {};
	let maxCount = 0;
	let maxWord;

	for (const word of words) {
		if (word === '' || bannedWordHash[word]) continue;

		!frequencyHash[word] ? frequencyHash[word] = 1 : frequencyHash[word]++;

		if (frequencyHash[word] > maxCount) {
			maxCount = frequencyHash[word]
			maxWord = word;
		}
	}

	return maxWord;
};

// Note:

// 1 <= paragraph.length <= 1000.
// 0 <= banned.length <= 100.
// 1 <= banned[i].length <= 10.
// The answer is unique, and written in lowercase(even if its occurrences in paragraph may have uppercase symbols, and even if it is a proper noun.)
// paragraph only consists of letters, spaces, or the punctuation symbols! ? ',;.
// There are no hyphens or hyphenated words.
// Words only consist of letters, never apostrophes or other punctuation symbols.
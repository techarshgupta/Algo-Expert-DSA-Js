// Write a function that, given a string, returns its longest palindromic
// substring.

// A palindrome is defined as a string that's written the same forward and
// backward. Note that single-character strings are palindromes.

// You can assume that there will only be one longest palindromic substring.
// Sample Input
// string = "abaxyzzyxf"

// Sample Output
// "xyzzyx"

function longestPalindromicSubstring(string) {
	// Write your code here.
	let longest = '';
	for (let i = 0; i < string.length; i++) {
		for (let j = i; j < string.length; j++) {
			const substring = string.slice(i, j + 1);
			const shouldUpdateLongest = substring.length > longest.length;

			if (isPalindrome(substring) && shouldUpdateLongest) longest = substring;
		}
	}

	return longest;

	function isPalindrome(string) {
		let leftPointer = 0;
		let rightPointer = string.length - 1;
		while (leftPointer < rightPointer) {
			if (string[leftPointer] !== string[rightPointer]) {
				return false;
			}
			leftPointer++;
			rightPointer--;
		}

		return true;
	}
}

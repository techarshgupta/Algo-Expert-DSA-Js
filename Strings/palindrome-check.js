// Write a function that takes in a non-empty string and that returns a boolean
// representing whether the string is a palindrome.

// A palindrome is defined as a string that's written the same forward and
// backward. Note that single-character strings are palindromes.

// Sample Input
// string = "abcdcba"

// Sample Output
// true // it's written the same forward and backward</span>

function isPalindrome(string) {
	// Write your code here.
	if (string.length === 1) return true
	
	let leftPointer = 0
	let rightPointer = string.length - 1

	while (leftPointer < rightPointer) {
		if (string[leftPointer] !== string[rightPointer]) {
			return false;
		}
		
		leftPointer++;
		rightPointer--;
	}
	
	return true;
}
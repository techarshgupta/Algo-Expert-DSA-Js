// The Fibonacci sequence is defined as follows: the first number of the sequence
// is 0, the second number is 1, and the nth number is the sum of the (n - 1)th
// and (n - 2)th numbers. Write a function that takes in an integer
// n and returns the nth Fibonacci number.

// Sample Input #1
// n = 2
// </pre>
// Sample Output #1
// 1 // 0, 1

function getNthFib(n) {
	// Write your code here.
	if (n === 0 || n === 1) {
		return 0
	}
	
	let nMinusTwo = 0;
	let nMinusOne = 1;
	let i = 2;
	
	while (i < n - 1) {
		let newSum = nMinusTwo + nMinusOne;
		nMinusTwo = nMinusOne
		nMinusOne = newSum;
		i++;
	}
	
	return nMinusTwo + nMinusOne
}
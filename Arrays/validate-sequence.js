
//   Given two non-empty arrays of integers, write a function that determines
//   whether the second array is a subsequence of the first one.

//   A subsequence of an array is a set of numbers that aren't necessarily adjacent
//   in the array but that are in the same order as they appear in the array. For
//   instance, the numbers <span>[1, 3, 4]</span> form a subsequence of the array
//   <span>[1, 2, 3, 4]</span>, and so do the numbers <span>[2, 4]</span>. Note
//   that a single number in an array and the array itself are both valid
//   subsequences of the array.

// Sample Input
// [5, 1, 22, 25, 6, -1, 8, 10]
// Sample Sequence
//  [1, 6, -1, 10]

// Sample Output
// true

function isValidSubsequence(array, sequence) {
	// Write your code here.
	  let sequenceIterator = 0;
	  
	  for (const num of array) {
		  //Stop searching through the array
		  if (sequenceIterator === sequence.length) {
			  break;
		  }
		  
		  if (num === sequence[sequenceIterator]) {
			  sequenceIterator++;
		  }
	  }
	  
	  return sequenceIterator === sequence.length;
  }
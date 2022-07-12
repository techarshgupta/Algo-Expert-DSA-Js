// Imagine that you're a teacher who's just graded the final exam in a class. You
// have a list of student scores on the final exam in a particular order (not
// necessarily sorted), and you want to reward your students. You decide to do so
// fairly by giving them arbitrary rewards following two rules:

// 1) All students must receive at least one reward.
// 2) Any given student must receive strictly more rewards than an adjacent
// student (a student immediately to the left or to the right) with a lower
// score and must receive strictly fewer rewards than an adjacent student with
// a higher score.

// Write a function that takes in a list of scores and returns the minimum number
// of rewards that you must give out to students to satisfy the two rules.

// You can assume that all students have different scores; in other words, the
// scores are all unique.

// Sample Input
// scores = [8, 4, 2, 1, 3, 6, 7, 9, 5]

// Sample Output
// 25 // you would give out the following rewards: [4, 3, 2, 1, 2, 3, 4, 5, 1]</span></pre>

function minRewards(scores) {
	// Write your code here.
	const rewards = scores.map(score => 1);
	for (let i = 1; i < scores.length; i++) {
		if (scores[i] > scores[i - 1]) rewards[i] = rewards[i - 1] + 1;
	}

	for (let j = scores.length - 2; j >= 0; j--) {
		if (scores[j] > scores[j + 1]) rewards[j] = Math.max(rewards[j], rewards[j + 1] + 1);
	}

	return rewards.reduce((a, b) => a + b);
}
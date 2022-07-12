// We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i].

// 	You're given the startTime , endTime and profit arrays, you need to output the maximum profit you can take such that there are no 2 jobs in the subset with overlapping time range.

// If you choose a job that ends at time X you will be able to start another job that starts at time X.

// 	Example 1:

// Input: startTime = [1, 2, 3, 3], endTime = [3, 4, 5, 6], profit = [50, 10, 40, 70]
// Output: 120
// Explanation: The subset chosen is the first and fourth job.
// Time range[1 - 3] + [3 - 6], we get profit of 120 = 50 + 70.
// Example 2:

// Input: startTime = [1, 2, 3, 4, 6], endTime = [3, 5, 10, 6, 9], profit = [20, 20, 100, 70, 60]
// Output: 150
// Explanation: The subset chosen is the first, fourth and fifth job.
// Profit obtained 150 = 20 + 70 + 60.
// Example 3:

// Input: startTime = [1, 1, 1], endTime = [2, 3, 4], profit = [5, 6, 4]
// Output: 6

// Constraints:

// 1 <= startTime.length == endTime.length == profit.length <= 5 * 10 ^ 4
// 1 <= startTime[i] < endTime[i] <= 10 ^ 9
// 1 <= profit[i] <= 10 ^ 4

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
const jobScheduling = (startTime, endTime, profit) => {
	const jobs = [];
	const numJobs = startTime.length;

	for (let i = 0; i < numJobs; i++) {
		jobs.push({ start: startTime[i], end: endTime[i], profit: profit[i] });
	}

	//Sort jobs by ending time
	jobs.sort((a, b) => a.end - b.end);

	const dp = Array(numJobs);
	dp[0] = jobs[0].profit;

	for (let i = 1; i < numJobs; i++) {
		let profit = jobs[i].profit;

		//See if we can use a prior dp value to our current position       
		let priorDpIndex = undefined;
		for (let j = i - 1; j >= 0; j--) {
			if (jobs[j].end <= jobs[i].start) {
				priorDpIndex = j;
				break;
			}
		}

		if (priorDpIndex != undefined) {
			profit += dp[priorDpIndex];
		}

		//Check to see if we are going to update the profit compared to the last dp value
		dp[i] = Math.max(profit, dp[i - 1]);
	}

	return dp[numJobs - 1];
};
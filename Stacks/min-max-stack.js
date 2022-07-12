// Write a MinMaxStack class for a Min Max Stack. The class should
// support:

// - Pushing and popping values on and off the stack.
// - Peeking at the value at the top of the stack.
// - Getting both the minimum and the maximum values in the stack at any given
// point in time.

// All class methods, when considered independently, should run in constant time
// and with constant space.

class MinMaxStack {
	constructor() {
		this.minMaxStack = [];
		this.stack = [];
	}
	peek() {
		// Write your code here.
		return this.stack[this.stack.length - 1];
	}

	pop() {
		// Write your code here.
		this.minMaxStack.pop()
		return this.stack.pop()
	}

	push(number) {
		// Write your code here.
		if (!this.minMaxStack.length) {
			this.minMaxStack.push({ max: number, min: number })
		} else {
			const currentMinMaxStack = this.minMaxStack[this.minMaxStack.length - 1];
			let nextMinMaxStack = { min: null, max: null };
			
			nextMinMaxStack.min = Math.min(currentMinMaxStack.min, number);
			nextMinMaxStack.max = Math.max(currentMinMaxStack.max, number);

			this.minMaxStack.push(nextMinMaxStack);
		}
		
		this.stack.push(number);
	}

	getMin() {
		// Write your code here.
		return this.minMaxStack[this.minMaxStack.length - 1].min;
	}

	getMax() {
		// Write your code here.
		return this.minMaxStack[this.minMaxStack.length - 1].max;
	}
}
class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	//Insert first node
	insertFirst(data) {
		this.head = new Node(data, this.head);
		this.size++;
	}

	//Insert last node
	insertLast(data) {
		let node = new Node(data);

		if (!this.head) {
			this.head = node;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next
			}
	
			current.next = node;
		}

		this.size++;
	}

	//Insert at index
	insertAt(data, index) {
		//Index is out of range
		if (index > this.size) {
			return;
		}

		//If first index
		if (index === 0) {
			this.insertFirst(data);
			return;
		}

		const node = new Node(data);
		let current, previous;

		current = this.head;
		let count = 0;

		while (count < index) {
			previous = current;
			current = current.next;
			count++;
		}

		node.next = current;
		previous.next = node;
		this.size++;
	}

	//Get at index
	getAt(index) {
		if (index > this.size || !this.head) {
			return;
		}

		let counter = 0;
		let current = this.head;
		while (counter < index) {
			current = current.next;
			counter++;
		}

		return current.data;
	}

	//Remove at index
	removeAt(index) {
		if (index > this.size || !this.head) {
			return;
		}

		let counter = 0;
		let current = this.head;
		let previous;

		if (index === 0) {
			this.head = current.next;
		} else {
			while(counter < index) {
				counter++;
				previous = current;
				current = current.next;
			}

			previous.next = current.next;
		}

		this.size--;
	}

	//Clear list
	clearList() {
		this.head = null;
		this.size = 0;

		// if (!this.size) {
		// 	return;
		// }

		// let counter = 0;

		// while (counter < this.size) {
		// 	this.removeAt(counter);
		// }
	}

	//Print list data
	printListData() {
		let current = this.head;

		while(current) {
			console.log(current.data);
			current = current.next;
		}
	}
}

const linkedList = new LinkedList();

linkedList.insertFirst(100);
linkedList.insertFirst(200);
linkedList.insertFirst(300);
linkedList.insertLast(400);
linkedList.insertAt(500, 2);
console.log('get at:', linkedList.getAt(2));
linkedList.removeAt(2)
linkedList.clearList()

console.log(linkedList.printListData());
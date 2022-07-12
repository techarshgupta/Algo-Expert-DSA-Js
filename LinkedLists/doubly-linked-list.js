//   Write a DoublyLinkedList class that has a head and a
//   tail, both of which point to either a linked list
//   Node or None / null. The class should
//   support:
//     - Setting the head and tail of the linked list.
//     - Inserting nodes before and after other nodes as well as at given positions
//     (the position of the head node is 1).
//     - Removing given nodes and removing nodes with given values.
//     - Searching for nodes with given values.

//   Note that the setHead, setTail, insertBefore, insertAfter,
//   insertAtPosition, and remove methods all take in
//   actual Nodes as input parameters—not integers (except for
//   insertAtPosition, which also takes in an integer representing the
//   position); this means that you don't need to create any new Nodes
//   in these methods. The input nodes can be either stand-alone nodes or nodes
//   that are already in the linked list. If they're nodes that are already in the
//   linked list, the methods will effectively be moving the nodes within
//   the linked list. You won't be told if the input nodes are already in the
//   linked list, so your code will have to defensively handle this scenario.

//   Each Node has an integer value as well as a
//   prev node and a next node, both of which can point
//   to either another node or None / null.


// This is an input class. Do not edit.
class Node {
	constructor(value) {
	  this.value = value;
	  this.prev = null;
	  this.next = null;
	}
  }
  
  // Feel free to add new properties and methods to the class.
  class DoublyLinkedList {
	constructor() {
	  this.head = null;
	  this.tail = null;
	}
  
	setHead(node) {
	  // Write your code here.
		  if (this.head === null) {
			  this.head = node;
			  this.tail = node;
			  return;
		  }
		  this.head = node.value;
	}
  
	setTail(node) {
	  // Write your code here.
		  if (!this.head) {
			  this.setHead(node);
		  } else {
			  let current = this.head;
			  while (current.next) {
				  current = current.next;
			  }
			  
			  this.tail = current;
		  }
	}
  
	insertBefore(node, nodeToInsert) {
	  // Write your code here.
		  if (!this.head) {
			  this.insertHead(nodeToInsert)
		  }
		  
		  let current = this.head;
		  while (current.next.value !== node.value) {
			  current = current.next;
		  }
		  const replaced = current.next;
		  current.next = nodeToInsert;
		  nodeToInsert.prev = replaced.prev;
		  nodeToInsert.next = replaced.next;
		  replaced.prev = nodeToInsert;
	}
  
	insertAfter(node, nodeToInsert) {
	  // Write your code here.
	}
  
	insertAtPosition(position, nodeToInsert) {
	  // Write your code here.
	}
  
	removeNodesWithValue(value) {
	  // Write your code here.
	}
  
	remove(node) {
	  // Write your code here.
		  let current = this.head;
		  while (current.next.value !== node.value) {
			  current = current.next;
		  }
		  let previous = current;
		  let replacedNode = current.next;
		  let next = replacedNode.next;
		  previous.next = next;
		  next.prev = previous;
	}
  
	containsNodeWithValue(value) {
	  // Write your code here.
		  if (!this.head) {
			  return false;
		  }
		  
		  let current = this.head;
		  while (current.next) {
			  if (current.value = value) {
				  return true;
			  }
			  
			  current = current.next;
		  }
		  
		  return false;
	}
}
import { Node } from './node';

class LinkedList {
  constructor() {
    this.listHead = null;
  }
  // Prepends a node to the linked list
  prepend(value) {
    let tmp = null;
    if (this.listHead != null) tmp = this.listHead;
    this.listHead = new Node(value)
    this.listHead.nextNode = tmp;
    return this;
  }
  // Appends a node to the node list
  append(value) {
    if (this.listHead === null) {
      this.prepend(value)
      return;
    }
    let nextNode = this.listHead;
    while (nextNode != null) {
      nextNode = nextNode.nextNode;
    }
    nextNode = new Node(value)
    return this;
  }
  // Returns the size of our node list
  getSize() {
    let nextNode = this.listHead
    let count = 0;
    while (nextNode != null) {
      count++;
      nextNode = nextNode.nextNode;
    }
    return count;
  }
  // Returns the first node in the list
  getHead() {
    return this.listHead
  }
  // Returns the last element in the list
  getTail() {
    let nextNode = this.listHead
    while (nextNode.nextNode != null) nextNode = nextNode.nextNode;
    return nextNode;
  }
  // Returns the node at the given index
  at(targetIndex = 0) {
    let nextNode = this.listHead;
    index = 0
    while (index !== targetIndex && targetIndex >= 0) {
      nextNode = nextNode.nextNode;
      if (nextNode === null) return false;
    }
    return nextNode;
  }
  // Removes the last node 
  pop() {
    let curNode = this.listHead;
    let prev = null;
    while (curNode != null) {
      prev = cur;
      cur = cur.nextNode;
    }
    prev.nextNode = null;
    return this;
  }
  // Returns true if the node list contain a value
  contains(target) {
    let curNode = this.listHead;
    while (curNode != null) {
      if (curNode.value === target) return true;
      curNode = curNode.nextNode;
    }
    return false;
  }
  // Returns the index of the node containing value
  findIndex(target) {
    let curNode = this.listHead;
    let index = 0;
    while (curNode != null) {
      if (curNode.value === target) return index;
      curNode = curNode.nextNode;
      index++;
    }
    return -1;
  }
  // Represent the linkedList in a nice formatted string like this: ( value ) -> ( value ) -> null
  toString() {
    let curNode = this.listHead;
    let str = ``
    while (curNode !== null) {
      str += `( ${curNode.value} ) -> `
      curNode = curNode.nextNode;
    }
    return (str += 'null')
  }
  // Inserts a node at a certain index
  insertAt(value, targetIndex) {
    if (this.listHead === null) {
      this.prepend(value)
      return
    }
    let prev = null
    let cur = this.listHead;
    let index = 0;
    while (index !== targetIndex) {
      prev = cur;
      cur = cur.nextNode;
      if (cur === null) break;
    }
    let newNode = new Node(value)
    prev.nextNode = newNode;
    newNode.nextNode = cur;
  }
  // Removes a node at a certain index
  removeAt(targetIndex) {
    if (this.listHead === null) return -1;
    let cur = this.listHead;
    let prev = null;
    for (let i = 0; i < targetIndex; i++) {
      prev = cur;
      cur = cur.nextNode;
      if (cur === null) return -1;
    }
    prev.nextNode = cur.nextNode;
  }
}
console.log(new Node)
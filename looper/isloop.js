"use strict";

//Complete this algo
const isLoop = (linkedlist) => {
  let headNode = linkedlist.head;
  let nextNode = headNode.next;
  while (nextNode !== headNode) {
    if (nextNode === null || headNode === null) {
      return false;
    }
    headNode = headNode.next;
    nextNode = nextNode.next.next; //nextNode = headNode.next; should work for this line but it does not. (?)
  }
  return true;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;

const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let pointer = l;
  while (pointer !== null && pointer.value === k) {
    pointer = pointer.next;
    l = l.next;
  }
  if (pointer === null) return null;
  while (pointer.next !== null) {
    if (pointer.next.value === k) {
      pointer.next = pointer.next.next;
    } else {
      pointer = pointer.next;
    }
  }
  console.log(l);
  return l;
}

module.exports = {
  removeKFromList,
};

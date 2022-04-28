const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.start = null;
  }

  root() {
    return this.start;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.start === null) {
      this.start = newNode;
      return;
    }
    let pointer = this.start;
    while (true) {
      if (data < pointer.data) {
        if (pointer.left === null) {
          pointer.left = newNode;
          return;
        } else {
          pointer = pointer.left;
        }
        continue;
      }
      // если пришли сюда, то data > pointer.data, идем в правую ветку
      if (pointer.right === null) {
        pointer.right = newNode;
        return;
      } else {
        pointer = pointer.right;
      }
    }
  }

  has(data) {
    let pointer = this.start;
    while (pointer !== null) {
      if (pointer.data === data) return true;
      if (data < pointer.data) {
        pointer = pointer.left;
      } else {
        pointer = pointer.right;
      }
    }
    return false;
  }

  find(data) {
    let pointer = this.start;
    while (pointer !== null) {
      if (pointer.data === data) return pointer;
      if (data < pointer.data) {
        pointer = pointer.left;
      } else {
        pointer = pointer.right;
      }
    }
    return null;
  }

  remove(data) {
    this.start = this._deleteNode(this.start, data);
  }

  _deleteNode(curNode, data) {
    if (curNode.data === data) {
      if (curNode.left === null && curNode.right === null) {
        return null;
      }
      if (curNode.left === null) {
        return curNode.right;
      }
      if (curNode.right === null) {
        return curNode.left;
      }
      let minNode = this._findMinElement(curNode.right);
      curNode.data = minNode.data;
      curNode.right = this._deleteNode(curNode.right, minNode.data);
      return curNode;
    }
    if (data < curNode.data) {
      curNode.left = this._deleteNode(curNode.left, data);
      return curNode;
    }
    if (data > curNode.data) {
      curNode.right = this._deleteNode(curNode.right, data);
      return curNode;
    }
  }

  _findMinElement(node) {
    if (node.left === null) return node;
    return this._findMinElement(node.left);
  }

  min() {
    let pointer = this.start;
    while (pointer.left !== null) pointer = pointer.left;
    return pointer.data;
  }

  max() {
    let pointer = this.start;
    while (pointer.right !== null) pointer = pointer.right;
    return pointer.data;
  }
}

module.exports = {
  BinarySearchTree,
};

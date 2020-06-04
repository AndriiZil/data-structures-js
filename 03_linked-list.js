/** Node in the linked list **/
function Node(element) {
  // Data in the node
  this.element = element;
  // Pointer to the next node 
  this.next = null;
}

function LinkedList() {
  let length = 0;
  let head = null;

  // Get number of list
  this.size = function () {
    return length;
  }

  // Get element of head
  this.head = function () {
    return head;
  }

  // Add element to end of the list
  this.add = function (element) {
    let node = new Node(element);

    if (head == null) {
      head = node;
    } else {
      let currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  }

  // Remove item from list
  this.remove = function (element) {
    let currentNode = head;
    let previousNode;

    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
  }

  this.isEmpty = function () {
    return length === 0;
  }

  // Return index of link
  this.indexOf = function (element) {
    let currentNode = head;
    let index = -1;
    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }

  // Return Node
  this.elementAt = function (index) {
    let currentNode = head;
    let count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  }

  // Add node by index
  this.addAt = function (index, element) {
    const node = new Node(element);
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if (index > length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  }

  // Remove node by index
  this.removeAt = function (index) {
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if (index < 0 || index >= length) {
      return null;
    }

    if (index === 0) {
      head = currentIndex.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  }
}
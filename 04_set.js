function MySet() {
  const collection = [];

  // Check if item exists
  this.has = function (element) {
    return (collection.indexOf(element) !== -1);
  }

  // Return all elements from set
  this.values = function () {
    return collection;
  }

  // Return size of elements
  this.size = function () {
    return collection.length;
  }

  // Add element if not exists
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  }

  // Remove element from set
  this.remove = function (element) {
    if (this.has(element)) {
      let index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  }

  // Union of Sets
  this.union = function (otherSet) {
    const unionSet = new MySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();

    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  }

  this.intersection = function (otherSet) {
    const intersectionSet = new MySet();
    const firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  }

  // Difference of complects
  this.difference = function (otherSet) {
    const differenceSet = new MySet();
    const firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  }

  // If this set is subset of another set
  this.subset = function (otherSet) {
    const firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  }
}
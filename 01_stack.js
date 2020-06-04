//  LIFO (Last In First Out)

function Stack() {
  this.count = 0;
  this.storage = {};

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  }

  this.pop = function (value) {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  this.peek = function () {
    return this.storage[this.count - 1];
  }

  this.size = function () {
    return this.count;
  }

}
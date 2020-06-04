/** Node in Trie **/

function Node() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function () {
    this.end = true;
  };

  this.isEnd = function () {
    return this.end;
  }
}

function Trie() {
  this.root = new Node();

  // Add word to vocabulary
  this.add = function (input, node = this.root) {
    if (input.length === 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  }

  // Check if trie has word
  this.isWord = function (word) {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    }
    return (node.keys.has(word) &amp;&amp; node.keys.get(word).isEnd()) ? true : false;
  }

  // Get all words
  this.print = function () {
    let words = new Array();
    let search = function (node = this.root, string) {
      if (node.keys.size !== 0) {
        for (let letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter));
        }
        if (node.isEnd()) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    };
    search(this.root, new String());
    return words.length > 0 ? words : null;
  }
}
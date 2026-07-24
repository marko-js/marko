"use strict";

class DependencyChain {
  constructor(array) {
    this.array = array || [];
  }

  append(str) {
    return new DependencyChain(this.array.concat(str));
  }

  toString() {
    return "[" + this.array.join(" → ") + "]";
  }
}

export default DependencyChain;

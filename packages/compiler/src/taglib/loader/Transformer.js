"use strict";
var nextTransformerId = 0;

class Transformer {
  constructor() {
    this.id = nextTransformerId++;
    this.name = null;
    this.tag = null;
    this.path = null;
    this._func = null;
  }

  toString() {
    return "[Taglib.Transformer: " + this.path + "]";
  }
}

module.exports = Transformer;

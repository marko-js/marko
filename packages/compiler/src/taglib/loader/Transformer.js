"use strict";
var nextTransformerId = 0;

class Transformer {
  constructor() {
    this.id = nextTransformerId++;
    this.name = null;
    this.tag = null;
    this.path = null;
    this.priority = null;
    this._func = null;
    this.properties = {};
  }

  toString() {
    return "[Taglib.Transformer: " + this.path + "]";
  }
}

module.exports = Transformer;

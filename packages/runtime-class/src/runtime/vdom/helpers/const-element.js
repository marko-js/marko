"use strict";

var VElement = require("../vdom").___VElement;
var i = 0;

module.exports = function (tagName, attrs, childCount) {
  return new ConstVElement(tagName, attrs, childCount);
};

function ConstVElement(tagName, attrs, childCount) {
  VElement.call(this, tagName, attrs, null, null, childCount, null, { i: i++ });
}

ConstVElement.prototype = Object.create(VElement.prototype);
ConstVElement.prototype.e = function (tagName, attrs, childCount) {
  var child = this.___appendChild(
    new ConstVElement(tagName, attrs, childCount),
  );

  if (childCount === 0) {
    return this.___finishChild();
  } else {
    return child;
  }
};

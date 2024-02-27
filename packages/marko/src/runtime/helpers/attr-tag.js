"use strict";

var ownerInput;

exports.r = function repeatedAttrTag(targetProperty, attrTagInput) {
  var prev = ownerInput[targetProperty];
  if (prev) {
    prev.push(attrTagInput);
  } else {
    ownerInput[targetProperty] = [attrTagInput];
  }
};
exports.a = function repeatableAttrTag(targetProperty, attrTagInput) {
  var prev = ownerInput[targetProperty];
  if (prev) {
    if (Array.isArray(prev)) {
      prev.push(attrTagInput);
    } else {
      ownerInput[targetProperty] = [prev, attrTagInput];
    }
  } else {
    attrTagInput[Symbol.iterator] = selfIterator;
    ownerInput[targetProperty] = attrTagInput;
  }
};

exports.i = function attrTagInput(render, input) {
  var prevOwnerInput = ownerInput;
  ownerInput = input || {};
  try {
    var renderBody = render();
    if (renderBody) {
      ownerInput.renderBody = renderBody;
    }
    return ownerInput;
  } finally {
    ownerInput = prevOwnerInput;
  }
};

function* selfIterator() {
  yield this;
}

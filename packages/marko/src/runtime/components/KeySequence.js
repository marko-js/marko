var WeakMap = require("../helpers/_weak-map");
var keySequenceLookup = new WeakMap();
module.exports = function nextKey(obj, key) {
  var lookup = keySequenceLookup.get(obj);

  if (lookup) {
    if (lookup[key]) {
      return key + "_" + lookup[key]++;
    }
  } else {
    lookup = Object.create(null);
    keySequenceLookup.set(obj, lookup);
  }

  lookup[key] = 1;
  return key;
};

module.exports.___reset = function() {
  keySequenceLookup = new WeakMap();
};

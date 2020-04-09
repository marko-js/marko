var WeakMap = require("../helpers/_weak-map");

module.exports = {
  ___vPropsByDOMNode: new WeakMap(),
  ___vElementByDOMNode: new WeakMap(),
  ___componentByDOMNode: new WeakMap(),
  ___detachedByDOMNode: new WeakMap(),
  ___keyByDOMNode: new WeakMap(),
  ___ssrKeyedElementsByComponentId: {}
};

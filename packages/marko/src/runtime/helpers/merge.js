var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Merges object properties
 */
module.exports = function merge(into, source) {
  for (var k in source) {
    if (hasOwnProperty.call(source, k) && !hasOwnProperty.call(into, k)) {
      into[k] = source[k];
    }
  }
  return into;
};

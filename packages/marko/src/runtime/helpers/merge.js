/**
 * Merges object properties
 */
module.exports = function merge(into, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k) && !into.hasOwnProperty(k)) {
      into[k] = source[k];
    }
  }
  return into;
};

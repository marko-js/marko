module.exports = function nodeFactory(el) {
  // Previously `class` was a CodeGenerator.
  // CodeGenerators have their `type` overwritten and some code is relying on that for `class`.
  el.type = __filename;
  return el;
};

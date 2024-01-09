var ok = require("assert").ok;
var loaders = require("./loaders");

module.exports = function loadAttributes(value, parent, dependencyChain) {
  ok(parent);
  ok(dependencyChain);

  for (const attrName in value) {
    const attrProps = value[attrName];
    var attr = loaders.loadAttributeFromProps(
      attrName,
      attrProps,
      dependencyChain.append("@" + attrName),
    );

    parent.addAttribute(attr);
  }
};

var ok = require("assert").ok;
var forEachEntry = require("raptor-util/forEachEntry");
var loaders = require("./loaders");

module.exports = function loadAttributes(value, parent, dependencyChain) {
    ok(parent);
    ok(dependencyChain);

    forEachEntry(value, (attrName, attrProps) => {
        var attr = loaders.loadAttributeFromProps(
            attrName,
            attrProps,
            dependencyChain.append("@" + attrName)
        );

        parent.addAttribute(attr);
    });
};

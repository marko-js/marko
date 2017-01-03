var ok = require('assert').ok;
var forEachEntry = require('raptor-util/forEachEntry');
var attributeLoader = require('./loader-attribute');

module.exports = function handleAttributes(value, parent, dependencyChain) {
    ok(parent);
    ok(dependencyChain);

    forEachEntry(value, (attrName, attrProps) => {
        var attr = attributeLoader.loadAttribute(
            attrName,
            attrProps,
            dependencyChain.append('@' + attrName));

        parent.addAttribute(attr);
    });
};
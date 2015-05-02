var ok = require('assert').ok;
var forEachEntry = require('raptor-util').forEachEntry;
var loader = require('./loader');

module.exports = function handleAttributes(value, parent, path) {
    ok(parent);

    forEachEntry(value, function(attrName, attrProps) {
        var attr = loader.attributeLoader.loadAttribute(
            attrName,
            attrProps,
            '"' + attrName + '" attribute as part of ' + path);

        parent.addAttribute(attr);
    });
};
var normalInclude = require('../../taglibs/core/include-tag').$__doInclude;
var ComponentsContext = require('../ComponentsContext');
var getElementById = require('../util').$__getElementById;

module.exports = function include(input, out) {
    if (!normalInclude(input, out)) {
        var elId = input._elId;

        // There's no body content so let's see if we should reuse
        // the existing body content in the DOM
        var existingEl = getElementById(out.$__document, elId);
        if (existingEl) {
            var componentsContext = ComponentsContext.$__getComponentsContext(out);
            componentsContext.$__preserveDOMNode(elId, true /* body only */);
        }
    }
};

var normalInclude = require('../../taglibs/core/include-tag').$__doInclude;
var componentsUtil = require('../util');
var getElementById = componentsUtil.$__getElementById;

var getComponentsContext = require('../ComponentsContext').$__getComponentsContext;

module.exports = function include(input, out) {
    if (!normalInclude(input, out)) {
        var elId = input._elId;

        // There's no body content so let's see if we should reuse
        // the existing body content in the DOM
        var existingEl = getElementById(out.$__document, elId);
        if (existingEl) {
            var componentsContext = getComponentsContext(out);
            componentsContext.$__globalContext.$__preserveDOMNode(elId, true /* body only */);
        }
    }
};

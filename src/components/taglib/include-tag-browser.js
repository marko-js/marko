var normalInclude = require('../../taglibs/core/include-tag').___doInclude;
var componentsUtil = require('../util');
var getElementById = componentsUtil.___getElementById;

var getComponentsContext = require('../ComponentsContext').___getComponentsContext;

module.exports = function include(input, out) {
    if (!normalInclude(input, out)) {
        var elId = input._elId;

        // There's no body content so let's see if we should reuse
        // the existing body content in the DOM
        var existingEl = getElementById(out.___document, elId);
        if (existingEl) {
            var componentsContext = getComponentsContext(out);
            componentsContext.___globalContext.___preserveDOMNode(elId, true /* body only */);
        }
    }
};

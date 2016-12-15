var isBrowser = typeof window !== 'undefined';
var normalInclude = require('../../taglibs/core/include-tag');
var markoWidgets = require('../');

module.exports = function include(input, out) {
    var target = input._target;

    if (typeof target === 'string') {
        out.text(target);
    } else if (target) {
        normalInclude(input, out);
    } else if (isBrowser) {
        var elId = input._elId;

        // There's no body content so let's see if we should reuse
        // the existing body content in the DOM
        var existingEl = document.getElementById(elId);
        if (existingEl) {
            var widgetsContext = markoWidgets.getWidgetsContext(out);
            widgetsContext.preservedDOMNode(existingEl, true /* body only */);
        }
    }
};
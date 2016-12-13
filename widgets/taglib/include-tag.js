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
        var widgetId = input._arg.id;

        // Thereis no body content so let's see if we should reuse
        // the existing body content in the DOM
        var existingEl = document.getElementById(widgetId);
        if (existingEl) {
            var widgetsContext = markoWidgets.getWidgetsContext(out);
            widgetsContext.addPreservedDOMNode(existingEl, true /* body only */);
        }
    }
};
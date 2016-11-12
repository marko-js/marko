var isBrowser = typeof window !== 'undefined';
var normalInclude = require('../../../runtime/include');
var markoWidgets = require('../../');

module.exports = function include(target, out, data, id, widget) {
    if (typeof target === 'string') {
        out.text(target);
    } else if (target) {
        normalInclude(target, out, data);
    } else if (isBrowser) {
        if (id) {
            // There is no body content so let's see if we should reuse
            // the existing body content in the DOM
            var existingEl = document.getElementById(id);
            if (existingEl) {
                var widgetsContext = markoWidgets.getWidgetsContext(out);
                widgetsContext.addPreservedDOMNode(existingEl, true /* body only */);
            }
        } else {
            throw new Error('Invalid include');
        }
    }
};
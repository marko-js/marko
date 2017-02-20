var normalInclude = require('../../taglibs/core/include-tag');
var WidgetsContext = require('../WidgetsContext');
var getElementById = require('../util').$__getElementById;

module.exports = function include(input, out) {
    var target = input._target;

    if (target != null) {
        normalInclude(input, out);
    } else if (getElementById) {
        var elId = input._elId;

        // There's no body content so let's see if we should reuse
        // the existing body content in the DOM
        var existingEl = getElementById(out.$__document, elId);
        if (existingEl) {
            var widgetsContext = WidgetsContext.$__getWidgetsContext(out);
            widgetsContext.$__preserveDOMNode(elId, true /* body only */);
        }
    }
};

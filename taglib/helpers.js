require('raptor-polyfill/string/endsWith');

var repeatedId = require('../lib/repeated-id');

exports.widgetArgs = function (out, scope, assignedId, customEvents, extend, extendConfig, extendState, extendPreserve) {
    var data = out.data;
    var widgetArgs = data.widgetArgs;
    var extendParts = null;

    if (extend) {
        extendParts = [extend, extendConfig, extendState, extendPreserve];
    }

    if (widgetArgs) {

        // Merge in the extends...
        if (extendParts) {
            if (widgetArgs.extend) {
                // The nested extends should come before the outer extends
                // since the extends are applied from left to right and the
                // outer widget will expect for the inner widget to have been
                // patched
                widgetArgs.extend = extendParts.concat(widgetArgs.extend);
            } else {
                widgetArgs.extend = extendParts;
            }
        }
    } else {
        if (assignedId && assignedId.endsWith('[]')) {
            assignedId = repeatedId.nextId(out, scope, assignedId);
        }

        data.widgetArgs = {
            id: assignedId ? scope + '-' + assignedId : null,
            scope: scope,
            customEvents: customEvents,
            extend: extendParts
        };
    }
};

exports.cleanupWidgetArgs = function (out) {
    delete out.data.widgetArgs;
};

exports.widgetBody = function (out, content, escapeXml, renderArgs) {
    if (content == null) {
        // Do nothing
    } else if (typeof content === 'function') {
        if (renderArgs) {
            if (renderArgs.length === 1) {
                // Optimized for the default scenario
                content(out, renderArgs[0]);
            } else {
                renderArgs.unshift(out);
                content.apply(this, renderArgs);
            }
        } else {
            content(out);
        }
    } else {
        if (typeof content === 'string') {
            content = escapeXml(content);
        }
        out.write(content);
    }
};
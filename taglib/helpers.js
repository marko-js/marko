require('raptor-polyfill/string/endsWith');

exports.widgetArgs = function (out, scope, assignedId, customEvents, extend, extendConfig) {
    var data = out.data;
    var widgetArgs = data.widgetArgs;
    var extendParts = null;

    if (extend) {
        extendParts = [extend, extendConfig];
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
            var indexLookupKey = scope + '-' + assignedId;
            var currentIndex = out.global[indexLookupKey];
            if (currentIndex == null) {
                currentIndex = out.global[indexLookupKey] = 0;
            } else {
                currentIndex = ++out.global[indexLookupKey];
            }
            assignedId = assignedId.slice(0, -2) + '[' + currentIndex + ']';
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
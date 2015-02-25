exports.widgetArgs = function (out, assignedId, scope, events, extend, extendConfig) {
    var data = out.data;
    var existingWidgetArgs = data.widgetArgs;
    var extendParts = null;

    if (extend) {
        extendParts = [extend, extendConfig];
    }

    if (existingWidgetArgs) {
        if (extendParts) {
            if (existingWidgetArgs.extend) {
                // The nested extends should come before the outer extends
                // since the extends are applied from left to right and the
                // outer widget will expect for the inner widget to have been
                // patched
                existingWidgetArgs.extend = extendParts.concat(existingWidgetArgs.extend);
            } else {
                existingWidgetArgs.extend = extendParts;
            }
        }
    } else {
        data.widgetArgs = {
            id: assignedId,
            scope: scope,
            events: events,
            extend: extendParts
        };
    }
};

exports.cleanupWidgetArgs = function (out) {
    delete out.data.widgetArgs;
};
var repeatedId = require('../lib/repeated-id');

module.exports = function widgetArgsId(widgetArgs, store) {
    var widgetId = widgetArgs.id;

    if (widgetId) {
        var out = widgetArgs.out;
        var scope = widgetArgs.scope;

        if (widgetId.charAt(0) === '!') {
            return widgetId.substring(1);
        } else {
            var resolvedId;

            if (widgetId.endsWith('[]')) {
                resolvedId = repeatedId.nextId(out, scope, widgetId);
            } else {
                resolvedId = scope + '-' + widgetId;
            }

            if (store) {
                widgetArgs.id = '!' + resolvedId;
            }

            return resolvedId;
        }
    }
};
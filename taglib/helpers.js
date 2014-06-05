var raptorWidgets = require('../');

exports.widgetArgs = function (context, assignedId, scope, events) {
    context.attributes.widgetArgs = {
        id: assignedId,
        scope: scope,
        events: events
    };
};

exports.cleanupWidgetArgs = function (context) {
    delete context.attributes.widgetArgs;
};

exports.attrs = function (context, widget) {
    var attrs = {
        'data-rwidget': raptorWidgets.getClientRequirePath(widget.module)
    };

    return attrs;
};
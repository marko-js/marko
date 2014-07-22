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
var createError = require('raptor-util').createError;
'use strict';
var widgets = require('raptor-widgets');
var DUMMY_WIDGET_DEF = {
        elId: function () {
        }
    };
function WidgetTag() {
}
WidgetTag.prototype = {
    render: function (input, context) {
        var type = input.jsClass;
        var config = input.config || input._cfg;
        var widgetArgs = context.attributes.widgetArgs;
        var elId = input.elId;
        var scope = input.scope;
        var assignedId = input.assignedId;
        var events;
        if (widgetArgs) {
            delete context.attributes.widgetArgs;
            scope = scope || widgetArgs.scope;
            assignedId = assignedId || widgetArgs.id;
            events = widgetArgs.events;
        }
        if (!elId && input.hasOwnProperty('elId')) {
            throw createError('Invalid widget ID for "' + type + '"');
        }
        var widgetsContext = widgets.getWidgetsContext(context);
        if (type) {
            widgetsContext.beginWidget({
                type: type,
                id: elId,
                assignedId: assignedId,
                config: config,
                scope: scope,
                events: events,
                createWidget: input.createWidget
            }, function (widgetDef) {
                input.invokeBody(widgetDef);
            });
        } else {
            input.invokeBody(DUMMY_WIDGET_DEF);
        }
    }
};
module.exports = WidgetTag;
'use strict';
var widgets = require('../');
var DUMMY_WIDGET_DEF = {
        elId: function () {
        }
    };
module.exports = function render(input, context) {
    var path = input.path;
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
        throw new Error('Invalid widget ID for "' + path + '"');
    }
    var widgetsContext = widgets.getWidgetsContext(context);

    if (path) {
        widgetsContext.beginWidget({
            path: path,
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
};
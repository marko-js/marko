'use strict';
var widgets = require('../');
var DUMMY_WIDGET_DEF = {
        elId: function () {
        }
    };
module.exports = function render(input, context) {
    var modulePath = input.module;
    var config = input.config || input._cfg;
    var widgetArgs = context.attributes.widgetArgs;
    var id = input.id;
    var scope = input.scope || context.getAttribute('widget');
    var assignedId = input.assignedId;
    var events;
    if (widgetArgs) {
        delete context.attributes.widgetArgs;
        scope = scope || widgetArgs.scope;
        assignedId = assignedId || widgetArgs.id;
        events = widgetArgs.events;
    }
    if (!id && input.hasOwnProperty('id')) {
        throw new Error('Invalid widget ID for "' + modulePath + '"');
    }
    var widgetsContext = widgets.getWidgetsContext(context);

    if (modulePath) {

        var widgetDef = widgetsContext.beginWidget({
            module: modulePath,
            id: id,
            assignedId: assignedId,
            config: config,
            scope: scope,
            events: events,
            createWidget: input.createWidget
        });

        input.invokeBody(widgetDef);

        widgetDef.end();
    } else {
        input.invokeBody(DUMMY_WIDGET_DEF);
    }
};
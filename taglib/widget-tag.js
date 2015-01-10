'use strict';
var widgets = require('../');
var DUMMY_WIDGET_DEF = {
        elId: function () {
        }
    };
module.exports = function render(input, out) {
    var modulePath = input.module;
    var config = input.config || input._cfg;
    var widgetArgs = out.global.widgetArgs;
    var id = input.id;
    var scope = input.scope || out.getAttribute('widget');
    var assignedId = input.assignedId;
    var extend;

    var events;
    if (widgetArgs) {
        delete out.global.widgetArgs;
        scope = scope || widgetArgs.scope;
        assignedId = assignedId || widgetArgs.id;
        events = widgetArgs.events;
        extend = widgetArgs.extend;
    }

    if (!id && input.hasOwnProperty('id')) {
        throw new Error('Invalid widget ID for "' + modulePath + '"');
    }
    var widgetsContext = widgets.getWidgetsContext(out);

    if (modulePath) {

        var widgetDef = widgetsContext.beginWidget({
            module: modulePath,
            id: id,
            assignedId: assignedId,
            config: config,
            scope: scope,
            events: events,
            createWidget: input.createWidget,
            extend: extend
        });

        input.invokeBody(widgetDef);

        widgetDef.end();
    } else {
        input.invokeBody(DUMMY_WIDGET_DEF);
    }
};
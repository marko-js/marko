'use strict';
var widgets = require('../');
var extend = require('raptor-util/extend');

var DUMMY_WIDGET_DEF = {
        elId: function () {
        }
    };

function mergeExtendState(state, extendList) {
    state = extend({}, state);

    for (var i=2, len=extendList.length; i<len; i+=3) {
        extend(state, extendList[i]);
    }

    return state;
}

module.exports = function render(input, out) {
    var global = out.global;

    if (!global.__widgetsBeginAsyncAdded) {
        global.__widgetsBeginAsyncAdded = true;
        out.on('beginAsync', function(event) {
            var parentAsyncWriter = event.parentWriter;
            var asyncWriter = event.writer;
            var widgetsContext = global.widgets;
            var widgetStack;

            if (widgetsContext && (widgetStack = widgetsContext.widgetStack).length) {
                // All of the widgets in this async block should be
                // initialized after the widgets in the parent. Therefore,
                // we will create a new WidgetsContext for the nested
                // async block and will create a new widget stack where the current
                // widget in the parent block is the only widget in the nested
                // stack (to begin with). This will result in top-level widgets
                // of the async block being added as children of the widget in the
                // parent block.
                var nestedWidgetsContext = new widgets.WidgetsContext(out);
                nestedWidgetsContext.widgetStack = [widgetStack[0]];
                asyncWriter.data.widgets = nestedWidgetsContext;
            }

            asyncWriter.data.widgetArgs = parentAsyncWriter.data.widgetArgs;
        });
    }

    var modulePath = input.module;
    var config = input.config || input._cfg;
    var state = input.state || input._state;
    var widgetArgs = out.data.widgetArgs;
    var id = input.id;
    var extend;
    var domEvents = input.domEvents;
    var customEvents;
    var scope;

    if (widgetArgs) {
        delete out.data.widgetArgs;
        id = widgetArgs.id || id;
        extend = widgetArgs.extend;
        customEvents = widgetArgs.customEvents;
        scope = widgetArgs.scope;
    }

    var rerenderWidget = global.__rerenderWidget;
    var widgetsContext = widgets.getWidgetsContext(out);

    if (rerenderWidget) {
        id = rerenderWidget.id;
        delete global.__rerenderWidget;
    } else if (global.__rerender === true && state && id) {
        console.log('Checking for existing widget: ', id, 'STATE: ', state);
        var existingEl = document.getElementById(id);
        if (existingEl) {
            var existingWidget = existingEl.__widget;
            if (existingWidget) {
                // TODO Only reuse a widget if the types match
                out.write('<span id="' + id + '"></span>');

                if (extend) {
                    // Merge in any additional state if the widget is being extended
                    state = mergeExtendState(state, extend);
                }

                console.log('Found existing widget to reuse: ', id, 'STATE: ', state);

                widgetsContext.addReusableWidget(existingWidget, state);
                return;
            }
        }
    }

    if (!id && input.hasOwnProperty('id')) {
        throw new Error('Invalid widget ID for "' + modulePath + '"');
    }

    if (modulePath) {
        var widgetDef = widgetsContext.beginWidget({
            module: modulePath,
            id: id,
            config: config,
            state: state,
            domEvents: domEvents,
            customEvents: customEvents,
            scope: scope,
            createWidget: input.createWidget,
            extend: extend,
            existingWidget: rerenderWidget
        });

        input.renderBody(out, widgetDef);

        widgetDef.end();
    } else {
        input.renderBody(out, DUMMY_WIDGET_DEF);
    }
};
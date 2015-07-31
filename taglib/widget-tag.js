'use strict';
var markoWidgets = require('../');
var extend = require('raptor-util/extend');
var widgetArgsId = require('../lib/widget-args-id');

var DUMMY_WIDGET_DEF = {
        elId: function () {
        }
    };

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
                var nestedWidgetsContext = new markoWidgets.WidgetsContext(out);
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
    var bodyElId = input.body;

    var id = input.id;
    var extendList;
    var hasDomEvents = input.hasDomEvents;
    var customEvents;
    var scope;
    var extendState;
    var extendConfig;

    if (widgetArgs) {
        delete out.data.widgetArgs;
        scope = widgetArgs.scope;

        id = id || widgetArgsId(widgetArgs);
        extendList = widgetArgs.extend;
        customEvents = widgetArgs.customEvents;

        if ((extendState = widgetArgs.extendState)) {
            if (state) {
                extend(state, extendState);
            } else {
                state = extendState;
            }
        }

        if ((extendConfig = widgetArgs.extendConfig)) {
            if (config) {
                extend(config, extendConfig);
            } else {
                config = extendConfig;
            }
        }
    }

    var rerenderWidget = global.__rerenderWidget;
    var widgetsContext = markoWidgets.getWidgetsContext(out);

    if (rerenderWidget) {
        id = rerenderWidget.id;
        delete global.__rerenderWidget;
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
            hasDomEvents: hasDomEvents,
            customEvents: customEvents,
            scope: scope,
            createWidget: input.createWidget,
            extend: extendList,
            existingWidget: rerenderWidget,
            bodyElId: bodyElId
        });

        input.renderBody(out, widgetDef);

        markoWidgets.writeDomEventsEl(widgetDef, out);

        widgetDef.end();
    } else {
        input.renderBody(out, DUMMY_WIDGET_DEF);
    }
};
'use strict';
var markoWidgets = require('../');
var extend = require('raptor-util/extend');
var widgetArgsId = require('../lib/widget-args-id');

var DUMMY_WIDGET_DEF = {
        elId: function () {
        }
    };

/**
 * Look in in the DOM to see if a widget with the same ID and type already exists.
 */
function getExistingWidget(id, type) {
    var existingEl = document.getElementById(id);
    var existingWidget;

    if (existingEl && (existingWidget = existingEl.__widget) && existingWidget.__type === type) {
        return existingWidget;
    }

    return null;
}

function preserveWidgetEl(existingWidget, out, widgetsContext) {
    // We put a placeholder element in the output stream to ensure that the existing
    // DOM node is matched up correctly when using morphdom.
    var tagName = existingWidget.el.tagName;
    out.write('<' + tagName + ' id="' + existingWidget.id + '"></' + tagName + '>');
    existingWidget._reset(); // The widget is no longer dirty so reset internal flags
    widgetsContext.addPreservedDOMNode(existingWidget.el); // Mark the element as being preserved (for morphdom)
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
    var props = input.props || input._props;
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
    var isRerender = global.__rerender === true;

    var widgetsContext = markoWidgets.getWidgetsContext(out);

    if (!id) {
        var parentWidget = widgetsContext.getCurrentWidget();

        if (parentWidget) {
            id = parentWidget.nextId();
        }
    }

    var existingWidget;

    if (rerenderWidget) {
        existingWidget = rerenderWidget;
        id = rerenderWidget.id;
        delete global.__rerenderWidget;
    } else if (isRerender) {
        existingWidget = getExistingWidget(id, modulePath);
    }

    if (!id && input.hasOwnProperty('id')) {
        throw new Error('Invalid widget ID for "' + modulePath + '"');
    }

    if (modulePath) {
        var shouldRenderBody = true;

        if (existingWidget && !rerenderWidget) {
            // This is a nested widget found during a rerender. We don't want to needlessly
            // rerender the widget if that is not necessary. If the widget is a stateful
            // widget then we update the existing widget with the new state.
            if (state) {
                existingWidget._replaceState(state); // Update the existing widget state using the internal/private
                                                     // method to ensure that another update is not queued up

                // If the widget has custom state update handlers then we will use those methods
                // to update the widget.
                if (existingWidget._processUpdateHandlers() === true) {
                    // If _processUpdateHandlers() returns true then that means
                    // that the widget is now up-to-date and we can skip rerendering it.
                    shouldRenderBody = false;
                    preserveWidgetEl(existingWidget, out, widgetsContext);
                    return;
                }
            }

            // If the widget is not dirty (no state changes) and shouldUpdate() returns false
            // then skip rerendering the widget.
            if (!existingWidget.isDirty() && !existingWidget.shouldUpdate(props, state)) {
                shouldRenderBody = false;
                preserveWidgetEl(existingWidget, out, widgetsContext);
                return;
            }
        }

        if (existingWidget) {
            existingWidget._emitLifecycleEvent('beforeUpdate');
        }

        var widgetDef = widgetsContext.beginWidget({
            type: modulePath,
            id: id,
            config: config,
            state: state,
            hasDomEvents: hasDomEvents,
            customEvents: customEvents,
            scope: scope,
            createWidget: input.createWidget,
            extend: extendList,
            existingWidget: existingWidget,
            bodyElId: bodyElId
        });

        // Only render the widget if it needs to be rerendered
        if (shouldRenderBody) {
            input.renderBody(out, widgetDef);
            markoWidgets.writeDomEventsEl(widgetDef, out);
        }

        widgetDef.end();
    } else {
        input.renderBody(out, DUMMY_WIDGET_DEF);
    }
};
/*
 * Copyright 2011 eBay Software Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
var markoWidgets = require('../');
var extend = require('raptor-util/extend');
var widgetArgsId = require('../widget-args-id');
var widgetBodyHelper = require('./helpers/widgetBody');

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

function registerWidgetType(widgetType) {
    if (!widgetType.registered) {
        // Only need to register the widget type once
        widgetType.registered = true;
        markoWidgets.registerWidget(widgetType);
    }
}

function preserveWidgetEl(existingWidget, out, widgetsContext, widgetBody) {
    var tagName = existingWidget.el.tagName;
    var hasUnpreservedBody = false;

    // We put a placeholder element in the output stream to ensure that the existing
    // DOM node is matched up correctly when using morphdom.

    out.beginElement(tagName, { id: existingWidget.id });

    if (widgetBody && existingWidget.bodyEl) {
        hasUnpreservedBody = true;
        widgetBodyHelper(out, existingWidget.bodyEl.id, widgetBody, existingWidget);
    }

    out.endElement();

    existingWidget._reset(); // The widget is no longer dirty so reset internal flags
    widgetsContext.addPreservedDOMNode(existingWidget.el, null, hasUnpreservedBody); // Mark the element as being preserved (for morphdom)
}


function handleBeginAsync(event) {
    var parentOut = event.parentOut;
    var asyncOut = event.out;
    var widgetsContext = asyncOut.global.widgets;
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
        var nestedWidgetsContext = new markoWidgets.WidgetsContext(asyncOut);
        nestedWidgetsContext.widgetStack = [widgetStack[widgetStack.length-1]];
        asyncOut.data.widgets = nestedWidgetsContext;
    }

    asyncOut.data.widgetArgs = parentOut.data.widgetArgs;
}

module.exports = function widgetTag(input, out) {
    var global = out.global;

    if (!global.__widgetsBeginAsyncAdded) {
        global.__widgetsBeginAsyncAdded = true;
        out.on('beginAsync', handleBeginAsync);
    }

    var type = input.type;
    var config = input.config || input._cfg;
    var state = input.state || input._state;
    var props = input.props || input._props;
    var widgetArgs = out.data.widgetArgs;
    var bodyElId = input.body;
    var widgetBody = input._body;
    var typeName = type && type.name;

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

        if (extendList) {
            extendList = extendList.map(function(extendType) {
                registerWidgetType(extendType);
                return extendType.name;
            });
        }

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
        existingWidget = getExistingWidget(id, typeName);
    }

    if (!id && input.hasOwnProperty('id')) {
        throw new Error('Invalid widget ID for "' + typeName + '"');
    }

    if (typeName) {
        registerWidgetType(type);

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
                    preserveWidgetEl(existingWidget, out, widgetsContext, widgetBody);
                    return;
                }
            }

            // If the widget is not dirty (no state changes) and shouldUpdate() returns false
            // then skip rerendering the widget.
            if (!existingWidget.isDirty() && !existingWidget.shouldUpdate(props, state)) {
                shouldRenderBody = false;
                preserveWidgetEl(existingWidget, out, widgetsContext, widgetBody);
                return;
            }
        }

        if (existingWidget) {
            existingWidget._emitLifecycleEvent('beforeUpdate');
        }

        var widgetDef = widgetsContext.beginWidget({
            type: typeName,
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
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
/**
* @extension Browser
* 
*/
'use strict';
require('raptor-ecma/es6');
var forEach = require('raptor-util/forEach');
var inherit = require('raptor-util/inherit');
var logger = require('raptor-logging').logger(module);
var scopes = window.$rwidgetScopes || (window.$rwidgetScopes = {});
var isArray = Array.isArray;
var Widget = require('./Widget');
var ready = require('raptor-dom').ready;

function _convertEvents(events) {
    var convertedEvents = {};
    forEach(events, function (event) {
        convertedEvents[event[0]] = {
            target: event[1],
            props: event[2]
        };
    });

    return convertedEvents;
}

function Scope() {
}
/**
 * 
 */
Scope.prototype = {
    _remove: function (widget, id) {
        var existing = this[id];
        if (isArray(existing)) {
            this[id] = existing.filter(function (cur) {
                return cur !== widget;
            });
        } else {
            delete this[id];
        }
    },
    _add: function (widget, id, isTargetArray) {
        var existing = this[id];
        if (!existing) {
            this[id] = isTargetArray ? [widget] : widget;
        } else {
            if (isArray(existing)) {
                existing.push(widget);
            } else {
                this[id] = [
                    existing,
                    widget
                ];
            }
        }
    },
    getWidget: function (id) {
        return this[id];
    },
    getWidgets: function (id) {
        var widgets = this[id];
        return widgets ? isArray(widgets) ? widgets : [widgets] : [];
    }
};

function getScope(id) {
    return scopes[id] || (scopes[id] = new Scope());
}

function _registerWidget(path, id, assignedId, config, scope, events, bubbleErrorsDisabled) {
    var widget;
    var OriginalWidgetClass = require(path);
    // The user-provided constructor function
    if (logger.isDebugEnabled()) {
        logger.debug('Creating widget for path "' + path + '" (' + id + ')');   
    }
    
    if (OriginalWidgetClass.initWidget) {
        //Check if the Widget has an "initWidget" function that will do the initialization
        /*
         * Update the config with the information that 
         * the user "initWidget" function by need:
         */
        config.elId = id;
        config.events = events;
        widget = OriginalWidgetClass;
        //Use the provided object as the widget
    } else if (typeof OriginalWidgetClass === 'function') {
        var WidgetClass = function() {
            Widget.call(this, id);
            this.widgets = getScope(id);

            if (events) {
                widget._events = _convertEvents(events);
            }
        };

        var proto;

        if (!OriginalWidgetClass.prototype._isWidget) {
            inherit(OriginalWidgetClass, Widget);
        }

        //This will be a reference to the original prorotype
        WidgetClass.prototype = proto = OriginalWidgetClass.prototype;
        widget = new WidgetClass();

        
        
        // Register the widget in a global lookup
        if (assignedId && scope) {
            var isTargetArray;
            if (assignedId.endsWith('[]')) {
                // When adding the widgets to a collection, an array can be forced by using a [] suffix for the assigned widget ID
                assignedId = assignedId.slice(0, -2);
                isTargetArray = true;
            }
            widget._assignedId = assignedId;
            widget._scope = scope;
            getScope(scope)._add(widget, assignedId, isTargetArray);
        }
    } else {
        throw new Error('Invalid widget: ' + path);
    }
    
    return {
        widget: widget,
        init: function () {
            function _doInitWidget() {
                try {
                    if (widget.initWidget) {
                        widget.initWidget(config);
                    } else {
                        OriginalWidgetClass.call(widget, config);
                    }
                } catch (e) {
                    var message = 'Unable to initialize widget for path "' + path + '". Exception: ' + e;
                    // NOTE:
                    // For widgets rendered on the server we disable errors from bubbling to allow the page to possibly function
                    // in a partial state even if some of the widgets fail to initialize.
                    // For widgets rendered on the client we enable bubbling to make sure calling code is aware of the error.
                    if (bubbleErrorsDisabled) {
                        logger.error(message, e);
                    } else {
                        throw e;
                    }
                }
            }
            if (widget.initBeforeOnDomReady === true) {
                _doInitWidget();
            } else {
                ready(_doInitWidget, widget);
            }
        }
    };
}

module.exports = {
    getWidgetsContext: require('./WidgetsContext').getWidgetsContext,
    uniqueId: require('./uniqueId'),
    initWidget: function (widgetDef) {
        var result = _registerWidget(
            widgetDef.path,
            widgetDef.id,
            widgetDef.assignedId,
            widgetDef.config,
            widgetDef.scope ? widgetDef.scope.id : null,
            widgetDef.events);

        widgetDef.widget = result.widget;
        if (widgetDef.children.length) {
            widgetDef.children.forEach(this.initWidget, this);
        }
        // Complete the initialization of this widget after all of the children have been initialized
        result.init();
    },
    _init: function (path, id, config, scope, assignedId, events) {
        _registerWidget(
            path,
            id,
            assignedId || null,
            config || {},
            scope || null,
            events || null,
            1)
            .init();
    },
    get: function (id) {
        if (!id) {
            return null;
        }

        var node = document.getElementById(id);
        return node.__widget || null;
    },
    ready: ready,
    _remove: function (id) {
        delete scopes[id];
    }
};

require('raptor-pubsub')
    .on('dom/beforeRemove', function(eventArgs) {
        var el = eventArgs.el;
        var widget = el.id ? require('./').get(el.id) : null;
        if (widget) {
            widget.destroy({
                removeNode: false,
                recursive: true
            });
        }
    })
    .on('raptor-renderer/renderedToDOM', function(eventArgs) {
        var context = eventArgs.context;
        var widgetsContext = context.attributes.widgets;
        if (widgetsContext) {
            widgetsContext.initWidgets();    
        }
    });
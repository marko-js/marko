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
require('raptor-ecma/es6');
var forEach = require('raptor-util/forEach');
var inherit = require('raptor-util/inherit');
var logger = require('raptor-logging').logger(module);
var raptorPubsub = require('raptor-pubsub');
var scopes = window.$rwidgetScopes || (window.$rwidgetScopes = {});
var isArray = Array.isArray;
var Widget = require('./Widget');
var ready = require('raptor-dom').ready;
var EMPTY_OBJ = {};

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

function _registerWidget(modulePath, id, assignedId, config, scope, events, bubbleErrorsDisabled) {
    var widget;
    var OriginalWidgetClass = require(modulePath);
    // The user-provided constructor function
    if (logger.isDebugEnabled()) {
        logger.debug('Creating widget: ' + modulePath + ' (' + id + ')');   
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
        throw new Error('Invalid widget: ' + modulePath);
    }
    
    raptorPubsub.emit('raptor-widgets/initWidget', {
        widget: widget,
        config: config
    });

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
                    var message = 'Unable to initialize widget of type "' + modulePath + '" . Exception: ' + e;
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

function registerWidgetFromEl(el) {
    var id = el.id;
    var modulePath = el.getAttribute('data-rwidget');
    var config = el.getAttribute('data-rwidget-config');
    if (config) {
        config = JSON.parse(config);
    }

    var assignedId = el.getAttribute('data-rwidget-id');
    var scope;

    if (assignedId) {
        var separatorPos = assignedId.indexOf('|');
        if (separatorPos !== -1) {
            scope = assignedId.substring(0, separatorPos);
            assignedId = assignedId.substring(separatorPos+1);
        }
    }

    var events = el.getAttribute('data-rwidget-events');
    if (events) {
        events = JSON.parse(events);
    }

    _registerWidget(
        modulePath,
        id,
        assignedId,
        config,
        scope,
        events,
        1)
        .init();
}

function walkChildren(parent) {
    var curNode = parent.firstChild;
    while(curNode) {
        if (curNode.nodeType === 1) {
            var rwidgetAttr = curNode.getAttribute('data-rwidget');
            if (rwidgetAttr) {
                registerWidgetFromEl(curNode);
            }

            if (curNode.firstChild) {
                walkChildren(curNode);
            }
        }
        curNode = curNode.nextSibling;
    }
}

function initAllWidgets() {
    if (document.querySelectorAll) {
        var matches = document.querySelectorAll('[data-rwidget]');
        for (var i = matches.length; i--;) {
            registerWidgetFromEl(matches[i]);
        }
    } else {
        walkChildren(document.body);
    }
}

module.exports = {
    getWidgetsContext: require('./WidgetsContext').getWidgetsContext,
    uniqueId: require('./uniqueId'),
    initWidget: function (widgetDef) {
        var result = _registerWidget(
            widgetDef.module,
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
    initAllWidgets: initAllWidgets,
    _init: function () {
        ready(function() {
            var idsEl = document.getElementById('rwidgets');
            if (!idsEl) {
                return;
            }

            var dataIds = idsEl.getAttribute('data-ids');
            if (dataIds === '*') {
                initAllWidgets();
            } else {
                var ids = idsEl.getAttribute('data-ids').split(',');
                var len = ids.length;
                for (var i=0; i<len; i++) {
                    var id = ids[i];
                    var el = document.getElementById(id);
                    if (!el) {
                        logger.error('DOM node for widget with ID "' + id + '" not found');
                        continue;
                    }
                    registerWidgetFromEl(el);
                }
            }

            
        });
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
    },

    subscribeToInitWidget: function(listener, thisObj) {
        raptorPubsub.on('raptor-widgets/initWidget', listener, thisObj);
    },
    attrs: function() {
        return EMPTY_OBJ;
    }
};

raptorPubsub
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
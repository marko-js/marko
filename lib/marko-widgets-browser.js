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
var raptorPubsub = require('raptor-pubsub');
var ready = require('raptor-dom').ready;
var EMPTY_OBJ = {};
var Widget = require('./Widget');
var initWidgets = require('./init-widgets');
var _addEventListener = require('./addEventListener');


// Exports:
exports.getWidgetsContext = require('./WidgetsContext').getWidgetsContext;
exports.Widget = Widget;
exports.ready = ready;
exports.onInitWidget = function(listener) {
    raptorPubsub.on('marko-widgets/initWidget', listener);
};
exports.attrs = function() {
    return EMPTY_OBJ;
};
exports.get = exports.getWidgetForEl = function (id) {
    if (!id) {
        return null;
    }

    var node = typeof id === 'string' ? document.getElementById(id) : id;
    return (node && node.__widget) || null;
};
exports.initAllWidgets = function() {
    initWidgets.initServerRendered(true /* scan DOM */);
};

// Subscribe to DOM manipulate events to handle creating and destroying widgets
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



window.$rwidgets = function(ids) {
    initWidgets.initServerRendered(ids);
};

var JQUERY = 'jquery';
var jquery = window.$;

if (!jquery) {
    try {
        jquery = require(JQUERY);
    }
    catch(e) {}
}

exports.$ = jquery;

ready(function() {
    var body = document.body;
    require('./bubble').forEach(function addBubbleHandler(eventType) {
        _addEventListener(body, eventType, function(event) {
            var curNode = event.target;
            if (!curNode) {
                return;
            }

            // Search up the tree looking DOM events mapped to target
            // widget methods
            var attrName = 'data-w-on' + eventType;
            var targetMethod;
            var targetWidget;

            // Attributes will have the following form:
            // w-on<event_type>="<target_method>|<widget_id>"

            do {
                if ((targetMethod = curNode.getAttribute(attrName))) {
                    var separator = targetMethod.lastIndexOf('|');
                    targetWidget = targetMethod.substring(separator+1);
                    targetWidget = document.getElementById(targetWidget).__widget;
                    targetMethod = targetMethod.substring(0, separator);

                    // Invoke the widget method
                    targetWidget[targetMethod](event, curNode);
                }
            } while((curNode = curNode.parentNode) && curNode.getAttribute);
        });
    });
});

exports.registry = require('./registry');

exports.getDynamicClientWidgetPath = function(targetModuleFile) {
    return targetModuleFile;
};

exports.renderable = require('raptor-renderer').renderable;
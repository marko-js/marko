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

// Exports:
exports.getWidgetsContext = require('./WidgetsContext').getWidgetsContext;
exports.Widget = Widget;
exports.uniqueId = require('./uniqueId');
exports.ready = ready;
exports.onInitWidget = function(listener) {
    raptorPubsub.on('marko-widgets/initWidget', listener);
};
exports.attrs = function() {
    return EMPTY_OBJ;
};
exports.get = function (id) {
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
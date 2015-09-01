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
* Module to manage the lifecycle of widgets
*
*/
var stringify = require('raptor-json/stringify');
var raptorRenderer = require('raptor-renderer');

var WidgetsContext = require('./WidgetsContext');
var TAG_START = '<span id="markoWidgets" data-ids="';
var TAG_END = '" style="display:none;"></span>';
var STRINGIFY_OPTIONS = {
    special: /([^ -~]|(["'\\<&%]))/g,
    replace: {
        '"': '\\u0022',
        '\n': '\\n'
    },
    useSingleQuote: true
};

function WrappedString(val) {
    this.html = val;
}

WrappedString.prototype = {
    toString: function() {
        return this.html;
    }
};

exports.WidgetsContext = WidgetsContext;
exports.getWidgetsContext = WidgetsContext.getWidgetsContext;
exports.uniqueId = require('./uniqueId');
exports.attrs = function(widgetDef) {
    if (!widgetDef.type) {
        return null;
    }

    var attrs = {
        'data-widget': widgetDef.type
    };

    var widgetConfig = widgetDef.config;
    if (widgetConfig) {
        attrs['data-w-config'] = new WrappedString(stringify(widgetConfig, STRINGIFY_OPTIONS));
    }

    var widgetState = widgetDef.state;
    if (widgetState) {
        attrs['data-w-state'] = new WrappedString(stringify(widgetState, STRINGIFY_OPTIONS));
    }

    var hasDomEvents = widgetDef.hasDomEvents;
    if (hasDomEvents) {
        attrs['data-w-on'] = '1';
    }

    var customEvents = widgetDef.customEvents;
    if (customEvents) {
        attrs['data-w-events'] = widgetDef.scope + ',' + customEvents.join(',');
    }

    var extend = widgetDef.extend;

    if (extend && extend.length) {
        attrs['data-w-extend'] = new WrappedString(extend.join(','));
    }

    var bodyElId = widgetDef.bodyElId;
    if (bodyElId != null) {
        attrs['data-w-body'] = bodyElId === '' ? true : bodyElId;
    }

    return attrs;
};
exports.writeDomEventsEl = function(widgetDef, out) {
    var domEvents = widgetDef.domEvents;
    if (domEvents) {
        out.write('<span id="' + widgetDef.elId('$on') + '" data-on="' + domEvents.join(',') + '"></span>');
    }
};

exports.writeInitWidgetsCode = function(widgetsContext, out, options) {
    var clearWidgets = true;
    var scanDOM = false;
    var immediate = false;

    if (options) {
        clearWidgets = options.clearWidgets !== false;
        scanDOM = options.scanDOM === true;
        immediate = options.immediate === true;
    }

    if (scanDOM) {
        out.write(TAG_START + '*' + TAG_END);
    } else {
        var widgets = widgetsContext.getWidgets();

        if (!widgets || !widgets.length) {
            return;
        }

        var ids = '';

        var commaRequired = false;

        var writeWidget = function(widget) {

            if (widget.children.length) {
                // Depth-first search (children should be initialized before parent)
                writeWidgets(widget.children);
            }

            if (commaRequired) {
                ids += ',';
            } else {
                commaRequired = true;
            }

            ids += widget.id;
        };

        var writeWidgets = function(widgets) {
            for (var i = 0, len = widgets.length; i < len; i++) {
                writeWidget(widgets[i]);
            }
        };

        writeWidgets(widgets);

        if (immediate) {
            out.write('<script type="text/javascript">$markoWidgets("' + ids + '")</script>');
        } else {
            out.write(TAG_START + ids + TAG_END);
        }
    }

    if (clearWidgets !== false) {
        widgetsContext.clearWidgets();
    }
};


function getWidgetIdsString(widgetsContext) {
    if (!widgetsContext) {
        throw new Error('"widgetsContext" is required');
    }

    if (!(widgetsContext instanceof WidgetsContext)) {
        // Assume that the provided "widgetsContext" argument is
        // actually an AsyncWriter
        var asyncWriter = widgetsContext;
        if (!asyncWriter.global) {
            throw new Error('Invalid argument: ' + widgetsContext);
        }

        widgetsContext = WidgetsContext.getWidgetsContext(asyncWriter);
    }

    var widgets = widgetsContext.getWidgets();
    if (!widgets || !widgets.length) {
        return;
    }

    var ids = '';

    var commaRequired = false;

    function writeWidget(widget) {

        if (widget.children.length) {
            // Depth-first search (children should be initialized before parent)
            writeWidgets(widget.children);
        }

        if (commaRequired) {
            ids += ',';
        } else {
            commaRequired = true;
        }

        ids += widget.id;
    }

    function writeWidgets(widgets) {
        for (var i = 0, len = widgets.length; i < len; i++) {
            writeWidget(widgets[i]);
        }
    }

    writeWidgets(widgets);

    return ids;
}


exports.getInitWidgetsCode = function(widgetsContext) {
    var idsString = getWidgetIdsString(widgetsContext);
    return '$markoWidgets("' + idsString + '");';
};

exports.getRenderedWidgetIds = function(widgetsContext) {
    var idsString = getWidgetIdsString(widgetsContext);
    return idsString;
};

exports.makeRenderable = exports.renderable = raptorRenderer.renderable;
exports.render = raptorRenderer.render;

exports.defineComponent = require('./defineComponent');
exports.defineWidget = require('./defineWidget');
exports.defineRenderer = require('./defineRenderer');

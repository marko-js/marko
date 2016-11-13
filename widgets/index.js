/**
* Module to manage the lifecycle of widgets
*
*/
'use strict';
var warp10 = require('warp10');
var isObjectEmpty = require('raptor-util/isObjectEmpty');
var WidgetsContext = require('./WidgetsContext');

const WARP10_STATE_SERIALIZATION_OPTIONS = {var: '$markoWidgetsState', additive: true};
const WARP10_CONFIG_SERIALIZATION_OPTIONS = {var: '$markoWidgetsConfig', additive: true};

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

function writeInitWidgetsCode(widgetsContext, out) {
    var widgets = widgetsContext.getWidgets();

    if (!widgets || !widgets.length) {
        return;
    }

    var ids = '';

    var commaRequired = false;
    var writeWidgets;

    // Build separate objects for storing widget state and widget config. These objects
    // will be serialized and sent to the browser using warp10
    var widgetStateStore = {};
    var widgetConfigStore = {};

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

        var widgetConfig = widget.config;
        if (widgetConfig) {
            // Put the widget config in the store using the widget ID as the key
            widgetConfigStore[widget.id] = widgetConfig;
        }

        var widgetState = widget.state;
        if (widgetState) {
            // Put the widget state in the store using the widget ID as the key
            widgetStateStore[widget.id] = widgetState;
        }

        ids += widget.id;
    };

    writeWidgets = function(widgets) {
        for (var i = 0, len = widgets.length; i < len; i++) {
            writeWidget(widgets[i]);
        }
    };

    writeWidgets(widgets);

    var widgetStateDeserializationCode;
    var widgetConfigDeserializationCode;

    if (isObjectEmpty(widgetStateStore)) {
        widgetStateDeserializationCode = '';
    } else {
        widgetStateDeserializationCode = warp10.serialize(widgetStateStore, WARP10_STATE_SERIALIZATION_OPTIONS) +
                ';\n';
    }

    if (isObjectEmpty(widgetConfigStore)) {
        widgetConfigDeserializationCode = '';
    } else {
        widgetConfigDeserializationCode = warp10.serialize(widgetConfigStore,WARP10_CONFIG_SERIALIZATION_OPTIONS) +
                ';\n';
    }

    var cspNonce = out.global.cspNonce;
    var nonceAttr = cspNonce ? ' nonce='+JSON.stringify(cspNonce) : '';

    out.write('<script' + nonceAttr + '>' +
        widgetStateDeserializationCode +
        widgetConfigDeserializationCode +
        '(function(){var w=window;(w.$widgets||w.$widgets||(w.$widgets=[])).push("' + ids + '")})()</script>');

    widgetsContext.clearWidgets();
}

exports.writeInitWidgetsCode = writeInitWidgetsCode;

function getRenderedWidgets(widgetsContext) {
    if (!widgetsContext) {
        throw new Error('"widgetsContext" is required');
    }

    if (!(widgetsContext instanceof WidgetsContext)) {
        // Assume that the provided "widgetsContext" argument is
        // actually an AsyncWriter
        var out = widgetsContext;
        if (!out.global) {
            throw new Error('Invalid argument: ' + widgetsContext);
        }

        widgetsContext = WidgetsContext.getWidgetsContext(out);
    }

    var widgets = widgetsContext.getWidgets();
    if (!widgets || !widgets.length) {
        return;
    }

    var ids = '';

    var commaRequired = false;

    var widgetStateStore = {};
    var widgetConfigStore = {};

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

        var widgetConfig = widget.config;
        if (widgetConfig) {
            widgetConfigStore[widget.id] = widgetConfig;
        }

        var widgetState = widget.state;
        if (widgetState) {
            widgetStateStore[widget.id] = widgetState;
        }

        ids += widget.id;
    }

    function writeWidgets(widgets) {
        for (var i = 0, len = widgets.length; i < len; i++) {
            writeWidget(widgets[i]);
        }
    }

    writeWidgets(widgets);

    return {
        ids: ids,
        state: widgetStateStore,
        config: widgetConfigStore
    };
}


exports.getInitWidgetsCode = function(widgetsContext) {
    var renderedWidgets = getRenderedWidgets(widgetsContext);
    var ids = renderedWidgets.ids;
    var state = renderedWidgets.state;
    var config = renderedWidgets.config;

    var code = '';

    if (!isObjectEmpty(state)) {
        code += warp10.serialize(
                state,
                WARP10_STATE_SERIALIZATION_OPTIONS) +
                ';\n';
    }

    if (!isObjectEmpty(config)) {
        code += warp10.serialize(
                config,
                WARP10_CONFIG_SERIALIZATION_OPTIONS) +
                ';\n';
    }

    code += '$markoWidgets("' + ids + '");';
    return code;
};


/**
 * Returns an object that can be sent to the browser using JSON.stringify. The parsed object should be
 * passed to require('marko-widgets').initWidgets(...);
 *
 * @param  {WidgetsContext|AsyncWriter} widgetsContext A WidgetsContext or an AsyncWriter
 * @return {Object} An object with information about the rendered widgets that can be serialized to JSON. The object should be treated as opaque
 */
exports.getRenderedWidgets = exports.getRenderedWidgetIds /* deprecated */ = function(widgetsContext) {
    var renderedWidgets = getRenderedWidgets(widgetsContext);
    var ids = renderedWidgets.ids;
    var state = renderedWidgets.state;
    var config = renderedWidgets.config;

    var result = {
        ids: ids
    };

    // NOTE: Calling warp10.stringifyPrepare(obj) will produce a new object that is safe to serializing using
    //       JSON.stringify(). The deserialized/parsed object will need to be converted to the final object using
    //       warp10.finalize(obj)
    if (!isObjectEmpty(state)) {
        result.state = warp10.stringifyPrepare(state);
    }

    if (!isObjectEmpty(config)) {
        result.config = warp10.stringifyPrepare(config);
    }

    return result;
};

exports.defineComponent = require('./defineComponent');
exports.defineWidget = require('./defineWidget');
exports.defineRenderer = require('./defineRenderer');
exports.makeRenderable = exports.renderable = require('./renderable');

exports.c = function(component, template) {
    component.template = template;
    return exports.defineComponent(component);
};

exports.r = function(renderer, template) {
    renderer.template = template;
    return exports.defineRenderer(renderer);
};

// registerWidget is a no-op on the server.
// Fixes https://github.com/marko-js/marko-widgets/issues/111
exports.registerWidget = function(typeName) { return typeName; };

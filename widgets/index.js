/**
* Module to manage the lifecycle of widgets
*
*/
'use strict';
var warp10 = require('warp10');
var WidgetsContext = require('./WidgetsContext');
var escapeEndingScriptTagRegExp = /<\//g;

function flattenHelper(widgets, flattened, typesArray, typesLookup) {
    for (var i = 0, len = widgets.length; i < len; i++) {
        var widgetDef = widgets[i];
        var customEvents = widgetDef.$__customEvents;
        var id = widgetDef.id;
        var widget = widgetDef.$__widget;
        var state = widget.state;
        var input = widget.input;
        var typeName = widget.typeName;

        widget.state = undefined; // We don't use `delete` to avoid V8 deoptimization
        widget.input = undefined; // We don't use `delete` to avoid V8 deoptimization
        widget.typeName = undefined;
        widget.id = undefined;

        if (!typeName) {
            continue;
        }

        var typeIndex = typesLookup[typeName];
        if (typeIndex === undefined) {
            typeIndex = typesArray.length;
            typesArray.push(typeName);
            typesLookup[typeName] = typeIndex;
        }

        var children = widgetDef.$__children;

        if (children) {
            // Depth-first search (children should be initialized before parent)
            flattenHelper(children, flattened, typesArray, typesLookup);
        }


        var hasProps = false;

        for (var key in widget) {
            if (widget.hasOwnProperty(key) && widget[key] !== undefined) {
                hasProps = true;
            }
        }

        var undefinedPropNames;

        if (state) {
            // Update state properties with an `undefined` value to have a `null`
            // value so that the property name will be serialized down to the browser.
            // This ensures that we add the proper getter/setter for the state property.
            for (var k in state) {
                if (state[k] === undefined) {
                    if (undefinedPropNames) {
                        undefinedPropNames.push(k);
                    } else {
                        undefinedPropNames = [k];
                    }
                }
            }
        }

        var extra = {
            p: customEvents && widgetDef.$__scope, // Only serialize scope if we need to attach custom events
            d: widgetDef.$__domEvents,
            b: widgetDef.$__bubblingDomEvents,
            e: widgetDef.$__customEvents,
            w: hasProps ? widget : undefined,
            s: state,
            r: widgetDef.$__roots,
            u: undefinedPropNames
        };

        flattened.push([
            id,                  // 0 = id
            typeIndex,           // 1 = type
            input,               // 2 = input
            extra                // 3
        ]);
    }
}

function getRenderedWidgets(widgetsContext) {
    var widgets = widgetsContext.$__widgets;
    if (!widgets || !widgets.length) {
        return;
    }

    var flattened = [];
    var typesLookup = {};
    var typesArray = [];

    flattenHelper(widgets, flattened, typesArray, typesLookup);
    return {w: flattened, t: typesArray};
}


function writeInitWidgetsCode(widgetsContext, out) {
    var renderedWidgets = getRenderedWidgets(widgetsContext);
    if (!renderedWidgets) {
        return;
    }

    var cspNonce = out.global.cspNonce;
    var nonceAttr = cspNonce ? ' nonce='+JSON.stringify(cspNonce) : '';

    out.write('<script' + nonceAttr + '>' +
        '(function(){var w=window;w.$widgets=(w.$widgets||[]).concat(' +
        warp10.stringify(renderedWidgets).replace(escapeEndingScriptTagRegExp, '\\u003C/') +
         ')||w.$widgets})()</script>');

    widgetsContext.$__clearWidgets();
}

exports.writeInitWidgetsCode = writeInitWidgetsCode;

/**
 * Returns an object that can be sent to the browser using JSON.stringify. The parsed object should be
 * passed to require('marko-widgets').initWidgets(...);
 *
 * @param  {WidgetsContext|AsyncWriter} widgetsContext A WidgetsContext or an AsyncWriter
 * @return {Object} An object with information about the rendered widgets that can be serialized to JSON. The object should be treated as opaque
 */
exports.getRenderedWidgets = function(widgetsContext) {
    if (!(widgetsContext instanceof WidgetsContext)) {
        // Assume that the provided "widgetsContext" argument is
        // actually an AsyncWriter
        var out = widgetsContext;
        if (!out.global) {
            throw new Error('Invalid argument: ' + widgetsContext);
        }

        widgetsContext = WidgetsContext.$__getWidgetsContext(out);
    }

    var renderedWidgets = getRenderedWidgets(widgetsContext);
    return warp10.stringifyPrepare(renderedWidgets);
};

exports.r = require('./renderer');

exports.w = function() { /* no op for defining a widget on teh server */ };

// registerWidget is a no-op on the server.
// Fixes https://github.com/marko-js/marko-widgets/issues/111
exports.rw = function(typeName) { return typeName; };

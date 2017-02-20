/**
* Module to manage the lifecycle of components
*
*/
'use strict';
var warp10 = require('warp10');
var ComponentsContext = require('./ComponentsContext');
var escapeEndingScriptTagRegExp = /<\//g;

function flattenHelper(components, flattened, typesArray, typesLookup) {
    for (var i = 0, len = components.length; i < len; i++) {
        var componentDef = components[i];
        var customEvents = componentDef.$__customEvents;
        var id = componentDef.id;
        var component = componentDef.$__component;
        var state = component.state;
        var input = component.input;
        var typeName = component.typeName;

        component.state = undefined; // We don't use `delete` to avoid V8 deoptimization
        component.input = undefined; // We don't use `delete` to avoid V8 deoptimization
        component.typeName = undefined;
        component.id = undefined;

        if (!typeName) {
            continue;
        }

        var typeIndex = typesLookup[typeName];
        if (typeIndex === undefined) {
            typeIndex = typesArray.length;
            typesArray.push(typeName);
            typesLookup[typeName] = typeIndex;
        }

        var children = componentDef.$__children;

        if (children) {
            // Depth-first search (children should be initialized before parent)
            flattenHelper(children, flattened, typesArray, typesLookup);
        }


        var hasProps = false;

        for (var key in component) {
            if (component.hasOwnProperty(key) && component[key] !== undefined) {
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
            p: customEvents && componentDef.$__scope, // Only serialize scope if we need to attach custom events
            d: componentDef.$__domEvents,
            b: componentDef.$__bubblingDomEvents,
            e: componentDef.$__customEvents,
            w: hasProps ? component : undefined,
            s: state,
            r: componentDef.$__roots,
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

function getRenderedComponents(componentsContext) {
    var components = componentsContext.$__components;
    if (!components || !components.length) {
        return;
    }

    var flattened = [];
    var typesLookup = {};
    var typesArray = [];

    flattenHelper(components, flattened, typesArray, typesLookup);
    return {w: flattened, t: typesArray};
}


function writeInitComponentsCode(componentsContext, out) {
    var renderedComponents = getRenderedComponents(componentsContext);
    if (!renderedComponents) {
        return;
    }

    var cspNonce = out.global.cspNonce;
    var nonceAttr = cspNonce ? ' nonce='+JSON.stringify(cspNonce) : '';

    out.write('<script' + nonceAttr + '>' +
        '(function(){var w=window;w.$components=(w.$components||[]).concat(' +
        warp10.stringify(renderedComponents).replace(escapeEndingScriptTagRegExp, '\\u003C/') +
         ')||w.$components})()</script>');

    componentsContext.$__clearComponents();
}

exports.writeInitComponentsCode = writeInitComponentsCode;

/**
 * Returns an object that can be sent to the browser using JSON.stringify. The parsed object should be
 * passed to require('marko-components').initComponents(...);
 *
 * @param  {ComponentsContext|AsyncWriter} componentsContext A ComponentsContext or an AsyncWriter
 * @return {Object} An object with information about the rendered components that can be serialized to JSON. The object should be treated as opaque
 */
exports.getRenderedComponents = function(componentsContext) {
    if (!(componentsContext instanceof ComponentsContext)) {
        // Assume that the provided "componentsContext" argument is
        // actually an AsyncWriter
        var out = componentsContext;
        if (!out.global) {
            throw new Error('Invalid argument: ' + componentsContext);
        }

        componentsContext = ComponentsContext.$__getComponentsContext(out);
    }

    var renderedComponents = getRenderedComponents(componentsContext);
    return warp10.stringifyPrepare(renderedComponents);
};

exports.r = require('./renderer');

exports.c = function() { /* no op for defining a component on teh server */ };

// registerComponent is a no-op on the server.
// Fixes https://github.com/marko-js/marko-components/issues/111
exports.rc = function(typeName) { return typeName; };

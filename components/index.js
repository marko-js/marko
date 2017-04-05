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
        var id = componentDef.id;
        var component = componentDef.$__component;
        var rerenderInBrowser = componentDef.$__willRerenderInBrowser;
        var state = component.state;
        var input = component.input;
        var typeName = component.typeName;
        var customEvents = component.$__customEvents;
        var scope = component.$__scope;
        var bubblingDomEvents = component.$__bubblingDomEvents;

        component.$__state = undefined; // We don't use `delete` to avoid V8 deoptimization
        component.$__input = undefined; // We don't use `delete` to avoid V8 deoptimization
        component.typeName = undefined;
        component.id = undefined;
        component.$__customEvents = undefined;
        component.$__scope = undefined;
        component.$__bubblingDomEvents = undefined;
        component.$__bubblingDomEventsExtraArgsCount = undefined;

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

        if (children !== null) {
            // Depth-first search (children should be initialized before parent)
            flattenHelper(children, flattened, typesArray, typesLookup);
        }


        var hasProps = false;

        let componentKeys = Object.keys(component);
        for (let i=0, len=componentKeys.length; i<len; i++) {
            let key = componentKeys[i];

            if (component[key] !== undefined) {
                hasProps = true;
                break;
            }
        }

        var undefinedPropNames;

        if (state) {
            // Update state properties with an `undefined` value to have a `null`
            // value so that the property name will be serialized down to the browser.
            // This ensures that we add the proper getter/setter for the state property.

            let stateKeys = Object.keys(state);
            for (let i=0, len=stateKeys.length; i<len; i++) {
                let key = stateKeys[i];

                if (state[key] === undefined) {
                    if (undefinedPropNames) {
                        undefinedPropNames.push(key);
                    } else {
                        undefinedPropNames = [key];
                    }
                }
            }
        }

        var extra = {
            b: bubblingDomEvents,
            d: componentDef.$__domEvents,
            e: customEvents,
            p: customEvents && scope, // Only serialize scope if we need to attach custom events
            r: componentDef.$__roots,
            s: state,
            u: undefinedPropNames,
            w: hasProps ? component : undefined,
            _: rerenderInBrowser ? 1 : undefined
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

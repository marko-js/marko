'use strict';

var warp10 = require('warp10');
var safeJSONRegExp = /<\/|\u2028|\u2029/g;


function safeJSONReplacer(match) {
    if (match === '<\/') {
        return '\\u003C/';
    } else {
        return '\\u' + match.charCodeAt(0).toString(16);
    }
}

function safeJSON(json) {
    return json.replace(safeJSONRegExp, safeJSONReplacer);
}

function addComponentsFromContext(componentsContext, componentsFinal, typesLookup, typesArray) {
    var nestedContexts = componentsContext.___nestedContexts;
    if (nestedContexts !== undefined) {
        // We want to initialize any UI components nested inside an async
        // fragment first so we will add components from nested contexts first
        nestedContexts.forEach(function(nestedContext) {
            addComponentsFromContext(nestedContext, componentsFinal, typesLookup, typesArray);
        });
    }

    var components = componentsContext.___components;
    var len;
    if ((len = components.length) === 0) {
        return;
    }

    // console.log('components:', components.map((componentDef) => {
    //     return { id: componentDef.id, type: componentDef.type};
    // }));

    for (var i = len - 1; i >= 0; i--) {
        var componentDef = components[i];
        var id = componentDef.id;
        var component = componentDef.___component;
        var flags = componentDef.___flags;

        var state = component.state;
        var input = component.input;
        var typeName = component.typeName;
        var customEvents = component.___customEvents;
        var scope = component.___scope;
        var bubblingDomEvents = component.___bubblingDomEvents;

        component.___state = undefined; // We don't use `delete` to avoid V8 deoptimization
        component.___input = undefined; // We don't use `delete` to avoid V8 deoptimization
        component.typeName = undefined;
        component.id = undefined;
        component.___customEvents = undefined;
        component.___scope = undefined;
        component.___bubblingDomEvents = undefined;
        component.___bubblingDomEventsExtraArgsCount = undefined;

        if (!typeName) {
            continue;
        }

        var typeIndex = typesLookup[typeName];
        if (typeIndex === undefined) {
            typeIndex = typesArray.length;
            typesArray.push(typeName);
            typesLookup[typeName] = typeIndex;
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
            d: componentDef.___domEvents,
            e: customEvents,
            f: flags ? flags : undefined,
            l: componentDef.___isLegacy,
            p: customEvents && scope, // Only serialize scope if we need to attach custom events
            r: componentDef.___boundary,
            s: state,
            u: undefinedPropNames,
            w: hasProps ? component : undefined
        };

        componentsFinal.push([
            id,                  // 0 = id
            typeIndex,           // 1 = type
            input,               // 2 = input
            extra                // 3
        ]);
    }

    components.length = 0;
}

function getRenderedComponents(out) {
    var componentsContext = out.___components;
    if (componentsContext === null) {
        return;
    }

    var componentsFinal = [];
    var typesLookup = {};
    var typesArray = [];

    addComponentsFromContext(componentsContext, componentsFinal, typesLookup, typesArray);

    if (componentsFinal.length !== 0) {
        return {w: componentsFinal, t: typesArray};
    }
}

function writeInitComponentsCode(fromOut, targetOut, shouldIncludeAll) {
    var renderedComponents = getRenderedComponents(fromOut, shouldIncludeAll);
    if (renderedComponents === undefined) {
        return;
    }

    var cspNonce = targetOut.global.cspNonce;
    var nonceAttr = cspNonce ? ' nonce='+JSON.stringify(cspNonce) : '';

    targetOut.write('<script' + nonceAttr + '>' +
        '(function(){var w=window;w.$components=(w.$components||[]).concat(' +
        safeJSON(warp10.stringify(renderedComponents)) +
        ')||w.$components})()</script>');
}

exports.writeInitComponentsCode = writeInitComponentsCode;

/**
 * Returns an object that can be sent to the browser using JSON.stringify. The parsed object should be
 * passed to require('marko-components').initComponents(...);
 *
 * @param  {ComponentsContext|AsyncWriter} componentsContext A ComponentsContext or an AsyncWriter
 * @return {Object} An object with information about the rendered components that can be serialized to JSON. The object should be treated as opaque
 */
exports.getRenderedComponents = function(out) {
    var renderedComponents = getRenderedComponents(out, true);
    return warp10.stringifyPrepare(renderedComponents);
};

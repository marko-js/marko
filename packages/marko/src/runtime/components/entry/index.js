"use strict";

var warp10 = require("warp10");
var safeJSONRegExp = /<\/|\u2028|\u2029/g;
var IGNORE_GLOBAL_TYPES = new Set(["undefined", "function", "symbol"]);
var DEFAULT_RUNTIME_ID = "M";

var FLAG_WILL_RERENDER_IN_BROWSER = 1;
var FLAG_HAS_RENDER_BODY = 2;

function safeJSONReplacer(match) {
  if (match === "</") {
    return "\\u003C/";
  } else {
    return "\\u" + match.charCodeAt(0).toString(16);
  }
}

function isNotEmpty(obj) {
  var keys = Object.keys(obj);
  for (var i = keys.length; i--; ) {
    if (obj[keys[i]] !== undefined) {
      return true;
    }
  }

  return false;
}
function safeStringify(data) {
  return JSON.stringify(warp10.stringifyPrepare(data)).replace(
    safeJSONRegExp,
    safeJSONReplacer
  );
}

function getSerializedGlobals($global) {
  let serializedGlobalsLookup = $global.serializedGlobals;
  if (serializedGlobalsLookup) {
    let serializedGlobals;
    let keys = Object.keys(serializedGlobalsLookup);
    for (let i = keys.length; i--; ) {
      let key = keys[i];
      if (serializedGlobalsLookup[key]) {
        let value = $global[key];
        if (!IGNORE_GLOBAL_TYPES.has(typeof value)) {
          if (serializedGlobals === undefined) {
            serializedGlobals = {};
          }
          serializedGlobals[key] = value;
        }
      }
    }

    return serializedGlobals;
  }
}

function addComponentsFromContext(componentsContext, componentsToHydrate) {
  var components = componentsContext.___components;

  var len = components.length;

  for (var i = 0; i < len; i++) {
    var componentDef = components[i];
    var id = componentDef.id;
    var component = componentDef.___component;
    var flags = componentDef.___flags;
    var input = component.input || 0;
    var typeName = component.typeName;
    var customEvents = component.___customEvents;
    var scope = component.___scope;
    var bubblingDomEvents = component.___bubblingDomEvents;

    var state;
    var serializedProps;
    var undefinedPropNames;

    if (flags & FLAG_WILL_RERENDER_IN_BROWSER) {
      if (typeof input.renderBody === "function") {
        flags |= FLAG_HAS_RENDER_BODY;
        input.renderBody = undefined;
      }
    } else {
      if (component.state) {
        state = component.state;
        // Update state properties with an `undefined` value to have a `null`
        // value so that the property name will be serialized down to the browser.
        // This ensures that we add the proper getter/setter for the state property.
        const stateKeys = Object.keys(state);
        for (let i = stateKeys.length; i--; ) {
          const stateKey = stateKeys[i];

          if (state[stateKey] === undefined) {
            if (undefinedPropNames) {
              undefinedPropNames.push(stateKey);
            } else {
              undefinedPropNames = [stateKey];
            }
          }
        }
      }

      component.___state = undefined; // We don't use `delete` to avoid V8 deoptimization
      component.___input = undefined; // We don't use `delete` to avoid V8 deoptimization
      component.typeName = undefined;
      component.id = undefined;
      component.___customEvents = undefined;
      component.___scope = undefined;
      component.___bubblingDomEvents = undefined;
      component.___bubblingDomEventsExtraArgsCount = undefined;
      component.___updatedInput = undefined;
      component.___updateQueued = undefined;

      if (isNotEmpty(component)) {
        serializedProps = component;
      }
    }

    var extra = {
      b: bubblingDomEvents,
      d: componentDef.___domEvents,
      e: customEvents,
      f: flags || undefined,
      p: customEvents && scope, // Only serialize scope if we need to attach custom events
      s: state,
      u: undefinedPropNames,
      w: serializedProps
    };

    var parts = [id, typeName];
    var hasExtra = isNotEmpty(extra);

    if (input) {
      parts.push(input);

      if (hasExtra) {
        parts.push(extra);
      }
    } else if (hasExtra) {
      parts.push(0, extra); // empty input;
    }

    componentsToHydrate.push(parts);
  }

  components.length = 0;

  // Also add any components from nested contexts
  var nestedContexts = componentsContext.___nestedContexts;
  if (nestedContexts !== undefined) {
    nestedContexts.forEach(function (nestedContext) {
      addComponentsFromContext(nestedContext, componentsToHydrate);
    });
  }
}

function getInitComponentsData(out, componentDefs) {
  const len = componentDefs.length;
  const $global = out.global;
  const isLast = $global.___isLastFlush;
  const didSerializeComponents = $global.___didSerializeComponents;
  const prefix = $global.componentIdPrefix || $global.widgetIdPrefix;

  if (len === 0) {
    if (isLast && didSerializeComponents) {
      return { p: prefix, l: 1 };
    }

    return;
  }

  const TYPE_INDEX = 1;
  const typesLookup =
    $global.___typesLookup || ($global.___typesLookup = new Map());
  let newTypes;

  for (let i = 0; i < len; i++) {
    const componentDef = componentDefs[i];
    const typeName = componentDef[TYPE_INDEX];
    let typeIndex = typesLookup.get(typeName);

    if (typeIndex === undefined) {
      typeIndex = typesLookup.size;
      typesLookup.set(typeName, typeIndex);

      if (newTypes) {
        newTypes.push(typeName);
      } else {
        newTypes = [typeName];
      }
    }

    componentDef[TYPE_INDEX] = typeIndex;
  }

  let serializedGlobals;

  if (!didSerializeComponents) {
    $global.___didSerializeComponents = true;
    serializedGlobals = getSerializedGlobals($global);
  }

  return {
    p: prefix,
    l: isLast && 1,
    g: serializedGlobals,
    w: componentDefs,
    t: newTypes
  };
}

function getInitComponentsDataFromOut(out) {
  const componentsContext = out.___components;

  if (componentsContext === null) {
    return;
  }

  const $global = out.global;
  const runtimeId = $global.runtimeId;
  const componentsToHydrate = [];
  addComponentsFromContext(componentsContext, componentsToHydrate);

  $global.___isLastFlush = true;
  const data = getInitComponentsData(out, componentsToHydrate);
  $global.___isLastFlush = undefined;

  if (runtimeId !== DEFAULT_RUNTIME_ID && data) {
    data.r = runtimeId;
  }

  return data;
}

function writeInitComponentsCode(out) {
  out.script(exports.___getInitComponentsCode(out));
}

exports.___getInitComponentsCode = function getInitComponentsCode(
  out,
  componentDefs
) {
  const initComponentsData =
    arguments.length === 2
      ? getInitComponentsData(out, componentDefs)
      : getInitComponentsDataFromOut(out);

  if (initComponentsData === undefined) {
    return "";
  }

  const runtimeId = out.global.runtimeId;
  const componentGlobalKey =
    runtimeId === DEFAULT_RUNTIME_ID ? "MC" : runtimeId + "_C";

  return `$${componentGlobalKey}=(window.$${componentGlobalKey}||[]).concat(${safeStringify(
    initComponentsData
  )})`;
};

exports.___addComponentsFromContext = addComponentsFromContext;
exports.writeInitComponentsCode = writeInitComponentsCode;

/**
 * Returns an object that can be sent to the browser using JSON.stringify. The parsed object should be
 * passed to require('marko-components').initComponents(...);
 *
 * @param  {ComponentsContext|AsyncWriter} componentsContext A ComponentsContext or an AsyncWriter
 * @return {Object} An object with information about the rendered components that can be serialized to JSON. The object should be treated as opaque
 */
exports.getRenderedComponents = function (out) {
  return warp10.stringifyPrepare(getInitComponentsDataFromOut(out));
};

"use strict";

var warp10 = require("warp10");
var safeJSONRegExp = /<\/|\u2028|\u2029/g;

function safeJSONReplacer(match) {
  if (match === "</") {
    return "\\u003C/";
  } else {
    return "\\u" + match.charCodeAt(0).toString(16);
  }
}

function safeJSON(json) {
  return json.replace(safeJSONRegExp, safeJSONReplacer);
}

function addComponentsFromContext(componentsContext, componentsToHydrate) {
  var components = componentsContext.___components;

  var len = components.length;

  for (var i = 0; i < len; i++) {
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
    component.___updatedInput = undefined;
    component.___updateQueued = undefined;

    if (!typeName) {
      continue;
    }

    var hasProps = false;

    let componentKeys = Object.keys(component);
    for (let i = 0, len = componentKeys.length; i < len; i++) {
      let key = componentKeys[i];

      if (component[key] !== undefined) {
        hasProps = true;
        break;
      }
    }

    var undefinedPropNames = undefined;

    if (state) {
      // Update state properties with an `undefined` value to have a `null`
      // value so that the property name will be serialized down to the browser.
      // This ensures that we add the proper getter/setter for the state property.

      let stateKeys = Object.keys(state);
      for (let i = 0, len = stateKeys.length; i < len; i++) {
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

    componentsToHydrate.push([
      id, // 0 = id
      typeName, // 1 = type
      input, // 2 = input
      extra // 3
    ]);
  }

  components.length = 0;

  // Also add any components from nested contexts
  var nestedContexts = componentsContext.___nestedContexts;
  if (nestedContexts !== undefined) {
    nestedContexts.forEach(function(nestedContext) {
      addComponentsFromContext(nestedContext, componentsToHydrate);
    });
  }
}

function getInitComponentsData(componentDefs, runtimeId) {
  let len;
  if ((len = componentDefs.length) === 0) {
    return;
  }

  const typesLookup = {};
  const componentTypes = [];
  const TYPE_INDEX = 1;
  for (let i = 0; i < len; i++) {
    const componentDef = componentDefs[i];
    const typeName = componentDef[TYPE_INDEX];
    let typeIndex = typesLookup[typeName];
    if (typeIndex === undefined) {
      typeIndex = componentTypes.length;
      componentTypes.push(typeName);
      typesLookup[typeName] = typeIndex;
    }
    componentDef[TYPE_INDEX] = typeIndex;
  }
  return { r: runtimeId, w: componentDefs, t: componentTypes };
}

function getInitComponentsDataFromOut(out) {
  var componentsContext = out.___components;

  if (componentsContext === null) {
    return;
  }

  var componentsToHydrate = [];

  addComponentsFromContext(componentsContext, componentsToHydrate);

  return getInitComponentsData(componentsToHydrate, out.global.runtimeId);
}

function writeInitComponentsCode(out) {
  out.script(exports.___getInitComponentsCode(out));
}

exports.___getInitComponentsCode = function getInitComponentsCode(
  out,
  componentDefs
) {
  var runtimeId = out.global.runtimeId;
  var initComponentsData;

  if (arguments.length === 2) {
    initComponentsData = getInitComponentsData(componentDefs, runtimeId);
  } else {
    initComponentsData = getInitComponentsDataFromOut(out);
  }

  if (initComponentsData === undefined) {
    return "";
  }

  var componentGlobalKey =
    "$" + (runtimeId === "M" ? "components" : runtimeId + "_components");

  return (
    componentGlobalKey +
    "=(window." +
    componentGlobalKey +
    "||[]).concat(" +
    safeJSON(warp10.stringify(initComponentsData)) +
    ")||" +
    componentGlobalKey
  );
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
exports.getRenderedComponents = function(out) {
  var initComponentsData = getInitComponentsDataFromOut(out);
  return warp10.stringifyPrepare(initComponentsData);
};

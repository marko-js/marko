"use strict";

var warp10 = require("warp10");
var safeJSONRegExp = /<\/|\u2028|\u2029/g;

// var FLAG_WILL_RERENDER_IN_BROWSER = 1;
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
    var input = component.input || 0;
    var typeName = component.typeName;
    var customEvents = component.___customEvents;
    var scope = component.___scope;
    var bubblingDomEvents = component.___bubblingDomEvents;

    var hasProps = false;
    var renderBody;

    if (input && input.renderBody) {
      renderBody = input.renderBody;
      input.renderBody = undefined;
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
    hasProps = isNotEmpty(component);

    var undefinedPropNames = undefined;

    if (state) {
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

    if (typeof renderBody === "function") {
      flags |= FLAG_HAS_RENDER_BODY;
      renderBody = undefined;
    }

    var extra = {
      b: bubblingDomEvents,
      d: componentDef.___domEvents,
      e: customEvents,
      f: flags ? flags : undefined,
      p: customEvents && scope, // Only serialize scope if we need to attach custom events
      s: state,
      u: undefinedPropNames,
      w: hasProps ? component : undefined,
      r: renderBody
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

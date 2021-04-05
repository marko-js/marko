"use strict";

const ComponentDef = require("../ComponentDef");

var FLAG_WILL_RERENDER_IN_BROWSER = 1;
// var FLAG_HAS_RENDER_BODY = 2;

module.exports = function beginComponent(
  componentsContext,
  component,
  key,
  ownerComponentDef,
  isSplitComponent,
  isImplicitComponent
) {
  var componentId = component.id;

  var componentDef = (componentsContext.___componentDef = new ComponentDef(
    component,
    componentId,
    componentsContext
  ));

  var ownerIsRenderBoundary =
    ownerComponentDef && ownerComponentDef.___renderBoundary;
  var ownerWillRerender =
    ownerComponentDef &&
    ownerComponentDef.___flags & FLAG_WILL_RERENDER_IN_BROWSER;
  // On the server
  if (!componentsContext.___isPreserved && ownerWillRerender) {
    componentDef.___flags |= FLAG_WILL_RERENDER_IN_BROWSER;
    return componentDef;
  }

  if (isImplicitComponent === true) {
    // We don't mount implicit components rendered on the server
    // unless the implicit component is nested within a UI component
    // that will re-render in the browser
    return componentDef;
  }

  componentsContext.___components.push(componentDef);

  let out = componentsContext.___out;
  let runtimeId = out.global.runtimeId;

  componentDef.___renderBoundary = true;
  componentDef.___parentPreserved = componentsContext.___isPreserved;

  if (isSplitComponent === false && out.global.noBrowserRerender !== true) {
    componentDef.___flags |= FLAG_WILL_RERENDER_IN_BROWSER;
    componentsContext.___isPreserved = false;
  }

  if ((ownerIsRenderBoundary || ownerWillRerender) && key != null) {
    out.w(
      "<!--" +
        runtimeId +
        "^" +
        componentId +
        " " +
        ownerComponentDef.id +
        " " +
        key +
        "-->"
    );
  } else {
    out.w("<!--" + runtimeId + "#" + componentId + "-->");
  }

  return componentDef;
};

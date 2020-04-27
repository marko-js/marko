"use strict";

const ComponentDef = require("./ComponentDef");

var FLAG_WILL_RERENDER_IN_BROWSER = 1;
// var FLAG_HAS_RENDER_BODY = 2;
// var FLAG_IS_LEGACY = 4;
var FLAG_OLD_HYDRATE_NO_CREATE = 8;

module.exports = function beginComponent(
  componentsContext,
  component,
  key,
  ownerComponentDef,
  isSplitComponent,
  isImplicitComponent,
  existingComponentDef
) {
  var componentId = component.id;

  // existingComponentDef is only here to allow binding a conditional
  // widget.  It should be removed when the legacy compat layer is removed.
  var componentDef =
    existingComponentDef ||
    (componentsContext.___componentDef = new ComponentDef(
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

  if (out.global.oldHydrateNoCreate === true) {
    componentDef.___flags |= FLAG_OLD_HYDRATE_NO_CREATE;
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

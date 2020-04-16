"use strict";

/**
 * Helper to render a custom tag
 */
module.exports = function renderTagHelper(
  handler,
  input,
  out,
  componentDef,
  key,
  customEvents
) {
  out.c(componentDef, key, customEvents);
  (handler._ || (handler._ = handler.render || handler.renderer || handler))(
    input,
    out
  );
  out.___assignedComponentDef = null;
};

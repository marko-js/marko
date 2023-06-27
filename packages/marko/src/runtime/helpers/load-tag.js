"use strict";

/**
 * Helper to load a custom tag
 */
module.exports = function loadTagHelper(handler) {
  var renderer =
    getRenderer(handler) ||
    (typeof handler === "function"
      ? handler
      : function deferredRenderer(input, out) {
          (renderer = getRenderer(handler) || handler.render)(input, out);
        });

  return function wrappedRenderer(input, out, componentDef, key, customEvents) {
    out.c(componentDef, key, customEvents);
    renderer(input, out);
  };
};

function getRenderer(handler) {
  return handler._ || handler.renderer;
}

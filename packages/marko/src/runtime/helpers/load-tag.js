"use strict";

/**
 * Helper to load a custom tag
 */
module.exports = function loadTagHelper(handler) {
  var renderer =
    handler.renderer ||
    handler._ ||
    (typeof handler === "function" && handler) ||
    function deferredRenderer(input, out) {
      // Allows for circular dependencies by lazily defining renderer
      // on the first render.
      (renderer = handler.renderer || handler._ || handler.render)(input, out);
    };

  return function wrappedRenderer(input, out, componentDef, key, customEvents) {
    out.c(componentDef, key, customEvents);
    renderer(input, out);
  };
};

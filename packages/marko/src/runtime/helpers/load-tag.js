"use strict";

/**
 * Helper to load a custom tag
 */
module.exports = function loadTagHelper(renderer) {
  if (renderer) {
    renderer = resolveRenderer(renderer);
  }

  return function wrappedRenderer(input, out, componentDef, key, customEvents) {
    out.c(componentDef, key, customEvents);
    renderer(input, out);
    out.___assignedComponentDef = null;
  };
};

function createDeferredRenderer(handler) {
  function deferredRenderer(input, out) {
    deferredRenderer.renderer(input, out);
  }

  // This is the initial function that will do the rendering. We replace
  // the renderer with the actual renderer func on the first render
  deferredRenderer.renderer = function(input, out) {
    var rendererFunc = handler.renderer || handler._ || handler.render;
    if (typeof rendererFunc !== "function") {
      throw Error("Invalid renderer");
    }
    // Use the actual renderer from now on
    deferredRenderer.renderer = rendererFunc;
    rendererFunc(input, out);
  };

  return deferredRenderer;
}

function resolveRenderer(handler) {
  var renderer = handler.renderer || handler._;

  if (renderer) {
    return renderer;
  }

  if (typeof handler === "function") {
    return handler;
  }

  // If the user code has a circular function then the renderer function
  // may not be available on the module. Since we can't get a reference
  // to the actual renderer(input, out) function right now we lazily
  // try to get access to it later.
  return createDeferredRenderer(handler);
}

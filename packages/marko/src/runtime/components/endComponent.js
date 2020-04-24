"use strict";

var ComponentsContext = require("./ComponentsContext");
var getComponentsContext = ComponentsContext.___getComponentsContext;

module.exports = function endComponent(out, componentDef) {
  if (componentDef.___renderBoundary) {
    out.w("<!--" + out.global.runtimeId + "/-->");
    getComponentsContext(out).___isPreserved = componentDef.___parentPreserved;
  }
};

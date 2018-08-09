"use strict";

module.exports = function endComponent(out, componentDef) {
    if (componentDef.___renderBoundary) {
        if (componentDef.___flags & 2 || componentDef.___flags & 4) {
            out.w("<!--M//-->");
        } else {
            out.w("<!--M/-->");
        }
    }
};

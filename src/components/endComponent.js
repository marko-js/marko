'use strict';

module.exports = function endComponent(out, componentDef) {
    if (componentDef.___renderBoundary) {
        out.w('<!--M/' + componentDef.id + '-->');
    }
};

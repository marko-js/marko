"use strict";

let resolveFrom = require("resolve-from");

module.exports = function codeGenerator(elNode, codegen) {
    let func = eval("(" + elNode.argument + ")");
    let dirname = codegen.context.dirname;

    function req(target) {
        let resolved = resolveFrom(dirname, target);
        return require(resolved);
    }
    let code = func(req);

    codegen.context.root.setModuleCode(code);

    return null;
};

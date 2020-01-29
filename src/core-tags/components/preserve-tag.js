module.exports = function render(input, out) {
    var globalContext = out.___components.___globalContext;
    var parentPreserved = globalContext.___isPreserved;
    var shouldPreserve = Boolean(!("if" in input) || input["if"]);

    if (parentPreserved || !shouldPreserve) {
        input.renderBody && input.renderBody(out);
        return;
    }

    var ownerComponentDef = out.___assignedComponentDef;
    var ownerComponent = ownerComponentDef.___component;
    var key = out.___assignedKey;

    out.___beginFragment(key, ownerComponent, true);

    if (input.renderBody) {
        globalContext.___isPreserved = true;
        input.renderBody(out);
        globalContext.___isPreserved = false;
    }

    out.___endFragment();
};

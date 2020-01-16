module.exports = function render(input, out) {
    var ownerComponentDef = out.___assignedComponentDef;
    var ownerComponent = ownerComponentDef.___component;
    var key = ownerComponentDef.___nextKey(out.___assignedKey);
    var isPreserved = !("if" in input) || input["if"];

    out.___beginFragment(key, ownerComponent, isPreserved);

    if (!isPreserved || !ownerComponent.___keyedElements[key]) {
        input.renderBody(out);
    }

    out.___endFragment();
};

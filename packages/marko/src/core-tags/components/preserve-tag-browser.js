module.exports = function render(input, out) {
  var componentsContext = out.___components;
  var isHydrate =
    componentsContext && componentsContext.___globalContext.___isHydrate;
  var ownerComponentDef = out.___assignedComponentDef;
  var ownerComponent = ownerComponentDef.___component;
  var key = out.___assignedKey;
  var shouldPreserve = !("if" in input) || input["if"];
  var isPreserved = Boolean(
    shouldPreserve && (isHydrate || ownerComponent.___keyedElements[key])
  );

  out.___beginFragment(key, ownerComponent, shouldPreserve);

  if (!isPreserved && input.renderBody) {
    input.renderBody(out);
  }

  out.___endFragment();
};

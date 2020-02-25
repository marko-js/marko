module.exports = function render(input, out) {
  var shouldPreserve = Boolean(!("if" in input) || input["if"]);
  var ownerComponentDef = out.___assignedComponentDef;
  var ownerComponent = ownerComponentDef.___component;
  var key = out.___assignedKey;

  out.___beginFragment(key, ownerComponent, true);

  if (input.renderBody) {
    var globalContext = out.___components.___globalContext;
    var parentPreserved = globalContext.___isPreserved;
    globalContext.___isPreserved = parentPreserved || shouldPreserve;
    input.renderBody(out);
    globalContext.___isPreserved = parentPreserved;
  }

  out.___endFragment();
};

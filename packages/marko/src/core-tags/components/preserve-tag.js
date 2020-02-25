var ComponentsContext = require("../../runtime/components/ComponentsContext");
var getComponentsContext = ComponentsContext.___getComponentsContext;

module.exports = function render(input, out) {
  var shouldPreserve = Boolean(!("if" in input) || input["if"]);
  var ownerComponentDef = out.___assignedComponentDef;
  var ownerComponent = ownerComponentDef.___component;
  var key = out.___assignedKey;

  out.___beginFragment(key, ownerComponent, true);

  if (input.renderBody) {
    var componentsContext = getComponentsContext(out);
    var parentPreserved = componentsContext.___isPreserved;
    componentsContext.___isPreserved = parentPreserved || shouldPreserve;
    input.renderBody(out);
    componentsContext.___isPreserved = parentPreserved;
  }

  out.___endFragment();
};

var ComponentsContext = require("../../runtime/components/ComponentsContext");
var getComponentsContext = ComponentsContext.___getComponentsContext;

module.exports = function render(input, out) {
  var shouldPreserve = Boolean(!("i" in input) || input.i);
  var isComponent = !input.n;

  if (isComponent) {
    out.bf(out.___assignedKey, out.___assignedComponentDef.___component, true);
  }

  if (input.renderBody) {
    if (shouldPreserve) {
      var componentsContext = getComponentsContext(out);
      var parentPreserved = componentsContext.___isPreserved;
      componentsContext.___isPreserved = true;
      input.renderBody(out);
      componentsContext.___isPreserved = parentPreserved;
    } else {
      input.renderBody(out);
    }
  }

  if (isComponent) {
    out.ef();
  }
};

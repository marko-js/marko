var ComponentsContext = require("../../runtime/components/ComponentsContext");
var getComponentsContext = ComponentsContext.___getComponentsContext;

module.exports = function render(input, out) {
  var isComponent = !input.n;
  var shouldPreserve = !("i" in input) || input.i;
  var componentsContext = out.___components;

  if (typeof document === "object") {
    var isHydrate =
      componentsContext && componentsContext.___globalContext.___isHydrate;
    var ownerComponent = out.___assignedComponentDef.___component;
    var referenceComponent = ownerComponent;
    var key = out.___assignedKey;
    var checkKey = key;

    if (key[0] !== "@") {
      var parentComponent = componentsContext.___componentDef.___component;
      if (ownerComponent !== parentComponent) {
        referenceComponent = parentComponent;
        checkKey += ":" + ownerComponent.id;
      }
    }

    var isPreserved =
      shouldPreserve &&
      (isHydrate || referenceComponent.___keyedElements[checkKey]);

    if (isComponent) {
      out.bf(key, ownerComponent, shouldPreserve);

      if (!isPreserved && input.renderBody) {
        input.renderBody(out);
      }

      out.ef();
    } else {
      if (isPreserved) {
        if (input.b) {
          out.___parent.___preserveBody = true;
        } else {
          out.beginElement("", null, key, ownerComponent);
          out.___parent.___preserve = true;
          out.endElement();
        }
      } else if (input.renderBody) {
        input.renderBody(out);
      }
    }
  } else {
    if (isComponent) {
      out.bf(
        out.___assignedKey,
        out.___assignedComponentDef.___component,
        true
      );
    }

    if (input.renderBody) {
      if (shouldPreserve) {
        var parentPreserved = false;

        if (componentsContext) {
          parentPreserved = componentsContext.___isPreserved;
        } else {
          componentsContext = getComponentsContext(out);
        }

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
  }
};

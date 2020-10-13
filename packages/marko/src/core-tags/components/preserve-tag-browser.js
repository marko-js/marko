module.exports = function render(input, out) {
  var componentsContext = out.___components;
  var isHydrate =
    componentsContext && componentsContext.___globalContext.___isHydrate;
  var ownerComponent = out.___assignedComponentDef.___component;
  var shouldPreserve = !("i" in input) || input.i;
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

  var isPreserved = Boolean(
    shouldPreserve &&
      (isHydrate || referenceComponent.___keyedElements[checkKey])
  );

  if (input.n) {
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
  } else {
    out.bf(key, ownerComponent, shouldPreserve);

    if (!isPreserved && input.renderBody) {
      input.renderBody(out);
    }

    out.ef();
  }
};

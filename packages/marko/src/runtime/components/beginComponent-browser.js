var ComponentDef = require("./ComponentDef");

module.exports = function beginComponent(
  componentsContext,
  component,
  key,
  ownerComponentDef
) {
  var componentId = component.id;
  var componentDef = (componentsContext.___componentDef = new ComponentDef(
    component,
    componentId,
    componentsContext
  ));
  componentsContext.___globalContext.___renderedComponentsById[
    componentId
  ] = true;
  componentsContext.___components.push(componentDef);

  var out = componentsContext.___out;
  out.bc(component, key, ownerComponentDef && ownerComponentDef.___component);
  return componentDef;
};

module.exports = function migrate(el, context) {
  el.forEachAttribute((attr) => {
    const value = attr.value;

    if (
      isWidgetElIdFunctionCall(value) &&
      el.tagName !== "var" &&
      el.tagName !== "assign"
    ) {
      attr.name += ":scoped";
      attr.value = value.args[0];
      return;
    }

    context.createWalker({
      enter(node) {
        if (isWidgetMemberExpression(node)) {
          node.object.name = "component";
        }
      },
    }).walk(value);
  });
};

function isWidgetElIdFunctionCall(value) {
  return (
    value &&
    value.type === "FunctionCall" &&
    isWidgetMemberExpression(value.callee) &&
    value.callee.property.name === "elId"
  );
}

function isWidgetMemberExpression(value) {
  return (
    value && value.type === "MemberExpression" && value.object.name === "widget"
  );
}

const CONTROL_FLOW_ATTRIBUTES = [
  "while",
  "for",
  "if",
  "unless",
  "else-if",
  "else",
];

module.exports = function migrate(el, context) {
  const builder = context.builder;

  el.forEachAttribute((attr) => {
    const name = attr.name;
    if (
      CONTROL_FLOW_ATTRIBUTES.includes(name) &&
      (name === "else" || attr.argument) &&
      !(el.tagName === "else" && name === "if") // <else if(x)> gets passed through
    ) {
      el.removeAttribute(name);
      el.wrapWith(
        builder.htmlElement(name, undefined, undefined, attr.argument)
      );
    }
  });
};

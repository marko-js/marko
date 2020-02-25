module.exports = function codeGenerator(elNode, codegen) {
  const builder = codegen.builder;
  const body = elNode.body.array.map(text => text.argument);
  if (body.length > 1) {
    const quasis = [];
    const expressions = [];
    for (const content of body) {
      if (content.type === "Literal") {
        if (quasis.length === expressions.length) {
          quasis.push(content.value);
        } else {
          quasis[quasis.length - 1] += content.value;
        }
      } else {
        if (quasis.length === expressions.length) {
          quasis.push("");
        }
        expressions.push(content);
      }
    }
    if (quasis.length === expressions.length) {
      quasis.push("");
    }
    elNode.body.removeChildren();
    elNode.appendChild(
      builder.text(builder.templateLiteral(quasis, expressions))
    );
  }
  return elNode;
};

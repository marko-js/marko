const printJS = require("../util/printJS");
const importTag = require("../util/import-tag");
module.exports = function migrator(node, context) {
  const arg = node.getAttribute("body-only-if");

  if (arg) {
    context.deprecate(
      'The "body-only-if(x)" tag is deprecated. Please use "<${test ? null : tag>" instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-body‐only‐if'
    );
    // Check if body-only-if(true) is set and automatically unwrap element
    if (arg.argument === "true") {
      // w-body will take care of the unwrapping
      if (!node.getAttribute("w-body")) {
        // Unwrap if there is no w-body tag
        node.forEachChild(currentNode => node.insertSiblingBefore(currentNode));
        node.detach();
      }
      return;
    }

    const builder = context.builder;

    node.removeAttribute("body-only-if");
    const attributes = node.attributes;
    const tagDef = node.tagDef || {};
    const dynamicTag = builder.htmlElement(undefined, attributes, node.body);

    // If tag is dynamic and not a normal HTML tag, then render dynamic version of tagName
    let tagName =
      node.rawTagNameExpression ||
      (!tagDef.html
        ? importTag(`<${tagDef.name}>`, context)
        : builder.literal(node.tagName));

    if (!tagDef.html && tagDef.renderer) {
      tagName = builder.objectExpression({
        renderer: builder.identifier(tagName)
      });
    }

    dynamicTag.rawTagNameExpression = printJS(
      builder.conditionalExpression(
        builder.expression(arg.argument),
        builder.literalNull(),
        tagName
      ),
      context
    );

    node.replaceWith(dynamicTag);
  }
};

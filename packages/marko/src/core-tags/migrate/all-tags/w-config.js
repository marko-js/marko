const printJS = require("../util/printJS");

module.exports = function migrate(el, context) {
  const builder = context.builder;
  const attr = el.getAttribute("w-config");
  if (!attr) {
    return;
  }

  context.deprecate(
    'The "w-config" attribute is deprecated. See: https://github.com/marko-js/marko/wiki/Deprecation:-w‐config'
  );

  if (attr.value) {
    el.insertSiblingBefore(
      builder.scriptlet({
        value: printJS(
          builder.assignment(
            builder.memberExpression(
              builder.identifier("component"),
              builder.identifier("widgetConfig")
            ),
            attr.value,
            "="
          ),
          context
        )
      })
    );
  }

  el.removeAttribute("w-config");
};

import { types as t } from "@marko/compiler";
import { normalizeTemplateString } from "@marko/compiler/babel-utils";

export default function write(strings, ...expressions) {
  const template = normalizeTemplateString(strings, ...expressions);

  if (template) {
    return t.expressionStatement(
      t.callExpression(
        t.memberExpression(t.identifier("out"), t.identifier("w")),
        [template],
      ),
    );
  }
}

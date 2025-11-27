import { types as t } from "@marko/compiler";

import { callRuntime } from "./runtime";

export function bodyToTextLiteral(body: t.MarkoTagBody) {
  const templateQuasis: t.TemplateElement[] = [];
  const templateExpressions: t.Expression[] = [];
  let currentQuasi = "";
  let placeholderExtra: t.MarkoPlaceholder["extra"];
  for (const child of body.body) {
    if (t.isMarkoText(child)) {
      currentQuasi += child.value;
    } else if (t.isMarkoPlaceholder(child)) {
      placeholderExtra ||= child.value.extra;
      templateQuasis.push(templateElement(currentQuasi, false));
      templateExpressions.push(callRuntime("_to_text", child.value));
      currentQuasi = "";
    }
  }
  if (templateExpressions.length) {
    templateQuasis.push(templateElement(currentQuasi, true));
    const literal = t.templateLiteral(templateQuasis, templateExpressions);
    literal.extra = placeholderExtra;
    return literal;
  }
  return t.stringLiteral(currentQuasi);
}

function templateElement(value: string, tail: boolean) {
  return t.templateElement(
    {
      raw: value.replace(/`/g, "\\`"),
      cooked: value,
    },
    tail,
  );
}

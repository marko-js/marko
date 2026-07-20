import { types as t } from "@marko/compiler";

import { escapeTemplateRaw } from "./normalize-string-expression";
import { callRuntime } from "./runtime";

// Marks a flattened `<if>` whose value still holds raw interpolations
// concatenated with static text, so translate runs `injectTextCoercion`.
export const kRawText = Symbol("raw text placeholder");
declare module "@marko/compiler/dist/types" {
  export interface MarkoPlaceholderExtra {
    [kRawText]?: true;
  }
}

// Translate: a text-only body as a JS string, each interpolation coerced with
// `_to_text`. Used by text-only native tags and html comments.
export function bodyToTextLiteral(body: t.MarkoTagBody) {
  return buildTextLiteral(body, toText, false);
}

// Pre-analyze variant: interpolations stay raw (the output-specific `_to_text` import
// can't precede translate); a lone interpolation stays bare so the placeholder coerces it.
export function bodyToRawTextLiteral(body: t.MarkoTagBody) {
  return buildTextLiteral(body, (value) => value, true);
}

// Translate: wrap each raw interpolation from `bodyToRawTextLiteral` in `_to_text`,
// mutating in place so analyze bindings survive.
export function injectTextCoercion(expr: t.Expression) {
  switch (expr.type) {
    case "ConditionalExpression":
      injectTextCoercion(expr.consequent);
      injectTextCoercion(expr.alternate);
      break;
    case "TemplateLiteral":
      expr.expressions = expr.expressions.map((child) =>
        toText(child as t.Expression),
      );
      break;
  }
}

function toText(value: t.Expression) {
  return callRuntime("_to_text", value);
}

function buildTextLiteral(
  body: t.MarkoTagBody,
  coerce: (value: t.Expression) => t.Expression,
  bareSingle: boolean,
) {
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
      templateExpressions.push(coerce(child.value));
      currentQuasi = "";
    }
  }
  if (templateExpressions.length) {
    if (
      bareSingle &&
      templateExpressions.length === 1 &&
      !currentQuasi &&
      !templateQuasis[0].value.cooked
    ) {
      return templateExpressions[0];
    }
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
      raw: escapeTemplateRaw(value),
      cooked: value,
    },
    tail,
  );
}

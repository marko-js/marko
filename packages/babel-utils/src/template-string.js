import jsesc from "jsesc";
import { types as t } from "@marko/compiler";

export function normalizeTemplateString(quasis, ...expressions) {
  quasis = quasis.map(q => (t.isTemplateElement(q) ? q.value.cooked : q));

  for (let i = expressions.length; i--; ) {
    let v = expressions[i];
    if (t.isTemplateLiteral(v)) {
      quasis[i] += v.quasis[0].value.cooked;
      quasis[i + 1] =
        v.quasis[v.quasis.length - 1].value.cooked + (quasis[i + 1] || "");
      quasis.splice(
        i + 1,
        0,
        ...v.quasis.slice(1, -1).map(q => q.value.cooked)
      );
      expressions.splice(i, 1, ...v.expressions);
      i += v.expressions.length;
    } else if (t.isStringLiteral(v) || typeof v === "string") {
      const value = t.isStringLiteral(v) ? v.value : v;
      quasis[i] += value + quasis[i + 1];
      expressions.splice(i, 1);
      quasis.splice(i + 1, 1);
    }
  }

  if (!expressions.length) {
    // No expression, just return a literal or empty.
    const literal = quasis.join("");
    return literal === "" ? undefined : t.stringLiteral(literal);
  }

  if (
    expressions.length === 1 &&
    quasis.length === 2 &&
    quasis.every(isEmptyString)
  ) {
    // Only expression `${expr}` just return the expr.
    return expressions[0];
  }

  // Do it.
  return t.templateLiteral(quasis.map(getTemplateElement), expressions);
}

function getTemplateElement(s = "") {
  return t.templateElement({
    cooked: s,
    raw: jsesc(s, { quotes: "backtick" })
  });
}

function isEmptyString(s = "") {
  return s === "";
}

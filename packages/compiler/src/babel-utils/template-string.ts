import { types as t } from "@marko/compiler";
import jsesc from "jsesc";

export function normalizeTemplateString(
  rawQuasis: (string | t.TemplateElement)[],
  ...expressions: (string | t.Expression)[]
): t.Expression | undefined {
  const quasis = rawQuasis.map((q) =>
    typeof q === "string" ? q : q.value.cooked!,
  );

  for (let i = expressions.length; i--;) {
    const v = expressions[i];
    if (typeof v !== "string" && t.isTemplateLiteral(v)) {
      quasis[i] += v.quasis[0].value.cooked!;
      quasis[i + 1] =
        v.quasis[v.quasis.length - 1].value.cooked! + (quasis[i + 1] || "");
      quasis.splice(
        i + 1,
        0,
        ...v.quasis.slice(1, -1).map((q) => q.value.cooked!),
      );
      expressions.splice(i, 1, ...(v.expressions as t.Expression[]));
      i += v.expressions.length;
    } else if (typeof v === "string" || v.type === "StringLiteral") {
      const value = typeof v === "string" ? v : v.value;
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
    return expressions[0] as t.Expression;
  }

  // Do it.
  return t.templateLiteral(
    quasis.map(getTemplateElement),
    expressions as t.Expression[],
  );
}

function getTemplateElement(s = "", i: number, all: string[]) {
  return t.templateElement(
    { cooked: s, raw: jsesc(s, { quotes: "backtick" }) },
    i === all.length - 1,
  );
}

function isEmptyString(s = "") {
  return s === "";
}

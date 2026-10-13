import { types as t } from "@marko/compiler";

// Joins strings and string expressions into a string literal, a template literal
// or a lone expression; undefined when there is nothing to join.
export default function buildStringExpression(
  parts: (string | t.Expression)[],
  useIife?: boolean,
): t.Expression | undefined {
  // A string before each expression and one after the last.
  const strs = [""];
  const exprs: t.Expression[] = [];
  for (const part of parts) {
    joinPart(strs, exprs, part);
  }

  const curStr = strs[exprs.length];
  if (exprs.length) {
    if (exprs.length === 1 && !curStr && !strs[0]) {
      return exprs[0];
    }

    const quasis: t.TemplateElement[] = [];
    for (const str of strs) quasis.push(toTemplateElement(str));

    if (useIife) {
      // Note: this is a temporary workaround for https://github.com/rolldown/rolldown/issues/9189
      // (a bare template literal defeats DCE when templates reference each other, eg recursive tags).
      // Only those references pass as arguments; any other read stays inline.
      const args: t.Expression[] = [];
      const params: t.Identifier[] = [];
      const body = t.templateLiteral(
        quasis,
        exprs.map((expr) => {
          if (expr.type !== "Identifier") return expr;
          const param = t.identifier(`_w${params.length}`);
          params.push(param);
          args.push(expr);
          return param;
        }),
      );
      const iife = t.callExpression(
        t.arrowFunctionExpression(params, body),
        args,
      );
      t.addComment(iife, "leading", "@__PURE__");
      return iife;
    }

    return t.templateLiteral(quasis, exprs);
  } else if (curStr) {
    return t.stringLiteral(curStr);
  }
}

export function appendLiteral(arr: unknown[], str: string) {
  arr[arr.length - 1] += str;
}

export function toTemplateElement(value: string, tail?: boolean) {
  return t.templateElement({ raw: escapeTemplateRaw(value) }, tail);
}

function escapeTemplateRaw(raw: string) {
  return raw
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$(?=\{)/g, "\\$");
}

// A template literal's strings and expressions join in its place.
function joinPart(
  strs: string[],
  exprs: t.Expression[],
  part: string | t.Expression,
) {
  if (typeof part === "string") {
    appendLiteral(strs, part);
  } else if (part.type === "StringLiteral") {
    appendLiteral(strs, part.value);
  } else if (part.type === "TemplateLiteral") {
    const { quasis, expressions } = part;
    for (let i = 0; i < expressions.length; i++) {
      appendLiteral(strs, quasis[i].value.cooked ?? "");
      joinPart(strs, exprs, expressions[i] as t.Expression);
    }
    appendLiteral(strs, quasis[expressions.length].value.cooked ?? "");
  } else {
    exprs.push(part);
    strs.push("");
  }
}

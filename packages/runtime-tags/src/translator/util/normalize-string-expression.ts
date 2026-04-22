import { types as t } from "@marko/compiler";

export default function normalizeStringExpression(
  parts: (string | t.Expression)[],
  useIife?: boolean,
): t.Expression | undefined {
  const strs: string[] = [];
  const exprs: t.Expression[] = [];
  let curStr = "";

  for (let i = 0; i < parts.length; i++) {
    let content = parts[i];

    if (typeof content === "object") {
      if (t.isStringLiteral(content)) {
        content = content.value;
      } else if (t.isTemplateLiteral(content)) {
        let nextIndex = i + 1;
        const exprLen = content.expressions.length;
        shiftItems(parts, nextIndex, content.quasis.length + exprLen);

        for (let j = 0; j < exprLen; j++) {
          parts[nextIndex++] = content.quasis[j].value.raw;
          parts[nextIndex++] = content.expressions[j] as t.Expression;
        }

        parts[nextIndex] = content.quasis[exprLen].value.raw;
        continue;
      } else {
        exprs.push(content);
        strs.push(curStr);
        curStr = "";
        continue;
      }
    }

    curStr += content;
  }

  if (exprs.length) {
    if (exprs.length === 1 && !curStr && !strs[0]) {
      return exprs[0];
    }

    strs.push(curStr);

    if (useIife) {
      // Note: this is a temporary workaround for https://github.com/rolldown/rolldown/issues/9189
      const params = exprs.map((_, i) => t.identifier(`_w${i}`));
      const iife = t.callExpression(
        t.arrowFunctionExpression(
          params,
          t.templateLiteral(
            strs.map((raw) =>
              t.templateElement({ raw: escapeTemplateRaw(raw) }),
            ),
            params,
          ),
        ),
        exprs,
      );
      t.addComment(iife, "leading", "@__PURE__");
      return iife;
    }

    return t.templateLiteral(
      strs.map((raw) => t.templateElement({ raw: escapeTemplateRaw(raw) })),
      exprs,
    );
  } else if (curStr) {
    return t.stringLiteral(curStr);
  }
}

export function appendLiteral(arr: unknown[], str: string) {
  arr[arr.length - 1] += str;
}

function escapeTemplateRaw(raw: string) {
  return raw.replace(/\\/g, "\\\\").replace(/`/g, "\\`");
}

function shiftItems(list: unknown[], start: number, offset: number) {
  for (let i = list.length - 1; i >= start; i--) {
    list[i + offset] = list[i];
  }
}

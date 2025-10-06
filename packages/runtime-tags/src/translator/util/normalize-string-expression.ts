import { types as t } from "@marko/compiler";

export default function normalizeStringExpression(
  parts: (string | t.Expression)[],
): t.Expression | undefined {
  const strs: string[] = [];
  const exprs: t.Expression[] = [];
  let curStr: string = parts[0] as string;

  for (let i = 1; i < parts.length; i++) {
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

    return t.templateLiteral(
      strs.map((raw) => t.templateElement({ raw: raw.replace(/`/g, "\\`") })),
      exprs,
    );
  } else if (curStr) {
    return t.stringLiteral(curStr);
  }
}

export function appendLiteral(arr: unknown[], str: string) {
  arr[arr.length - 1] += str;
}

function shiftItems(list: unknown[], start: number, offset: number) {
  for (let i = list.length - 1; i >= start; i--) {
    list[i + offset] = list[i];
  }
}

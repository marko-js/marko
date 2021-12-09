import { types as t } from "@marko/compiler";

export default function toTemplateOrStringLiteral(
  parts: (string | t.Expression)[]
): t.StringLiteral | t.TemplateLiteral | undefined {
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
    strs.push(curStr);

    return t.templateLiteral(
      strs.map((raw) => t.templateElement({ raw })),
      exprs
    );
  } else if (curStr) {
    return t.stringLiteral(curStr);
  }
}

function shiftItems(list: unknown[], start: number, offset: number) {
  for (let i = list.length - 1; i >= start; i--) {
    list[i + offset] = list[i];
  }
}

import { types as t } from "@marko/compiler";
import { callRuntime } from "./runtime";

export function consumeHTML(path: t.NodePath<any>) {
  const writes = path.state.writes as Array<string | t.Expression> | undefined;

  if (!writes) {
    return;
  }

  path.state.writes = undefined;
  const strs: string[] = [];
  const exprs: t.Expression[] = [];
  let curStr: string = writes[0] as string;

  for (let i = 1; i < writes.length; i++) {
    let content = writes[i];

    if (typeof content === "object") {
      if (t.isStringLiteral(content)) {
        content = content.value;
      } else if (t.isTemplateLiteral(content)) {
        let nextIndex = i + 1;
        const exprLen = content.expressions.length;
        shiftItems(writes, nextIndex, content.quasis.length + exprLen);

        for (let j = 0; j < exprLen; j++) {
          writes[nextIndex++] = content.quasis[j].value.raw;
          writes[nextIndex++] = content.expressions[j] as t.Expression;
        }

        writes[nextIndex] = content.quasis[exprLen].value.raw;
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

  let result: t.Expression | undefined;

  if (exprs.length) {
    strs.push(curStr);

    result = t.templateLiteral(
      strs.map(raw => t.templateElement({ raw })),
      exprs
    );
  } else if (curStr) {
    result = t.stringLiteral(curStr);
  }

  if (result) {
    return t.expressionStatement(callRuntime(path, "write", result));
  }
}

export function hasPendingHTML(
  path: t.NodePath<t.MarkoTag> | t.NodePath<t.Program>
) {
  return Boolean(path.state.writes as Array<string | t.Expression> | undefined);
}

export function flushBefore(path: t.NodePath<any>) {
  const expr = consumeHTML(path);
  if (expr) {
    path.insertBefore(expr)[0].skip();
  }
}

export function flushInto(
  path: t.NodePath<t.MarkoTag> | t.NodePath<t.Program>
) {
  const expr = consumeHTML(path);
  if (expr) {
    if (path.isMarkoTag()) {
      path.get("body").pushContainer("body", expr)[0].skip();
    } else {
      path.pushContainer("body", expr)[0].skip();
    }
  }
}

function shiftItems(list: unknown[], start: number, offset: number) {
  for (let i = list.length - 1; i >= start; i--) {
    list[i + offset] = list[i];
  }
}

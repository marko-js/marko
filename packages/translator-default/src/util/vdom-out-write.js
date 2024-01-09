import { types as t } from "@marko/compiler";

export default function write(method, ...args) {
  return t.expressionStatement(
    t.callExpression(
      t.memberExpression(t.identifier("out"), t.identifier(method)),
      args,
    ),
  );
}

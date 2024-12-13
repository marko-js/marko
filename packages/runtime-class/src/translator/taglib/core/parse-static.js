import { types as t } from "@marko/compiler";
import { parseStatements } from "@marko/compiler/babel-utils";

export default function (path) {
  const {
    node,
    hub: { file },
  } = path;
  const { rawValue, end } = node;
  const code = rawValue.replace(/^static\s*/, "").trim();
  const start = node.name.start + (rawValue.length - code.length);
  let body = parseStatements(file, code, start, end);
  if (body.length === 1 && t.isBlockStatement(body[0])) {
    body = body[0].body;
  }

  path.replaceWith(t.MarkoScriptlet(body, true));
}

import { types as t } from "@marko/babel-types";

export default function(path) {
  const { node, hub } = path;
  const { rawValue } = node;
  const code = rawValue.replace(/^static\s*/, "").trim();
  const start = node.start + (rawValue.length - code.length);
  let { body } = hub.parse(code, start);
  if (body.length === 1 && t.isBlockStatement(body[0])) {
    body = body[0].body;
  }

  path.replaceWith(t.MarkoScriptlet(body, true));
}

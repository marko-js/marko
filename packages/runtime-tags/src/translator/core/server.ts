import { parseStatements } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
export default {
  parse(tag: t.NodePath<t.MarkoTag>) {
    const {
      node,
      hub: { file },
    } = tag;
    const rawValue = node.rawValue!;
    const code = rawValue.replace(/^server\s*/, "").trim();
    const start = node.name.start! + (rawValue.length - code.length);
    let body = parseStatements(file, code, start, start + code.length);
    if (body.length === 1 && t.isBlockStatement(body[0])) {
      body = body[0].body;
    }

    tag.replaceWith(t.markoScriptlet(body, true, "server"));
  },
  parseOptions: {
    statement: true,
    rawOpenTag: true,
  },
  autocomplete: [
    {
      displayText: "server <statement>",
      description:
        "A JavaScript statement which is only evaluated once your template is loaded on the server.",
      descriptionMoreURL: "https://markojs.com/docs/syntax/#server-javascript",
    },
  ],
};

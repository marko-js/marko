import { types as t } from "@marko/compiler";
import { parseStatements } from "@marko/compiler/babel-utils";
export default {
  parse(tag: t.NodePath<t.MarkoTag>) {
    const {
      node,
      hub: { file },
    } = tag;
    const rawValue = node.rawValue!;
    const code = rawValue.replace(/^client\s*/, "").trim();
    const start = node.name.start! + (rawValue.length - code.length);
    let body = parseStatements(file, code, start, start + code.length);
    if (body.length === 1 && t.isBlockStatement(body[0])) {
      body = body[0].body;
    }

    tag.replaceWith(t.markoScriptlet(body, true, "client"));
  },
  parseOptions: {
    statement: true,
    rawOpenTag: true,
  },
  autocomplete: [
    {
      displayText: "client <statement>",
      description:
        "A JavaScript statement which is only evaluated once your template is loaded on the client.",
      descriptionMoreURL: "https://markojs.com/docs/syntax/#client-javascript",
    },
  ],
};

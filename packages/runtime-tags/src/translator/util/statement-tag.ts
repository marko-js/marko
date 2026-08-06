import { types as t } from "@marko/compiler";
import { parseStatements, type Tag } from "@marko/compiler/babel-utils";

// `<static>` runs everywhere, so it gets no target and no "on the ..." suffix.
export function createStatementTag(keyword: "client" | "server" | "static") {
  const target = keyword === "static" ? undefined : keyword;
  const keywordReg = new RegExp(`^${keyword}\\s*`);

  return {
    parse(tag) {
      const {
        node,
        hub: { file },
      } = tag;
      const rawValue = node.rawValue!;
      const code = rawValue.replace(keywordReg, "");
      const start = node.start! + (rawValue.length - code.length);
      let body = parseStatements(file, code, start, start + code.length);
      if (body.length === 1 && t.isBlockStatement(body[0])) {
        body = body[0].body;
      }

      tag.replaceWith(t.markoScriptlet(body, true, target));
    },
    parseOptions: {
      statement: true,
      rawOpenTag: true,
    },
    autocomplete: [
      {
        displayText: `${keyword} <statement>`,
        description: `A JavaScript statement which is only evaluated once your template is loaded${target ? ` on the ${target}` : ""}.`,
        descriptionMoreURL: `https://markojs.com/docs/syntax/#${keyword}-javascript`,
      },
    ],
  } as Tag;
}

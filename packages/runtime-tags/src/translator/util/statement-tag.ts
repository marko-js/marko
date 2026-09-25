import { types as t } from "@marko/compiler";
import { getFile, parseBlock, type Tag } from "@marko/compiler/babel-utils";

// `<static>` runs everywhere, so it gets no target and no "on the ..." suffix.
export function createStatementTag(keyword: "client" | "server" | "static") {
  const target = keyword === "static" ? undefined : keyword;
  const keywordReg = new RegExp(`^${keyword}\\s*`);

  return {
    parse(tag) {
      const { node } = tag;
      const file = getFile();
      const rawValue = node.rawValue!;
      const code = rawValue.replace(keywordReg, "");
      const start = node.start! + (rawValue.length - code.length);
      let block = parseBlock(file, code, start, start + code.length);
      if (block.body.length === 1 && t.isBlockStatement(block.body[0])) {
        block = block.body[0];
      }

      const scriptlet = t.markoScriptlet(block.body, true, target);
      scriptlet.innerComments = block.innerComments;
      tag.replaceWith(scriptlet);
    },
    parseOptions: {
      statement: true,
      rawOpenTag: true,
    },
    autocomplete: [
      {
        displayText: `${keyword} <statement>`,
        description: `A JavaScript statement which is only evaluated once your template is loaded${target ? ` on the ${target}` : ""}.`,
        descriptionMoreURL: `https://markojs.com/docs/reference/language#${keyword === "static" ? "static" : "server-and-client"}`,
      },
    ],
  } as Tag;
}

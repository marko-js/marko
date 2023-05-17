import { type Tag, parseScript } from "@marko/babel-utils";

export default {
  parse(tag) {
    const { node } = tag;
    tag.replaceWith(
      parseScript(tag.hub.file, node.rawValue!, node.start!).body[0]
    );
  },
  parseOptions: {
    rootOnly: true,
    rawOpenTag: true,
    openTagOnly: true,
    ignoreAttributes: true,
    relaxRequireCommas: true,
  },
  autocomplete: [
    {
      displayText: "export <value>",
    },
  ],
} as Tag;

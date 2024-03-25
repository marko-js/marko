import { type Tag, parseStatements } from "@marko/babel-utils";

export default {
  parse(tag) {
    const { node } = tag;
    tag.replaceWith(
      parseStatements(tag.hub.file, node.rawValue!, node.start!, node.end!)[0],
    );
  },
  parseOptions: {
    statement: true,
    rawOpenTag: true,
  },
  autocomplete: [
    {
      displayText: "export <value>",
    },
  ],
} as Tag;

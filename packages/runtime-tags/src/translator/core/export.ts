import { parseStatements, type Tag } from "@marko/compiler/babel-utils";

export default {
  parse(tag) {
    const { node } = tag;
    const statements = parseStatements(
      tag.hub.file,
      node.rawValue!,
      node.start!,
      node.end!,
    );

    if (statements.length > 1) {
      throw tag.hub.buildError(
        statements[1],
        "The `<export>` tag takes a single export statement.",
      );
    }

    tag.replaceWith(statements[0]);
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

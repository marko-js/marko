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
        "The [`<import>` tag](https://markojs.com/docs/syntax/#importing-external-files) takes a single import statement.",
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
      displayText: 'import <scope> from "<path>"',
      description:
        "Use to import external modules, follows the same syntax as JavaScript imports.",
      snippet: 'import ${2} from "${1:path}"',
      descriptionMoreURL:
        "https://markojs.com/docs/syntax/#importing-external-files",
    },
  ],
} as Tag;

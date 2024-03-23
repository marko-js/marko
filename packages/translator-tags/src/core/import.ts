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
      displayText: 'import <scope> from "<path>"',
      description:
        "Use to import external modules, follows the same syntax as JavaScript imports.",
      snippet: 'import ${2} from "${1:path}"',
      descriptionMoreURL:
        "https://markojs.com/docs/syntax/#importing-external-files",
    },
  ],
} as Tag;

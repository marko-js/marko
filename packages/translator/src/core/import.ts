import { parseScript, type Tag } from "@marko/babel-utils";

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
      displayText: 'import <scope> from "<path>"',
      description:
        "Use to import external modules, follows the same syntax as JavaScript imports.",
      snippet: 'import ${2} from "${1:path}"',
      descriptionMoreURL:
        "https://markojs.com/docs/syntax/#importing-external-files",
    },
  ],
} as Tag;

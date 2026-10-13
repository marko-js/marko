import { type Tag } from "@marko/compiler/babel-utils";

import { parseSingleStatement } from "../util/statement-tag";

export default {
  parse(tag) {
    tag.replaceWith(
      parseSingleStatement(
        tag,
        "The [`<import>` tag](https://markojs.com/docs/reference/language#import) takes a single import statement.",
      ),
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
      descriptionMoreURL: "https://markojs.com/docs/reference/language#import",
    },
  ],
} as Tag;

import { types as t } from "@marko/babel-types";
import { normalizeTemplateString, isNativeTag } from "@marko/babel-utils";
const EMPTY_OBJECT = {};

export default {
  exit(tag, attr, _, opts = EMPTY_OBJECT) {
    attr.remove();
    const { node } = tag;
    const replacement = t.markoTag(
      t.stringLiteral("_preserve"),
      [],
      opts.bodyOnly ? node.body : t.markoTagBody(undefined, [node])
    );

    if (isNativeTag(tag)) {
      replacement.key = node.key;
      replacement.attributes.push(
        t.markoAttribute("n", t.booleanLiteral(true))
      );

      if (opts.bodyOnly) {
        replacement.attributes.push(
          t.markoAttribute("b", t.booleanLiteral(true))
        );
      }
    } else {
      replacement.key = normalizeTemplateString`p_${node.key}`;
    }

    replacement.isPreserved = true;

    if (opts.if) {
      replacement.attributes.push(t.markoAttribute("i", opts.if));
    }

    if (opts.bodyOnly) {
      tag.set("body", t.markoTagBody(undefined, [replacement]));
    } else {
      tag.replaceWith(replacement);
    }
  }
};

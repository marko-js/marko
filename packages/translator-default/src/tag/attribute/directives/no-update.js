import { types as t } from "@marko/babel-types";
import { normalizeTemplateString } from "@marko/babel-utils";
const EMPTY_OBJECT = {};

export default {
  exit(tag, attr, _, opts = EMPTY_OBJECT) {
    attr.remove();
    const { node } = tag;
    const replacement = t.markoTag(
      t.stringLiteral("_preserve"),
      [],
      opts.bodyOnly ? node.body : t.markoTagBody([node])
    );

    replacement.key = normalizeTemplateString`p_${node.key}`;
    replacement.isPreserved = true;

    if (opts.if) {
      replacement.attributes.push(t.markoAttribute("if", opts.if));
    }

    if (opts.bodyOnly) {
      tag.set("body", t.markoTagBody([replacement]));
    } else {
      tag.replaceWith(replacement);
    }
  }
};

import { types as t } from "@marko/compiler";

import { isNonHTMLText } from "../util/is-non-html-text";
import { getPrevStaticSibling, isStaticText } from "../util/static-text";
import type { TemplateVisitor } from "../util/visitors";
import * as walks from "../util/walks";
import * as writer from "../util/writer";

const kSharedText = Symbol("text merges its walk step with a sibling node");
declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kSharedText]?: true;
  }
}

export default {
  analyze(text) {
    if (isNonHTMLText(text)) return;

    // Adjacent static text merges into a single DOM text node, so only the node
    // that starts the run emits its walk step. Defer when a previous sibling is
    // static text -- otherwise two `MarkoText`s in one run (e.g. `a${"x"}b`)
    // would each emit a step and over-count the walk.
    if (isStaticText(getPrevStaticSibling(text))) {
      (text.node.extra ??= {})[kSharedText] = true;
    }
  },
  translate: {
    exit(text) {
      if (isNonHTMLText(text)) return;

      writer.writeTo(text)`${text.node.value}`;
      if (!text.node.extra?.[kSharedText]) {
        walks.enterShallow(text);
      }
      text.remove();
    },
  },
} satisfies TemplateVisitor<t.MarkoText>;

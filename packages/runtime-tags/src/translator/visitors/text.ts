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

    // Adjacent static text merges into one DOM text node, so only the run's first node emits
    // its walk step; defer when the previous sibling is static text so a run doesn't over-count.
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

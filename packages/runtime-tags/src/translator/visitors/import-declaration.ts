import type { types as t } from "@marko/compiler";
import { resolveTagImport } from "@marko/compiler/babel-utils";

import type { TemplateVisitor } from "../util/visitors";

export default {
  analyze(importDecl) {
    const { node } = importDecl;
    const { source } = node;
    const { value } = source;
    const tagImport = resolveTagImport(importDecl, value);
    if (tagImport) {
      node.extra ??= {};
      node.extra.tagImport = tagImport;

      const tags = importDecl.hub.file.metadata.marko.tags!;
      if (!tags.includes(tagImport)) {
        tags.push(tagImport);
      }
    }
  },
  translate: {
    exit(importDecl) {
      const { node } = importDecl;
      const { extra } = node;
      const tagImport = extra?.tagImport as string | undefined;
      if (tagImport) {
        node.source.value = tagImport;
      }
    },
  },
} satisfies TemplateVisitor<t.ImportDeclaration>;

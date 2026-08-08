import { types as t } from "@marko/compiler";
import { resolveTagImport } from "@marko/compiler/babel-utils";

import type { TemplateVisitor } from "../util/visitors";

export default {
  analyze(exportDecl) {
    const { node } = exportDecl;
    const { source } = node;
    if (source) {
      const tagImport = resolveTagImport(exportDecl, source.value);
      if (tagImport) {
        (node.extra ??= {}).tagImport = tagImport;
        const tags = exportDecl.hub.file.metadata.marko.tags!;
        if (!tags.includes(tagImport)) {
          tags.push(tagImport);
        }
      }
    }
  },
  translate: {
    exit(exportDecl) {
      const { node } = exportDecl;
      const tagImport = node.extra?.tagImport;
      if (tagImport) {
        node.source!.value = tagImport;
      }
    },
  },
} satisfies TemplateVisitor<t.ExportNamedDeclaration | t.ExportAllDeclaration>;

import { types as t } from "@marko/compiler";
import { resolveTagImport } from "@marko/compiler/babel-utils";

import { trackTagImport } from "../util/tag-import";
import type { TemplateVisitor } from "../util/visitors";

declare module "@marko/compiler/dist/types" {
  export interface ExportNamedDeclarationExtra {
    tagImport?: string;
  }
  export interface ExportAllDeclarationExtra {
    tagImport?: string;
  }
}

export default {
  analyze(exportDecl) {
    const { node } = exportDecl;
    const { source } = node;
    if (source) {
      const tagImport = resolveTagImport(exportDecl, source.value);
      if (tagImport) {
        (node.extra ??= {}).tagImport = tagImport;
        trackTagImport(tagImport);
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

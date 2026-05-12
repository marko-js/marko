import { types as t } from "@marko/compiler";
import {
  loadFileForImport,
  resolveRelativePath,
  resolveTagImport,
} from "@marko/compiler/babel-utils";

import { isOutputHTML } from "../util/marko-config";
import { callRuntime } from "../util/runtime";
import type { TemplateVisitor } from "../util/visitors";

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    tagImport?: string;
  }
}

export default {
  analyze(importDecl) {
    const { node } = importDecl;
    const { source } = node;
    const { value } = source;
    const tagImport = resolveTagImport(importDecl, value);
    if (tagImport) {
      (node.extra ??= {}).tagImport = tagImport;
      const tags = importDecl.hub.file.metadata.marko.tags!;
      if (!tags.includes(tagImport)) {
        tags.push(tagImport);
      }
    }

    if (isLazyImportDecl(node)) {
      const { file } = importDecl.hub;
      const lazyFile = tagImport && loadFileForImport(file, value);
      if (!lazyFile) {
        throw importDecl.buildCodeFrameError(
          "Unable to resolve marko file for lazy import.",
        );
      }

      if ((node.importKind || "value") !== "value") {
        throw importDecl.buildCodeFrameError("Invalid lazy import.");
      }

      for (const specifier of importDecl.get("specifiers")) {
        if (!t.isImportDefaultSpecifier(specifier.node)) {
          throw specifier.buildCodeFrameError(
            "Invalid lazy import, only a default specifier is allowed.",
          );
        }
      }
    }
  },
  translate: {
    exit(importDecl) {
      const { node } = importDecl;
      const { extra } = node;
      const tagImport = extra?.tagImport;
      if (tagImport) {
        if (!isOutputHTML() && isLazyImportDecl(node)) {
          const { local } = node.specifiers.find(t.isImportDefaultSpecifier)!;
          const binding = importDecl.scope.getBinding(local.name)!;
          const allKnownReferences = binding.referencePaths.some(
            (ref) => t.isMarkoTag(ref.parent) && ref.parent.extra?.tagNameLazy,
          );
          if (allKnownReferences) {
            importDecl.remove();
          } else {
            const { file } = importDecl.hub;
            const lazyFile = loadFileForImport(file, node.source.value)!;
            const resolvedPath = resolveRelativePath(
              file,
              lazyFile.opts.filename,
            );
            importDecl.replaceWith(
              t.variableDeclaration("const", [
                t.variableDeclarator(
                  local,
                  callRuntime(
                    "_lazy_renderer",
                    t.stringLiteral(lazyFile.metadata.marko.id),
                    t.arrowFunctionExpression(
                      [],
                      t.callExpression(t.import(), [
                        t.stringLiteral(resolvedPath),
                      ]),
                    ),
                  ),
                ),
              ]),
            );
          }

          return;
        }
        node.source.value = tagImport;
      }
    },
  },
} satisfies TemplateVisitor<t.ImportDeclaration>;

export function isLazyImportDecl(node: t.ImportDeclaration): boolean {
  return (
    node.attributes?.some(
      (a) =>
        (a.key.type === "Identifier" ? a.key.name : a.key.value) === "lazy" &&
        a.value.value === "load",
    ) ?? false
  );
}

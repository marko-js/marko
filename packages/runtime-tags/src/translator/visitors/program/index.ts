import { types as t } from "@marko/compiler";
import {
  getTemplateId,
  loadFileForImport,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";

import {
  type BindingPropTree,
  getBindingPropTree,
} from "../../util/binding-prop-tree";
import entryBuilder from "../../util/entry-builder";
import { generateUid, generateUidIdentifier } from "../../util/generate-uid";
import {
  getMarkoOpts,
  isOutputDOM,
  isOutputHTML,
} from "../../util/marko-config";
import {
  BindingType,
  finalizeReferences,
  trackParamsReferences,
} from "../../util/references";
import { resolveRelativeToEntry } from "../../util/resolve-relative-to-entry";
import { getCompatRuntimeFile, getRuntimePath } from "../../util/runtime";
import { startSection } from "../../util/sections";
import type { TemplateVisitor } from "../../util/visitors";
import programDOM from "./dom";
import programHTML from "./html";
import { preAnalyze } from "./pre-analyze";

export let scopeIdentifier: t.Identifier;
export function isScopeIdentifier(node: t.Node): node is t.Identifier {
  return node === scopeIdentifier;
}

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    readyId?: string;
    domExports?: {
      template: string;
      walks: string;
      setup: string;
      params: BindingPropTree | undefined;
    };
  }
}

export default {
  migrate: {
    enter(program) {
      program.node.params = [t.identifier("input")];
    },
    exit(program) {
      program.scope.crawl();
    },
  },
  transform: {
    exit: preAnalyze,
  },
  analyze: {
    enter(program) {
      startSection(program);
      trackParamsReferences(program, BindingType.input);

      const markoOpts = getMarkoOpts();
      const programExtra = (program.node.extra ??= {});
      const inputBinding = program.node.params![0].extra?.binding;
      if (inputBinding) {
        inputBinding.nullable = false;
      }

      // TODO: make any exports undefined if they are noops/empty
      programExtra.domExports = {
        template: generateUid("template"),
        walks: generateUid("walks"),
        setup: generateUid("setup"),
        params: undefined,
      };

      if (markoOpts.linkAssets) {
        programExtra.readyId =
          (markoOpts.optimize ? "_" : "ready:") +
          getTemplateId(markoOpts, program.hub.file.opts.filename);
      }
    },

    exit(program) {
      finalizeReferences();
      const programExtra = program.node.extra!;
      const paramsBinding = programExtra.binding;
      if (paramsBinding && !paramsBinding.pruned) {
        programExtra.domExports!.params = getBindingPropTree(paramsBinding);
      }
    },
  },
  translate: {
    enter(program) {
      scopeIdentifier = isOutputDOM()
        ? generateUidIdentifier("scope")
        : (null as any as t.Identifier);
      {
        const markoOpts = getMarkoOpts();
        const { output, entry } = markoOpts;
        const isLazyEntry = entry === "lazy";
        const isDOMPageEntry =
          (output === "dom" && entry === "page") || output === "hydrate";
        const isServerEntry = output === "html" && entry === "page";

        if (isLazyEntry) {
          const entryFile = program.hub.file;
          const { filename } = entryFile.opts;
          const { readyId } = program.node.extra!;
          const body: t.Statement[] = [
            t.importDeclaration(
              [],
              t.stringLiteral(resolveRelativePath(entryFile, filename)),
            ),
          ];

          if (readyId) {
            body.push(
              t.importDeclaration(
                [
                  t.importSpecifier(
                    t.identifier("ready"),
                    t.identifier("ready"),
                  ),
                ],
                t.stringLiteral(getRuntimePath("dom")),
              ),
              t.expressionStatement(
                t.callExpression(t.identifier("ready"), [
                  t.stringLiteral(readyId),
                ]),
              ),
            );
          }

          program.node.body = body;
          program.skip();
          return;
        }

        if (isDOMPageEntry) {
          const entryFile = program.hub.file;
          const { filename } = entryFile.opts;
          const visitedFiles = new Set([
            resolveRelativePath(entryFile, filename),
          ]);
          entryBuilder.visit(
            entryFile,
            entryFile,
            function visitChild(resolved) {
              if (!visitedFiles.has(resolved)) {
                visitedFiles.add(resolved);
                const file = loadFileForImport(entryFile, resolved);
                if (file) {
                  entryBuilder.visit(file, entryFile, (id) =>
                    visitChild(resolveRelativeToEntry(entryFile, file, id)),
                  );
                }
              }
            },
          );

          program.node.body = entryBuilder.build(entryFile);
          program.skip();
          return;
        }

        if (isServerEntry) {
          const entryFile = program.hub.file;
          const { filename } = entryFile.opts;
          const relativeImport = resolveRelativePath(entryFile, filename);
          const templateId = getTemplateId(markoOpts, filename);
          markoOpts.linkAssets.onAsset("page", filename, templateId);
          program.node.body = [
            t.importDeclaration(
              [t.importSpecifier(t.identifier("flush"), t.identifier("flush"))],
              t.stringLiteral(markoOpts.linkAssets.runtime),
            ),
            t.importDeclaration(
              [t.importDefaultSpecifier(t.identifier("template"))],
              t.stringLiteral(relativeImport),
            ),
            t.importDeclaration(
              [
                t.importSpecifier(
                  t.identifier("withEntry"),
                  t.identifier("withEntry"),
                ),
              ],
              t.stringLiteral(getRuntimePath("html")),
            ),
            t.exportAllDeclaration(t.stringLiteral(relativeImport)),
            t.exportDefaultDeclaration(
              t.callExpression(t.identifier("withEntry"), [
                t.identifier("template"),
                t.identifier("flush"),
                t.stringLiteral(templateId),
              ]),
            ),
          ];
          program.skip();
          return;
        }
      }

      if (isOutputHTML()) {
        programHTML.translate.enter();
      } else {
        programDOM.translate.enter(program);
      }
    },
    exit(program) {
      if (isOutputHTML()) {
        programHTML.translate.exit(program);
      } else {
        programDOM.translate.exit(program);
      }

      if (program.node.extra?.needsCompat) {
        const compatFile = getCompatRuntimeFile();
        const body: [undefined | t.Statement, ...t.Statement[]] = [undefined];

        for (const child of program.node.body) {
          if (
            child.type === "ImportDeclaration" &&
            child.source.value === compatFile
          ) {
            body[0] = child;
          } else {
            body.push(child);
          }
        }

        body[0] ??= t.importDeclaration([], t.stringLiteral(compatFile));
        program.node.body = body as t.Statement[];
      }
    },
  },
} satisfies TemplateVisitor<t.Program>;

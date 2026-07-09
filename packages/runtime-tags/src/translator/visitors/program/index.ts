import { types as t } from "@marko/compiler";
import {
  getTemplateId,
  loadFileForImport,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";

import { addAssetImport } from "../../util/asset-imports";
import {
  type BindingPropTree,
  getBindingPropTree,
} from "../../util/binding-prop-tree";
import entryBuilder from "../../util/entry-builder";
import { generateUid, generateUidIdentifier } from "../../util/generate-uid";
import getStyleFile from "../../util/get-style-file";
import {
  getMarkoOpts,
  getReadyId,
  isOutputDOM,
  isOutputHTML,
  isPersisted,
  isUpdateEntryBuild,
} from "../../util/marko-config";
import {
  BindingType,
  finalizeReferences,
  trackParamsReferences,
} from "../../util/references";
import { resolveRelativeToEntry } from "../../util/resolve-relative-to-entry";
import { getCompatRuntimeFile, getRuntimePath } from "../../util/runtime";
import { startSection } from "../../util/sections";
import { sectionHasSetupStatements } from "../../util/setup-statements";
import { analyzeUpdateGeneric } from "../../util/update-merges";
import type { TemplateVisitor } from "../../util/visitors";
import programDOM from "./dom";
import programHTML from "./html";
import { preAnalyze } from "./pre-analyze";
import programUpdate from "./update";

export let scopeIdentifier: t.Identifier;
export function isScopeIdentifier(node: t.Node): node is t.Identifier {
  return node === scopeIdentifier;
}

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    domExports?: {
      template: string;
      walks: string;
      setup: string;
      setupEmpty?: true;
      /**
       * The template's whole `?update` module is the generic interpreter
       * (`analyzeUpdateGeneric`); parents dispatch its patch scopes through
       * `_update_scope` directly instead of importing the module.
       */
      updateGeneric?: true;
      params: BindingPropTree | undefined;
    };
    styleFile?: string;
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

      // Resolve any colocated style file (eg `template.style.css`) once so the
      // dom output and the page entry builder can both link it in.
      const styleFile = getStyleFile(program.hub.file);
      if (styleFile) {
        programExtra.styleFile = styleFile;
        addAssetImport(program.hub.file, styleFile);
      }
    },

    exit(program) {
      finalizeReferences();
      const programExtra = program.node.extra!;
      const paramsBinding = programExtra.binding;
      if (paramsBinding && !paramsBinding.pruned) {
        programExtra.domExports!.params = getBindingPropTree(paramsBinding);
      }

      const section = programExtra.section!;
      if (!section.hoistedTo && !sectionHasSetupStatements(section)) {
        // The setup export will be a noop, letting parent templates skip
        // importing and calling it (checked when this template translates).
        programExtra.domExports!.setupEmpty = true;
      }
      analyzeUpdateGeneric(program);
    },
  },
  translate: {
    enter(program) {
      scopeIdentifier = isOutputDOM()
        ? generateUidIdentifier("scope")
        : (null as any as t.Identifier);
      {
        const markoOpts = getMarkoOpts();
        const { output, entry, runtimeId } = markoOpts;
        const isLoadEntry = entry === "load";
        const isDOMPageEntry =
          (output === "dom" && entry === "page") || output === "hydrate";
        const isServerEntry = output === "html" && entry === "page";

        // The update/persisted entry kinds are bundler-resolved persisted
        // artifacts with no assets to link; only the facade kinds bake
        // linked-asset wiring in.
        if ((entry === "page" || entry === "load") && !markoOpts.linkAssets) {
          throw program.buildCodeFrameError(
            'The "entry" option requires the `linkAssets` compiler option to be configured.',
          );
        }

        // Validated at compile time since entry wrappers bake the value in
        // (the server side applies it before the render time check runs).
        if (runtimeId && !/^[_a-z][_a-z0-9]*$/i.test(runtimeId)) {
          throw program.buildCodeFrameError(
            `Invalid runtimeId: "${runtimeId}". The runtimeId must start with a letter or underscore and only contain letters, numbers, and underscores.`,
          );
        }

        if (isLoadEntry) {
          const entryFile = program.hub.file;
          const { filename } = entryFile.opts;
          const relativePath = resolveRelativePath(entryFile, filename);
          // Persisted builds also load the template's `?update` merge module
          // before declaring ready: a resumed lazy child must be able to
          // receive persisted update merges the moment it loads (a patch
          // that arrived earlier is parked on its live scope -- see
          // `_update_load` in dom/update.ts -- and the ready() below is
          // what flushes it).
          const loadExpr = isPersisted()
            ? t.callExpression(
                t.memberExpression(
                  t.identifier("Promise"),
                  t.identifier("all"),
                ),
                [
                  t.arrayExpression([
                    t.callExpression(t.import(), [
                      t.stringLiteral(relativePath),
                    ]),
                    t.callExpression(t.import(), [
                      t.stringLiteral(relativePath + "?update"),
                    ]),
                  ]),
                ],
              )
            : t.callExpression(t.import(), [t.stringLiteral(relativePath)]);
          program.node.body = [
            t.importDeclaration(
              [t.importSpecifier(t.identifier("ready"), t.identifier("ready"))],
              t.stringLiteral(getRuntimePath("dom")),
            ),
            t.expressionStatement(
              t.callExpression(
                t.memberExpression(loadExpr, t.identifier("then")),
                [
                  t.arrowFunctionExpression(
                    [],
                    t.callExpression(t.identifier("ready"), [
                      t.stringLiteral(getReadyId(entryFile)!),
                    ]),
                  ),
                ],
              ),
            ),
          ];
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
          const pageAssetArgs = [
            t.identifier("template"),
            t.identifier("flush"),
            t.stringLiteral(templateId),
          ];
          if (runtimeId) {
            pageAssetArgs.push(t.stringLiteral(runtimeId));
          }
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
                  t.identifier("withPageAssets"),
                  t.identifier("withPageAssets"),
                ),
              ],
              t.stringLiteral(getRuntimePath("html")),
            ),
            t.exportAllDeclaration(t.stringLiteral(relativeImport)),
            t.exportDefaultDeclaration(
              t.callExpression(t.identifier("withPageAssets"), pageAssetArgs),
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
      } else if (isUpdateEntryBuild()) {
        // `?update` entry: the dom visitors ran in full (identical analysis
        // and register ids), but the emitted module is the compiled patch
        // merge instead of the template.
        programUpdate.translate.exit(program);
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

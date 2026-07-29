import { types as t } from "@marko/compiler";
import {
  getTemplateId,
  loadFileForImport,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";

import { hasAnalyzeErrors } from "../../util/analyze-errors";
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
  isPersistedEntryBuild,
  isRenderersEntryBuild,
} from "../../util/marko-config";
import { finalizeMembranes } from "../../util/membranes";
import {
  BindingType,
  finalizeReferences,
  trackParamsReferences,
} from "../../util/references";
import { resolveRelativeToEntry } from "../../util/resolve-relative-to-entry";
import { getCompatRuntimeFile, getRuntimePath } from "../../util/runtime";
import { startSection } from "../../util/sections";
import { sectionHasSetupStatements } from "../../util/setup-statements";
import { getResumeRegisterId } from "../../util/signals";
import { recordPlanImport } from "../../util/update-plan-records";
import type { TemplateVisitor } from "../../util/visitors";
import { getEscapedTemplateImports } from "../tag/dynamic-tag";
import programDOM from "./dom";
import programHTML from "./html";
import { preAnalyze } from "./pre-analyze";
import programRenderers from "./renderers";
import programUpdate from "./update";
import { publishUpdatePlan } from "./update-plan";

export let scopeIdentifier: t.Identifier;
export let localsIdentifier: t.Identifier;
export function isScopeIdentifier(node: t.Node): node is t.Identifier {
  return node === scopeIdentifier;
}

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    domExports?: {
      template: string;
      walks: string;
      setup: string;
      update: string;
      setupEmpty?: true;
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
        update: generateUid("update"),
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
      // Analyze failures were already reported as diagnostics and their tags
      // skipped, so skip finalization work that assumes an error-free template.
      if (hasAnalyzeErrors()) {
        // An error-free parent may still classify this program's sections
        // (via its child tree); mark them so the phase guard stays quiet.
        finalizeMembranes();
        return;
      }
      finalizeReferences();
      if (isPersisted()) {
        program.node.extra!.escapedTemplateImports =
          getEscapedTemplateImports(program);
      }
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
      if (isPersisted()) getResumeRegisterId(section, "update");
    },
  },
  translate: {
    enter(program) {
      scopeIdentifier = isOutputDOM()
        ? generateUidIdentifier("scope")
        : (null as any as t.Identifier);
      localsIdentifier = isOutputDOM()
        ? generateUidIdentifier("locals")
        : (null as any as t.Identifier);
      {
        const markoOpts = getMarkoOpts();
        const { output, entry, runtimeId } = markoOpts;
        const isLoadEntry = entry === "load";
        const isDOMPageEntry =
          (output === "dom" && entry === "page") || output === "hydrate";
        const isServerEntry = output === "html" && entry === "page";

        // Persisted entries have no assets to link; only facades bake wiring in.
        if ((entry === "page" || entry === "load") && !markoOpts.linkAssets) {
          throw program.buildCodeFrameError(
            'The "entry" option requires the `linkAssets` compiler option to be configured.',
          );
        }

        if (
          (entry === "persisted" || entry === "renderers") &&
          !markoOpts.persisted
        ) {
          throw program.buildCodeFrameError(
            `The "${entry}" entry kind requires the \`persisted\` compiler option to be enabled.`,
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
          // Persisted lazy children load their merge module before declaring ready.
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
                      t.stringLiteral(relativePath + "?persisted"),
                    ]),
                  ]),
                ],
              )
            : t.callExpression(t.import(), [t.stringLiteral(relativePath)]);
          program.node.body = [
            t.importDeclaration(
              [
                t.importSpecifier(
                  t.identifier("ready"),
                  t.identifier(isPersisted() ? "readyPersisted" : "ready"),
                ),
                ...(isPersisted()
                  ? [
                      t.importSpecifier(
                        t.identifier("failed"),
                        t.identifier("readyPersistedFailed"),
                      ),
                    ]
                  : []),
              ],
              t.stringLiteral(getRuntimePath("dom")),
            ),
            // Persisted dispatches may be parked on this ready id, so a
            // rejected chunk must fail them closed rather than strand them;
            // without persisted pages a rejection only surfaces as the
            // network error it already is.
            // Dynamic so the template stays mergeable with its virtual signal
            // chunks; a static import splits it out, adding a chunk and bytes.
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
                  ...(isPersisted()
                    ? [
                        t.arrowFunctionExpression(
                          [],
                          t.callExpression(t.identifier("failed"), [
                            t.stringLiteral(getReadyId(entryFile)!),
                          ]),
                        ),
                      ]
                    : []),
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
      } else if (isRenderersEntryBuild()) {
        // Data-only: section metas exist without the DOM program assembly.
        programRenderers.translate.exit(program);
        return;
      } else if (isPersistedEntryBuild()) {
        programDOM.translate.exit(program);
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
        if (isPersistedEntryBuild()) {
          // The relocated compat request is an external runtime helper
          // (census site 40); its ordinal stays finalizer-owned below.
          recordPlanImport(program.hub.file, compatFile, "external");
        }
      }

      // After the `needsCompat` relocation above: the plan finalizer assigns
      // statement ordinals from the final print order (never emission order).
      if (isPersistedEntryBuild()) {
        publishUpdatePlan(program);
      }
    },
  },
} satisfies TemplateVisitor<t.Program>;

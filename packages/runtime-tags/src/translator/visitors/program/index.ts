import { types as t } from "@marko/compiler";
import {
  getFile,
  getTemplateId,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";

import { hasAnalyzeErrors } from "../../util/analyze-errors";
import { addAssetImport } from "../../util/asset-imports";
import { isSectionRendererElided } from "../../util/binding-has-prop";
import {
  type BindingPropTree,
  getBindingPropTree,
} from "../../util/binding-prop-tree";
import { type Binding, BindingType } from "../../util/bindings";
import entryBuilder from "../../util/entry-builder";
import { finalizeReferences } from "../../util/finalize-references";
import { generateUid, generateUidIdentifier } from "../../util/generate-uid";
import getStyleFile from "../../util/get-style-file";
import {
  getMarkoOpts,
  getReadyId,
  isOutputDOM,
  isOutputHTML,
} from "../../util/marko-config";
import { isUnconditionalReason } from "../../util/reasons";
import { trackParamsReferences } from "../../util/references";
import {
  dynamicImport,
  getCompatRuntimeFile,
  getRuntimePath,
} from "../../util/runtime";
import {
  forEachSection,
  getRendererReason,
  startSection,
} from "../../util/sections";
import { finalizeSetupWork } from "../../util/setup-work";
import type { TemplateVisitor } from "../../util/visitors";
import programDOM from "./dom";
import programHTML from "./html";
import { preAnalyze } from "./pre-analyze";

export let scopeIdentifier: t.Identifier;
export let localsIdentifier: t.Identifier;

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    /** Client code reads something of its own after resume (a section, or a
     * renderer it registers), so a page bundles it. */
    hasResumes?: boolean;
    /** What the template reads of its params (its input is the first), the
     * contract its callers keep. */
    paramsTree?: BindingPropTree;
    /** The names every compile of the template exports its parts under. */
    exportNames?: {
      template: string;
      walks: string;
      setup: string;
      /** The signal of each of the template's param bindings, a property of
       * one included. */
      params: Map<Binding, string>;
      /** Each content passthrough's `_dynamic_tag_content` signal. */
      directContent: Map<Binding, string>;
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
      trackParamsReferences(program, BindingType.param);

      const programExtra = (program.node.extra ??= {});
      const inputBinding = program.node.params![0].extra?.binding;
      if (inputBinding) {
        inputBinding.nullable = false;
      }

      // TODO: make any exports undefined if they are noops/empty
      programExtra.exportNames = {
        template: generateUid("template"),
        walks: generateUid("walks"),
        setup: generateUid("setup"),
        params: new Map(),
        directContent: new Map(),
      };

      // Resolve any colocated style file (eg `template.style.css`) once so the
      // dom output and the page entry builder can both link it in.
      const styleFile = getStyleFile(getFile());
      if (styleFile) {
        programExtra.styleFile = styleFile;
        addAssetImport(styleFile);
      }
    },

    exit(program) {
      // Analyze failures were already reported as diagnostics and their tags
      // skipped, so skip finalization work that assumes an error-free template.
      if (hasAnalyzeErrors()) return;
      finalizeReferences();
      const programExtra = program.node.extra!;
      const paramsBinding = programExtra.binding;
      if (paramsBinding && !paramsBinding.pruned) {
        programExtra.paramsTree = getBindingPropTree(paramsBinding);
      }

      const section = programExtra.section!;

      // Anything revived or unconditionally registered against this module
      // has to reach the client on its own.
      forEachSection((childSection) => {
        programExtra.hasResumes ||= !!(
          isUnconditionalReason(childSection.reason) ||
          (childSection !== section &&
            !isSectionRendererElided(childSection) &&
            getRendererReason(childSection))
        );
      });

      // A template with no setup work lets its callers skip its setup export
      // (checked when this template translates).
      finalizeSetupWork();
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

        if (entry && !markoOpts.linkAssets) {
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
          const entryFile = getFile();
          const { filename } = entryFile.opts;
          const readyId = getReadyId(entryFile)!;
          // A rejected chunk blocks this ready id forever: the debug build
          // reports it instead of leaving the content silently inert, while
          // production keeps the arm's bytes out (the failure still surfaces
          // as a network error in devtools).
          const report = !markoOpts.optimize;
          program.node.body = [
            t.importDeclaration(
              [
                t.importSpecifier(t.identifier("ready"), t.identifier("ready")),
                ...(report
                  ? [
                      t.importSpecifier(
                        t.identifier("readyFailed"),
                        t.identifier("readyFailed"),
                      ),
                    ]
                  : []),
              ],
              t.stringLiteral(getRuntimePath("dom")),
            ),
            // Dynamic so the template stays mergeable with its virtual signal
            // chunks; a static import splits it out, adding a chunk and bytes.
            t.expressionStatement(
              dynamicImport(
                resolveRelativePath(entryFile, filename),
                t.arrowFunctionExpression(
                  [],
                  t.callExpression(t.identifier("ready"), [
                    t.stringLiteral(readyId),
                  ]),
                ),
                report &&
                  t.arrowFunctionExpression(
                    [],
                    t.callExpression(t.identifier("readyFailed"), [
                      t.stringLiteral(readyId),
                    ]),
                  ),
              ),
            ),
          ];
          program.skip();
          return;
        }

        if (isDOMPageEntry) {
          const entryFile = getFile();
          entryBuilder.visit(entryFile, entryFile);
          program.node.body = entryBuilder.build(entryFile);
          program.skip();
          return;
        }

        if (isServerEntry) {
          const entryFile = getFile();
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

import { types as t } from "@marko/compiler";
import {
  importDefault,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";

import { scopeIdentifier } from ".";
import { isSectionRendererElided } from "../../util/binding-has-prop";
import { isPersisted, isPersistedEntryBuild } from "../../util/marko-config";
import { forEach } from "../../util/optional";
import {
  BindingType,
  getScopeAccessor,
  getSectionInstancesAccessorLiteral,
} from "../../util/references";
import { callRuntime } from "../../util/runtime";
import {
  composesDocumentFrame,
  forEachSectionReverse,
  getSectionForBody,
  getSectionParentIsOwner,
  getSectionRegisterReasons,
  isDynamicClosure,
  type Section,
  setBranchRendererArgs,
} from "../../util/sections";
import {
  addStatement,
  buildUpdatingGuard,
  finalizeRenderStatements,
  getResumeRegisterId,
  getSetup,
  getSignal,
  getSignalFn,
  initValue,
  replaceNullishAndEmptyFunctionsWith0,
  signalHasStatements,
  writeRegisteredFns,
  writeSignals,
} from "../../util/signals";
import { toPropertyName } from "../../util/to-property-name";
import {
  cloneUpdateGlobalsStatements,
  getUpdateGlobalsRegisterId,
  getUpdateGlobalsStatements,
  isUpdateDeliveredClosure,
  registerUpdateValueSignals,
} from "../../util/update-merges";
import {
  type PlanShellFact,
  recordPlanImport,
  recordPlanShells,
} from "../../util/update-plan-records";
import type { TemplateVisitor } from "../../util/visitors";
import { trimTrailingExits } from "../../util/walks";
import * as writer from "../../util/writer";
import { forEachSectionShell } from "./renderers";

export default {
  translate: {
    enter(program) {
      const section = getSectionForBody(program)!;
      forEachSectionReverse((childSection) => {
        if (childSection !== section) {
          forEach(childSection.referencedClosures, (closure) => {
            if (closure.type !== BindingType.constant) {
              const closureSignal = getSignal(childSection, closure);
              if (signalHasStatements(closureSignal)) {
                const invocation = t.expressionStatement(
                  t.callExpression(
                    isDynamicClosure(childSection, closure)
                      ? closureSignal.identifier
                      : t.memberExpression(
                          closureSignal.identifier,
                          t.identifier("_"),
                        ),
                    [scopeIdentifier],
                  ),
                );
                addStatement(
                  "render",
                  childSection,
                  undefined,
                  isPersisted() && isUpdateDeliveredClosure(closure)
                    ? buildUpdatingGuard(invocation)
                    : invocation,
                );
              }
            }
          });
        }
      });
    },
    exit(program) {
      if (isPersistedEntryBuild()) {
        // Snapshot before any writeSignals call rewrites the originals.
        forEachSectionReverse(cloneUpdateGlobalsStatements);
      }
      forEachSectionReverse(writer.getSectionMeta);

      const section = getSectionForBody(program)!;
      // A root holding the document frame is patch-stable: patches only ever
      // target regions of an existing document, so its markup ships neither
      // as a template nor as a client-held shell.
      const patchStable = isPersistedEntryBuild() && section.hasDocumentFrame;
      // Shell-capable sections hoist their template/walks before the renderer
      // args consume them, so the static registration below re-references
      // them instead of duplicating the strings.
      const staticShells = isPersistedEntryBuild()
        ? collectStaticShells(program, section)
        : undefined;
      const meta = writer.getSectionMeta(section);
      const { decls } = meta;
      const walks = patchStable ? undefined : meta.walks;
      const writes = patchStable ? undefined : meta.writes;
      const domExports = program.node.extra.domExports!;
      const templateIdentifier = t.identifier(domExports.template);
      const walksIdentifier = t.identifier(domExports.walks);
      const setupIdentifier = t.identifier(domExports.setup);
      const inputBinding = program.node.params![0].extra?.binding;
      const programInputSignal =
        inputBinding && !inputBinding.pruned
          ? initValue(inputBinding)
          : undefined;
      let extraDecls = decls;
      const styleFile = program.node.extra.styleFile;
      if (styleFile) {
        importDefault(program.hub.file, styleFile);
        if (isPersistedEntryBuild()) {
          // Bare side-effect request (census site 32).
          recordPlanImport(
            program.hub.file,
            resolveRelativePath(program.hub.file, styleFile),
            "external",
          );
        }
      }

      forEachSectionReverse((childSection) => {
        if (childSection !== section) {
          const tagParamsSignal =
            childSection.params && initValue(childSection.params);
          const tagParamsIdentifier =
            tagParamsSignal && signalHasStatements(tagParamsSignal)
              ? tagParamsSignal.identifier
              : undefined;
          const { writes, decls } = writer.getSectionMeta(childSection);
          // Reaches the runtime through `_content`, which strips these.
          const walks = trimTrailingExits(
            writer.getSectionMeta(childSection).walks,
          );
          const setup = getSetup(childSection);
          // Deferred entries register update signals — only after initValue
          // materialized param/input property-alias signals, immediately
          // before the write; eager modules leave them unregistered so an
          // unused client render graph can tree-shake.
          if (isPersistedEntryBuild()) {
            registerUpdateValueSignals(childSection);
          }
          const written = writeSignals(childSection);
          const setupIdentifier =
            setup && written.has(setup) ? setup.identifier : undefined;

          if (!isSectionRendererElided(childSection)) {
            if (getSectionParentIsOwner(childSection)) {
              setBranchRendererArgs(childSection, [
                writes,
                walks,
                setupIdentifier,
                tagParamsIdentifier,
              ]);
            } else {
              let renderer = callRuntime(
                // Persisted entries never register content construction:
                // divergent content arrives as a resumable HTML replacement.
                !isPersistedEntryBuild() &&
                  getSectionRegisterReasons(childSection)
                  ? "_content_resume"
                  : "_content",
                t.stringLiteral(getResumeRegisterId(childSection, "content")),
                ...replaceNullishAndEmptyFunctionsWith0([
                  writes,
                  walks,
                  setupIdentifier,
                  tagParamsIdentifier,
                  childSection.hoisted || childSection.isHoistThrough
                    ? getSectionInstancesAccessorLiteral(childSection)
                    : undefined,
                ]),
              );

              if (childSection.referencedLocalClosures) {
                const objProps: t.ObjectExpression["properties"] = [];
                forEach(childSection.referencedLocalClosures, (closure) => {
                  const closureSignal = getSignal(childSection, closure);
                  const key = toPropertyName(getScopeAccessor(closure, true));
                  if (signalHasStatements(closureSignal)) {
                    const expr = getSignalFn(closureSignal);
                    if (t.isFunction(expr) && t.isBlockStatement(expr.body)) {
                      objProps.push(
                        t.objectMethod("method", key, expr.params, expr.body),
                      );
                    } else {
                      objProps.push(t.objectProperty(key, expr));
                    }
                  }
                });

                if (objProps.length) {
                  renderer = callRuntime(
                    "_content_closures",
                    renderer,
                    t.objectExpression(objProps),
                  );
                }
              }

              program.node.body.push(
                t.variableDeclaration("const", [
                  t.variableDeclarator(
                    t.identifier(childSection.name),
                    renderer,
                  ),
                ]),
              );
            }
          }

          if (decls) {
            extraDecls = extraDecls ? [...decls, ...extraDecls] : decls;
          }
        }
      });

      if (isPersistedEntryBuild()) {
        registerUpdateValueSignals(section);
      }
      const written = writeSignals(section);
      writeRegisteredFns();

      if (isPersistedEntryBuild()) {
        forEachSectionReverse((globalsSection) => {
          const statements = getUpdateGlobalsStatements(globalsSection);
          if (statements.length) {
            finalizeRenderStatements(statements);
            program.node.body.push(
              t.expressionStatement(
                callRuntime(
                  "_resume",
                  t.stringLiteral(getUpdateGlobalsRegisterId(globalsSection)),
                  t.arrowFunctionExpression(
                    [scopeIdentifier],
                    t.arrowFunctionExpression([], t.blockStatement(statements)),
                  ),
                ),
              ),
            );
          }
        });
      }

      const setup = getSetup(section);
      if (domExports.setupEmpty && setup && written.has(setup)) {
        // Parents skip calling this setup export because analyze proved it a noop;
        // a non-noop setup here means that proof was wrong, so fail loudly.
        throw program.buildCodeFrameError(
          "Marko internal error: analysis marked this template's setup export as empty but translation produced statements for it. Please open an issue with a reproduction.",
        );
      }
      if (!setup) {
        program.node.body.unshift(
          t.exportNamedDeclaration(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                setupIdentifier,
                t.arrowFunctionExpression([], t.blockStatement([])),
              ),
            ]),
          ),
        );
      }

      program.node.body.unshift(
        t.exportNamedDeclaration(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              templateIdentifier,
              writes || t.stringLiteral(""),
            ),
          ]),
        ),
        t.exportNamedDeclaration(
          t.variableDeclaration("const", [
            t.variableDeclarator(walksIdentifier, walks || t.stringLiteral("")),
          ]),
        ),
      );

      if (extraDecls) {
        program.node.body.unshift(t.variableDeclaration("const", extraDecls));
      }

      program.node.body.push(
        t.exportDefaultDeclaration(
          callRuntime(
            "_template",
            t.stringLiteral(program.hub.file.metadata.marko.id),
            templateIdentifier,
            walksIdentifier,
            setupIdentifier,
            programInputSignal?.identifier,
          ),
        ),
      );

      if (staticShells?.length) {
        program.node.body.push(
          t.expressionStatement(
            callRuntime(
              "_static_shells",
              t.objectExpression(
                staticShells.map(([id, sources]) =>
                  t.objectProperty(
                    t.stringLiteral(id),
                    t.arrayExpression([
                      t.cloneNode(sources[0] ?? emptyString),
                      t.cloneNode(sources[1] ?? emptyString),
                    ]),
                  ),
                ),
              ),
            ),
          ),
        );
      }

      if (isPersistedEntryBuild()) {
        recordPlanShells(
          program.hub.file,
          (staticShells || []).flatMap<PlanShellFact>(([shellId, sources]) =>
            sources[0]?.type === "Identifier" &&
            sources[1]?.type === "Identifier"
              ? [
                  {
                    shellId,
                    templateSym: `%${sources[0].name}`,
                    walksSym: `%${sources[1].name}`,
                  },
                ]
              : [],
          ),
        );
      }
    },
  },
} satisfies TemplateVisitor<t.Program>;

const emptyString = t.stringLiteral("");

/** The shells this entry's chunk holds: the server omits their wire entries
 * for a client that evaluated this module. Sources are the section's own
 * hoisted template/walks — the root's are its exported consts. */
function collectStaticShells(
  program: t.NodePath<t.Program>,
  rootSection: Section,
) {
  const { template, walks } = program.node.extra.domExports!;
  const shells: [id: string, sources: [t.Expression?, t.Expression?]][] = [];
  forEachSectionShell(
    rootSection,
    program.hub.file.metadata.marko.id,
    (section, ids) => {
      // A shell composing the document frame is missing it: the client build
      // elides that markup, so claiming the shell would construct the section
      // without it. Unheld, the server ships the composed wire shell instead.
      if (composesDocumentFrame(section)) return;
      let sources: [t.Expression?, t.Expression?];
      if (section === rootSection) {
        sources = [t.identifier(template), t.identifier(walks)];
      } else {
        const meta = writer.getSectionMetaIdentifiers(section);
        sources = [meta.writes, meta.walks];
      }
      for (const id of ids) shells.push([id, sources]);
    },
  );
  return shells;
}

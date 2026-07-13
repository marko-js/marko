import { types as t } from "@marko/compiler";
import { importDefault } from "@marko/compiler/babel-utils";

import { isSectionRendererElided } from "../../util/binding-has-prop";
import { isPersisted, isPersistedEntryBuild } from "../../util/marko-config";
import { forEach } from "../../util/optional";
import {
  BindingType,
  getScopeAccessor,
  getSectionInstancesAccessorLiteral,
} from "../../util/references";
import { callRuntime, importRuntime } from "../../util/runtime";
import {
  forEachSectionReverse,
  getSectionForBody,
  getSectionParentIsOwner,
  getSectionRegisterReasons,
  isDynamicClosure,
  setBranchRendererArgs,
} from "../../util/sections";
import {
  addStatement,
  finalizeRenderStatements,
  getResumeRegisterId,
  getSetup,
  getSignal,
  getSignalFn,
  getSignals,
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
import type { TemplateVisitor } from "../../util/visitors";
import * as writer from "../../util/writer";
import { scopeIdentifier } from ".";

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
                  // Persisted builds skip request-derived closure renders in
                  // branches created while an update patch applies: resume
                  // never serializes those raw owner values (nothing re-runs
                  // such closures client-side), so the branch merge places the
                  // server-rendered holes instead.
                  isPersisted() && isUpdateDeliveredClosure(closure)
                    ? t.ifStatement(
                        t.unaryExpression("!", importRuntime("_updating")),
                        invocation,
                      )
                    : invocation,
                );
              }
            }
          });
        }
      });
    },
    exit(program) {
      // Persisted entry builds (`?persisted`, loaded by the generated `?update`
      // entry) register the value signals update entries invoke through the
      // registry (must happen before signals are written). The main persisted
      // dom module emits them unregistered so hydration bundles tree-shake what
      // resume doesn't reference.
      if (isPersistedEntryBuild()) {
        forEachSectionReverse(registerUpdateValueSignals);
        // Snapshot before any writeSignals call rewrites the originals.
        forEachSectionReverse(cloneUpdateGlobalsStatements);
      }
      forEachSectionReverse(writer.getSectionMeta);

      const section = getSectionForBody(program)!;
      const { walks, writes, decls } = writer.getSectionMeta(section);
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
      }

      forEachSectionReverse((childSection) => {
        if (childSection !== section) {
          const tagParamsSignal =
            childSection.params && initValue(childSection.params);
          const tagParamsIdentifier =
            tagParamsSignal && signalHasStatements(tagParamsSignal)
              ? tagParamsSignal.identifier
              : undefined;
          const { walks, writes, decls } = writer.getSectionMeta(childSection);
          const setup = getSetup(childSection);
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
                // divergent content arrives as a resumable HTML fragment.
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

      const written = writeSignals(section);
      writeRegisteredFns();

      // Statements mixing client state with `$global` re-run client-side after
      // an update patch's `$global` assign (the server can't compute them -- it
      // doesn't know the live state operand). The persisted entry registers a
      // per-section copy curried to the shape `_update_signal` invokes; reads
      // resolve to scope reads so `$scope` is the only input.
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
        // Parent templates have skipped calling the setup export based on
        // the analyze phase proving it would be a noop; a non noop setup
        // here means that proof was wrong and must fail loudly.
        throw program.buildCodeFrameError(
          "Marko internal error: analysis marked this template's setup export as empty but translation produced statements for it. Please open an issue with a reproduction.",
        );
      }
      if (domExports.updateGeneric) {
        // Parent update entries dispatch this template's patch scopes through
        // the bare generic interpreter because analysis proved its update
        // module would be exactly that, so that module (where the equivalent
        // check lives) may never build. Effects (`_update_pair`) or `$global`
        // re-runs in the render graph mean that proof was wrong.
        let updateGenericBroken = !!getUpdateGlobalsStatements(section).length;
        if (!updateGenericBroken) {
          for (const signal of getSignals(section).values()) {
            if (signal.effect.length) {
              updateGenericBroken = true;
              break;
            }
          }
        }
        if (updateGenericBroken) {
          throw program.buildCodeFrameError(
            "Marko internal error: analysis marked this template's update module as generic but its render graph has effects or $global re-runs. Please open an issue with a reproduction.",
          );
        }
      }

      // Slim persisted main modules may tree-shake every branch-machinery
      // import (`_if`/`_for_of`/... construction is what calls `enableBranches`
      // at module init), but the resume walker defers branch visits until
      // branches are enabled -- element refs riding those visits must bind at
      // hydration, not at the first navigation's `?persisted` entry load, or
      // pre-navigation interactivity reads undefined.
      if (isPersisted() && !isPersistedEntryBuild()) {
        program.node.body.push(
          t.expressionStatement(callRuntime("_enable_branches_persisted")),
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
    },
  },
} satisfies TemplateVisitor<t.Program>;

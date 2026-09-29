import { types as t } from "@marko/compiler";
import { getFile, importDefault } from "@marko/compiler/babel-utils";

import { getExportNames, scopeIdentifier } from ".";
import { isSectionRendererElided } from "../../util/binding-has-prop";
import { BindingType } from "../../util/bindings";
import { writeModuleRegistrations } from "../../util/module-registrations";
import { forEach } from "../../util/optional";
import { callRuntime, registerRuntimeValue } from "../../util/runtime";
import {
  getScopeAccessor,
  getSectionInstancesAccessorLiteral,
} from "../../util/scope-accessor";
import {
  forEachSectionReverse,
  getContentClosures,
  getProgramSection,
  getRendererReason,
  isDynamicClosure,
  type Section,
  setBranchRendererArgs,
} from "../../util/sections";
import {
  addStatement,
  getResumeRegisterId,
  getSetup,
  getSignal,
  getSignalFn,
  initValue,
  replaceNullishAndEmptyFunctionsWith0,
  type Signal,
  signalHasStatements,
  writeRegisteredFns,
  writeSignals,
} from "../../util/signals";
import {
  getSectionMeta,
  trimTrailingExits,
  writeStructureExports,
} from "../../util/structure";
import { toPropertyName } from "../../util/to-property-name";
import type { TemplateVisitor } from "../../util/visitors";

export default {
  translate: {
    enter() {
      const section = getProgramSection();
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
                addStatement("render", childSection, undefined, invocation);
              }
            }
          });
        }
      });
    },
    exit(program) {
      forEachSectionReverse(getSectionMeta);

      const section = getProgramSection();
      const exportNames = getExportNames();
      const templateIdentifier = t.identifier(exportNames.template);
      const walksIdentifier = t.identifier(exportNames.walks);
      const setupIdentifier = t.identifier(exportNames.setup);
      const inputBinding = program.node.params![0].extra?.binding;
      const programInputSignal =
        inputBinding && !inputBinding.pruned
          ? initValue(inputBinding)
          : undefined;
      const styleFile = program.node.extra.styleFile;
      if (styleFile) {
        importDefault(getFile(), styleFile);
      }

      forEachSectionReverse((childSection) => {
        if (childSection !== section) {
          const tagParamsSignal =
            childSection.params && initValue(childSection.params);
          forEach(childSection.localClosures, (closure) => {
            // Inlined into `_content_closures` below, not written on its own.
            initValue(closure).build = undefined;
          });
          const tagParamsIdentifier =
            tagParamsSignal && signalHasStatements(tagParamsSignal)
              ? tagParamsSignal.identifier
              : undefined;
          const { writes } = getSectionMeta(childSection);
          // Reaches the runtime through `_content`, which strips these.
          const walks = trimTrailingExits(getSectionMeta(childSection).walks);
          const written = writeSignals(childSection);
          const setup = getSetup(childSection);
          // Of child sections only a `<define>` body's setup is ever skipped,
          // which `<define>` checks itself, so this check is debug only.
          if (MARKO_DEBUG) assertSetupWorkFound(program, childSection, written);
          const setupIdentifier =
            setup && written.has(setup) ? setup.identifier : undefined;

          if (!isSectionRendererElided(childSection)) {
            if (childSection.branch) {
              setBranchRendererArgs(childSection, [
                writes,
                walks,
                setupIdentifier,
                tagParamsIdentifier,
              ]);
            } else {
              const registerReason = getRendererReason(childSection);
              const registerId = getResumeRegisterId(childSection, "content");
              const objProps: t.ObjectExpression["properties"] = [];
              forEach(childSection.localClosures, (closure) => {
                const closureSignal = getSignal(childSection, closure);
                const key = toPropertyName(getScopeAccessor(closure, true));
                // A lazily read value is only kept if it is stored here.
                if (
                  signalHasStatements(closureSignal) ||
                  closureSignal.forcePersist
                ) {
                  const expr = getSignalFn(closureSignal);
                  // The signal is inlined here, after its section's signals
                  // were written, so what it declares is written with it.
                  if (closureSignal.prependStatements) {
                    program.node.body.push(...closureSignal.prependStatements);
                  }
                  if (t.isFunction(expr) && t.isBlockStatement(expr.body)) {
                    objProps.push(
                      t.objectMethod("method", key, expr.params, expr.body),
                    );
                  } else {
                    objProps.push(t.objectProperty(key, expr));
                  }
                }
              });

              // Resume calls the registered wrapper with the loop's values.
              const registerWrapper = !!(registerReason && objProps.length);
              let renderer: t.Expression = callRuntime(
                "_content",
                t.stringLiteral(registerId),
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

              // `_content` registers any renderer the bundle keeps; one that must
              // be registered whatever else the client keeps is left impure.
              if (!registerReason || registerWrapper) {
                renderer = t.addComment(renderer, "leading", "@__PURE__");
              }

              if (objProps.length) {
                renderer = callRuntime(
                  "_content_closures",
                  renderer,
                  t.objectExpression(objProps),
                );
              }

              program.node.body.push(
                t.variableDeclaration("const", [
                  t.variableDeclarator(
                    t.identifier(childSection.name),
                    renderer,
                  ),
                ]),
              );

              if (registerReason && getContentClosures(childSection)) {
                // Registered with the closures its registration carries, after
                // any loop values it passes on to the wrapper above.
                program.node.body.push(
                  t.expressionStatement(
                    callRuntime(
                      "_content_resume",
                      t.identifier(childSection.name),
                      registerWrapper && t.numericLiteral(1),
                    ),
                  ),
                );
              } else if (registerWrapper) {
                program.node.body.push(
                  t.expressionStatement(
                    registerRuntimeValue(
                      registerId,
                      t.identifier(childSection.name),
                    ),
                  ),
                );
              }
            }
          }
        }
      });

      const written = writeSignals(section);
      writeRegisteredFns();

      const setup = getSetup(section);
      const setupWritten = !!setup && written.has(setup);
      // Parents skip calling this setup export when analysis found no setup work.
      assertSetupWorkFound(program, section, written);

      if (!setupWritten) {
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

      writeStructureExports(program);
      writeModuleRegistrations(program);

      program.node.body.push(
        t.exportDefaultDeclaration(
          callRuntime(
            "_template",
            t.stringLiteral(getFile().metadata.marko.id),
            ...replaceNullishAndEmptyFunctionsWith0([
              templateIdentifier,
              walksIdentifier,
              section.hasSetupWork ? setupIdentifier : undefined,
              programInputSignal?.identifier,
            ]),
          ),
        ),
      );
    },
  },
} satisfies TemplateVisitor<t.Program>;

// Callers skip a setup analysis found no work for, so translate writing one
// means analysis missed work.
function assertSetupWorkFound(
  program: t.NodePath<t.Program>,
  section: Section,
  written: Set<Signal>,
) {
  const setup = getSetup(section);
  if (!section.hasSetupWork && setup && written.has(setup)) {
    throw program.buildCodeFrameError(
      "Marko internal error: analysis found no setup work for a section whose translation produced setup statements. Please open an issue with a reproduction.",
    );
  }
}

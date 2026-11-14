import { types as t } from "@marko/compiler";
import { getFile, importDefault } from "@marko/compiler/babel-utils";

import { getUnusedParamIdentifier } from "../../util/generate-uid";
import { addTagVarBindings } from "../../util/known-tag";
import { isOptimize, isPatch } from "../../util/marko-config";
import { writeModuleRegistrations } from "../../util/module-registrations";
import { forEach } from "../../util/optional";
import {
  callRuntime,
  importRuntimeFeature,
  registerRuntimeValue,
} from "../../util/runtime";
import {
  getScopeAccessor,
  getSectionScopesAccessorLiteral,
} from "../../util/scope-accessor";
import { scopeIdentifier } from "../../util/scope-read";
import { isSectionRendererElided } from "../../util/section-renderer";
import {
  forEachSectionReverse,
  getDynamicTagContentClosures,
  getSectionForBody,
  getRendererReason,
  isDynamicClosure,
  type Section,
  setBranchRendererArgs,
} from "../../util/sections";
import {
  addStatement,
  buildSignalFn,
  getResumeRegistryId,
  getSetup,
  getSignal,
  initValue,
  signalHasWork,
  trimEmptyArgs,
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
    enter(program) {
      // A page that loads this module takes the features analyze linked
      // from it rather than from its entry.
      for (const feature of program.node.extra.runtimeFeatures || []) {
        importRuntimeFeature(feature);
      }
      const section = getSectionForBody(program)!;
      forEachSectionReverse((childSection) => {
        if (childSection !== section) {
          forEach(childSection.referencedClosures, (closure) => {
            const closureSignal = getSignal(childSection, closure);
            if (signalHasWork(closureSignal)) {
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
          });
        }
      });
    },
    exit(program) {
      forEachSectionReverse(getSectionMeta);

      const section = getSectionForBody(program)!;
      const exportNames = program.node.extra.exportNames!;
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
            tagParamsSignal && signalHasWork(tagParamsSignal)
              ? tagParamsSignal.identifier
              : undefined;
          const meta = getSectionMeta(childSection);
          const { writes } = meta;
          // Reaches the runtime through `_content`, which strips these.
          const walks = trimTrailingExits(meta.walks);
          addTagVarBindings(childSection);
          const written = writeSignals(childSection);
          const setup = getSetup(childSection);
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
              // A flush binds registered content by id (a loop's values ride along).
              if (registerReason && isPatch()) {
                importRuntimeFeature("patches/bind");
              }
              const registryId = getResumeRegistryId(childSection, "content");
              const objProps: t.ObjectExpression["properties"] = [];
              forEach(childSection.localClosures, (closure) => {
                const closureSignal = getSignal(childSection, closure);
                const key = toPropertyName(getScopeAccessor(closure, true));
                if (signalHasWork(closureSignal)) {
                  const expr = buildSignalFn(closureSignal);
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
              const registerClosures =
                !!registerReason &&
                !!getDynamicTagContentClosures(childSection);
              let renderer: t.Expression = callRuntime(
                // Content no statement below registers keeps itself registered:
                // `_content_resume` is `_content` off the pure list.
                registerReason && !registerWrapper && !registerClosures
                  ? "_content_resume"
                  : "_content",
                t.stringLiteral(registryId),
                ...trimEmptyArgs([
                  writes,
                  walks,
                  ...markReturn(
                    childSection,
                    setupIdentifier,
                    tagParamsIdentifier,
                  ),
                  childSection.hoisted || childSection.isHoistThrough
                    ? getSectionScopesAccessorLiteral(childSection)
                    : undefined,
                ]),
              );

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

              if (registerClosures) {
                // Registered with the closures its registration carries, after
                // any loop values it passes on to the wrapper above.
                program.node.body.push(
                  t.expressionStatement(
                    callRuntime(
                      "_content_closures_resume",
                      t.identifier(childSection.name),
                      registerWrapper && t.numericLiteral(1),
                    ),
                  ),
                );
              } else if (registerWrapper) {
                program.node.body.push(
                  t.expressionStatement(
                    registerRuntimeValue(
                      registryId,
                      t.identifier(childSection.name),
                    ),
                  ),
                );
              }
            }
          }
        }
      });

      addTagVarBindings(section);
      const written = writeSignals(section);
      writeRegisteredFns();

      const setup = getSetup(section);
      const setupWritten = !!setup && written.has(setup);
      // Parents skip calling this setup export when analysis found no setup work.
      if (setupWritten && !section.hasSetupWork) {
        throw program.buildCodeFrameError(
          "Marko internal error: analysis found no setup work for a section whose translation produced setup statements. Please open an issue with a reproduction.",
        );
      }

      if (!setupWritten) {
        program.node.body.unshift(
          t.exportNamedDeclaration(
            t.variableDeclaration("const", [
              t.variableDeclarator(setupIdentifier, emptySetup()),
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
            ...trimEmptyArgs([
              templateIdentifier,
              walksIdentifier,
              ...markReturn(
                section,
                section.hasSetupWork ? setupIdentifier : undefined,
                programInputSignal?.identifier,
              ),
            ]),
          ),
        ),
      );
    },
  },
} satisfies TemplateVisitor<t.Program>;

// A debug build marks content with a `<return>` on its setup, else its params,
// else an empty setup, to check a dynamic tag's variable over it.
function markReturn(
  section: Section,
  setup: t.Expression | undefined,
  params: t.Expression | undefined,
) {
  return section.returnValueExpr && !isOptimize()
    ? setup || !params
      ? [callRuntime("_return_setup", setup || emptySetup()), params]
      : [setup, callRuntime("_return_setup", params)]
    : [setup, params];
}

function emptySetup() {
  return t.arrowFunctionExpression(
    [getUnusedParamIdentifier()],
    t.blockStatement([]),
  );
}

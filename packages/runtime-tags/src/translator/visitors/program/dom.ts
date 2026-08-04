import { types as t } from "@marko/compiler";
import { importDefault } from "@marko/compiler/babel-utils";

import { scopeIdentifier } from ".";
import { isSectionRendererElided } from "../../util/binding-has-prop";
import { writeModuleRegistrations } from "../../util/module-registrations";
import { forEach } from "../../util/optional";
import { getPatchFillBindings } from "../../util/persisted";
import {
  BindingType,
  getScopeAccessor,
  getSectionInstancesAccessorLiteral,
} from "../../util/references";
import { callRuntime, importRuntimeFeature } from "../../util/runtime";
import {
  forEachSection,
  forEachSectionReverse,
  getSectionForBody,
  getSectionParentIsOwner,
  getSectionRegisterReasons,
  isDynamicClosure,
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
  signalHasStatements,
  writeRegisteredFns,
  writeSignals,
} from "../../util/signals";
import { getSectionMeta, trimTrailingExits } from "../../util/structure";
import { toPropertyName } from "../../util/to-property-name";
import type { TemplateVisitor } from "../../util/visitors";

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
                addStatement("render", childSection, undefined, invocation);
              }
            }
          });
        }
      });
    },
    exit(program) {
      forEachSectionReverse(getSectionMeta);

      const section = getSectionForBody(program)!;
      const { walks, writes, decls } = getSectionMeta(section);
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
          const { writes, decls } = getSectionMeta(childSection);
          // Reaches the runtime through `_content`, which strips these.
          const walks = trimTrailingExits(getSectionMeta(childSection).walks);
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

      // Patches deliver server contributions to registered fill signals, so
      // a template with fills in any section ships the patcher.
      forEachSection((fillSection) => {
        if (getPatchFillBindings(fillSection)) {
          importRuntimeFeature("patch-value");
        }
      });

      const written = writeSignals(section);
      writeRegisteredFns();

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

      writeModuleRegistrations(program);

      program.node.body.push(
        t.exportDefaultDeclaration(
          callRuntime(
            "_template",
            t.stringLiteral(program.hub.file.metadata.marko.id),
            ...replaceNullishAndEmptyFunctionsWith0([
              templateIdentifier,
              walksIdentifier,
              domExports.setupEmpty ? undefined : setupIdentifier,
              programInputSignal?.identifier,
            ]),
          ),
        ),
      );
    },
  },
} satisfies TemplateVisitor<t.Program>;

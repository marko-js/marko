import { types as t } from "@marko/compiler";
import { importDefault } from "@marko/compiler/babel-utils";

import { bindingHasProperty } from "../../util/binding-has-prop";
import getStyleFile from "../../util/get-style-file";
import { forEach } from "../../util/optional";
import {
  BindingType,
  getScopeAccessor,
  getSectionInstancesAccessorLiteral,
} from "../../util/references";
import { callRuntime } from "../../util/runtime";
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
                addStatement(
                  "render",
                  childSection,
                  undefined,
                  t.expressionStatement(
                    t.callExpression(
                      isDynamicClosure(childSection, closure)
                        ? closureSignal.identifier
                        : t.memberExpression(
                            closureSignal.identifier,
                            t.identifier("_"),
                          ),
                      [scopeIdentifier],
                    ),
                  ),
                );
              }
            }
          });
        }
      });
    },
    exit(program) {
      forEachSectionReverse(writer.getSectionMeta);

      const section = getSectionForBody(program)!;
      const { walks, writes, decls } = writer.getSectionMeta(section);
      const domExports = program.node.extra.domExports!;
      const templateIdentifier = t.identifier(domExports.template);
      const walksIdentifier = t.identifier(domExports.walks);
      const setupIdentifier = t.identifier(domExports.setup);
      const inputBinding = program.node.params[0].extra?.binding;
      const programInputSignal =
        inputBinding && !inputBinding.pruned
          ? initValue(inputBinding)
          : undefined;
      let extraDecls = decls;
      const styleFile = getStyleFile(program.hub.file);
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

          if (
            !childSection.downstreamBinding ||
            bindingHasProperty(
              childSection.downstreamBinding.binding,
              childSection.downstreamBinding.properties,
            )
          ) {
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

      writeSignals(section);
      writeRegisteredFns();

      if (!getSetup(section)) {
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

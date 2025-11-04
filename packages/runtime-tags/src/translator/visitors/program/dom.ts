import { types as t } from "@marko/compiler";
import { importDefault } from "@marko/compiler/babel-utils";

import { bindingHasDownstreamExpressions } from "../../util/binding-has-downstream-expressions";
import getStyleFile from "../../util/get-style-file";
import { forEach } from "../../util/optional";
import {
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
} from "../../util/sections";
import {
  addStatement,
  getResumeRegisterId,
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
    exit(program) {
      const section = getSectionForBody(program)!;
      const { walks, writes, setup, decls } = writer.getSectionMeta(section);
      const domExports = program.node.extra.domExports!;
      const templateIdentifier = t.identifier(domExports.template);
      const walksIdentifier = t.identifier(domExports.walks);
      const setupIdentifier = t.identifier(domExports.setup);
      const inputBinding = program.node.params[0].extra?.binding;
      const programInputSignal =
        inputBinding && bindingHasDownstreamExpressions(inputBinding)
          ? initValue(inputBinding)
          : undefined;
      let extraDecls = decls;
      const styleFile = getStyleFile(program.hub.file);
      if (styleFile) {
        importDefault(program.hub.file, styleFile);
      }

      forEachSectionReverse((childSection) => {
        if (childSection !== section) {
          forEach(childSection.referencedClosures, (closure) => {
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
          });

          const tagParamsSignal =
            childSection.params && initValue(childSection.params);
          const tagParamsIdentifier =
            tagParamsSignal && signalHasStatements(tagParamsSignal)
              ? tagParamsSignal.identifier
              : undefined;
          const { walks, writes, setup, decls } =
            writer.getSectionMeta(childSection);

          writeSignals(childSection);

          if (
            !childSection.downstreamBinding ||
            bindingHasDownstreamExpressions(childSection.downstreamBinding)
          ) {
            let renderer = getSectionParentIsOwner(childSection)
              ? callRuntime(
                  "_content_branch",
                  ...replaceNullishAndEmptyFunctionsWith0([
                    writes,
                    walks,
                    setup,
                    tagParamsIdentifier,
                  ]),
                )
              : callRuntime(
                  getSectionRegisterReasons(childSection)
                    ? "_content_resume"
                    : "_content",
                  t.stringLiteral(getResumeRegisterId(childSection, "content")),
                  ...replaceNullishAndEmptyFunctionsWith0([
                    writes,
                    walks,
                    setup,
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
                t.variableDeclarator(t.identifier(childSection.name), renderer),
              ]),
            );
          }

          if (decls) {
            extraDecls = extraDecls ? [...extraDecls, ...decls] : decls;
          }
        }
      });

      writeSignals(section);
      writeRegisteredFns();

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

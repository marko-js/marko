import { types as t } from "@marko/compiler";
import { importDefault } from "@marko/compiler/babel-utils";

import { bindingHasDownstreamExpressions } from "../../util/binding-has-downstream-expressions";
import { getAccessorProp } from "../../util/get-accessor-char";
import getStyleFile from "../../util/get-style-file";
import { forEach, toArray } from "../../util/optional";
import {
  getScopeAccessor,
  getSectionInstancesAccessorLiteral,
} from "../../util/references";
import { callRuntime } from "../../util/runtime";
import {
  forEachSectionReverse,
  getSectionForBody,
  getSectionParentIsOwner,
  isDynamicClosure,
  isSerializedSection,
} from "../../util/sections";
import {
  addStatement,
  getResumeRegisterId,
  getSignal,
  getSignalFn,
  initValue,
  replaceNullishAndEmptyFunctionsWith0,
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
      const { walks, writes, setup } = writer.getSectionMeta(section);
      const domExports = program.node.extra.domExports!;
      const templateIdentifier = t.identifier(domExports.template);
      const walksIdentifier = t.identifier(domExports.walks);
      const setupIdentifier = t.identifier(domExports.setup);
      const inputBinding = program.node.params[0].extra?.binding;
      const programInputSignal =
        inputBinding && bindingHasDownstreamExpressions(inputBinding)
          ? initValue(inputBinding)
          : undefined;

      const styleFile = getStyleFile(program.hub.file);
      if (styleFile) {
        importDefault(program.hub.file, styleFile);
      }

      forEachSectionReverse((childSection) => {
        if (childSection !== section) {
          forEach(childSection.referencedClosures, (closure) => {
            const closureSignal = getSignal(childSection, closure);
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
                        t.identifier(getAccessorProp().Owner),
                      ),
                  [scopeIdentifier],
                ),
              ),
            );
          });
          const tagParamsSignal =
            childSection.params && initValue(childSection.params);
          const { walks, writes, setup } = writer.getSectionMeta(childSection);
          const identifier = t.identifier(childSection.name);
          let renderer = getSectionParentIsOwner(childSection)
            ? callRuntime(
                "createRenderer",
                ...replaceNullishAndEmptyFunctionsWith0([
                  writes,
                  walks,
                  setup,
                  tagParamsSignal?.identifier,
                ]),
              )
            : callRuntime(
                isSerializedSection(childSection)
                  ? "registerContent"
                  : "createContent",
                t.stringLiteral(getResumeRegisterId(childSection, "renderer")),
                ...replaceNullishAndEmptyFunctionsWith0([
                  writes,
                  walks,
                  setup,
                  tagParamsSignal?.identifier,
                  childSection.hoisted || childSection.isHoistThrough
                    ? getSectionInstancesAccessorLiteral(childSection)
                    : undefined,
                ]),
              );
          if (childSection.referencedLocalClosures) {
            renderer = callRuntime(
              "localClosures",
              renderer,
              t.objectExpression(
                toArray(childSection.referencedLocalClosures, (closure) => {
                  const expr = getSignalFn(getSignal(childSection, closure));
                  const key = toPropertyName(getScopeAccessor(closure));
                  if (t.isFunction(expr) && t.isBlockStatement(expr.body)) {
                    return t.objectMethod(
                      "method",
                      key,
                      expr.params,
                      expr.body,
                    );
                  }

                  return t.objectProperty(key, expr);
                }),
              ),
            );
          }
          writeSignals(childSection);
          program.node.body.push(
            t.variableDeclaration("const", [
              t.variableDeclarator(identifier, renderer),
            ]),
          );
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

      program.node.body.push(
        t.exportDefaultDeclaration(
          callRuntime(
            "createTemplate",
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

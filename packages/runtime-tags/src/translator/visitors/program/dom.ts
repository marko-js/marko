import { types as t } from "@marko/compiler";
import { importDefault } from "@marko/compiler/babel-utils";

import { bindingHasDownstreamExpressions } from "../../util/binding-has-downstream-expressions";
import getStyleFile from "../../util/get-style-file";
import { map } from "../../util/optional";
import { getSectionScopeAccessorLiteral } from "../../util/references";
import { callRuntime } from "../../util/runtime";
import {
  forEachSectionReverse,
  getSectionForBody,
  getSectionParentIsOwner,
  isSerializedSection,
} from "../../util/sections";
import {
  getResumeRegisterId,
  getSignal,
  initValue,
  replaceNullishAndEmptyFunctionsWith0,
  writeRegisteredFns,
  writeSignals,
} from "../../util/signals";
import { toFirstExpressionOrBlock } from "../../util/to-first-expression-or-block";
import type { TemplateVisitor } from "../../util/visitors";
import { visit } from "../../util/walks";
import * as writer from "../../util/writer";
import { scopeIdentifier } from ".";

export default {
  translate: {
    exit(program) {
      visit(program);
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
          const tagParamsSignal =
            childSection.params && initValue(childSection.params);
          const { walks, writes, setup } = writer.getSectionMeta(childSection);
          const identifier = t.identifier(childSection.name);
          const closures = childSection.referencedClosures
            ? t.arrowFunctionExpression(
                [scopeIdentifier],
                toFirstExpressionOrBlock(
                  map(childSection.referencedClosures, (closure) =>
                    t.expressionStatement(
                      t.callExpression(
                        t.memberExpression(
                          getSignal(childSection, closure).identifier,
                          t.identifier("_"),
                        ),
                        [scopeIdentifier],
                      ),
                    ),
                  ),
                ),
              )
            : undefined;
          const renderer = getSectionParentIsOwner(childSection)
            ? callRuntime(
                "createRenderer",
                ...replaceNullishAndEmptyFunctionsWith0([
                  writes,
                  walks,
                  setup,
                  tagParamsSignal?.identifier,
                  closures,
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
                  closures,
                  childSection.hoisted || childSection.isHoistThrough
                    ? getSectionScopeAccessorLiteral(childSection)
                    : undefined,
                ]),
              );
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

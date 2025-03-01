import { types as t } from "@marko/compiler";
import { importDefault } from "@marko/compiler/babel-utils";

import { bindingHasDownstreamExpressions } from "../../util/binding-has-downstream-expressions";
import getStyleFile from "../../util/get-style-file";
import { getSectionScopeAccessorLiteral } from "../../util/references";
import { callRuntime } from "../../util/runtime";
import {
  forEachSectionReverse,
  getSectionForBody,
  getSectionParentIsOwner,
  isStatefulSection,
} from "../../util/sections";
import {
  getResumeRegisterId,
  initValue,
  replaceNullishAndEmptyFunctionsWith0,
  writeRegisteredFns,
  writeSignals,
} from "../../util/signals";
import type { TemplateVisitor } from "../../util/visitors";
import { visit } from "../../util/walks";
import * as writer from "../../util/writer";

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
      const paramsBinding = program.node.extra.binding;
      const programParamsSignal =
        paramsBinding && bindingHasDownstreamExpressions(paramsBinding)
          ? initValue(paramsBinding)
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
          const params =
            tagParamsSignal?.identifier &&
            t.arrowFunctionExpression([], tagParamsSignal.identifier);
          const identifier = t.identifier(childSection.name);
          const renderer = getSectionParentIsOwner(childSection)
            ? callRuntime("createRenderer", writes, walks, setup, params)
            : callRuntime(
                !childSection.isBranch && isStatefulSection(childSection)
                  ? "registerContent"
                  : "createContent",
                t.stringLiteral(getResumeRegisterId(childSection, "renderer")),
                ...replaceNullishAndEmptyFunctionsWith0([
                  writes,
                  walks,
                  setup,
                  params,
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
            programParamsSignal?.identifier &&
              t.arrowFunctionExpression([], programParamsSignal.identifier),
          ),
        ),
      );
    },
  },
} satisfies TemplateVisitor<t.Program>;

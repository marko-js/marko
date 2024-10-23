import { types as t } from "@marko/compiler";

import { bindingHasDownstreamExpressions } from "../../util/binding-has-downstream-expressions";
import { callRuntime } from "../../util/runtime";
import {
  forEachSectionReverse,
  getSection,
  getSectionParentIsOwner,
  getSectionPath,
  isStatefulSection,
} from "../../util/sections";
import {
  getClosures,
  getResumeRegisterId,
  initValue,
  renameBindings,
  replaceAssignments,
  writeSignals,
} from "../../util/signals";
import type { TemplateVisitor } from "../../util/visitors";
import { visit } from "../../util/walks";
import * as writer from "../../util/writer";

export default {
  translate: {
    exit(program) {
      visit(program);
      const section = getSection(program);
      const { walks, writes, setup } = writer.getSectionMeta(section);
      const domExports = program.node.extra.domExports!;
      const templateIdentifier = t.identifier(domExports.template);
      const walksIdentifier = t.identifier(domExports.walks);
      const setupIdentifier = t.identifier(domExports.setup);
      const closuresIdentifier = t.identifier(domExports.closures);
      const paramsBinding = program.node.extra.binding;
      const programParamsSignal =
        paramsBinding && bindingHasDownstreamExpressions(paramsBinding)
          ? initValue(paramsBinding)
          : undefined;

      replaceAssignments();

      forEachSectionReverse((childSection) => {
        if (childSection !== section) {
          const sectionPath = getSectionPath(childSection);
          const sectionParamsBinding = sectionPath.node.extra?.binding;
          const tagParamsSignal =
            sectionParamsBinding && initValue(sectionParamsBinding);
          const { walks, writes, setup } = writer.getSectionMeta(childSection);
          const closures = getClosures(childSection);
          const identifier = t.identifier(childSection.name);
          const renderer = callRuntime(
            getSectionParentIsOwner(childSection)
              ? "createRenderer"
              : "createRendererWithOwner",
            writes,
            walks,
            setup,
            closures.length &&
              t.arrowFunctionExpression([], t.arrayExpression(closures)),
            undefined,
            tagParamsSignal?.identifier &&
              t.arrowFunctionExpression([], tagParamsSignal.identifier),
          );
          writeSignals(childSection);
          program.node.body.push(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                identifier,
                isStatefulSection(childSection)
                  ? callRuntime(
                      "register",
                      t.stringLiteral(
                        getResumeRegisterId(childSection, "renderer"),
                      ),
                      renderer,
                    )
                  : renderer,
              ),
            ]),
          );
        }
      });

      const closures = getClosures(section);

      writeSignals(section);

      renameBindings();

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

      if (closures.length) {
        program.node.body.push(
          t.exportNamedDeclaration(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                closuresIdentifier,
                t.arrayExpression(closures),
              ),
            ]),
          ),
        );
      }

      program.node.body.push(
        t.exportDefaultDeclaration(
          callRuntime(
            "createTemplate",
            callRuntime(
              "createRenderer",
              templateIdentifier,
              walksIdentifier,
              setupIdentifier,
              closures.length &&
                t.arrowFunctionExpression([], closuresIdentifier),
              undefined,
              programParamsSignal?.identifier &&
                t.arrowFunctionExpression([], programParamsSignal.identifier),
            ),
            t.stringLiteral(program.hub.file.metadata.marko.id),
          ),
        ),
      );
    },
  },
} satisfies TemplateVisitor<t.Program>;

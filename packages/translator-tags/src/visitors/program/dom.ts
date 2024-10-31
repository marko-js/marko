import { types as t } from "@marko/compiler";

import { bindingHasDownstreamExpressions } from "../../util/binding-has-downstream-expressions";
import type { Binding } from "../../util/references";
import { callRuntime } from "../../util/runtime";
import {
  forEachSectionReverse,
  getSectionForBody,
  getSectionParentIsOwner,
  isStatefulSection,
  type Section,
} from "../../util/sections";
import {
  getResumeRegisterId,
  getSignal,
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
      const section = getSectionForBody(program)!;
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
          const tagParamsSignal =
            childSection.params && initValue(childSection.params);
          const { walks, writes, setup } = writer.getSectionMeta(childSection);
          const closures = getSectionClosuresExpr(childSection);
          const identifier = t.identifier(childSection.name);
          const renderer = callRuntime(
            getSectionParentIsOwner(childSection)
              ? "createRenderer"
              : "createRendererWithOwner",
            writes,
            walks,
            setup,
            closures && t.arrowFunctionExpression([], closures),
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

      const closures = getSectionClosuresExpr(section);

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

      if (closures) {
        program.node.body.push(
          t.exportNamedDeclaration(
            t.variableDeclaration("const", [
              t.variableDeclarator(closuresIdentifier, closures),
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
              closures && t.arrowFunctionExpression([], closuresIdentifier),
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

function getSectionClosuresExpr(section: Section) {
  if (section.closures.size) {
    return t.arrayExpression(
      Array.from(section.closures)
        .sort(sortClosures)
        .map((binding) => getSignal(section, binding).identifier),
    );
  }
}

function sortClosures(a: Binding, b: Binding) {
  // In order to ensure correct topological ordering, closures must be called last
  // with closures higher in the tree called before calling closures lower in the tree
  return b.section.id - a.section.id || b.id - a.id;
}

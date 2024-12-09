import { types as t } from "@marko/compiler";

import { bindingHasDownstreamExpressions } from "../../util/binding-has-downstream-expressions";
import { map } from "../../util/optional";
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
      const closuresIdentifier = t.identifier(domExports.closures);
      const paramsBinding = program.node.extra.binding;
      const programParamsSignal =
        paramsBinding && bindingHasDownstreamExpressions(paramsBinding)
          ? initValue(paramsBinding)
          : undefined;

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
            t.stringLiteral(program.hub.file.metadata.marko.id),
            templateIdentifier,
            walksIdentifier,
            setupIdentifier,
            closures && t.arrowFunctionExpression([], closuresIdentifier),
            programParamsSignal?.identifier &&
              t.arrowFunctionExpression([], programParamsSignal.identifier),
          ),
        ),
      );
    },
  },
} satisfies TemplateVisitor<t.Program>;

function getSectionClosuresExpr(section: Section) {
  if (section.closures) {
    return t.arrayExpression(
      map(
        section.closures,
        (closure) => getSignal(section, closure).identifier,
      ).reverse(),
    );
  }
}

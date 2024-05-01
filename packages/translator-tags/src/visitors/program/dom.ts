import { getTemplateId } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { callRuntime } from "../../util/runtime";
import {
  forEachSectionReverse,
  getSection,
  getSectionPath,
  isStatefulSection,
} from "../../util/sections";
import {
  getClosures,
  getDestructureSignal,
  getResumeRegisterId,
  getTagParamsSignal,
  writeSignals,
} from "../../util/signals";
import { visit } from "../../util/walks";
import * as writer from "../../util/writer";

export default {
  translate: {
    exit(program: t.NodePath<t.Program>) {
      visit(program);
      const section = getSection(program);

      const { walks, writes, setup } = writer.getSectionMeta(section);

      const domExports = program.node.extra.domExports!;
      const templateIdentifier = t.identifier(domExports.template);
      const walksIdentifier = t.identifier(domExports.walks);
      const setupIdentifier = t.identifier(domExports.setup);
      const argsIdentifier = t.identifier(domExports.args);
      const closuresIdentifier = t.identifier(domExports.closures);

      forEachSectionReverse((childSection) => {
        const sectionPath = getSectionPath(childSection);
        const tagParamsSignal = sectionPath.isProgram()
          ? undefined
          : getTagParamsSignal(
              (sectionPath as t.NodePath<t.MarkoTagBody>).get("params"),
            );
        writeSignals(childSection);

        if (childSection !== section) {
          const { walks, writes, setup } = writer.getSectionMeta(childSection);
          const closures = getClosures(childSection);
          const identifier = writer.getRenderer(childSection);
          const renderer = callRuntime(
            "createRenderer",
            writes,
            walks,
            setup,
            closures.length && t.arrayExpression(closures),
            undefined,
            tagParamsSignal?.build(),
          );
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

      const [programInput] = program.node.params;
      const inputBinding = programInput.extra?.binding;
      if (inputBinding) {
        program.node.body.push(
          t.exportNamedDeclaration(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                t.identifier(domExports.args),
                getDestructureSignal(
                  { input: programInput as t.Identifier },
                  t.arrayPattern([programInput]),
                )?.build(),
              ),
            ]),
          ),
        );
      }

      const closures = getClosures(section);

      program.node.body.push(
        t.exportNamedDeclaration(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              t.identifier(domExports.template),
              writes || t.stringLiteral(""),
            ),
          ]),
        ),
        t.exportNamedDeclaration(
          t.variableDeclaration("const", [
            t.variableDeclarator(walksIdentifier, walks || t.stringLiteral("")),
          ]),
        ),
        t.exportNamedDeclaration(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              setupIdentifier,
              t.isNullLiteral(setup) || !setup
                ? t.functionExpression(null, [], t.blockStatement([]))
                : setup,
            ),
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
      const {
        markoOpts: { optimize },
        opts: { filename },
      } = program.hub.file;
      program.node.body.push(
        t.exportDefaultDeclaration(
          callRuntime(
            "createTemplate",
            callRuntime(
              "createRenderer",
              templateIdentifier,
              walksIdentifier,
              setupIdentifier,
              closures.length && closuresIdentifier,
              undefined,
              inputBinding && argsIdentifier,
            ),
            t.stringLiteral(getTemplateId(optimize, `${filename}`)),
          ),
        ),
      );
    },
  },
};

import { getTemplateId } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { callRuntime } from "../../util/runtime";
import {
  forEachSectionReverse,
  getSection,
  getSectionPath,
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
      const templateIdentifier = t.identifier("template");
      const walksIdentifier = t.identifier("walks");
      const setupIdentifier = t.identifier("setup");
      const argsSignalIdentifier = t.identifier("args");
      const closuresIdentifier = t.identifier("closures");
      const { walks, writes, setup } = writer.getSectionMeta(section);

      forEachSectionReverse((childSection) => {
        const sectionPath = getSectionPath(childSection);
        const tagParamsSignal = sectionPath.isProgram()
          ? undefined
          : getTagParamsSignal(
              (sectionPath as t.NodePath<t.MarkoTagBody>).get("params"),
            );
        writeSignals(childSection);

        if (childSection !== section) {
          const { walks, writes, setup, register } =
            writer.getSectionMeta(childSection);
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
                //eslint-disable-next-line no-constant-condition
                register || true
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
                argsSignalIdentifier,
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
              inputBinding && argsSignalIdentifier,
            ),
            t.stringLiteral(getTemplateId(optimize, `${filename}`)),
          ),
        ),
      );
    },
  },
};

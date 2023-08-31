import { types as t } from "@marko/compiler";
import { getTemplateId } from "@marko/babel-utils";
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
  getSignal,
  getTagParamsSignal,
  writeSignals,
} from "../../util/signals";
import * as writer from "../../util/writer";
import { visit } from "../../util/walks";

export default {
  translate: {
    exit(program: t.NodePath<t.Program>) {
      visit(program);
      const section = getSection(program);
      const templateIdentifier = t.identifier("template");
      const walksIdentifier = t.identifier("walks");
      const setupIdentifier = t.identifier("setup");
      const attrsSignalIdentifier = t.identifier("attrs");
      const closuresIdentifier = t.identifier("closures");
      const { attrs } = program.node.extra;
      const { walks, writes, setup } = writer.getSectionMeta(section);

      forEachSectionReverse((childSection) => {
        const sectionPath = getSectionPath(childSection);
        const tagParamsSignal = sectionPath.isProgram()
          ? undefined
          : getTagParamsSignal(
              (sectionPath as t.NodePath<t.MarkoTagBody>).get("params")
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
            undefined,
            undefined,
            undefined,
            tagParamsSignal?.build()
          );
          program.node.body.push(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                identifier,
                register
                  ? callRuntime(
                      "register",
                      t.stringLiteral(
                        getResumeRegisterId(childSection, "renderer")
                      ),
                      renderer
                    )
                  : renderer
              ),
            ])
          );
        }
      });

      if (attrs) {
        const exportSpecifiers: t.ExportSpecifier[] = [];

        for (const name in attrs.bindings) {
          const bindingIdentifier = attrs.bindings[name];
          const signalIdentifier = getSignal(
            section,
            bindingIdentifier.extra.reserve
          ).identifier;
          exportSpecifiers.push(
            t.exportSpecifier(signalIdentifier, signalIdentifier)
          );
        }

        program.node.body.push(
          t.exportNamedDeclaration(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                attrsSignalIdentifier,
                t.isIdentifier(attrs.var)
                  ? getSignal(
                      section,
                      (attrs.var as t.Identifier).extra!.reserve!
                    ).identifier
                  : getDestructureSignal(attrs.bindings, attrs.var)?.build()
              ),
            ])
          ),
          t.exportNamedDeclaration(null, exportSpecifiers)
        );
      }

      const closures = getClosures(section);

      program.node.body.push(
        t.exportNamedDeclaration(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              templateIdentifier,
              writes || t.stringLiteral("")
            ),
          ])
        ),
        t.exportNamedDeclaration(
          t.variableDeclaration("const", [
            t.variableDeclarator(walksIdentifier, walks || t.stringLiteral("")),
          ])
        ),
        t.exportNamedDeclaration(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              setupIdentifier,
              t.isNullLiteral(setup) || !setup
                ? t.functionExpression(null, [], t.blockStatement([]))
                : setup
            ),
          ])
        )
      );
      if (closures.length) {
        program.node.body.push(
          t.exportNamedDeclaration(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                closuresIdentifier,
                t.arrayExpression(closures)
              ),
            ])
          )
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
              undefined,
              undefined,
              undefined,
              attrs! && attrsSignalIdentifier
            ),
            t.stringLiteral(getTemplateId(optimize, `${filename}`))
          )
        )
      );
    },
  },
};

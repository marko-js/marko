import { types as t } from "@marko/compiler";
import { callRuntime } from "../../util/runtime";
import { forEachSectionReverse, getSection } from "../../util/sections";
import {
  getClosures,
  getDestructureSignal,
  getResumeRegisterId,
  getSignal,
  writeSignals,
} from "../../util/signals";
import * as writer from "../../util/writer";
import { visit } from "../../util/walks";
import { getTemplateId } from "@marko/babel-utils";

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
            closures.length && t.arrayExpression(closures)
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
        const isIdentity = t.isIdentifier(attrs.var);

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
                isIdentity
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
            "createRenderFn",
            templateIdentifier,
            walksIdentifier,
            setupIdentifier,
            attrs! && attrsSignalIdentifier,
            closures.length && closuresIdentifier,
            t.stringLiteral(getTemplateId(optimize, `${filename}`))
          )
        )
      );
    },
  },
};

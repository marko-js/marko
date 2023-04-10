import { types as t } from "@marko/compiler";
import { callRuntime } from "../../util/runtime";
import { forEachSectionIdReverse, getSectionId } from "../../util/sections";
import {
  getClosures,
  getDestructureSignal,
  getHydrateRegisterId,
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
      const sectionId = getSectionId(program);
      const templateIdentifier = t.identifier("template");
      const walksIdentifier = t.identifier("walks");
      const setupIdentifier = t.identifier("setup");
      const attrsSignalIdentifier = t.identifier("attrs");
      const closuresIdentifier = t.identifier("closures");
      const { attrs } = program.node.extra;
      const { walks, writes, apply } = writer.getSectionMeta(sectionId);

      forEachSectionIdReverse((childSectionId) => {
        writeSignals(childSectionId);

        if (childSectionId !== sectionId) {
          const { walks, writes, apply, register } =
            writer.getSectionMeta(childSectionId);
          const closures = getClosures(childSectionId);
          const identifier = writer.getRenderer(childSectionId);
          const renderer = callRuntime(
            "createRenderer",
            writes,
            walks,
            apply,
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
                        getHydrateRegisterId(childSectionId, "renderer")
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
            sectionId,
            bindingIdentifier.extra.reserve
          ).identifier;
          exportSpecifiers.push(
            t.exportSpecifier(
              signalIdentifier,
              bindingIdentifier.extra!.reserve!.exportIdentifier!
            )
          );
        }

        program.node.body.push(
          t.exportNamedDeclaration(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                attrsSignalIdentifier,
                isIdentity
                  ? getSignal(
                      sectionId,
                      (attrs.var as t.Identifier).extra!.reserve!
                    ).identifier
                  : getDestructureSignal(attrs.bindings, attrs.var)?.build()
              ),
            ])
          ),
          t.exportNamedDeclaration(null, exportSpecifiers)
        );
      }

      const closures = getClosures(sectionId);

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
              t.isNullLiteral(apply) || !apply
                ? t.functionExpression(null, [], t.blockStatement([]))
                : apply
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

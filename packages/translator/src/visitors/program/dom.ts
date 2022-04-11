import { types as t } from "@marko/compiler";
import { callRuntime } from "../../util/runtime";
import { forEachSectionId, getSectionId } from "../../util/sections";
import { writeAllStatementGroups } from "../../util/apply-hydrate";
import * as writer from "../../util/writer";
import { visit } from "../../util/walks";
import { scopeIdentifier } from ".";
import { getReferenceGroup } from "../../util/references";

export default {
  translate: {
    exit(program: t.NodePath<t.Program>) {
      visit(program);
      const sectionId = getSectionId(program);
      const templateIdentifier = t.identifier("template");
      const walksIdentifier = t.identifier("walks");
      const applyIdentifier = t.identifier("apply");
      const applyAttrsIdentifier = t.identifier("applyAttrs");
      const { attrs } = program.node.extra;
      const { walks, writes, apply } = writer.getSectionMeta(sectionId);

      writeAllStatementGroups();

      const childRendererDeclarators: t.VariableDeclarator[] = [];
      forEachSectionId((childSectionId) => {
        if (childSectionId !== sectionId) {
          const { walks, writes, apply } =
            writer.getSectionMeta(childSectionId);
          const identifier = writer.getRenderer(childSectionId);
          childRendererDeclarators.push(
            t.variableDeclarator(
              identifier,
              callRuntime("createRenderer", writes, walks, apply)
            )
          );
        }
      });

      if (attrs) {
        const exportSpecifiers: t.ExportSpecifier[] = [];
        program.node.body.push(
          t.exportNamedDeclaration(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                applyAttrsIdentifier,
                t.functionExpression(
                  null,
                  [scopeIdentifier, attrs.var as any],
                  t.blockStatement(
                    Object.keys(attrs.bindings).map((name) => {
                      const bindingIdentifier = attrs.bindings[name];
                      const { apply: applyIdentifier } = getReferenceGroup(
                        sectionId,
                        bindingIdentifier.extra!.reserve
                      );
                      exportSpecifiers.push(
                        t.exportSpecifier(
                          applyIdentifier,
                          bindingIdentifier.extra!.reserve!.exportIdentifier!
                        )
                      );
                      return t.expressionStatement(
                        t.callExpression(applyIdentifier, [
                          scopeIdentifier,
                          bindingIdentifier,
                        ])
                      );
                    })
                  )
                )
              ),
            ])
          ),
          t.exportNamedDeclaration(null, exportSpecifiers)
        );
      }

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
              applyIdentifier,
              t.isNullLiteral(apply)
                ? t.functionExpression(null, [], t.blockStatement([]))
                : apply
            ),
          ])
        )
      );

      if (childRendererDeclarators.length) {
        program.node.body.push(
          t.variableDeclaration("const", childRendererDeclarators)
        );
      }

      program.node.body.push(
        t.exportDefaultDeclaration(
          callRuntime(
            "createRenderFn",
            templateIdentifier,
            walksIdentifier,
            applyIdentifier,
            attrs! && applyAttrsIdentifier
          )
        )
      );
    },
  },
};

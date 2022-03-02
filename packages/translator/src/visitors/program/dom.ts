import { types as t } from "@marko/compiler";
import { callRuntime } from "../../util/runtime";
import { forEachSectionId, getSectionId } from "../../util/sections";
import { writeAllStatementGroups } from "../../util/apply-hydrate";
import * as writer from "../../util/writer";
import { visit } from "../../util/walks";

export default {
  translate: {
    exit(program: t.NodePath<t.Program>) {
      visit(program);
      const sectionId = getSectionId(program);
      const templateIdentifier = t.identifier("template");
      const walksIdentifier = t.identifier("walks");
      const applyIdentifier = t.identifier("apply");
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

      if (childRendererDeclarators.length) {
        program.node.body.push(
          t.variableDeclaration("const", childRendererDeclarators)
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
            t.variableDeclarator(applyIdentifier, apply!),
          ])
        ),
        t.exportDefaultDeclaration(
          callRuntime(
            "createRenderFn",
            templateIdentifier,
            walksIdentifier,
            applyIdentifier
          )
        )
      );
    },
  },
};

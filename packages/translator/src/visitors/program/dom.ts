import { types as t } from "@marko/compiler";
import { callRuntime } from "../../util/runtime";
import { getSectionId } from "../../util/sections";
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

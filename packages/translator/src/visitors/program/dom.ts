import { types as t } from "@marko/compiler";
import { callRuntime } from "../../util/runtime";
import * as writer from "../../util/writer";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default {
  translate: {
    enter(program: t.NodePath<t.Program>) {
      writer.start(program);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    exit(program: t.NodePath<t.Program>) {
      const section = writer.end(program);
      const templateIdentifier = t.identifier("template");
      const walksIdentifier = t.identifier("walks");
      const applyIdentifier = t.identifier("apply");
      const { walks, writes, apply } = writer.getSectionMeta(section);

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
            program,
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

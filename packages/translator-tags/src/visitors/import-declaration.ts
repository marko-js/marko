import { resolveTagImport } from "@marko/babel-utils";
import type { types as t } from "@marko/compiler";

export default {
  translate: {
    exit(path: t.NodePath<t.ImportDeclaration>) {
      const source = path.get("source");
      const request = source.node.value;
      source.node.value = resolveTagImport(source, request) || request;
    },
  },
};

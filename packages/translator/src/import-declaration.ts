import { types as t, NodePath } from "@marko/babel-types";
import { resolveTagImport } from "@marko/babel-utils";

export function exit(path: NodePath<t.ImportDeclaration>) {
  const source = path.get("source");
  const request = source.node.value;
  source.node.value = resolveTagImport(source, request) || request;
}

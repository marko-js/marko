import { types as t } from "@marko/compiler";
import { resolveTagImport } from "@marko/babel-utils";

export function exit(path: t.NodePath<t.ImportDeclaration>) {
  const source = path.get("source");
  const request = source.node.value;
  source.node.value = resolveTagImport(source, request) || request;
}

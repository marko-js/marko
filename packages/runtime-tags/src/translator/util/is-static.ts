import type { types as t } from "@marko/compiler";
export default function isStatic(path: t.NodePath<any>) {
  return (
    path.isImportDeclaration() ||
    path.isExportDeclaration() ||
    path.isMarkoScriptlet({ static: true })
  );
}

import type { types as t } from "@marko/compiler";
export default function isStatic(path: t.NodePath<any>) {
  if (path.isImportDeclaration()) {
    return true;
  }
  if (path.isExportDeclaration()) {
    return true;
  }

  // TODO include more cases here.

  return false;
}

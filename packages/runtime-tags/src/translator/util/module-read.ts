import { types as t } from "@marko/compiler";

import { isCoreTagName } from "./is-core-tag";

// The stylesheet modules `@marko/vite` keeps by path (its `styleImportReg`).
const styleImportReg =
  /\.(?:css(?:\.[cm]?[jt]s)?|less|s[ac]ss|styl(?:us)?|pcss|postcss)(?:\?|$)/i;

const kModuleRead = Symbol("module read");
declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kModuleRead]?: ModuleRead | null;
  }
}

/** A read of an import binding (`styles.box`), set once its module loads. */
export interface ModuleRead {
  /** The binding's name, then the member names read from it. */
  read: string[];
  /** The import's source; none for a `<style/name>` tag's own stylesheet module. */
  request: string | undefined;
}

/** The module read an expression is, resolved on first use: translate replaces
 * a `<style/name>` tag. */
export function getModuleRead(
  path: t.NodePath,
  expr: t.Expression,
): ModuleRead | undefined {
  return (
    ((expr.extra ??= {})[kModuleRead] ??= resolveModuleRead(path, expr)) ||
    undefined
  );
}

/** A module read of a stylesheet module, whose reads are class name strings. */
export function getStyleImportRead(path: t.NodePath, expr: t.Expression) {
  const moduleRead = getModuleRead(path, expr);
  if (
    moduleRead &&
    (moduleRead.request === undefined ||
      styleImportReg.test(moduleRead.request))
  ) {
    return moduleRead.read;
  }
}

export function toModuleReadExpression([name, ...members]: string[]) {
  let expr: t.Expression = t.identifier(name);
  for (const member of members) {
    expr = t.memberExpression(expr, t.identifier(member));
  }
  return expr;
}

function resolveModuleRead(
  path: t.NodePath,
  expr: t.Expression,
): ModuleRead | null {
  switch (expr.type) {
    case "Identifier": {
      const decl = path.scope.getBinding(expr.name)?.path;
      const importDecl = decl?.parentPath;
      if (importDecl?.isImportDeclaration()) {
        // A `server`/`client` import is in one output only.
        const scriptlet = importDecl.parentPath;
        return scriptlet.isMarkoScriptlet() && scriptlet.node.target
          ? null
          : { read: [expr.name], request: importDecl.node.source.value };
      }

      // A `<style/name>` variable translates to a namespace import.
      return decl &&
        isCoreTagName(decl, "style") &&
        decl.node.var!.type === "Identifier"
        ? { read: [expr.name], request: undefined }
        : null;
    }
    case "MemberExpression": {
      const object =
        !expr.computed && getModuleRead(path, expr.object as t.Expression);
      return object
        ? {
            read: [...object.read, (expr.property as t.Identifier).name],
            request: object.request,
          }
        : null;
    }
  }
  return null;
}

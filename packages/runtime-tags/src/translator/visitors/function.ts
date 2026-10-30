import { types as t } from "@marko/compiler";
import { getFile, withLoc } from "@marko/compiler/babel-utils";

import { getExprRoot, getFnRoot, getMarkoRoot } from "../util/get-root";
import { canIgnoreRegister, trackFunction } from "../util/module-registrations";
import type { RegisteredFnExtra } from "../util/references";
import { getSection } from "../util/sections";
import { traverseFindAwait, traverseFindSuper } from "../util/traverse";
import type { TemplateVisitor } from "../util/visitors";

export default {
  analyze(fn) {
    const awaitNode =
      isMarkoAttribute(fn.parentPath) &&
      t.isFunctionExpression(fn.node) &&
      !fn.node.async &&
      traverseFindAwait(fn.node.body);
    if (awaitNode) {
      const file = getFile();
      const start = file.code.indexOf("await", awaitNode.start ?? 0);
      const highlight =
        start >= 0 && (awaitNode.end == null || start < awaitNode.end)
          ? withLoc(file, t.cloneNode(awaitNode), start, start + 5)
          : awaitNode;
      throw fn.hub.buildError(
        highlight,
        "Attribute methods containing `await` must be `async`. Add `async` before the method name.",
      );
    }

    // bail on closures
    if (fn !== getFnRoot(fn)) return;

    const { node } = fn;

    // Accessors stay exactly as written; they are never registered.
    if (
      (t.isObjectMethod(node) || t.isClassMethod(node)) &&
      (node.kind === "get" || node.kind === "set")
    ) {
      return;
    }

    // A method reading `super` stays as written too: `super` only exists
    // inside a method, so the hoisted function registration emits can't parse.
    if (
      (t.isObjectMethod(node) ||
        t.isClassMethod(node) ||
        t.isClassPrivateMethod(node)) &&
      traverseFindSuper(node.body)
    ) {
      return;
    }

    const exprRoot = getExprRoot(fn);
    const markoRoot = getMarkoRoot(exprRoot);
    if (!markoRoot || canIgnoreRegister(markoRoot, exprRoot)) return;

    const section = getSection(fn);
    const fnExtra = (node.extra ??= {}) as RegisteredFnExtra;
    fnExtra.section = section;
    fnExtra.exprRoot = exprRoot.node.extra ??= {};
    fnExtra.name =
      (node as t.FunctionExpression).id?.name ||
      (isMarkoAttribute(markoRoot)
        ? markoRoot.node.default
          ? t.toIdentifier(
              (markoRoot.parentPath.has("var")
                ? markoRoot.parentPath.get("var")
                : markoRoot.parentPath.get("name")
              ).toString(),
            )
          : markoRoot.node.name
        : t.isVariableDeclarator(fn.parent) && t.isIdentifier(fn.parent.id)
          ? fn.parent.id.name
          : t.isObjectMethod(node) && t.isIdentifier(node.key)
            ? node.key.name
            : "anonymous");

    trackFunction(fn, fnExtra, markoRoot);
  },
} satisfies TemplateVisitor<t.Function>;

function isMarkoAttribute(
  path: t.NodePath | undefined | null,
): path is t.NodePath<t.MarkoAttribute> & {
  parent: t.MarkoTag;
  parentPath: t.NodePath<t.MarkoTag>;
} {
  return path ? path.isMarkoAttribute() : false;
}

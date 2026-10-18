import { types as t } from "@marko/compiler";
import {
  getFile,
  isAttributeTag,
  isTransparentTag,
  withLoc,
} from "@marko/compiler/babel-utils";

import { getParentTag } from "../util/get-parent-tag";
import { getExprRoot, getFnRoot, getMarkoRoot } from "../util/get-root";
import { canIgnoreRegister, trackFunction } from "../util/module-registrations";
import { concat, type Opt } from "../util/optional";
import type { RegisteredFnExtra } from "../util/references";
import { getSection } from "../util/sections";
import { getLiteralName } from "../util/to-property-name";
import { traverseFindAwait } from "../util/traverse";
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

    const exprRoot = getExprRoot(fn);
    const markoRoot = getMarkoRoot(exprRoot);
    if (!markoRoot || canIgnoreRegister(markoRoot, exprRoot)) return;

    const section = getSection(fn);
    const fnExtra = (node.extra ??= {}) as RegisteredFnExtra;
    fnExtra.section = section;
    fnExtra.exprRoot = exprRoot.node.extra ??= {};
    fnExtra.rootPath = getRootPath(fn, exprRoot);
    fnExtra.inputPath = getInputPath(markoRoot, fnExtra.rootPath);
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

function getRootPath(fn: t.NodePath, root: t.NodePath) {
  let path: Opt<string | true>;
  for (let cur = fn; cur !== root;) {
    const parent = cur.parentPath!;
    let key: string | true = true;
    if (parent.node.type === "ArrayExpression") {
      const { elements } = parent.node;
      const index = elements.indexOf(cur.node as t.Expression);
      key = "" + index;
      for (let i = index; i--;) {
        if (elements[i]?.type === "SpreadElement") {
          key = true;
          break;
        }
      }
      cur = parent;
    } else {
      const prop = t.isObjectMethod(cur.node) ? cur : parent;
      if (t.isObjectMethod(prop.node) || t.isObjectProperty(prop.node)) {
        if (!prop.node.computed) key = getLiteralName(prop.node.key) ?? true;
        cur = prop.parentPath!;
      } else {
        cur = parent;
      }
    }
    path = key === true ? true : concat(key, path);
  }
  return path;
}

// The keys from its tag's input: an attribute's value lands under its name, a
// spread's keys as they are.
function getInputPath(markoRoot: t.NodePath, path: Opt<string | true>) {
  const { node } = markoRoot;
  if (node.type !== "MarkoAttribute" && node.type !== "MarkoSpreadAttribute") {
    return true;
  }
  return getTagInputPath(
    markoRoot.parentPath as t.NodePath<t.MarkoTag>,
    node.type === "MarkoAttribute" ? concat(node.name, path) : path,
  );
}

// An attribute tag lands in its owner's input under its name, the first of any
// repeated or control-flow ones, whose rest only an iteration (a whole read) reaches.
function getTagInputPath(
  tag: t.NodePath<t.MarkoTag>,
  path: Opt<string | true>,
): Opt<string | true> {
  if (!isAttributeTag(tag)) return path;
  let owner = getParentTag(tag)!;
  while (isTransparentTag(owner)) owner = getParentTag(owner)!;
  return getTagInputPath(
    owner,
    concat((tag.node.name as t.StringLiteral).value.slice(1), path),
  );
}

function isMarkoAttribute(
  path: t.NodePath | undefined | null,
): path is t.NodePath<t.MarkoAttribute> & {
  parent: t.MarkoTag;
  parentPath: t.NodePath<t.MarkoTag>;
} {
  return path ? path.isMarkoAttribute() : false;
}

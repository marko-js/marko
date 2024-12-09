import { getTemplateId, isNativeTag } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";

import { getFnRoot, getMarkoRoot } from "../util/get-root";
import { isCoreTagName } from "../util/is-core-tag";
import { getSection, type Section } from "../util/sections";
import type { TemplateVisitor } from "../util/visitors";
import { currentProgramPath } from "./program";
const functionIdsBySection = new WeakMap<Section, Map<string, number>>();

declare module "@marko/compiler/dist/types" {
  export interface FunctionDeclarationExtra {
    registerId?: string;
    name?: string;
  }

  export interface FunctionExpressionExtra {
    registerId?: string;
    name?: string;
  }

  export interface ArrowFunctionExpressionExtra {
    registerId?: string;
    name?: string;
  }
}

export default {
  analyze(fn) {
    const fnRoot = getFnRoot(fn.parentPath);
    const markoRoot = getMarkoRoot(fnRoot || fn);
    const isStatic = !markoRoot || markoRoot.isMarkoScriptlet({ static: true });
    if (fnRoot || !isFunction(fn, isStatic)) return;

    if (
      markoRoot &&
      (markoRoot.isMarkoPlaceholder() ||
        (markoRoot.isMarkoScriptlet() && markoRoot.node.target === "server"))
    ) {
      // Server only or render only functions never need to be registered.
      return;
    }

    const { node } = fn;
    const extra = (node.extra ??= {});
    const name = (extra.name =
      (fn.node as t.FunctionExpression).id?.name ||
      (isMarkoAttribute(markoRoot)
        ? markoRoot.node.default
          ? t.toIdentifier(
              markoRoot.parentPath.has("var")
                ? markoRoot.parentPath.get("var")
                : markoRoot.parentPath.get("name"),
            )
          : markoRoot.node.name
        : t.isVariableDeclarator(fn.parent) && t.isIdentifier(fn.parent.id)
          ? fn.parent.id.name
          : "anonymous"));

    if (
      isMarkoAttribute(markoRoot) &&
      ((isNativeTag(markoRoot.parentPath) &&
        /^on[A-Z-]/.test(markoRoot.node.name)) ||
        isCoreTagName(markoRoot.parentPath, "effect") ||
        isCoreTagName(markoRoot.parentPath, "lifecycle") ||
        isCoreTagName(markoRoot.parentPath, "for"))
    ) {
      // Native tags, effects, lifecycles, and for loops aren't registered here since handle pulling in the function themselves.
      return;
    }

    const {
      markoOpts,
      opts: { filename },
    } = currentProgramPath.hub.file;

    const section = getSection(fn);
    let functionNameCounts = functionIdsBySection.get(section);
    if (!functionNameCounts) {
      functionNameCounts = new Map();
      functionIdsBySection.set(section, functionNameCounts);
    }
    const index = functionNameCounts.get(name);
    let id = "";
    if (index === undefined) {
      functionNameCounts.set(name, 0);
    } else {
      id = `_${index}`;
    }

    extra.section = section;
    extra.registerId = getTemplateId(
      markoOpts,
      filename as string,
      `${section.id}/${name + id}`,
    );
  },
} satisfies TemplateVisitor<t.Function>;

function isFunction(
  fn: t.NodePath<t.Node>,
  isStatic: boolean,
): fn is
  | t.NodePath<t.FunctionDeclaration>
  | t.NodePath<t.FunctionExpression>
  | t.NodePath<t.ArrowFunctionExpression> {
  switch (fn.node.type) {
    case "FunctionDeclaration":
      return isStatic && !fn.node.declare;
    case "FunctionExpression":
    case "ArrowFunctionExpression":
      return true;
    default:
      return false;
  }
}

function isMarkoAttribute(
  path: t.NodePath | undefined | null,
): path is t.NodePath<t.MarkoAttribute> & {
  parent: t.MarkoTag;
  parentPath: t.NodePath<t.MarkoTag>;
} {
  return path ? path.isMarkoAttribute() : false;
}

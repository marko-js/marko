import { getTemplateId, isNativeTag } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";

import { getMarkoRoot, isMarko } from "../util/get-root";
import { isCoreTagName } from "../util/is-core-tag";
import { isOutputHTML } from "../util/marko-config";
import { forEach } from "../util/optional";
import { getScopeAccessorLiteral } from "../util/references";
import { callRuntime } from "../util/runtime";
import { createScopeReadPattern } from "../util/scope-read";
import {
  getScopeIdIdentifier,
  getSection,
  type Section,
} from "../util/sections";
import { getSerializedScopeProperties } from "../util/signals";
import type { TemplateVisitor } from "../util/visitors";
import { currentProgramPath, scopeIdentifier } from "./program";
const functionIdsBySection = new WeakMap<Section, Map<string, number>>();
const registeredFunctions = new WeakSet<t.Function>();

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
    const markoRoot = getMarkoRoot(fn);
    const isStatic = !markoRoot || markoRoot.isMarkoScriptlet({ static: true });
    if (!isFunction(fn, isStatic)) return;

    if (
      markoRoot &&
      (markoRoot.isMarkoPlaceholder() ||
        markoRoot.isMarkoScriptlet({ target: "server" }))
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
        : "anonymous"));

    if (
      isMarkoAttribute(markoRoot) &&
      ((isNativeTag(markoRoot.parentPath) &&
        /^on[A-Z-]/.test(markoRoot.node.name)) ||
        isCoreTagName(markoRoot.parentPath, "effect") ||
        isCoreTagName(markoRoot.parentPath, "lifecycle") ||
        isCoreTagName(markoRoot.parentPath, "for") ||
        isCoreTagName(markoRoot.parentPath, "do"))
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

    extra.registerId = getTemplateId(
      markoOpts,
      filename as string,
      `${section.id}/${name + id}`,
    );
  },
  translate: {
    exit(fn) {
      const markoRoot = getMarkoRoot(fn);
      const isStatic =
        !markoRoot || markoRoot.isMarkoScriptlet({ static: true });
      if (!isFunction(fn, isStatic)) return;

      const { node } = fn;
      const { extra } = node;
      if (!extra?.registerId) return;
      if (registeredFunctions.has(node)) return;
      const section = getSection(fn);
      if (!section) return;

      registeredFunctions.add(node);

      if (isOutputHTML()) {
        const serializedScopeProperties = getSerializedScopeProperties(section);
        forEach(extra.referencedBindings, (ref) => {
          serializedScopeProperties.set(
            getScopeAccessorLiteral(ref),
            t.identifier(ref.name),
          );
        });

        if (t.isFunctionDeclaration(node)) {
          currentProgramPath
            .unshiftContainer(
              "body",
              t.expressionStatement(
                callRuntime(
                  "register",
                  node.id,
                  t.stringLiteral(extra.registerId),
                  isStatic ? undefined : getScopeIdIdentifier(section),
                ),
              ),
            )[0]
            .skip();
        } else {
          const replacement = callRuntime(
            "register",
            node,
            t.stringLiteral(extra.registerId),
            isStatic ? undefined : getScopeIdIdentifier(section),
          );

          if (isMarko(fn.parentPath)) {
            replacement.extra = node.extra;
          }

          fn.replaceWith(replacement)[0].skip();
        }
      } else {
        const { referencedBindings } = extra;
        const fnId = currentProgramPath.scope.generateUidIdentifier(extra.name);

        if (t.isFunctionDeclaration(node)) {
          currentProgramPath
            .unshiftContainer(
              "body",
              t.expressionStatement(
                callRuntime(
                  "register",
                  t.stringLiteral(extra.registerId),
                  node.id,
                ),
              ),
            )[0]
            .skip();
        } else if (isStatic) {
          const replacement = callRuntime(
            "register",
            t.stringLiteral(extra.registerId),
            node,
          );
          if (isMarko(fn.parentPath)) {
            replacement.extra = node.extra;
          }

          fn.replaceWith(replacement)[0].skip();
        } else {
          const replacement = t.callExpression(fnId, [scopeIdentifier]);
          if (isMarko(fn.parentPath)) {
            replacement.extra = node.extra;
          }

          currentProgramPath
            .pushContainer(
              "body",
              t.variableDeclaration("const", [
                t.variableDeclarator(
                  fnId,
                  callRuntime(
                    "register",
                    t.stringLiteral(extra.registerId!),
                    t.arrowFunctionExpression(
                      [scopeIdentifier],
                      referencedBindings
                        ? t.blockStatement([
                            t.variableDeclaration("const", [
                              t.variableDeclarator(
                                createScopeReadPattern(
                                  section,
                                  referencedBindings,
                                ),
                                scopeIdentifier,
                              ),
                            ]),
                            t.returnStatement(node),
                          ])
                        : node,
                    ),
                  ),
                ),
              ]),
            )[0]
            .skip();

          fn.replaceWith(replacement)[0].skip();
        }
      }
    },
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
      return isStatic;
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

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
import { currentProgramPath, scopeIdentifier } from "./program";
const functionIdsBySection = new WeakMap<Section, Map<string, number>>();
const registeredFunctions = new WeakSet<
  t.FunctionExpression | t.ArrowFunctionExpression
>();

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    registerId?: string;
  }
}

export default {
  analyze(fn: t.NodePath<t.Function>) {
    if (!(fn.isFunctionExpression() || fn.isArrowFunctionExpression())) {
      return;
    }

    const markoRoot = getMarkoRoot(fn);
    if (
      markoRoot &&
      ((markoRoot.isMarkoAttribute() &&
        (isNativeTag(markoRoot.parentPath as t.NodePath<t.MarkoTag>) ||
          isCoreTagName(markoRoot.parentPath, "effect") ||
          isCoreTagName(markoRoot.parentPath, "lifecycle") ||
          isCoreTagName(markoRoot.parentPath, "for"))) ||
        markoRoot.isMarkoPlaceholder() ||
        markoRoot.isMarkoScriptlet({ target: "server" }))
    ) {
      return;
    }

    const { node } = fn;
    const extra = (node.extra ??= {});
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

    let name = extra.name as string | undefined;
    if (name === undefined) {
      const markoRoot = fn.parentPath;
      if (markoRoot.isMarkoAttribute()) {
        name = markoRoot.node.default
          ? t.toIdentifier(
              (markoRoot.parentPath.parentPath as t.NodePath<t.MarkoTag>).get(
                "name",
              ),
            )
          : markoRoot.node.name;
      } else {
        name = "anonymous";
      }

      extra.name = name;
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
    exit(fn: t.NodePath<t.Function>) {
      if (!(fn.isFunctionExpression() || fn.isArrowFunctionExpression())) {
        return;
      }

      const markoRoot = getMarkoRoot(fn);
      const isStatic =
        !markoRoot || markoRoot.isMarkoScriptlet({ static: true });

      const { node } = fn;
      const { extra } = node;
      if (!extra?.registerId) return;
      if (registeredFunctions.has(node)) return;
      const section = getSection(fn);
      if (!section) return;

      registeredFunctions.add(node);

      let replacement: t.Expression;

      if (isOutputHTML()) {
        const serializedScopeProperties = getSerializedScopeProperties(section);
        forEach(extra.referencedBindings, (ref) => {
          serializedScopeProperties.set(
            getScopeAccessorLiteral(ref),
            t.identifier(ref.name),
          );
        });

        replacement = callRuntime(
          "register",
          node,
          t.stringLiteral(extra.registerId),
          isStatic ? undefined : getScopeIdIdentifier(section),
        );
      } else {
        const { referencedBindings } = extra;
        const fnId = currentProgramPath.scope.generateUidIdentifier(extra.name);

        if (isStatic) {
          replacement = callRuntime(
            "register",
            t.stringLiteral(extra.registerId),
            node,
          );
        } else {
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
          replacement = t.callExpression(fnId, [scopeIdentifier]);
        }
      }

      if (isMarko(fn.parentPath)) {
        replacement.extra = node.extra;
      }

      fn.replaceWith(replacement)[0].skip();
    },
  },
};

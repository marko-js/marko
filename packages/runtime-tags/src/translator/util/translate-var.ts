import { types as t } from "@marko/compiler";

import { forEachIdentifierPath } from "./for-each-identifier";
import { generateUidIdentifier } from "./generate-uid";
import { getDeclaredBindingExpression } from "./get-defined-binding-expression";
import { toArray } from "./optional";
import { type Binding, getCanonicalBinding, propsUtil } from "./references";
import { callRuntime } from "./runtime";
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
} from "./sections";
import { getSerializeReason } from "./serialize-reasons";
import { toPropertyName } from "./to-property-name";

export default function translateVar(
  tag: t.NodePath<t.MarkoTag>,
  initialValue: t.Expression,
  kind: "let" | "const" = "const",
) {
  const {
    node: { var: tagVar },
  } = tag;

  if (!tagVar) {
    return;
  }

  const tagSection = getOrCreateSection(tag);

  forEachIdentifierPath(tag.get("var"), (id) => {
    if (id.node === tagVar) return;

    const idExtra = id.node.extra;
    if (!idExtra) return;

    const binding = idExtra.binding;
    if (!binding?.upstreamAlias) return;

    if (binding.assignmentSections && binding.property !== undefined) {
      const changeName = binding.property + "Change";
      const changeBinding =
        binding.upstreamAlias.propertyAliases.get(changeName);
      if (changeBinding && changeName !== changeBinding.name) {
        // add a new property to the destructure list when a change handler is implicitly added
        // eg by assigning to a destructured property.
        const pattern = getDestructurePattern(id);
        if (pattern) {
          pattern.unshiftContainer(
            "properties",
            t.objectProperty(
              t.identifier(changeName),
              t.identifier(changeBinding.name),
            ),
          );
          const lastProperty = pattern.get("properties").at(-1);
          if (lastProperty?.node.type === "RestElement") {
            const restBinding = lastProperty.node.argument.extra?.binding;
            if (restBinding) {
              restBinding.excludeProperties = propsUtil.add(
                restBinding.excludeProperties,
                changeName,
              );
            }
          }
        }
      }
    }

    if (
      binding.section !== tagSection &&
      binding.excludeProperties !== undefined &&
      getSerializeReason(binding.section, binding)
    ) {
      // hoist rest aliases which are in a different section to be in the owner section so that it can be serialized.
      const restPath = id.parentPath as t.NodePath<t.RestElement>;
      if (restPath.type !== "RestElement") {
        throw restPath.buildCodeFrameError(
          "Invalid compiler state, found a rest binding outside of a rest element.",
        );
      }

      let curPath = tag.parentPath as t.NodePath | null;
      while (curPath) {
        if (curPath.node.extra?.section === binding.section) {
          const canonicalUpstreamAlias = getCanonicalBinding(
            binding.upstreamAlias,
          );
          const props: t.ObjectPattern["properties"] = toArray(
            binding.excludeProperties,
            (name) =>
              t.objectProperty(
                toPropertyName(name),
                generateUidIdentifier(name),
              ),
          );

          props.push(restPath.node);
          curPath.insertBefore(
            t.variableDeclaration(kind, [
              t.variableDeclarator(
                t.objectPattern(props),
                canonicalUpstreamAlias.nullable
                  ? t.logicalExpression(
                      "||",
                      getDeclaredBindingExpression(canonicalUpstreamAlias),
                      t.objectExpression([]),
                    )
                  : getDeclaredBindingExpression(canonicalUpstreamAlias),
              ),
            ]),
          );
          break;
        }

        curPath = curPath.parentPath;
      }

      restPath.remove();
    }
  });

  tag.insertBefore(
    t.variableDeclaration(kind, [t.variableDeclarator(tagVar, initialValue)]),
  );
}

export function translateDomVar(
  tag: t.NodePath<t.MarkoTag>,
  binding: Binding | undefined,
) {
  if (binding && tag.node.var) {
    const tagSection = getSection(tag);
    const registerId = tagSection.domGetterBindings.get(binding);
    if (registerId) {
      (
        tag.parentPath as t.NodePath<t.MarkoTagBody | t.Program>
      ).unshiftContainer(
        "body",
        t.variableDeclaration("const", [
          t.variableDeclarator(
            tag.node.var,
            callRuntime(
              "_el",
              getScopeIdIdentifier(tagSection),
              t.stringLiteral(registerId),
            ),
          ),
        ]),
      );
    }
  }
}

function getDestructurePattern(id: t.NodePath<t.Identifier>) {
  let cur: t.NodePath | null = id;

  while (cur) {
    if (cur.node.type === "ObjectPattern") {
      return cur as t.NodePath<t.ObjectPattern>;
    }
    cur = cur.parentPath;
  }
}

import { types as t } from "@marko/compiler";
import { scopeIdentifier } from "../visitors/program";
import { forEach } from "./optional";
import {
  type Binding,
  type ReferencedBindings,
  getScopeAccessorLiteral,
} from "./references";
import type { Section } from "./sections";

export function createScopeReadPattern(
  section: Section,
  referencedBindings: ReferencedBindings,
) {
  const rootDepth = section.depth;
  const rootPattern = t.objectPattern([]);
  let nestedPatterns: t.ObjectPattern[] | undefined;
  forEach(referencedBindings, (ref) => {
    // TODO: need a better way to exclude internal references
    if (ref.name.includes("#")) return;

    const propertyKey = getScopeAccessorLiteral(ref);
    const propertyValue = t.identifier(ref.name);
    const isShorthand = propertyKey.value === propertyValue.name;
    let pattern: t.ObjectPattern = rootPattern;
    if (ref.section !== section) {
      if (!nestedPatterns) nestedPatterns = [rootPattern];

      const relativeDepth = rootDepth - ref.section.depth;
      let i = nestedPatterns.length;
      let prev = nestedPatterns[i - 1];
      for (; i <= relativeDepth; i++) {
        const nestedPattern = t.objectPattern([]);
        prev.properties.push(
          t.objectProperty(t.identifier("_"), nestedPattern),
        );
        nestedPatterns.push(nestedPattern);
        prev = nestedPattern;
      }

      pattern = nestedPatterns[relativeDepth];
    }

    pattern.properties.push(
      t.objectProperty(
        isShorthand ? propertyValue : propertyKey,
        propertyValue,
        false,
        isShorthand,
      ),
    );
  });

  return rootPattern;
}

export function getScopeExpression(section: Section, targetSection: Section) {
  let scope: t.Expression = scopeIdentifier ?? t.identifier("undefined");
  const diff = section.depth - targetSection.depth;
  for (let i = 0; i < diff; i++) {
    scope = t.memberExpression(scope, t.identifier("_"));
  }
  if (diff < 0) {
    // TODO: handle hoisted references
    throw new Error("Unable to find scope for reference.");
  }
  return scope;
}

export function createScopeReadExpression(
  section: Section,
  reference: Binding,
) {
  return t.memberExpression(
    getScopeExpression(section, reference.section),
    getScopeAccessorLiteral(reference),
    true,
  );
}

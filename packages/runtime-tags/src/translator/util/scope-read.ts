import { types as t } from "@marko/compiler";

import { scopeIdentifier } from "../visitors/program";
import { forEach } from "./optional";
import {
  type Binding,
  getScopeAccessor,
  type ReferencedBindings,
} from "./references";
import type { Section } from "./sections";
import { isValidPropertyIdentifier, toPropertyName } from "./to-property-name";

export function createScopeReadPattern(
  section: Section,
  referencedBindings: ReferencedBindings,
) {
  const rootDepth = section.depth;
  const rootPattern = t.objectPattern([]);
  let nestedPatterns: t.ObjectPattern[] | undefined;
  forEach(referencedBindings, (ref) => {
    const propertyValue = ref.name;
    // TODO: need a better way to exclude internal references
    if (!isValidPropertyIdentifier(propertyValue)) return;
    const propertyKey = getScopeAccessor(ref);
    const isShorthand = propertyKey === propertyValue;
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
        toPropertyName(propertyKey),
        t.identifier(propertyValue),
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
  const propName = toPropertyName(getScopeAccessor(reference));
  return t.memberExpression(
    getScopeExpression(section, reference.section),
    propName,
    propName.type !== "Identifier",
  );
}

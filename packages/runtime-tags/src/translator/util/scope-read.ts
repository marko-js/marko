import { types as t } from "@marko/compiler";

import { scopeIdentifier } from "../visitors/program";
import { getAccessorProp } from "./get-accessor-char";
import { forEach } from "./optional";
import {
  type Binding,
  BindingType,
  createRead,
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
    if (ref.section !== section && ref.type !== BindingType.local) {
      if (!nestedPatterns) nestedPatterns = [rootPattern];

      const relativeDepth = rootDepth - ref.section.depth;
      let i = nestedPatterns.length;
      let prev = nestedPatterns[i - 1];
      for (; i <= relativeDepth; i++) {
        const nestedPattern = t.objectPattern([]);
        prev.properties.push(
          t.objectProperty(
            t.identifier(getAccessorProp().Owner),
            nestedPattern,
          ),
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
    scope = t.memberExpression(scope, t.identifier(getAccessorProp().Owner));
  }
  if (diff < 0) {
    // TODO: handle hoisted references
    throw new Error("Unable to find scope for reference.");
  }
  return scope;
}

export function createScopeReadExpression(
  reference: Binding,
  section = reference.section,
) {
  const propName = toPropertyName(getScopeAccessor(reference));
  const expr = t.memberExpression(
    reference.type === BindingType.local
      ? scopeIdentifier
      : getScopeExpression(section, reference.section),
    propName,
    propName.type !== "Identifier",
  );

  if (section === reference.section && reference.type !== BindingType.dom) {
    const exprExtra = (expr.extra ??= {});
    exprExtra.read = createRead(reference, undefined, undefined);
    exprExtra.section = section;
  }
  return expr;
}

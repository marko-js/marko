import { types as t } from "@marko/compiler";

import { scopeIdentifier } from "../visitors/program";
import { getAccessorProp } from "./get-accessor-char";
import {
  type Binding,
  BindingType,
  createRead,
  getScopeAccessor,
} from "./references";
import type { Section } from "./sections";
import { toPropertyName } from "./to-property-name";

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
    exprExtra.read = createRead(reference, undefined);
    exprExtra.section = section;
  }
  return expr;
}

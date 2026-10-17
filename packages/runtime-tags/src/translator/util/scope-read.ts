import { types as t } from "@marko/compiler";

import { type Binding, BindingType, getCanonicalBinding } from "./bindings";
import { generateUidIdentifier } from "./generate-uid";
import { getAccessorProp } from "./get-accessor-enums";
import { isOutputDOM } from "./marko-config";
import { createResolvedRead } from "./references";
import { getScopeAccessor } from "./scope-accessor";
import type { Section } from "./sections";
import { toMemberExpression } from "./to-property-name";

export let scopeIdentifier: t.Identifier;
export let localsIdentifier: t.Identifier;

// Names the dom output's scope and locals params as its program translates.
export function createScopeIdentifiers() {
  scopeIdentifier = isOutputDOM()
    ? generateUidIdentifier("scope")
    : (null as any as t.Identifier);
  localsIdentifier = isOutputDOM()
    ? generateUidIdentifier("locals")
    : (null as any as t.Identifier);
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
  if (reference.type === BindingType.global) {
    return createGlobalReadExpression(reference);
  }
  const expr = toMemberExpression(
    getScopeExpression(section, reference.section),
    getScopeAccessor(reference),
  );

  if (section === reference.section && reference.type !== BindingType.dom) {
    const exprExtra = (expr.extra ??= {});
    exprExtra.read = createResolvedRead(reference, undefined);
    exprExtra.section = section;
  }
  return expr;
}

// A keyed `$global` read: its keys under the globals object every scope shares,
// which is never nullish.
function createGlobalReadExpression(
  binding: Binding,
): t.MemberExpression | t.OptionalMemberExpression {
  const { aliasOf, property } = getCanonicalBinding(binding)!;
  if (!aliasOf) {
    return t.memberExpression(
      scopeIdentifier,
      t.identifier(getAccessorProp().Global),
    );
  }
  const object = createGlobalReadExpression(aliasOf);
  return property === undefined
    ? object
    : toMemberExpression(
        object,
        property,
        aliasOf.nullable && !!aliasOf.aliasOf,
      );
}

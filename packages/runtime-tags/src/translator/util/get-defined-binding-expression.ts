import { types as t } from "@marko/compiler";

import { type Binding, getCanonicalBinding } from "./references";
import { toMemberExpression } from "./to-property-name";

export function getDeclaredBindingExpression(
  binding: Binding,
): t.Identifier | t.OptionalMemberExpression | t.MemberExpression {
  const canonicalBinding = getCanonicalBinding(binding)!;
  if (canonicalBinding.declared || !canonicalBinding.upstreamAlias) {
    return t.identifier(canonicalBinding.name);
  } else if (canonicalBinding.property !== undefined) {
    return toMemberExpression(
      getDeclaredBindingExpression(canonicalBinding.upstreamAlias),
      canonicalBinding.property,
      canonicalBinding.upstreamAlias.nullable,
    );
  } else {
    return getDeclaredBindingExpression(canonicalBinding.upstreamAlias);
  }
}

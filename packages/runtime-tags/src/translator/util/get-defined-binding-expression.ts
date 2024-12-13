import { types as t } from "@marko/compiler";

import type { Binding } from "./references";
import { toMemberExpression } from "./to-property-name";

export function getDeclaredBindingExpression(
  binding: Binding,
): t.Identifier | t.OptionalMemberExpression | t.MemberExpression {
  if (binding.declared || !binding.upstreamAlias) {
    return t.identifier(binding.name);
  } else if (binding.property !== undefined) {
    return toMemberExpression(
      getDeclaredBindingExpression(binding.upstreamAlias),
      binding.property,
      binding.upstreamAlias.nullable,
    );
  } else {
    return getDeclaredBindingExpression(binding.upstreamAlias);
  }
}

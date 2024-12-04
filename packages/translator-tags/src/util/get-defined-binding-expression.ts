import { types as t } from "@marko/compiler";

import type { Binding } from "./references";

export function getDeclaredBindingExpression(
  binding: Binding,
): t.Identifier | t.OptionalMemberExpression | t.MemberExpression {
  if (binding.declared || !binding.upstreamAlias) {
    return t.identifier(binding.name);
  } else if (binding.property !== undefined) {
    if (binding.upstreamAlias.nullable) {
      return t.optionalMemberExpression(
        getDeclaredBindingExpression(binding.upstreamAlias),
        t.identifier(binding.property),
        false,
        true,
      );
    } else {
      return t.memberExpression(
        getDeclaredBindingExpression(binding.upstreamAlias),
        t.identifier(binding.property),
        false,
      );
    }
  } else {
    return getDeclaredBindingExpression(binding.upstreamAlias);
  }
}

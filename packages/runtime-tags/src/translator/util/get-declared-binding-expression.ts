import { types as t } from "@marko/compiler";

import { type Binding, getCanonicalBinding, propsUtil } from "./references";
import { toMemberExpression } from "./to-property-name";

export function getDeclaredBindingExpression(
  binding: Binding,
): t.Identifier | t.MemberExpression | t.OptionalMemberExpression {
  const canonicalBinding = getCanonicalBinding(binding)!;
  const { upstreamAlias, property, declaredAlias } = canonicalBinding;
  if (
    canonicalBinding.declared ||
    !upstreamAlias ||
    canonicalBinding.excludeProperties !== undefined
  ) {
    return t.identifier(canonicalBinding.name);
  }

  // A destructured pattern is only in scope through the names it declares.
  if (declaredAlias && declaredAlias.excludeProperties === undefined) {
    return t.identifier(declaredAlias.name);
  }

  if (property !== undefined) {
    const alias = !upstreamAlias.declared && upstreamAlias.declaredAlias;
    if (alias && !propsUtil.has(alias.excludeProperties, property)) {
      return toMemberExpression(
        t.identifier(alias.name),
        alias.restOffset ? `${+property - alias.restOffset}` : property,
        alias.nullable,
      );
    }
    return toMemberExpression(
      getDeclaredBindingExpression(upstreamAlias),
      property,
      upstreamAlias.nullable,
    );
  }

  return getDeclaredBindingExpression(upstreamAlias);
}

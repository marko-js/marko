import { types as t } from "@marko/compiler";

import { type Binding, getCanonicalBinding, propsUtil } from "./bindings";
import { toMemberExpression } from "./to-property-name";

export function getDeclaredBindingExpression(
  binding: Binding,
): t.Identifier | t.MemberExpression | t.OptionalMemberExpression {
  const canonicalBinding = getCanonicalBinding(binding)!;
  // Content the loop creates is written within it, where the local is in scope.
  if (canonicalBinding.localOf) {
    return getDeclaredBindingExpression(canonicalBinding.localOf);
  }
  const { aliasOf: aliased, property, declaredAlias } = canonicalBinding;
  if (
    canonicalBinding.declared ||
    !aliased ||
    canonicalBinding.excludeProperties !== undefined
  ) {
    return t.identifier(canonicalBinding.name);
  }

  // A destructured pattern is only in scope through the names it declares.
  if (declaredAlias && declaredAlias.excludeProperties === undefined) {
    return t.identifier(declaredAlias.name);
  }

  if (property !== undefined) {
    const alias = !aliased.declared && aliased.declaredAlias;
    if (alias && !propsUtil.has(alias.excludeProperties, property)) {
      return toMemberExpression(
        t.identifier(alias.name),
        alias.restOffset ? `${+property - alias.restOffset}` : property,
        alias.nullable,
      );
    }
    return toMemberExpression(
      getDeclaredBindingExpression(aliased),
      property,
      aliased.nullable,
    );
  }

  return getDeclaredBindingExpression(aliased);
}

import { types as t } from "@marko/compiler";

import {
  type Binding,
  getCanonicalBinding,
  getNearestDeclared,
  isRest,
  propsUtil,
} from "./bindings";
import { toMemberExpression } from "./to-property-name";

// A read in place keeps the author's access; one written elsewhere reads each
// property of a value that may be nullish with `?.`.
export function getDeclaredBindingExpression(
  binding: Binding,
  inPlace = false,
): t.Identifier | t.MemberExpression | t.OptionalMemberExpression {
  const canonicalBinding = getCanonicalBinding(binding)!;
  // Content the loop creates is written within it, where the local is in scope.
  if (canonicalBinding.localOf) {
    return getDeclaredBindingExpression(canonicalBinding.localOf, inPlace);
  }
  const { aliasOf: aliased, property, declaredAlias } = canonicalBinding;
  if (binding.declared) {
    return t.identifier(binding.name);
  }

  if (canonicalBinding.declared || isRest(canonicalBinding)) {
    return t.identifier(canonicalBinding.name);
  }

  // A destructured value no declared name reaches is only in scope through
  // the names its pattern declares; a named one may be read before those.
  if (
    declaredAlias &&
    !isRest(declaredAlias) &&
    !getNearestDeclared(canonicalBinding)
  ) {
    return t.identifier(declaredAlias.name);
  }

  if (!aliased) {
    return t.identifier(canonicalBinding.name);
  }

  if (property !== undefined) {
    const alias = !getNearestDeclared(aliased) && aliased.declaredAlias;
    if (alias && !propsUtil.has(alias.excludeProperties, property)) {
      return toMemberExpression(
        t.identifier(alias.name),
        alias.restOffset ? `${+property - alias.restOffset}` : property,
        !inPlace && alias.nullable,
      );
    }
    return toMemberExpression(
      getDeclaredBindingExpression(aliased, inPlace),
      property,
      !inPlace && aliased.nullable,
    );
  }

  return getDeclaredBindingExpression(aliased, inPlace);
}

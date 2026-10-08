import { types as t } from "@marko/compiler";

import {
  type Binding,
  getCanonicalBinding,
  getNearestDeclared,
  isRest,
  propsUtil,
} from "./bindings";
import { toMemberExpression } from "./to-property-name";

type DeclaredExpression =
  | t.Identifier
  | t.MemberExpression
  | t.OptionalMemberExpression;

// A read in place keeps the author's access; one elsewhere uses `?.` on values
// that may be nullish. `getRoot` (for a `$global` alias) replaces local names.
export function getDeclaredBindingExpression(
  binding: Binding,
  inPlace = false,
  getRoot?: (root: Binding) => DeclaredExpression,
  rootNullable = true,
): DeclaredExpression {
  const canonicalBinding = getCanonicalBinding(binding)!;
  // Content the loop creates is written within it, where the local is in scope.
  if (canonicalBinding.localOf) {
    return getDeclaredBindingExpression(
      canonicalBinding.localOf,
      inPlace,
      getRoot,
      rootNullable,
    );
  }
  const { aliasOf: aliased, property, declaredAlias } = canonicalBinding;
  if (!getRoot) {
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
  }

  if (!aliased) {
    return getRoot
      ? getRoot(canonicalBinding)
      : t.identifier(canonicalBinding.name);
  }

  if (property !== undefined) {
    const alias =
      !getRoot && !getNearestDeclared(aliased) && aliased.declaredAlias;
    if (alias && !propsUtil.has(alias.excludeProperties, property)) {
      return toMemberExpression(
        t.identifier(alias.name),
        alias.restOffset ? `${+property - alias.restOffset}` : property,
        !inPlace && alias.nullable,
      );
    }
    return toMemberExpression(
      getDeclaredBindingExpression(aliased, inPlace, getRoot, rootNullable),
      property,
      !inPlace && aliased.nullable && (rootNullable || !!aliased.aliasOf),
    );
  }

  return getDeclaredBindingExpression(aliased, inPlace, getRoot, rootNullable);
}

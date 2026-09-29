import { types as t } from "@marko/compiler";

import { type Binding, getCanonicalBinding, propsUtil } from "./references";
import { toMemberExpression } from "./to-property-name";

type DeclaredExpression =
  | t.Identifier
  | t.MemberExpression
  | t.OptionalMemberExpression;

// Reads a binding through its alias chain from the declared root, or from
// `getRoot` (eg the globals object for a `$global` alias) with no local names.
export function getDeclaredBindingExpression(
  binding: Binding,
  getRoot?: (root: Binding) => DeclaredExpression,
  rootNullable = true,
): DeclaredExpression {
  const canonicalBinding = getCanonicalBinding(binding)!;
  // Content the loop creates is written within it, where the local is in scope.
  if (canonicalBinding.upstreamLocal) {
    return getDeclaredBindingExpression(canonicalBinding.upstreamLocal);
  }
  const { upstreamAlias, property, declaredAlias } = canonicalBinding;
  if (
    canonicalBinding.declared ||
    !upstreamAlias ||
    canonicalBinding.excludeProperties !== undefined
  ) {
    return getRoot
      ? getRoot(canonicalBinding)
      : t.identifier(canonicalBinding.name);
  }

  // A destructured pattern is only in scope through the names it declares.
  if (
    !getRoot &&
    declaredAlias &&
    declaredAlias.excludeProperties === undefined
  ) {
    return t.identifier(declaredAlias.name);
  }

  if (property !== undefined) {
    const alias =
      !getRoot && !upstreamAlias.declared && upstreamAlias.declaredAlias;
    if (alias && !propsUtil.has(alias.excludeProperties, property)) {
      return toMemberExpression(
        t.identifier(alias.name),
        alias.restOffset ? `${+property - alias.restOffset}` : property,
        alias.nullable,
      );
    }
    return toMemberExpression(
      getDeclaredBindingExpression(upstreamAlias, getRoot, rootNullable),
      property,
      upstreamAlias.nullable && (rootNullable || !!upstreamAlias.upstreamAlias),
    );
  }

  return getDeclaredBindingExpression(upstreamAlias, getRoot, rootNullable);
}

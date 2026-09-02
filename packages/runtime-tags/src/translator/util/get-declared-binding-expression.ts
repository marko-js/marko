import { types as t } from "@marko/compiler";

import { type Binding, getCanonicalBinding } from "./references";
import { toMemberExpression } from "./to-property-name";

type DeclaredExpression =
  | t.Identifier
  | t.MemberExpression
  | t.OptionalMemberExpression;

// Reads a binding through its alias chain from the declared root (or the
// given root expression, eg the globals object for a `$global` alias).
export function getDeclaredBindingExpression(
  binding: Binding,
  getRoot: (root: Binding) => DeclaredExpression = (root) =>
    t.identifier(root.name),
  rootNullable = true,
): DeclaredExpression {
  const canonicalBinding = getCanonicalBinding(binding)!;
  if (
    canonicalBinding.declared ||
    !canonicalBinding.upstreamAlias ||
    canonicalBinding.excludeProperties !== undefined
  ) {
    return getRoot(canonicalBinding);
  } else if (canonicalBinding.property !== undefined) {
    const upstream = canonicalBinding.upstreamAlias;
    return toMemberExpression(
      getDeclaredBindingExpression(upstream, getRoot, rootNullable),
      canonicalBinding.property,
      upstream.nullable && (rootNullable || !!upstream.upstreamAlias),
    );
  } else {
    return getDeclaredBindingExpression(
      canonicalBinding.upstreamAlias,
      getRoot,
      rootNullable,
    );
  }
}

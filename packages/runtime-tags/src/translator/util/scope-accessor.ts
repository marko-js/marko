import { types as t } from "@marko/compiler";

import {
  type AccessorPrefix,
  AccessorProp as DebugAccessorProp,
} from "../../common/accessor.debug";
import { decodeAccessor } from "../../common/helpers";
import { type Binding, BindingType, getCanonicalBinding } from "./bindings";
import { getAccessorPrefix } from "./get-accessor-enums";
import { isOptimize } from "./marko-config";
import { isResumedBranch, type Section } from "./sections";

export function getScopeAccessorLiteral(
  binding: Binding,
  encoded?: boolean,
  includeId?: boolean,
) {
  const canonicalBinding = getCanonicalBinding(binding)!;
  return encoded &&
    isOptimize() &&
    canonicalBinding.type !== BindingType.constant
    ? t.numericLiteral(canonicalBinding.id)
    : t.stringLiteral(getScopeAccessor(binding, encoded, includeId));
}

export function getScopeAccessor(
  binding: Binding,
  encoded?: boolean,
  includeId?: boolean,
) {
  const canonicalBinding = getCanonicalBinding(binding)!;
  if (canonicalBinding.type === BindingType.constant) {
    return canonicalBinding.scopeAccessor ?? canonicalBinding.name;
  } else if (isOptimize()) {
    return encoded
      ? canonicalBinding.id + ""
      : decodeAccessor(canonicalBinding.id);
  }
  // Debug accessors are binding names, so one naming a runtime prop gets its id.
  const name = reservedDebugAccessors.has(canonicalBinding.name)
    ? `${canonicalBinding.name}/${canonicalBinding.id}`
    : canonicalBinding.name;
  if (includeId || canonicalBinding.type === BindingType.dom) {
    return `${name}/${canonicalBinding.id}`;
  }
  return canonicalBinding.scopeAccessor ?? name;
}

const reservedDebugAccessors = new Set<string>(
  Object.values(DebugAccessorProp),
);

// Always includes the id so a debug accessor cannot collide with the owner key.
export function getLocalsScopeAccessor(binding: Binding) {
  return getScopeAccessor(binding, false, true);
}

// Value-coupled prefixes use reserved ids instead of prepending a letter;
// other prefixes (and debug output) keep the letter scheme.
export function getPrefixedScopeAccessor(
  binding: Binding,
  prefix: AccessorPrefix,
) {
  const canonicalBinding = getCanonicalBinding(binding)!;
  if (isOptimize()) {
    switch (prefix) {
      case getAccessorPrefix().TagVariableChange:
        return decodeAccessor(canonicalBinding.id + 1);
      case getAccessorPrefix().ClosureScopes:
        return decodeAccessor(getClosureAccessorId(canonicalBinding));
      case getAccessorPrefix().ClosureSignalIndex:
        // Keeps the letter to not collide with the closing scope's own ids;
        // closure ids are unique among the closures one section reads.
        return prefix + decodeAccessor(getClosureAccessorId(canonicalBinding));
    }
  } else if (
    prefix === getAccessorPrefix().ClosureScopes ||
    prefix === getAccessorPrefix().ClosureSignalIndex
  ) {
    return prefix + getDebugClosureAccessor(binding);
  }
  return prefix + getScopeAccessor(binding);
}

// `_closure_get` builds a closure's scopes and signal index keys from this.
export function getClosureAccessorLiteral(binding: Binding) {
  return isOptimize()
    ? t.numericLiteral(getClosureAccessorId(binding))
    : t.stringLiteral(getDebugClosureAccessor(binding));
}

// Names repeat across owner sections, so the closure id keeps apart the
// same-named closures one section reads.
function getDebugClosureAccessor(binding: Binding) {
  return `${getScopeAccessor(binding)}/${getClosureAccessorId(binding)}`;
}

function getClosureAccessorId(binding: Binding) {
  const id = getCanonicalBinding(binding).closureId;
  /* v8 ignore next 5 -- analyze reserves an id for every closure binding */
  if (id === undefined) {
    throw new Error(
      `No closure accessor id was reserved for "${binding.name}".`,
    );
  }
  return id;
}

export function getSectionInstancesAccessor(section: Section) {
  // Only hoists reach the prefix + section id fallback; a reserved numeric id
  // would be a byte shorter, but hoists are too rare for that to pay.
  return isResumedBranch(section)
    ? getAccessorPrefix().BranchScopes +
        getScopeAccessor(section.branch.nodeBinding)
    : getAccessorPrefix().ClosureScopes + section.id;
}

export function getSectionInstancesAccessorLiteral(section: Section) {
  return t.stringLiteral(getSectionInstancesAccessor(section));
}

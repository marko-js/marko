import type { types as t } from "@marko/compiler";

import { forEach } from "./optional";
import {
  type Binding,
  BindingType,
  bindingUtil,
  dropReferencedBindings,
  getCanonicalBinding,
  getExpressionReads,
  type ReferencedBindings,
  type ReferencedExtra,
} from "./references";
import { isDirectClosure, type Section } from "./sections";

const forSelectorsBySection = new WeakMap<
  Section,
  { keyBinding: Binding; closures: Set<Binding> }
>();
const forSelectorValues = new WeakSet<Binding>();

export function getForSelectorKey(
  bodySection: Section,
  closure: Binding,
): Binding | undefined {
  const selectors = forSelectorsBySection.get(bodySection);
  if (selectors?.closures.has(getCanonicalBinding(closure))) {
    return selectors.keyBinding;
  }
}

export function isForSelectorValue(binding: Binding): boolean {
  return forSelectorValues.has(binding);
}

export function detectForSelector(
  bodySection: Section,
  keyBinding: Binding,
): void {
  let closures: Set<Binding> | undefined;
  for (const expr of keyBinding.reads) {
    if (expr.section !== bodySection) continue;
    forEach(expr.referencedBindings, (closure) => {
      const canonical = getCanonicalBinding(closure);
      if (
        closure.type !== BindingType.constant &&
        isDirectClosure(bodySection, closure) &&
        !closures?.has(canonical) &&
        onlyComparesKey(closure, canonical, bodySection, keyBinding)
      ) {
        (closures ||= new Set()).add(canonical);
        forSelectorValues.add(closure);
      }
    });
  }
  if (closures) {
    forSelectorsBySection.set(bodySection, { keyBinding, closures });
  }
}

function onlyComparesKey(
  closure: Binding,
  canonical: Binding,
  bodySection: Section,
  keyBinding: Binding,
): boolean {
  let found = false;
  const keyReads = new Map<ReferencedExtra, ReferencedBindings>();
  for (
    let chain: Binding | undefined = closure;
    chain;
    chain = chain.upstreamAlias
  ) {
    for (const expr of chain.reads) {
      if (expr.section !== bodySection) continue;
      let other = false;
      forEach(getExpressionReads(expr), (read) => {
        const resolved = read.extra.read;
        const at = resolved && resolvesTo(resolved, canonical);
        if (!at) return;
        const keyRead = read.comparedTo?.extra?.read;
        if (at === 2 || resolved.getter || !readsKey(keyRead, keyBinding)) {
          other = true;
        } else {
          found = true;
          // Only drop a key read resolving directly to the key binding; one
          // reaching it through the item (item read bare) keeps that referenced.
          if (
            keyRead &&
            !keyRead.props &&
            getCanonicalBinding(keyRead.binding) ===
              getCanonicalBinding(keyBinding)
          ) {
            keyReads.set(
              expr,
              bindingUtil.add(keyReads.get(expr), keyRead.binding),
            );
          }
        }
      });
      if (other) return false;
    }
  }
  if (found) {
    for (const [expr, dropped] of keyReads) {
      dropKeyReferences(expr, dropped);
    }
  }
  return found;
}

// The key is stable per keyed branch, so drop it from the comparison's
// referenced bindings — its intersection collapses to a lone closure signal.
function dropKeyReferences(expr: ReferencedExtra, dropped: ReferencedBindings) {
  if (dropReferencedBindings(expr, dropped)) {
    // The dropped key is still read but now schedules nothing, so pin it to
    // keep the `_const` that stores its value.
    forEach(dropped, (binding) => {
      binding.forcePersist = true;
    });
  }
}

function resolvesTo(
  read: NonNullable<t.NodeExtra["read"]>,
  canonical: Binding,
): 0 | 1 | 2 {
  let binding: Binding | undefined = read.binding;
  let through: 0 | 2 = 0;
  forEach(read.props, (prop) => {
    if (binding) {
      if (getCanonicalBinding(binding) === canonical) through = 2;
      binding = binding.propertyAliases.get(prop);
    }
  });
  return binding && getCanonicalBinding(binding) === canonical ? 1 : through;
}

function readsKey(read: t.NodeExtra["read"], keyBinding: Binding): boolean {
  if (!read || read.getter) return false;
  let binding: Binding | undefined = read.binding;
  forEach(read.props, (prop) => {
    binding = binding?.propertyAliases.get(prop);
  });
  return (
    !!binding &&
    getCanonicalBinding(binding) === getCanonicalBinding(keyBinding)
  );
}

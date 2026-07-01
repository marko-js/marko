import type { types as t } from "@marko/compiler";

import { forEach } from "./optional";
import {
  type Binding,
  BindingType,
  getCanonicalBinding,
  getExpressionReads,
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
        if (
          at === 2 ||
          resolved.getter ||
          !readsKey(read.comparedTo?.extra?.read, keyBinding)
        ) {
          other = true;
        } else {
          found = true;
        }
      });
      if (other) return false;
    }
  }
  return found;
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

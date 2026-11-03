import type { types as t } from "@marko/compiler";

import {
  type Binding,
  BindingType,
  getCanonicalBinding,
  getPropertyAlias,
} from "./bindings";
import { forEach, some } from "./optional";
import { getPatchFill } from "./patch/refresh";
import { inStatefulBranch } from "./patch/structure";
import { getReferencedBindings } from "./references";
import { isDirectClosure, type Section } from "./sections";

export function isForSelectorClosure(
  bodySection: Section,
  closure: Binding,
): boolean {
  const canonical = getCanonicalBinding(closure);
  return (
    !!bodySection.selector?.has(canonical) &&
    // A fill refreshes through the plain scan join; the keyed selector dispatch
    // has no fill channel. Asked at translate, once the solve decides fills.
    !(inStatefulBranch(bodySection) && getPatchFill(canonical).fill)
  );
}

export function isForSelectorValue(binding: Binding): boolean {
  return some(
    binding.closureSections,
    (section) => !!section.selector?.has(binding),
  );
}

export function detectForSelector(
  bodySection: Section,
  keyBinding: Binding,
): void {
  let closures: Set<Binding> | undefined;
  for (const expr of keyBinding.reads.keys()) {
    if (expr.section !== bodySection) continue;
    forEach(getReferencedBindings(expr), (closure) => {
      const canonical = getCanonicalBinding(closure);
      if (
        closure.type !== BindingType.constant &&
        isDirectClosure(bodySection, closure) &&
        !closures?.has(canonical) &&
        onlyComparesKey(closure, canonical, bodySection, keyBinding)
      ) {
        (closures ||= new Set()).add(canonical);
      }
    });
  }
  if (closures) {
    bodySection.selector = closures;
  }
}

function onlyComparesKey(
  closure: Binding,
  canonical: Binding,
  bodySection: Section,
  keyBinding: Binding,
): boolean {
  let found = false;
  for (let chain: Binding | undefined = closure; chain; chain = chain.aliasOf) {
    for (const [expr, reads] of chain.reads) {
      if (expr.section !== bodySection) continue;
      let other = false;
      forEach(reads, (read) => {
        const resolved = read.extra.read;
        if (!resolved) return;
        if (resolvesTo(resolved, canonical)) {
          const keyRead = read.comparedTo?.extra?.read;
          if (resolved.getter || !readsKey(keyRead, keyBinding)) {
            other = true;
          } else {
            found = true;
          }
        } else {
          other ||= resolvesThrough(resolved, canonical);
        }
      });
      if (other) return false;
    }
  }
  return found;
}

// Whether the read's binding, past its props, is `canonical`.
function resolvesTo(
  read: NonNullable<t.NodeExtra["read"]>,
  canonical: Binding,
) {
  const binding = getPropertyAlias(read.binding, read.props);
  return !!binding && getCanonicalBinding(binding) === canonical;
}

// Whether the read reads a property through `canonical`.
function resolvesThrough(
  read: NonNullable<t.NodeExtra["read"]>,
  canonical: Binding,
) {
  let binding: Binding | undefined = read.binding;
  let through = false;
  forEach(read.props, (prop) => {
    if (binding) {
      through ||= getCanonicalBinding(binding) === canonical;
      binding = binding.propertyAliases.get(prop);
    }
  });
  return through;
}

function readsKey(read: t.NodeExtra["read"], keyBinding: Binding): boolean {
  if (!read || read.getter) return false;
  const binding = getPropertyAlias(read.binding, read.props);
  return (
    !!binding &&
    getCanonicalBinding(binding) === getCanonicalBinding(keyBinding)
  );
}

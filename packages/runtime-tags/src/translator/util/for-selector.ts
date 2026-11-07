import type { types as t } from "@marko/compiler";

import {
  type Binding,
  bindingUtil,
  getCanonicalBinding,
  getPropertyAlias,
} from "./bindings";
import { forEach, some } from "./optional";
import { getReferencedBindings } from "./references";
import type { Section } from "./sections";

export function isForSelectorClosure(
  bodySection: Section,
  closure: Binding,
): boolean {
  return !!bodySection.selector?.has(getCanonicalBinding(closure));
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
  const parentSection = bodySection.parent!;
  let closures: Set<Binding> | undefined;
  for (const expr of keyBinding.reads.keys()) {
    if (expr.section !== bodySection) continue;
    forEach(getReferencedBindings(expr), (closure) => {
      const canonical = getCanonicalBinding(closure);
      if (
        !closures?.has(canonical) &&
        bindingUtil.has(bodySection.referencedClosures, canonical) &&
        // The parent loop's own selector, detected first, reaches only two of
        // its rows.
        !parentSection.selector?.has(canonical) &&
        onlyComparesKey(closure, canonical, bodySection, keyBinding)
      ) {
        (closures ||= new Set()).add(canonical);
        // The parent's scope finds the rows by the value, so it reads one from
        // further up as its own closure.
        if (canonical.section !== parentSection) {
          parentSection.referencedClosures = bindingUtil.add(
            parentSection.referencedClosures,
            canonical,
          );
        }
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

// Whether the read's binding, past its properties, is `canonical`.
function resolvesTo(
  read: NonNullable<t.NodeExtra["read"]>,
  canonical: Binding,
) {
  const binding = getPropertyAlias(read.binding, read.properties);
  return !!binding && getCanonicalBinding(binding) === canonical;
}

// Whether the read reads a property through `canonical`.
function resolvesThrough(
  read: NonNullable<t.NodeExtra["read"]>,
  canonical: Binding,
) {
  let binding: Binding | undefined = read.binding;
  let through = false;
  forEach(read.properties, (prop) => {
    if (binding) {
      through ||= getCanonicalBinding(binding) === canonical;
      binding = binding.propertyAliases.get(prop);
    }
  });
  return through;
}

function readsKey(read: t.NodeExtra["read"], keyBinding: Binding): boolean {
  return (
    !!read && !read.getter && resolvesTo(read, getCanonicalBinding(keyBinding))
  );
}

import { type Opt, first, rest, some } from "./optional";
import type { Binding } from "./references";
import type { Section } from "./sections";

// A content section that only flows into a binding which never reads it has
// its renderer elided; references to the renderer must be elided in sync.
export function isSectionRendererElided(section: Section) {
  return (
    !!section.downstream &&
    !some(section.downstream.binding, (binding) =>
      bindingHasProperty(binding, section.downstream!.properties),
    )
  );
}

export function bindingHasProperty(binding: Binding, properties: Opt<string>) {
  if (binding.pruned) {
    return false;
  } else if (binding.pruned === undefined) {
    throw new Error("Binding must be pruned before checking properties");
  }
  if (binding.reads.size || !properties) {
    return true;
  }

  const property = first(properties);

  const propBinding = binding.propertyAliases.get(property);
  if (propBinding && bindingHasProperty(propBinding, rest(properties))) {
    return true;
  }

  for (const alias of binding.aliases) {
    if (bindingHasProperty(alias, properties)) {
      return true;
    }
  }

  return false;
}

// The alias a property path leads to, or the deepest one along it that is read.
export function getPropertyPathAlias(
  binding: Binding,
  properties: Opt<string>,
): Binding {
  let alias = binding;
  if (Array.isArray(properties)) {
    for (const property of properties) {
      const next = alias.propertyAliases.get(property);
      if (!next) break;
      alias = next;
    }
  } else if (properties !== undefined) {
    alias = alias.propertyAliases.get(properties) ?? alias;
  }
  return alias;
}

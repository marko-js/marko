import type { Opt } from "./optional";
import type { Binding } from "./references";
import type { Section } from "./sections";

// A content section that only flows into a binding which never reads it has
// its renderer elided; references to the renderer must be elided in sync.
export function isSectionRendererElided(section: Section) {
  return (
    !!section.downstreamBinding &&
    !bindingHasProperty(
      section.downstreamBinding.binding,
      section.downstreamBinding.properties,
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

  let property: string;
  let rest: Opt<string>;

  if (Array.isArray(properties)) {
    property = properties[0];
    rest =
      properties.length === 2
        ? properties[1]
        : (properties.slice(1) as Opt<string>);
  } else {
    property = properties;
  }

  const propBinding = binding.propertyAliases.get(property);
  if (propBinding && bindingHasProperty(propBinding, rest)) {
    return true;
  }

  for (const alias of binding.aliases) {
    if (bindingHasProperty(alias, properties)) {
      return true;
    }
  }

  return false;
}

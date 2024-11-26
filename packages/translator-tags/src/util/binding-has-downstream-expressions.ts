import type { Binding } from "./references";

export function bindingHasDownstreamExpressions(binding: Binding) {
  if (binding.downstreamExpressions.size) return true;
  for (const alias of binding.aliases) {
    if (bindingHasDownstreamExpressions(alias)) return true;
  }

  for (const alias of binding.propertyAliases.values()) {
    if (bindingHasDownstreamExpressions(alias)) return true;
  }

  return false;
}

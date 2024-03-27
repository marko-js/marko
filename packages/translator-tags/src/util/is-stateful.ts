import {
  BindingType,
  type ReferencedBindings,
  type Binding,
} from "./references";

export function isStatefulReferences(references: ReferencedBindings) {
  if (references) {
    if (Array.isArray(references)) {
      for (const ref of references) {
        if (isStatefulBinding(ref)) {
          return true;
        }
      }
    } else {
      return isStatefulBinding(references);
    }
  }

  return false;
}

export function isStatefulBinding(binding: Binding): boolean {
  switch (binding.type) {
    case BindingType.let:
    case BindingType.input:
    case BindingType.param:
      return true;
    default:
      return !!(
        binding.upstreamExpression &&
        isStatefulReferences(binding.upstreamExpression.referencedBindings)
      );
  }
}

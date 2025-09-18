import { generateUid } from "./generate-uid";
import { type Binding, BindingType } from "./references";

export type BindingPropTree = {
  binding: Binding;
  props: { [prop: string]: BindingPropTree } | undefined;
};

export function getBindingPropTree(binding: Binding) {
  if (binding.type === BindingType.input) {
    binding.export ??= generateUid(binding.name);
  }

  const props: BindingPropTree = {
    binding,
    props: undefined,
  };
  if (!(binding.aliases.size || binding.downstreamExpressions.size)) {
    props.props = {};
    for (const [property, alias] of binding.propertyAliases) {
      props.props[property] = getBindingPropTree(alias);
    }
  }

  return props;
}

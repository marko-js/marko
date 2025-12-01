import { generateUid } from "./generate-uid";
import { forEach, type Opt } from "./optional";
import { type Binding, BindingType, propsUtil } from "./references";

export type BindingPropTree = {
  binding: Binding;
  props: { [prop: string]: BindingPropTree } | undefined; // TODO: change to "known"
  rest: BindingPropTree | undefined;
};

export function getBindingPropTree(binding: Binding) {
  const props: BindingPropTree = {
    binding,
    props: undefined,
    rest: undefined,
  };
  if (!binding.downstreamExpressions.size) {
    if (!binding.aliases.size) {
      props.props = {};
      for (const [property, alias] of binding.propertyAliases) {
        props.props[property] = getBindingPropTree(alias);
      }
    } else if (binding.aliases.size === 1) {
      const [restAlias] = binding.aliases;
      if (hasSupersetExcludeProperties(binding, restAlias.excludeProperties)) {
        props.rest = getBindingPropTree(restAlias);
        props.props = {};

        if (restAlias.type === BindingType.input) {
          restAlias.export ??= generateUid(restAlias.name);
        }

        forEach(restAlias.excludeProperties, (property) => {
          const propAlias = binding.propertyAliases.get(property);
          if (propAlias) {
            props.props![property] = getBindingPropTree(propAlias);
          }
        });
      }
    }
  }

  if (binding.type === BindingType.input) {
    binding.export ??= generateUid(binding.name);
  }

  return props;
}

function hasSupersetExcludeProperties(
  binding: Binding,
  excludeProperties: Opt<string>,
) {
  if (excludeProperties === undefined) {
    return false;
  }

  for (const prop of binding.propertyAliases.keys()) {
    if (!propsUtil.has(excludeProperties, prop)) {
      return false;
    }
  }

  return true;
}

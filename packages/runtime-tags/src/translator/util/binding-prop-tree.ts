import { generateUid } from "./generate-uid";
import { forEach, includes, type Opt } from "./optional";
import {
  type Binding,
  BindingType,
  propsUtil,
  pruneBinding,
} from "./references";

export type BindingPropTree = {
  binding: Binding;
  props: { [prop: string]: BindingPropTree } | undefined; // TODO: change to "known"
  rest: BindingPropTree | undefined;
};

export function getBindingPropTree(binding: Binding) {
  if (pruneBinding(binding)) {
    return undefined;
  }

  const props: BindingPropTree = {
    binding,
    props: undefined,
    rest: undefined,
  };

  if (!binding.reads.size) {
    if (!binding.aliases.size) {
      props.props = {};
      for (const [property, alias] of binding.propertyAliases) {
        props.props[property] = getBindingPropTree(alias)!;
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
            props.props![property] = getBindingPropTree(propAlias)!;
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

export function getKnownFromPropTree(
  propTree: BindingPropTree | true,
  name: string,
): BindingPropTree | true | undefined {
  return propTree === true
    ? true
    : propTree.props
      ? propTree.props[name] ||
        (propTree.rest ? getKnownFromPropTree(propTree.rest, name) : undefined)
      : includes(propTree.binding.excludeProperties, name)
        ? undefined
        : true;
}

export function getAllKnownPropNames(propTree: BindingPropTree) {
  const keys = propTree.props ? Object.keys(propTree.props) : [];
  if (propTree.rest?.props) {
    for (const key of Object.keys(propTree.rest.props)) {
      keys.push(key);
    }
  }
  return keys;
}

export function hasAllKnownProps(propTree: BindingPropTree) {
  return propTree.props && (!propTree.rest || !!propTree.rest.props);
}

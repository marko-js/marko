import { getProgram } from "@marko/compiler/babel-utils";

import { type Binding, isTemplateParam, propsUtil } from "./bindings";
import { generateUid } from "./generate-uid";
import { forEach, type SortedOpt } from "./optional";

export type BindingPropTree = {
  binding: Binding;
  props: { [prop: string]: BindingPropTree } | undefined; // TODO: change to "known"
  rest: BindingPropTree | undefined;
};

// Set during analyze on a `<${x}/>` that renders content with no input.
// On the tag's extra, which is the expression root a binding's read lands on.
declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    directContent?: true;
  }
}

// `bodyAnalyzed`: every read of the binding is recorded, as for a `<define>`
// body called from outside it.
export function getBindingPropTree(
  binding: Binding,
  bodyAnalyzed?: boolean,
): BindingPropTree {
  binding.exposed = true;

  const props: BindingPropTree = {
    binding,
    props: undefined,
    rest: undefined,
  };

  if (!binding.reads.size) {
    let restAlias: Binding | undefined;
    let aliasCount = 0;
    for (const alias of binding.aliases) {
      if (!bodyAnalyzed || isPossiblyRead(alias)) {
        restAlias = alias;
        if (++aliasCount > 1) break;
      }
    }
    if (!restAlias) {
      props.props = Object.create(null) as { [prop: string]: BindingPropTree };
      for (const [property, alias] of binding.propertyAliases) {
        props.props[property] = getBindingPropTree(alias, bodyAnalyzed)!;
      }
    } else if (aliasCount === 1) {
      if (hasSupersetExcludeProperties(binding, restAlias.excludeProperties)) {
        props.rest = getBindingPropTree(restAlias, bodyAnalyzed);
        props.props = Object.create(null) as {
          [prop: string]: BindingPropTree;
        };

        forEach(restAlias.excludeProperties, (property) => {
          const propAlias = binding.propertyAliases.get(property);
          if (propAlias) {
            props.props![property] = getBindingPropTree(
              propAlias,
              bodyAnalyzed,
            )!;
          }
        });
      }
    }
  }

  const exportNames = getProgram().node.extra.exportNames!;
  if (isTemplateParam(binding) && !exportNames.params.has(binding)) {
    exportNames.params.set(binding, generateUid(binding.name));
  }

  if (
    isDirectContentBinding(binding) &&
    !exportNames.directContent.has(binding)
  ) {
    exportNames.directContent.set(
      binding,
      generateUid(`${binding.name}_direct`),
    );
  }

  return props;
}

// A binding whose sole consumer is a no-input `<${binding}/>` passthrough is always a
// `_content(...)` renderer (only known-parent `input`/`<define>` params reach here) — use the leaner `_dynamic_tag_content` signal.
function isDirectContentBinding(binding: Binding) {
  if (binding.reads.size !== 1) {
    return false;
  }

  const [read] = binding.reads.keys();
  return read.directContent && read.section === binding.section;
}

// Pruning keeps an alias of an analyzed body only if something reads it or an
// alias of it; a reference to an alias reads what it aliases.
function isPossiblyRead(alias: Binding): boolean {
  if (alias.reads.size) return true;
  for (const nested of alias.aliases) {
    if (isPossiblyRead(nested)) return true;
  }
  for (const prop of alias.propertyAliases.values()) {
    if (isPossiblyRead(prop)) return true;
  }
  return false;
}

function hasSupersetExcludeProperties(
  binding: Binding,
  excludeProperties: SortedOpt<string>,
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

// The tree analysis shaped a call site by, less what pruning settled unread.
export function getSettledPropTree(
  propTree: BindingPropTree | undefined,
): BindingPropTree | undefined {
  if (!propTree || propTree.binding.pruned) return;
  if (!propTree.props) return propTree;
  const props = Object.create(null) as { [prop: string]: BindingPropTree };
  for (const name in propTree.props) {
    const prop = getSettledPropTree(propTree.props[name]);
    if (prop) props[name] = prop;
  }
  return {
    binding: propTree.binding,
    props,
    rest: getSettledPropTree(propTree.rest),
  };
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
      : propsUtil.has(propTree.binding.excludeProperties, name)
        ? undefined
        : true;
}

export function getAllKnownPropNames(propTree: BindingPropTree) {
  const keys = propTree.props ? Object.keys(propTree.props) : [];
  // Intentionally shallow: own prop names plus the immediate `rest`'s.
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

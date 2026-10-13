import { getProgram } from "@marko/compiler/babel-utils";

import { type Binding, isTemplateParam, propsUtil } from "./bindings";
import { generateUid } from "./generate-uid";
import { forEach, type SortedOpt } from "./optional";

export type ParamsTree = {
  binding: Binding;
  props: { [prop: string]: ParamsTree } | undefined; // TODO: change to "known"
  rest: ParamsTree | undefined;
};

// Set during analyze on a name-only `<${x}/>`: no input, variable or body.
// On the tag's extra, which is the expression root a binding's read lands on.
declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    nameOnly?: true;
  }
}

// `bodyAnalyzed`: every read of the binding is recorded, as for a `<define>`
// body called from outside it.
export function exposeParamsTree(
  binding: Binding,
  bodyAnalyzed?: boolean,
): ParamsTree {
  binding.exposed = true;

  const props: ParamsTree = {
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
      props.props = Object.create(null) as { [prop: string]: ParamsTree };
      for (const [property, alias] of binding.propertyAliases) {
        props.props[property] = exposeParamsTree(alias, bodyAnalyzed)!;
      }
    } else if (aliasCount === 1) {
      if (hasSupersetExcludeProperties(binding, restAlias.excludeProperties)) {
        props.rest = exposeParamsTree(restAlias, bodyAnalyzed);
        props.props = Object.create(null) as {
          [prop: string]: ParamsTree;
        };

        forEach(restAlias.excludeProperties, (property) => {
          const propAlias = binding.propertyAliases.get(property);
          if (propAlias) {
            props.props![property] = exposeParamsTree(propAlias, bodyAnalyzed)!;
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

// A binding read only by a name-only `<${binding}/>` is always a `_content(...)` renderer
// (only known-parent `input`/`<define>` params reach here) — use the leaner `_dynamic_tag_content` signal.
function isDirectContentBinding(binding: Binding) {
  if (binding.reads.size !== 1) {
    return false;
  }

  const [read] = binding.reads.keys();
  return read.nameOnly && read.section === binding.section;
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
export function getSettledParamsTree(
  paramsTree: ParamsTree | undefined,
): ParamsTree | undefined {
  if (!paramsTree || paramsTree.binding.pruned) return;
  if (!paramsTree.props) return paramsTree;
  const props = Object.create(null) as { [prop: string]: ParamsTree };
  for (const name in paramsTree.props) {
    const prop = getSettledParamsTree(paramsTree.props[name]);
    if (prop) props[name] = prop;
  }
  return {
    binding: paramsTree.binding,
    props,
    rest: getSettledParamsTree(paramsTree.rest),
  };
}

// The params tree at `name`: `true` when the prop is read only whole or through
// a rest, `undefined` when it is not read.
export function getParamsTreeAt(
  paramsTree: ParamsTree | true,
  name: string,
): ParamsTree | true | undefined {
  return paramsTree === true
    ? true
    : paramsTree.props
      ? paramsTree.props[name] ||
        (paramsTree.rest ? getParamsTreeAt(paramsTree.rest, name) : undefined)
      : propsUtil.has(paramsTree.binding.excludeProperties, name)
        ? undefined
        : true;
}

export function getAllKnownPropNames(paramsTree: ParamsTree) {
  const keys = paramsTree.props ? Object.keys(paramsTree.props) : [];
  // Intentionally shallow: own prop names plus the immediate `rest`'s.
  if (paramsTree.rest?.props) {
    for (const key of Object.keys(paramsTree.rest.props)) {
      keys.push(key);
    }
  }
  return keys;
}

export function hasAllKnownProps(paramsTree: ParamsTree) {
  return paramsTree.props && (!paramsTree.rest || !!paramsTree.rest.props);
}

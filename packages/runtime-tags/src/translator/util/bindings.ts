import { types as t } from "@marko/compiler";

import { ReservedId } from "../../common/types";
import { toAccess } from "../../html/serializer";
import * as BindingType from "./constants/binding-type";
import {
  mapToString,
  type Opt,
  type SortedMany,
  type SortedOpt,
  push,
  Sorted,
  reduce,
} from "./optional";
import { type AssignedBindingExtra, type ReferencedExtra } from "./references";
import { type Section } from "./sections";
import { type Sources } from "./sources";
import { createProgramState } from "./state";

type BindingType = BindingType.Value;
export { BindingType };

export interface Binding {
  /** Its scope accessor id, allocated per section once references finalize. */
  id: number;
  /** Creation order, never renumbered: the order `bindingUtil` sorts by. */
  uid: number;
  name: string;
  originalName: string | undefined;
  type: BindingType;
  loc: t.SourceLocation | null;
  section: Section;
  closureSections: SortedOpt<Section>;
  /** The id its closure accessors take, past its section's and ancestors' ids. */
  closureId: number | undefined;
  /** The identifier of each emitted assignment to it (set in finalize). */
  assignments: Opt<AssignedBindingExtra>;
  /** Expressions whose emitted code reads it though the graph stopped tracking
   * the read: pruning keeps its value while any of them is emitted. */
  untrackedReads?: Opt<t.NodeExtra>;
  /** Expressions referencing it by name whose reads land elsewhere (an
   * alias's references, and an alias's own declaration of what it aliases):
   * pruning keeps its value while any of them is emitted. */
  referencedBy?: Opt<t.NodeExtra>;
  sources: undefined | Sources;
  /** The intersection whose work computes it, or the nearest one it derives
   * from. Set on alias roots only. */
  intersection: Intersection | undefined;
  /** The expressions its value is computed from, `false` for none; unset when
   * analysis cannot see them, which makes it its own source. */
  derivedFrom: Opt<t.NodeExtra> | false;
  /** Complete only once `finalizeReferences` runs at program analyze exit. */
  reads: Set<ReferencedExtra>;
  aliases: Set<Binding>;
  hoists: SortedOpt<Section>;
  getters: Map<Getter["hoisted"], boolean>;
  property: string | undefined;
  propertyAliases: Map<string, Binding>;
  excludeProperties: SortedOpt<string>;
  aliasOf: Binding | undefined;
  /** The value these `<for>` params iterate, by `of` or `in`. */
  iterates: { expr: t.NodeExtra; type: "of" | "in" } | undefined;
  restOffset: number | undefined;
  /** For a tag variable a child's `<return>` writes, the node binding of the
   * tag rendering that child. */
  returnedBy: Binding | undefined;
  /** Scope ids it holds right after its own, up to its highest `ReservedId`:
   * a controllable `<let>`'s change handler, or a tag's scope offset. */
  reserveSize: number;
  scopeAccessor: string | undefined;
  /** A name declared for this value, or all of it but its `excludeProperties`
   * (a rest element), even once pruned. */
  declaredAlias: Binding | undefined;
  /** The attribute tag `<for>` param a local closure holds in its section. */
  localOf: Binding | undefined;
  /** An attribute tag `<for>` param's local closure in each content the loop
   * creates that reads it. */
  localClosures: Map<Section, Binding> | undefined;
  declared: boolean;
  nullable: boolean;
  /** Settled only once `finalizeReferences` runs at program analyze exit. */
  pruned: boolean | undefined;
  /** In a template's or `<define>`'s params tree, which known call sites set
   * directly. */
  exposed: boolean;
  /** Read on invocation from its own scope slot, which must persist. */
  hasLazyReads: boolean;
}

/** A param of a template or of a tag body, which its caller supplies. */
export interface ParamBinding extends Binding {
  type: typeof BindingType.param;
}

export type ReferencedBindings = SortedOpt<Binding>;

export type Intersection = SortedMany<Binding>;

/** Every member computed from one local source in the same pass, or the
 * intersection's own render id and the tag whose scope offset it renders after. */
export type IntersectionMeta =
  | { source: Binding; id?: undefined; returnedBy?: undefined }
  | { source: undefined; id: number; returnedBy: Binding | undefined };

export interface Getter {
  hoisted: Section | false;
  invoked: boolean;
}

export const [getBindings] = createProgramState(() => new Set<Binding>());

const [getNextBindingId, setNextBindingId] = createProgramState(() => 0);

export function createBinding(
  name: string,
  type: Binding["type"],
  refSection: Section,
  aliased?: Binding["aliasOf"],
  property?: string,
  excludeProperties?: SortedOpt<string>,
  loc: t.SourceLocation | null = null,
  refDeclared = false,
): Binding {
  const id = getNextBindingId();
  const section = aliased ? aliased.section : refSection;
  const sameSection = refSection === section;
  const declared = sameSection && refDeclared;
  const binding: Binding = {
    id,
    uid: id,
    name,
    originalName: undefined,
    type,
    loc,
    section,
    property,
    declared,
    closureSections: undefined,
    closureId: undefined,
    assignments: undefined,
    excludeProperties,
    sources: undefined,
    intersection: undefined,
    derivedFrom: undefined,
    reads: new Set(),
    aliases: new Set(),
    hoists: undefined,
    getters: new Map(),
    propertyAliases: new Map(),
    aliasOf: aliased,
    iterates: undefined,
    declaredAlias: undefined,
    localOf: undefined,
    localClosures: undefined,
    restOffset: undefined,
    returnedBy: undefined,
    reserveSize: 0,
    scopeAccessor: undefined,
    nullable: !sameSection || excludeProperties === undefined,
    pruned: undefined,
    exposed: false,
    hasLazyReads: false,
  };

  if (property) {
    if (declared) aliased!.nullable = false;
    // TODO: should prefer declared properties as alias roots.
    const propBinding = aliased!.propertyAliases.get(property);
    if (propBinding) {
      binding.property = undefined;
      binding.aliasOf = propBinding;
      propBinding.aliases.add(binding);
    } else {
      // TODO: check if default is used, if so an intermediate binding is needed
      aliased!.propertyAliases.set(property, binding);
    }
  } else if (aliased) {
    aliased.aliases.add(binding);
    if (declared) aliased.declaredAlias ??= binding;
  }

  setNextBindingId(id + 1);
  getBindings().add(binding);
  return binding;
}

// Holds the scope id at `offset` past its own for what the runtime keeps there.
export function reserveId(binding: Binding, offset: ReservedId) {
  binding.reserveSize = Math.max(binding.reserveSize, offset);
}

// A property of a direct alias is the root's property: one binding, one
// read, however many local names the value passes through.

export function getOrCreatePropertyAlias(binding: Binding, property: string) {
  while (isDirectAlias(binding)) binding = binding.aliasOf!;
  return (
    binding.propertyAliases.get(property) ||
    createBinding(
      `${binding.name}_${property.replace(/[^a-zA-Z0-9_$]/g, "_")}`,
      binding.type,
      binding.section,
      binding,
      property,
    )
  );
}

// The alias a property path reaches from a binding, if every hop exists.
export function getPropertyAlias(
  binding: Binding | undefined,
  properties: Opt<string>,
) {
  return reduce(properties, getExistingPropertyAlias, binding);
}

function getExistingPropertyAlias(
  binding: Binding | undefined,
  property: string,
) {
  while (binding) {
    if (!isDirectAlias(binding)) return binding.propertyAliases.get(property);
    binding = binding.aliasOf;
  }
}

export function compareReferences(
  a: ReferencedBindings,
  b: ReferencedBindings,
) {
  return a === b
    ? 0
    : a
      ? b
        ? Array.isArray(a)
          ? Array.isArray(b)
            ? compareIntersections(a, b)
            : -1
          : Array.isArray(b)
            ? 1
            : bindingUtil.compare(a, b)
        : 1
      : b
        ? -1
        : 0;
}

/**
 * reference group priority is sorted by number of references,
 * then if needed by reference order.
 */
export function compareIntersections(a: Intersection, b: Intersection) {
  const len = a.length;
  const lenDelta = len - b.length;
  if (lenDelta !== 0) {
    return lenDelta;
  }

  for (let i = 0; i < len; i++) {
    const compareResult = bindingUtil.compare(a[i], b[i]);
    if (compareResult !== 0) {
      return compareResult;
    }
  }

  return 0;
}

export function getAliasRoot(binding: Binding) {
  let alias = binding.aliasOf;
  while (alias) {
    if (!alias.aliasOf) return alias;
    alias = alias.aliasOf;
  }

  return alias;
}

export const bindingUtil = new Sorted(function compareBindings(
  a: Binding,
  b: Binding,
) {
  // Creation order, dom bindings first as the walk numbers them first; other
  // ids are allocated in this order, so sets sorted before and after agree.
  if (MARKO_DEBUG && a.section.program !== b.section.program) {
    throw new Error("A sorted binding set holds one template's bindings.");
  }
  return a === b
    ? 0
    : a.section.id - b.section.id ||
        +(b.type === BindingType.dom) - +(a.type === BindingType.dom) ||
        a.uid - b.uid;
});

export const propsUtil = new Sorted(function compareProps(
  a: string,
  b: string,
) {
  return a < b ? -1 : a > b ? 1 : 0;
});

export function getCanonicalBinding(binding: Binding) {
  const alias = binding.aliasOf;
  if (alias && isDirectAlias(binding)) {
    return alias;
  }

  return binding;
}

// Whether the binding, or any alias of it (transitively), passes `test`;
// `directOnly` follows only aliases of the whole value.
export function someAlias<A>(
  binding: Binding,
  test: (binding: Binding, arg: A) => boolean,
  arg: A,
  directOnly?: boolean,
): boolean {
  if (test(binding, arg)) return true;
  for (const alias of binding.aliases) {
    if (
      (!directOnly || isDirectAlias(alias)) &&
      someAlias(alias, test, arg, directOnly)
    ) {
      return true;
    }
  }
  return false;
}

// Whether the binding, or a value it aliases (transitively), passes `test`.
export function someAliased<A>(
  binding: Binding | undefined,
  test: (binding: Binding, arg: A) => boolean,
  arg: A,
): boolean {
  for (let cur: Binding | undefined = binding; cur; cur = cur.aliasOf) {
    if (test(cur, arg)) return true;
  }
  return false;
}

// Aliases the whole of another value: no property, no rest exclusions.
export function isDirectAlias(binding: Binding) {
  return (
    binding.aliasOf !== undefined &&
    binding.property === undefined &&
    binding.excludeProperties === undefined
  );
}

export function getDebugScopeAccess(binding: Binding) {
  let root = binding;
  let access = "";
  while (
    !(root.loc || root.declared) &&
    root.aliasOf &&
    root.excludeProperties === undefined
  ) {
    if (root.property !== undefined) {
      access = toAccess(root.property) + access;
    }
    root = root.aliasOf;
  }

  return {
    root,
    access,
  };
}

// A template's params live in its program section, and its callers may be
// other modules.
export function isTemplateParam(binding: Binding) {
  return binding.type === BindingType.param && !binding.section.parent;
}

export function getDebugName(binding: Binding) {
  if (isTemplateParam(binding)) {
    let root = binding;
    let access = "";
    while (
      root.aliasOf !== root.section.params &&
      root.excludeProperties === undefined
    ) {
      if (root.property !== undefined) {
        access = toAccess(root.property) + access;
      }
      root = root.aliasOf as ParamBinding;
    }

    return root.name + access;
  }

  const { root, access } = getDebugScopeAccess(binding);
  return root.name + access;
}

export function getDebugNames(refs: ReferencedBindings) {
  return mapToString(refs, ", ", getDebugName);
}

export function getDebugNamesAsIdentifier(refs: ReferencedBindings) {
  return mapToString(refs, "__OR__", getDebugNameAsIdentifier);
}

function getDebugNameAsIdentifier(binding: Binding) {
  let root = binding;
  let access = "";

  if (isTemplateParam(binding)) {
    while (
      root.aliasOf !== root.section.params &&
      root.excludeProperties === undefined
    ) {
      if (root.property !== undefined) {
        access = `_${root.property.replace(/[^a-z0-9_$]/gi, "_") + access}`;
      }
      root = root.aliasOf as ParamBinding;
    }
  } else {
    while (
      !(root.loc || root.declared) &&
      root.aliasOf &&
      root.excludeProperties === undefined
    ) {
      if (root.property !== undefined) {
        access = `_${root.property.replace(/[^a-z0-9_$]/gi, "_") + access}`;
      }
      root = root.aliasOf;
    }
  }

  return root.name + access;
}

// A binding the receiving template can never observe: every read is in an
// `invokeOnly` expression and nothing else (assignment, hoist, getter, access) sees it.
export function isInvokeOnlyBinding(binding: Binding): boolean {
  return !someAlias(binding, isReadBeyondInvoking, undefined);
}

function isReadBeyondInvoking(binding: Binding) {
  if (
    binding.assignments ||
    binding.hoists ||
    binding.getters.size ||
    binding.propertyAliases.size ||
    binding.excludeProperties
  ) {
    return true;
  }
  for (const expr of binding.reads) {
    if (!expr.invokeOnly) return true;
  }
  return false;
}

export function hasNonConstantPropertyAlias(ref: Binding) {
  for (const alias of ref.propertyAliases.values()) {
    if (alias.type !== BindingType.constant) {
      return true;
    }
  }
  return false;
}

// The properties from `ancestor` down to `binding`, one of its aliases.
export function getPropertyPath(
  binding: Binding,
  ancestor: Binding,
): Opt<string> {
  if (binding === ancestor) return;
  const path = getPropertyPath(binding.aliasOf!, ancestor);
  return binding.property === undefined ? path : push(path, binding.property);
}

export function isIndexProperty(property: string) {
  return /^\d+$/.test(property);
}

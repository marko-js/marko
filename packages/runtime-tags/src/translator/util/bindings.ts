import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

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
  reduceWhile,
} from "./optional";
import { type KnownExprs } from "./reasons";
import {
  type AssignedBindingExtra,
  type Read,
  type ReferencedExtra,
} from "./references";
import { type Section } from "./sections";
import { type Sources } from "./sources";
import { createAnalysisState } from "./state";

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
  sources: undefined | Sources;
  /** For an uncontrolled `<let>`: its init reads no state but `<let>`s at their
   * initial value as its scope is created (`atInitialValueAsCreated`). */
  initReadsInitialValues: boolean;
  /** For a `<let>` that is its own state source (patch builds): the sources its
   * init reads, through the inits of the state it reads. */
  initSources: undefined | Sources;
  /** The intersection whose work computes it, or the nearest one it derives
   * from. Set on alias roots only. */
  intersection: Intersection | undefined;
  /** The expressions its value is computed from, `false` for none; unset when
   * analysis cannot see them, which makes it its own source. */
  derivedFrom: Opt<t.NodeExtra> | false;
  /** Its reads by expression, complete once `finalizeReferences` runs: pruning
   * hands an expression's reads to the nearest ancestor it also reads. */
  reads: Map<ReferencedExtra, Opt<Read>>;
  aliases: Set<Binding>;
  /** The sections reading it through a hoist: its own or its ancestors, so
   * the first is the outermost. */
  hoists: SortedOpt<Section>;
  getters: Map<Getter["hoisted"], boolean>;
  property: string | undefined;
  propertyAliases: Map<string, Binding>;
  excludeProperties: SortedOpt<string>;
  /** Its properties code assigns in place (`obj.x = 1`), all of them for a
   * computed one. */
  assignedProperties: SortedOpt<string> | true;
  aliasOf: Binding | undefined;
  /** The value these `<for>` params iterate, by `of` or `in`. */
  iterates: { expr: t.NodeExtra; type: "of" | "in" } | undefined;
  /** For an array rest, the source index it starts at: `rest[0]` of
   * `[a, ...rest]` is the source's `[1]`. */
  restOffset: number | undefined;
  /** For a tag variable a `<return>` writes, the call's scope binding and, for
   * a known tag, its body and the expressions it passes. */
  returnedBy:
    | { scope: Binding; section?: Section; exprs?: KnownExprs }
    | undefined;
  /** For the node a control flow tag renders at, the bodies it renders there:
   * an `<if>` chain's in order, a loop's, an `<await>`'s, a `<try>`'s. */
  branchBodies: Opt<Section>;
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
  /** Declared by its own name in its own section; an alias only in a pattern
   * holding a rest or where what it reads from is hidden from a read of it. */
  declared: boolean;
  nullable: boolean;
  /** Settled only once `finalizeReferences` runs at program analyze exit. */
  pruned: boolean | undefined;
  /** In a template's or `<define>`'s params tree, which known call sites set
   * directly. */
  exposed: boolean;
  /** Read on invocation from its own scope slot, so its signal stores it. */
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

export const [getBindings] = createAnalysisState(() => new Set<Binding>());

const [getNextBindingId, setNextBindingId] = createAnalysisState(() => 0);

export function createBinding(
  name: string,
  type: Binding["type"],
  refSection: Section,
  aliased?: Binding["aliasOf"],
  property?: string,
  excludeProperties?: SortedOpt<string>,
  loc: t.SourceLocation | null = null,
  refDeclared = false,
  restOffset?: number,
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
    assignedProperties: undefined,
    sources: undefined,
    initReadsInitialValues: false,
    initSources: undefined,
    intersection: undefined,
    derivedFrom: undefined,
    reads: new Map(),
    aliases: new Set(),
    hoists: undefined,
    getters: new Map(),
    propertyAliases: new Map(),
    aliasOf: aliased,
    iterates: undefined,
    declaredAlias: undefined,
    localOf: undefined,
    localClosures: undefined,
    restOffset,
    returnedBy: undefined,
    branchBodies: undefined,
    reserveSize: 0,
    scopeAccessor: undefined,
    nullable:
      !sameSection ||
      (excludeProperties === undefined && restOffset === undefined),
    pruned: undefined,
    exposed: false,
    hasLazyReads: false,
  };

  if (property) {
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
export function ensurePropertyAlias(binding: Binding, property: string) {
  const canonical = getCanonicalBinding(binding);
  return (
    canonical.propertyAliases.get(property) ||
    createBinding(
      canonical.name + toIdentifierAccess(property),
      canonical.type,
      canonical.section,
      canonical,
      property,
    )
  );
}

// An assignment changes the object in place, which no alias of the property sees.
export function addAssignedProperty(
  binding: Binding,
  property: string | undefined,
) {
  if (binding.assignedProperties !== true) {
    binding.assignedProperties =
      property === undefined ||
      propsUtil.add(binding.assignedProperties, property);
  }
}

// The outermost object an alias reads a property of that code assigns in place.
export function getAssignedObject(binding: Binding) {
  let object: Binding | undefined;
  // A rest is a copy, so nothing above it is what it reads.
  for (
    let alias = binding;
    alias.aliasOf && !isRest(alias);
    alias = alias.aliasOf
  ) {
    if (alias.property !== undefined) {
      const parent = getCanonicalBinding(alias.aliasOf);
      if (
        parent.assignedProperties === true ||
        propsUtil.has(parent.assignedProperties, alias.property)
      ) {
        object = alias.aliasOf;
      }
    }
  }
  return object;
}

// The alias a property path reaches from a binding, if every hop exists.
export function getPropertyAlias(binding: Binding, properties: Opt<string>) {
  return reduceWhile(properties, getExistingPropertyAlias, binding);
}

function getExistingPropertyAlias(binding: Binding, property: string) {
  return getCanonicalBinding(binding).propertyAliases.get(property);
}

// The alias a property path leads to, or the deepest one along it that exists.
export function getDeepestPropertyAlias(
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
  let root = binding;
  while (root.aliasOf) root = root.aliasOf;
  return root;
}

export const bindingUtil = new Sorted(function compareBindings(
  a: Binding,
  b: Binding,
) {
  // One template's bindings in creation order, dom first as the walk numbers
  // them first; ids follow it, so sets sorted before and after allocation agree.
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

// A direct alias only ever aliases a canonical binding, so one hop reaches it.
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

// Whether a read of the binding in `section` passes `test`.
export function someReadIn(
  binding: Binding,
  section: Section,
  test: (read: ReferencedExtra, binding: Binding) => boolean,
) {
  for (const read of binding.reads.keys()) {
    if (read.section === section && test(read, binding)) return true;
  }
  return false;
}

// Whether the binding, or a value it aliases (transitively), passes `test`.
export function someUpToAliasRoot<A>(
  binding: Binding | undefined,
  test: (binding: Binding, arg: A) => boolean,
  arg: A,
): boolean {
  for (let cur: Binding | undefined = binding; cur; cur = cur.aliasOf) {
    if (test(cur, arg)) return true;
  }
  return false;
}

// The nearest binding declared by name that it is, or is read from.
export function getNearestDeclared(binding: Binding) {
  for (let cur: Binding | undefined = binding; cur; cur = cur.aliasOf) {
    if (cur.declared) return cur;
  }
}

// The name a pattern declares for a value no declared name reaches.
export function getDeclaredAlias(binding: Binding) {
  return !getNearestDeclared(binding) && binding.declaredAlias;
}

// Aliases the whole of another value: no property, no rest exclusions.
export function isDirectAlias(binding: Binding) {
  return (
    binding.aliasOf !== undefined &&
    binding.property === undefined &&
    !isRest(binding)
  );
}

// A rest element: a new object or array of what its pattern leaves. An array's
// always has a `restOffset`, 0 when it takes the whole value.
export function isRest(binding: Binding) {
  return (
    binding.excludeProperties !== undefined || binding.restOffset !== undefined
  );
}

// The binding a debug name starts at, and the access from it to `binding`: a
// template param's from the params, another's from a located or declared name.
export function getDebugAccess(
  binding: Binding,
  toParam: boolean,
  formatProperty: (property: string) => string,
) {
  let root = binding;
  let access = "";
  while (
    root.aliasOf &&
    (toParam
      ? root.aliasOf !== root.section.params
      : !(root.loc || root.declared)) &&
    !isRest(root)
  ) {
    if (root.property !== undefined) {
      access = formatProperty(root.property) + access;
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

// A section's params, or an alias of them.
export function isParamBinding(binding: Binding) {
  const root = getAliasRoot(binding);
  return root === root.section.params;
}

export function isStateSourced(binding: Binding) {
  return !!binding.sources?.state;
}

export function getDebugName(binding: Binding) {
  const { root, access } = getDebugAccess(
    binding,
    isTemplateParam(binding),
    toAccess,
  );
  return root.name + access;
}

export function getDebugNames(refs: ReferencedBindings) {
  return mapToString(refs, ", ", getDebugName);
}

export function getDebugNamesAsIdentifier(refs: ReferencedBindings) {
  return mapToString(refs, "__OR__", getDebugNameAsIdentifier);
}

function getDebugNameAsIdentifier(binding: Binding) {
  const { root, access } = getDebugAccess(
    binding,
    isTemplateParam(binding),
    toIdentifierAccess,
  );
  return root.name + access;
}

// `_` and the property, each character an identifier cannot hold made `_`.
function toIdentifierAccess(property: string) {
  return `_${property.replace(/[^a-z0-9_$]/gi, "_")}`;
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
    isRest(binding)
  ) {
    return true;
  }
  for (const expr of binding.reads.keys()) {
    if (!expr.invokeOnly) return true;
  }
  return false;
}

// Declared by the template this compiles, not one it calls.
export function isOwnBinding(binding: Binding) {
  return binding.section.program === getProgram().node.extra.section;
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

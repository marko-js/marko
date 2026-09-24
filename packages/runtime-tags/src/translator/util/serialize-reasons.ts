import { types as t } from "@marko/compiler";

import { AccessorPrefix, AccessorProp } from "../../common/types";
import { getPropertyPathAlias } from "./binding-has-prop";
import { getAccessorProp } from "./get-accessor-enums";
import { isPatch } from "./marko-config";
import {
  concat,
  forEach,
  type Opt,
  Sorted,
  type SortedOneMany,
  reduce,
} from "./optional";
import {
  type Binding,
  BindingType,
  bindingUtil,
  compareSources,
  createSources,
  FORCED,
  getCanonicalBinding,
  globalSources,
  type InputBinding,
  isReferencedExtra,
  type KnownExprs,
  mapParamBindingToExpr,
  mergeSources,
  type ReferencedBindings,
  type Sources,
  getCanonicalExtra,
} from "./references";
import { forEachAncestorSection, type Section } from "./sections";

// Reasons any one of which serializes (a chain's branches, a section's
// dom nodes); the guard builder answers for the set.
export type SerializeReasons = SortedOneMany<Sources>;

export const sourcesUtil = new Sorted(compareSources);
// A `Sources` that may be forced: unconditional, but still saying what
// it reads (`FORCED` alone for a value serialized for its own sake).
export type SerializeReason = Sources;
export type SerializeKey = symbol & { __serialize_key__: 1 };

export function isSameReason(
  a: SerializeReason | undefined,
  b: SerializeReason | undefined,
) {
  // Forced reasons match whatever their sources: both guard as `1`.
  return (
    a === b ||
    (a && b ? (a.forced && b.forced) || compareSources(a, b) === 0 : false)
  );
}

export function isForceSerialized(
  section: Section,
  prop?: Binding | AccessorProp | symbol,
  prefix?: AccessorPrefix | symbol,
) {
  return !!(
    prop
      ? section.serializeReasons.get(getPropKey(section, prop, prefix))
      : section.serializeReason
  )?.forced;
}

export function addSerializeReason(
  section: Section,
  reason: undefined | false | SerializeReason,
  prop?: Binding | AccessorProp | symbol,
  prefix?: AccessorPrefix | symbol,
) {
  if (reason) {
    // A `$global` read alone never serializes (the client reads the
    // globals object, as without patches); it stays a source.
    if (!reason.state && !reason.param && !reason.forced) return;
    const key = prop && getPropKey(section, prop, prefix);
    if (key) {
      const curReason = section.serializeReasons.get(key);
      const newReason = mergeSerializeReasons(curReason, reason);
      if (curReason !== newReason) {
        setPropSerializeReason(section, key, newReason);
      }
    } else {
      const curReason = section.serializeReason;
      const newReason = mergeSerializeReasons(curReason, reason);
      if (curReason !== newReason) {
        setSerializeReason(section, newReason);
      }
    }
  }
}

export function addSerializeExpr(
  section: Section,
  expr: Opt<t.NodeExtra>,
  prop?: Binding | AccessorProp | symbol,
  prefix?: AccessorPrefix | symbol,
) {
  if (expr) {
    if (prop) {
      const key = getPropKey(section, prop, prefix);
      const curExprs = (section.propSerializeExprs ??= new Map());
      const curExpr = curExprs.get(key);
      curExprs.set(key, curExpr ? concat(curExpr, expr)! : expr);
    } else {
      const curExpr = section.serializeExprs;
      section.serializeExprs = curExpr ? concat(curExpr, expr)! : expr;
    }
  }
}

export function addOwnerSerializeReason(
  from: Section,
  to: Section,
  reason: undefined | false | SerializeReason,
) {
  if (reason) forEachAncestorSection(from, to, addOwnerReason, reason);
}

function addOwnerReason(section: Section, reason: SerializeReason) {
  addSerializeReason(section, reason, getAccessorProp().Owner);
}

export function isReasonDynamic(
  reason: undefined | SerializeReason,
): reason is Sources & { state: undefined; forced: undefined } {
  return !!reason && !reason.forced && !reason.state;
}

// A reason whose serialize guard is statically truthy (`true` or backed by
// state), meaning whatever it gates is unconditionally emitted at runtime.
export function isStaticSerializeReason(
  reason: undefined | SerializeReason,
): reason is SerializeReason {
  return !!reason && !isReasonDynamic(reason);
}

// A reason backed by state sources. State only serializes when it can change
// client side, keeping its signal (and everything it renders) in the bundle.
export function isStateSerializeReason(
  reason: undefined | SerializeReason,
): reason is Sources {
  return !!reason && !reason.forced && !!reason.state;
}

// Whether anything in the section's scope serializes.
export function hasSerializeReasons(section: Section | undefined) {
  return (
    !!section && (!!section.serializeReason || !!section.serializeReasons.size)
  );
}

export function getSerializeReason(
  section: Section,
  prop?: Binding | AccessorProp | symbol,
  prefix?: AccessorPrefix | symbol,
) {
  if (prop) {
    return section.serializeReasons.get(getPropKey(section, prop, prefix));
  } else {
    return section.serializeReason;
  }
}

export function getSerializeSourcesForExpr(expr: t.NodeExtra) {
  const root = getCanonicalExtra(expr);
  if (isReferencedExtra(root)) {
    const sources = getSerializeSourcesForRef(root.referencedBindings);
    // A keyed `$global` read aliases a property binding and is a reference
    // like any other. An opaque read (`fn($global)`) compiles verbatim: no
    // read slot, no signal, so it is not among the references (joining them
    // would make it a closure) and contributes here, as request identity a
    // patch flush re-ships what reads.
    return root.globalBindings && isPatch()
      ? mergeSources(sources, globalSources)
      : sources;
  }
}

export function getSerializeSourcesForExprs(exprs: Opt<t.NodeExtra> | boolean) {
  if (exprs) {
    if (exprs === true) {
      return FORCED;
    }
    return reduce(exprs, mergeExprSources);
  }
}

export function getSerializeSourcesForRef(ref: ReferencedBindings) {
  return reduce(ref, mergeBindingSources);
}

// What reruns the call site expressions passing content to the bindings it
// feeds, down the property path it lands at.
export function getSerializeSourcesForDownstream({
  binding,
  exprs,
  properties,
}: NonNullable<Section["downstream"]>) {
  if (exprs) {
    return reduce(binding, (sources: Sources | undefined, binding) =>
      mergeSources(
        sources,
        getSerializeSourcesForExprs(
          mapParamBindingToExpr(
            exprs,
            getPropertyPathAlias(binding, properties) as InputBinding,
          ),
        ),
      ),
    );
  }
}

function mergeExprSources(sources: Sources | undefined, expr: t.NodeExtra) {
  return mergeSources(sources, getSerializeSourcesForExpr(expr));
}

function mergeBindingSources(sources: Sources | undefined, binding: Binding) {
  return mergeSources(sources, binding.sources);
}

// Dereferences params through the call site's expressions (every one of
// them without expressions), keeping the others in their own terms: the
// downstream program's params (`ownParams`), or every other program's,
// for a reason a downstream template recorded in its own terms.
export function mapParamReason(
  program: Section,
  reason: Sources,
  exprs: KnownExprs | undefined,
  ownParams: boolean,
): SerializeReason | undefined {
  let params: Sources["param"];
  let mapped: SerializeReason | undefined;
  let any = false;
  forEach(reason.param, (param) => {
    if ((param.section.program === program) === ownParams) {
      any = true;
      mapped = exprs
        ? mergeSerializeReasons(
            mapped,
            getSerializeSourcesForExprs(mapParamBindingToExpr(exprs, param)),
          )
        : FORCED;
    } else {
      params = bindingUtil.add(params, param) as Sources["param"];
    }
  });
  if (!any) return reason;
  return mergeRemappedSources(reason, params, mapped);
}

// Rebuilding with `createSources` mirrors `mergeSources`; the kept params are
// a subset of a deduped, sorted, alias-filtered set, so its invariants hold.
function mergeRemappedSources(
  reason: Sources,
  params: Sources["param"],
  mapped: SerializeReason | undefined,
): SerializeReason | undefined {
  if (reason.state || reason.global || params || reason.forced) {
    mapped = mergeSerializeReasons(
      mapped,
      createSources(reason.state, params, reason.global, reason.forced),
    );
  }
  return mapped;
}

export function mergeSerializeReasons(
  a: SerializeReason,
  b: undefined | SerializeReason,
): SerializeReason;

export function mergeSerializeReasons(
  a: undefined | SerializeReason,
  b: SerializeReason,
): SerializeReason;

export function mergeSerializeReasons(
  a: undefined | SerializeReason,
  b: undefined | SerializeReason,
): SerializeReason | undefined;

export function mergeSerializeReasons(
  a: undefined | SerializeReason,
  b: undefined | SerializeReason,
): SerializeReason | undefined {
  return mergeSources(a, b);
}

export function applySerializeExprs(section: Section) {
  const propExprs = section.propSerializeExprs;
  if (propExprs) {
    section.propSerializeExprs = undefined;
    for (const [key, exprs] of propExprs) {
      const reason = getSerializeSourcesForExprs(exprs);
      if (reason) {
        const curReason = section.serializeReasons.get(key);
        const newReason = mergeSerializeReasons(curReason, reason);
        if (curReason !== newReason) {
          setPropSerializeReason(section, key, newReason);
        }
      }
    }
  }

  const scopeExprs = section.serializeExprs;
  if (scopeExprs) {
    section.serializeExprs = undefined;
    const reason = getSerializeSourcesForExprs(scopeExprs);
    if (reason) {
      const curReason = section.serializeReason;
      const newReason = mergeSerializeReasons(curReason, reason);
      if (curReason !== newReason) {
        setSerializeReason(section, newReason);
      }
    }
  }
}

export function finalizeSerializeReason(section: Section) {
  forEach(section.bindings, (binding) => {
    const reason =
      binding.type === BindingType.dom && getSerializeReason(section, binding);
    if (reason) {
      section.domSerializeReasons = sourcesUtil.add(
        section.domSerializeReasons,
        reason,
      );
    }
  });

  const curReason = section.serializeReason;
  let newReason: undefined | SerializeReason = curReason;
  // Merge all prop reasons into the scope reason.
  for (const propReason of section.serializeReasons.values()) {
    newReason = mergeSources(newReason, propReason);
  }
  if (newReason && curReason !== newReason) {
    setSerializeReason(section, newReason);
  }
}

function getPropKey(
  section: Section,
  prop: Binding | AccessorProp | symbol,
  prefix?: AccessorPrefix | symbol,
) {
  if (isStrOrSym(prop)) {
    const keys = (section.serializePropKeys ??= new Map());
    let key = keys.get(prop);
    if (!key) {
      keys.set(
        prop,
        (key = Symbol(
          typeof prop === "symbol" ? `Symbol(${prop.description})` : prop,
        ) as SerializeKey),
      );
    }

    if (prefix) {
      throw new Error("Cannot have a scope property reason with a prefix.");
    }

    return key;
  } else {
    const binding = getCanonicalBinding(prop);
    const keys = (binding.serializePropKeys ??= new Map());

    let key = keys.get(prefix);
    if (!key) {
      keys.set(
        prefix,
        (key = Symbol(
          (prefix
            ? typeof prefix === "symbol"
              ? `Symbol(${prefix.description})`
              : prefix
            : "") + binding.name,
        ) as SerializeKey),
      );
    }

    return key;
  }
}

function isStrOrSym(v: unknown): v is string | symbol {
  switch (typeof v) {
    case "string":
    case "symbol":
      return true;
    default:
      return false;
  }
}

// Moves each time a section reason gains a source. The setters below only take
// merges, so reasons only grow and a pass repeating until this holds settles.
let reasonsVersion = 0;
export function getSerializeReasonsVersion() {
  return reasonsVersion;
}
// A new param reason group moves it too: call sites stamp their groups.
export function addSerializeReasonsVersion() {
  reasonsVersion++;
}

// Exists as the single point of assigning section reasons to aid in debugging.
function setSerializeReason(section: Section, reason: SerializeReason) {
  if (!isSameSources(section.serializeReason, reason)) reasonsVersion++;
  section.serializeReason = reason;
}

// Exists as the single point of assigning section reasons to aid in debugging.
function setPropSerializeReason(
  section: Section,
  key: SerializeKey,
  reason: SerializeReason,
) {
  if (!isSameSources(section.serializeReasons.get(key), reason)) {
    reasonsVersion++;
  }
  section.serializeReasons.set(key, reason);
}

// Merges rebuild equal sources, so only a change in them counts.
function isSameSources(a: SerializeReason | undefined, b: SerializeReason) {
  return !!a && compareSources(a, b) === 0;
}

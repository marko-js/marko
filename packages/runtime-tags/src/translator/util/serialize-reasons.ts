import { types as t } from "@marko/compiler";

import { AccessorPrefix, AccessorProp } from "../../common/types";
import { getAccessorProp } from "./get-accessor-enums";
import { concat, forEach, type Opt } from "./optional";
import {
  type Binding,
  BindingType,
  bindingUtil,
  compareSources,
  createSources,
  getCanonicalBinding,
  isReferencedExtra,
  type KnownExprs,
  mapParamBindingToExpr,
  mergeSources,
  type ReferencedBindings,
  type Sources,
} from "./references";
import type { Section } from "./sections";

export type SerializeReasons = true | OneMany<Sources>;

export const sourcesUtil = new Sorted(compareSources);
export type SerializeReason = true | Sources;
export type SerializeKey = symbol & { __serialize_key__: 1 };

export function isSameReason(
  a: SerializeReason | undefined,
  b: SerializeReason | undefined,
) {
  return (
    a === b ||
    (a && b ? a !== true && b !== true && compareSources(a, b) === 0 : false)
  );
}

export function isForceSerialized(
  section: Section,
  prop?: Binding | AccessorProp | symbol,
  prefix?: AccessorPrefix | symbol,
) {
  return (
    true ===
    (prop
      ? section.serializeReasons.get(getPropKey(section, prop, prefix))
      : section.serializeReason)
  );
}

export function addSerializeReason(
  section: Section,
  reason: undefined | false | SerializeReason,
  prop?: Binding | AccessorProp | symbol,
  prefix?: AccessorPrefix | symbol,
) {
  if (reason) {
    if (reason !== true) {
      addProvenance(section, reason, prop && getPropKey(section, prop, prefix));
      // A `$global` read alone never serializes (the client reads the
      // globals object, as without persisted pages); it stays provenance.
      if (!reason.state && !reason.param) return;
    }
    if (prop) {
      const key = getPropKey(section, prop, prefix);
      const curReason = section.serializeReasons.get(key);
      if (curReason !== true) {
        if (reason === true) {
          forcePropSerialize(section, key);
        } else {
          const newReason = mergeSerializeReasons(curReason, reason);
          if (curReason !== newReason) {
            setPropSerializeReason(section, key, newReason);
          }
        }
      }
    } else {
      const curReason = section.serializeReason;
      if (curReason !== true) {
        if (reason === true) {
          forceSerialize(section);
        } else {
          const newReason = mergeSerializeReasons(curReason, reason);
          if (curReason !== newReason) {
            setSerializeReason(section, newReason);
          }
        }
      }
    }
  }
}

export function addSerializeExpr(
  section: Section,
  expr: boolean | Opt<t.NodeExtra>,
  prop?: Binding | AccessorProp | symbol,
  prefix?: AccessorPrefix | symbol,
) {
  if (expr) {
    // Exprs accumulate even once forced: resolving into a `true` reason is
    // a no-op, and provenance still needs them.
    if (prop) {
      const key = getPropKey(section, prop, prefix);
      if (expr === true) {
        if (section.serializeReasons.get(key) !== true) {
          forcePropSerialize(section, key);
        }
      } else {
        const curExprs = (section.propSerializeExprs ??= new Map());
        const curExpr = curExprs.get(key);
        curExprs.set(key, curExpr ? concat(curExpr, expr)! : expr);
      }
    } else if (expr === true) {
      if (section.serializeReason !== true) {
        forceSerialize(section);
      }
    } else {
      const curExpr = section.serializeExprs;
      section.serializeExprs = curExpr ? concat(curExpr, expr)! : expr;
    }
  }
}

export function addOwnerSerializeReason(
  from: Section,
  to: Section,
  reason: undefined | boolean | SerializeReason,
) {
  if (reason) {
    let cur = from;
    while (cur !== to && cur.parent) {
      addSerializeReason(cur, reason, getAccessorProp().Owner);
      cur = cur.parent;
    }
  }
}

export function isReasonDynamic(
  reason: undefined | SerializeReason,
): reason is Sources & { state: undefined } {
  return !!reason && reason !== true && !reason.state;
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
  return !!reason && reason !== true && !!reason.state;
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
  return isReferencedExtra(expr)
    ? getSerializeSourcesForRef(expr.referencedBindings)
    : undefined;
}

export function getSerializeSourcesForExprs(exprs: Opt<t.NodeExtra> | boolean) {
  if (exprs) {
    if (exprs === true) {
      return exprs;
    } else if (Array.isArray(exprs)) {
      let allSources: Sources | undefined;
      for (const expr of exprs) {
        allSources = mergeSources(allSources, getSerializeSourcesForExpr(expr));
      }
      return allSources;
    } else {
      return getSerializeSourcesForExpr(exprs);
    }
  }
}

export function getSerializeSourcesForRef(ref: ReferencedBindings) {
  if (ref) {
    let allSources: Sources | undefined;
    if (Array.isArray(ref)) {
      for (const { sources } of ref) {
        allSources = mergeSources(allSources, sources);
      }

      return allSources;
    } else {
      return ref.sources;
    }
  }
}

// Reasons recorded by a downstream template stay in its own terms; params in
// its (or a deeper) program dereference through the call site's expressions.
export function mapCrossProgramReason(
  program: Section,
  reason: Sources,
  exprs: KnownExprs | undefined,
): SerializeReason | undefined {
  let params: Sources["param"];
  let mapped: SerializeReason | undefined;
  let crossProgram = false;
  forEach(reason.param, (param) => {
    if (param.section.program === program) {
      params = bindingUtil.add(params, param) as Sources["param"];
    } else {
      crossProgram = true;
      mapped = exprs
        ? mergeSerializeReasons(
            mapped,
            getSerializeSourcesForExprs(mapParamBindingToExpr(exprs, param)),
          )
        : true;
    }
  });
  if (!crossProgram) return reason;
  return mergeRemappedSources(reason, params, mapped);
}

// The inverse split of `mapCrossProgramReason`: dereferences params belonging
// to a downstream program through its call site's expressions, keeping others.
export function mapDownstreamReason(
  program: Section,
  reason: Sources,
  exprs: KnownExprs,
): SerializeReason | undefined {
  let params: Sources["param"];
  let mapped: SerializeReason | undefined;
  let downstream = false;
  forEach(reason.param, (param) => {
    if (param.section.program === program) {
      downstream = true;
      mapped = mergeSerializeReasons(
        mapped,
        getSerializeSourcesForExprs(mapParamBindingToExpr(exprs, param)),
      );
    } else {
      params = bindingUtil.add(params, param) as Sources["param"];
    }
  });
  if (!downstream) return reason;
  return mergeRemappedSources(reason, params, mapped);
}

// Rebuilding with `createSources` mirrors `mergeSources`; the kept params are
// a subset of a deduped, sorted, alias-filtered set, so its invariants hold.
function mergeRemappedSources(
  reason: Sources,
  params: Sources["param"],
  mapped: SerializeReason | undefined,
): SerializeReason | undefined {
  if (mapped !== true && (reason.state || reason.global || params)) {
    mapped = mergeSerializeReasons(
      mapped,
      createSources(reason.state, params, reason.global),
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
  if (a === true || b === true) return true;
  return mergeSources(a, b);
}

export function applySerializeExprs(section: Section) {
  const propExprs = section.propSerializeExprs;
  if (propExprs) {
    section.propSerializeExprs = undefined;
    for (const [key, exprs] of propExprs) {
      addProvenance(section, getProvenanceForExprs(exprs), key);
      const exprReason = getSerializeSourcesForExprs(exprs);
      if (exprReason) {
        const curReason = section.serializeReasons.get(key);
        const newReason = mergeSerializeReasons(curReason, exprReason);
        if (curReason !== newReason) {
          setPropSerializeReason(section, key, newReason);
        }
      }
    }
  }

  const scopeExprs = section.serializeExprs;
  if (scopeExprs) {
    section.serializeExprs = undefined;
    addProvenance(section, getProvenanceForExprs(scopeExprs));
    const exprReason = getSerializeSourcesForExprs(scopeExprs);
    if (exprReason) {
      const curReason = section.serializeReason;
      const newReason = mergeSerializeReasons(curReason, exprReason);
      if (curReason !== newReason) {
        setSerializeReason(section, newReason);
      }
    }
  }
}

export function finalizeSerializeReason(section: Section) {
  // A static reason ends the scan: any dom node then always resumes.
  some(section.bindings, (binding) => {
    const reason =
      binding.type === BindingType.dom && getSerializeReason(section, binding);
    if (reason) {
      section.domSerializeReasons =
        reason === true
          ? true
          : sourcesUtil.add(
              section.domSerializeReasons as Opt<Sources>,
              reason,
            );
    }
    return reason === true;
  });

  const curReason = section.serializeReason;
  let newReason: undefined | SerializeReason = curReason;
  if (newReason !== true) {
    // Merge all prop reasons into the scope reason.
    for (const propReason of section.serializeReasons.values()) {
      if (propReason === true) {
        newReason = true;
        break;
      }

      newReason = mergeSources(newReason, propReason);
    }

    if (newReason && curReason !== newReason) {
      setSerializeReason(section, newReason);
    }
  }

  // Prop provenance folds into the scope's, mirroring the reason merge.
  const propProvenance = section.propSerializeProvenance;
  if (propProvenance) {
    for (const provenance of propProvenance.values()) {
      addProvenance(section, provenance);
    }
  }
}

// Records provenance without touching the reason: for feeds that inform
// ownership but must never cause serialization (function-body reads).
export function addSerializeProvenance(
  section: Section,
  sources: Sources | undefined,
  prop?: Binding | AccessorProp | symbol,
  prefix?: AccessorPrefix | symbol,
) {
  addProvenance(section, sources, prop && getPropKey(section, prop, prefix));
}

// What feeds a serialization decision, complete after reference finalize;
// EMPTY under a forced reason means unrecorded, never "sourceless".
export function getSerializeProvenance(
  section: Section,
  prop?: Binding | AccessorProp | symbol,
  prefix?: AccessorPrefix | symbol,
): Sources | undefined {
  return prop
    ? section.propSerializeProvenance?.get(getPropKey(section, prop, prefix))
    : section.serializeProvenance;
}

function addProvenance(
  section: Section,
  sources: Sources | undefined,
  key?: SerializeKey,
) {
  if (!sources) return;
  if (key) {
    const provenance = (section.propSerializeProvenance ??= new Map());
    provenance.set(key, mergeSources(provenance.get(key), sources)!);
  } else {
    section.serializeProvenance = mergeSources(
      section.serializeProvenance,
      sources,
    )!;
  }
}

// Unlike the reason resolution, provenance counts reads inside function
// values: a consumer may invoke them at render time.
function getProvenanceForExprs(exprs: Opt<t.NodeExtra>) {
  let sources: Sources | undefined;
  forEach(exprs, (expr) => {
    sources = mergeSources(sources, getSerializeSourcesForExpr(expr));
    forEach(
      (expr as t.FunctionExtra).referencedBindingsInFunction,
      (binding) => {
        sources = mergeSources(sources, getSerializeSourcesForRef(binding));
      },
    );
  });
  return sources;
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

function forceSerialize(section: Section) {
  setSerializeReason(section, true);
}

function forcePropSerialize(section: Section, key: SerializeKey) {
  setPropSerializeReason(section, key, true);
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

// Exists as the single point of assigning section reasons to aid in debugging.
function setSerializeReason(section: Section, reason: SerializeReason) {
  section.serializeReason = reason;
}

// Exists as the single point of assigning section reasons to aid in debugging.
function setPropSerializeReason(
  section: Section,
  key: SerializeKey,
  reason: SerializeReason,
) {
  section.serializeReasons.set(key, reason);
}

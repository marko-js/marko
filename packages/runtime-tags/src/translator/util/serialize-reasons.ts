import { types as t } from "@marko/compiler";

import { AccessorPrefix, AccessorProp } from "../../common/types";
import { getAccessorProp } from "./get-accessor-enums";
import {
  concat,
  forEach,
  type OneMany,
  type Opt,
  Sorted,
  toIter,
} from "./optional";
import {
  type Binding,
  BindingType,
  bindingUtil,
  compareSources,
  createSources,
  FORCED,
  getCanonicalBinding,
  isReferencedExtra,
  type KnownExprs,
  mapParamBindingToExpr,
  mergeSources,
  type ReferencedBindings,
  type Sources,
} from "./references";
import { ancestorSections, type Section } from "./sections";

// Reasons any one of which serializes (a chain's branches, a section's
// dom nodes); the guard builder answers for the set.
export type SerializeReasons = OneMany<Sources>;

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
  if (reason) {
    for (const section of ancestorSections(from, to)) {
      addSerializeReason(section, reason, getAccessorProp().Owner);
    }
  }
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
      return FORCED;
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
  for (const binding of toIter(section.bindings)) {
    const reason =
      binding.type === BindingType.dom && getSerializeReason(section, binding);
    if (reason) {
      section.domSerializeReasons = sourcesUtil.add(
        section.domSerializeReasons,
        reason,
      );
    }
  }

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

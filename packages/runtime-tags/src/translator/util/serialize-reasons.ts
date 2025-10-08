import { types as t } from "@marko/compiler";

import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
} from "../../common/types";
import { getAccessorProp } from "./get-accessor-char";
import { concat, type OneMany, type Opt } from "./optional";
import {
  type Binding,
  getCanonicalBinding,
  type InputBinding,
  isReferencedExtra,
  mergeSources,
  type ParamBinding,
  type ReferencedBindings,
  type Sources,
} from "./references";
import type { Section } from "./sections";

export type SerializeReasons = true | [Sources, ...Sources[]];
export type SerializeReason = true | Sources;
export type SerializeKey = symbol & { __serialize_key__: 1 };

const scopeExprsBySection = new WeakMap<Section, OneMany<t.NodeExtra>>();
const propExprsBySection = new WeakMap<
  Section,
  Map<SerializeKey, OneMany<t.NodeExtra>>
>();
const serializePropsByBinding = new WeakMap<Binding, SerializeKey>();
const serializePropByModifier: Record<
  Accessor | symbol,
  WeakMap<Section | Binding, SerializeKey>
> = {};

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
    if (prop) {
      const key = getPropKey(section, prop, prefix);
      if (section.serializeReasons.get(key) !== true) {
        if (expr === true) {
          forcePropSerialize(section, key);
        } else {
          let curExpr: Opt<t.NodeExtra>;
          let curExprs = propExprsBySection.get(section);
          if (curExprs) {
            curExpr = curExprs.get(key);
          } else {
            curExprs = new Map();
            propExprsBySection.set(section, curExprs);
          }

          curExprs.set(key, curExpr ? concat(curExpr, expr)! : expr);
        }
      }
    } else if (section.serializeReason !== true) {
      if (expr === true) {
        forceSerialize(section);
      } else {
        const curExpr = scopeExprsBySection.get(section);
        scopeExprsBySection.set(
          section,
          curExpr ? concat(curExpr, expr)! : expr,
        );
      }
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
): reason is { state: undefined; param: OneMany<InputBinding | ParamBinding> } {
  return !!reason && reason !== true && !reason.state;
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
  if (isReferencedExtra(expr)) {
    return getSerializeSourcesForRef(expr.referencedBindings);
  }
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
  const propExprs = propExprsBySection.get(section);
  if (propExprs) {
    propExprsBySection.delete(section);
    for (const [key, exprs] of propExprs) {
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

  const scopeExprs = scopeExprsBySection.get(section);
  if (scopeExprs) {
    const exprReason = getSerializeSourcesForExprs(scopeExprs);
    scopeExprsBySection.delete(section);
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
}

function getPropKey(
  section: Section,
  prop: Binding | AccessorProp | symbol,
  prefix?: AccessorPrefix | symbol,
) {
  if (isStrOrSym(prop)) {
    const keys = (serializePropByModifier[prop] ||= new WeakMap());
    let key = keys.get(section);
    if (!key) {
      keys.set(
        section,
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
    const keys = prefix
      ? (serializePropByModifier[prefix] ||= new WeakMap())
      : serializePropsByBinding;
    const binding = getCanonicalBinding(prop);

    let key = keys.get(binding);
    if (!key) {
      keys.set(
        binding,
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
  scopeExprsBySection.delete(section);
  setSerializeReason(section, true);
}

function forcePropSerialize(section: Section, key: SerializeKey) {
  setPropSerializeReason(section, key, true);
  propExprsBySection.get(section)?.delete(key);
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

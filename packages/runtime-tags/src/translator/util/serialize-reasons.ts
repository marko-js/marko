import { types as t } from "@marko/compiler";

import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
} from "../../common/types";
import { concat, type OneMany, type Opt } from "./optional";
import {
  type Binding,
  bindingUtil,
  type InputBinding,
  isReferencedExtra,
  type ReferencedBindings,
} from "./references";
import type { Section } from "./sections";

export type DynamicSerializeReason = OneMany<InputBinding>;
export type DynamicSerializeReasons = [
  DynamicSerializeReason,
  ...DynamicSerializeReason[],
];
export type SerializeReason = true | DynamicSerializeReason;
export type SerializeKey = symbol & { __serialize_key__: 1 };

const reasonExprs = new WeakMap<Section, OneMany<t.NodeExtra>>();
const keyedReasonExprs = new WeakMap<
  Section,
  Map<SerializeKey, OneMany<t.NodeExtra>>
>();
const serializeKeysByBinding = new WeakMap<Binding, SerializeKey>();
const serializeKeyBySourceModifier: Record<
  Accessor | symbol,
  WeakMap<Section | Binding, SerializeKey>
> = {};

export function forceOwnersSerialize(
  from: Section,
  to: Section,
  prop?: AccessorProp | symbol,
) {
  let cur = from;
  while (cur !== to && cur.parent) {
    forceSectionSerialize(cur, prop);
    cur = cur.parent;
  }
}

export function addOwnersSerializeReason(
  from: Section,
  to: Section,
  reason: undefined | boolean | SerializeReason,
  prop?: AccessorProp | symbol,
) {
  if (reason) {
    let cur = from;
    while (cur !== to && cur.parent) {
      addSectionSerializeReason(cur, reason, prop);
      cur = cur.parent;
    }
  }
}

export function forceSectionSerialize(
  section: Section,
  prop?: AccessorProp | symbol,
) {
  if (prop) {
    forceSerializeKey(section, getSectionPropSerializeReasonKey(section, prop));
  } else if (section.serializeReason !== true) {
    reasonExprs.delete(section);
    setSectionSerializeReason(section, true);
  }
}
export function forceBindingSerialize(
  section: Section,
  binding: Binding,
  prefix?: AccessorPrefix | symbol,
) {
  forceSerializeKey(section, getBindingSerializeReasonKey(binding, prefix));
}
function forceSerializeKey(section: Section, key: SerializeKey) {
  if (section.serializeReasons.get(key) !== true) {
    setSectionKeyedSerializeReason(section, key, true);
    keyedReasonExprs.get(section)?.delete(key);
  }
}

export function isSectionForceSerialized(
  section: Section,
  prop?: AccessorProp | symbol,
) {
  return prop
    ? section.serializeReasons.get(
        getSectionPropSerializeReasonKey(section, prop),
      ) === true
    : section.serializeReason === true;
}
export function isBindingForceSerialized(
  section: Section,
  binding: Binding,
  prefix?: AccessorPrefix | symbol,
) {
  return (
    section.serializeReasons.get(
      getBindingSerializeReasonKey(binding, prefix),
    ) === true
  );
}

export function addSectionSerializeReasonExpr(
  section: Section,
  expr: undefined | boolean | Opt<t.NodeExtra>,
  prop?: AccessorProp | symbol,
) {
  if (expr) {
    if (prop) {
      addKeyedSerializeReasonExpr(
        section,
        getSectionPropSerializeReasonKey(section, prop),
        expr,
      );
    } else if (section.serializeReason !== true) {
      if (expr === true) {
        forceSectionSerialize(section);
      } else {
        const existingExpr = reasonExprs.get(section);
        reasonExprs.set(
          section,
          existingExpr ? concat(existingExpr, expr)! : expr,
        );
      }
    }
  }
}
export function addBindingSerializeReasonExpr(
  section: Section,
  binding: Binding,
  expr: undefined | boolean | Opt<t.NodeExtra>,
  prefix?: AccessorPrefix | symbol,
) {
  const key = getBindingSerializeReasonKey(binding, prefix);
  if (expr && section.serializeReasons.get(key) !== true) {
    addKeyedSerializeReasonExpr(section, key, expr);
  }
}
function addKeyedSerializeReasonExpr(
  section: Section,
  key: SerializeKey,
  expr: true | OneMany<t.NodeExtra>,
) {
  if (expr === true) {
    forceSerializeKey(section, key);
  } else {
    let existingExpr: Opt<t.NodeExtra>;
    let keyedExprs = keyedReasonExprs.get(section);
    if (keyedExprs) {
      existingExpr = keyedExprs.get(key);
    } else {
      keyedExprs = new Map();
      keyedReasonExprs.set(section, keyedExprs);
    }

    keyedExprs.set(key, existingExpr ? concat(existingExpr, expr)! : expr);
  }
}

export function addSectionSerializeReasonRef(
  section: Section,
  ref: undefined | boolean | ReferencedBindings,
  prop?: AccessorProp | symbol,
) {
  if (ref) {
    if (prop) {
      addKeyedSerializeReasonRef(
        section,
        getSectionPropSerializeReasonKey(section, prop),
        ref,
      );
    } else {
      const existingReason = section.serializeReason;
      if (existingReason !== true) {
        if (ref === true) {
          forceSectionSerialize(section);
        } else {
          const reason = getSerializeSourcesForRef(ref);

          if (reason === true) {
            forceSectionSerialize(section);
          } else {
            setSectionSerializeReason(
              section,
              mergeSerializeReasons(existingReason, reason),
            );
          }
        }
      }
    }
  }
}
export function addBindingSerializeReasonRef(
  section: Section,
  binding: Binding,
  ref: undefined | boolean | ReferencedBindings,
  prefix?: AccessorPrefix | symbol,
) {
  if (ref) {
    addKeyedSerializeReasonRef(
      section,
      getBindingSerializeReasonKey(binding, prefix),
      ref,
    );
  }
}
function addKeyedSerializeReasonRef(
  section: Section,
  key: SerializeKey,
  ref: true | OneMany<Binding>,
) {
  const existingReason = section.serializeReasons.get(key);
  if (existingReason !== true) {
    if (ref === true) {
      forceSerializeKey(section, key);
    } else {
      const reason = getSerializeSourcesForRef(ref);

      if (reason === true) {
        forceSerializeKey(section, key);
      } else {
        setSectionKeyedSerializeReason(
          section,
          key,
          mergeSerializeReasons(existingReason, reason)!,
        );
      }
    }
  }
}

export function addSectionSerializeReason(
  section: Section,
  reason: undefined | false | SerializeReason,
  prop?: AccessorProp | symbol,
) {
  if (reason) {
    if (prop) {
      addKeyedSerializeReason(
        section,
        getSectionPropSerializeReasonKey(section, prop),
        reason,
      );
    } else {
      const existingReason = section.serializeReason;
      if (existingReason !== true) {
        if (reason === true) {
          forceSectionSerialize(section);
        } else {
          setSectionSerializeReason(
            section,
            mergeSerializeReasons(existingReason, reason),
          );
        }
      }
    }
  }
}
export function addBindingSerializeReason(
  section: Section,
  binding: Binding,
  reason: undefined | false | SerializeReason,
  prefix?: AccessorPrefix | symbol,
) {
  if (reason) {
    addKeyedSerializeReason(
      section,
      getBindingSerializeReasonKey(binding, prefix),
      reason,
    );
  }
}
function addKeyedSerializeReason(
  section: Section,
  key: SerializeKey,
  reason: SerializeReason,
) {
  const existingReason = section.serializeReasons.get(key);
  if (existingReason !== true) {
    if (reason === true) {
      forceSerializeKey(section, key);
    } else {
      setSectionKeyedSerializeReason(
        section,
        key,
        mergeSerializeReasons(existingReason, reason)!,
      );
    }
  }
}

export function getSectionSerializeReason(
  section: Section,
  prop?: AccessorProp | symbol,
) {
  return prop
    ? section.serializeReasons.get(
        getSectionPropSerializeReasonKey(section, prop),
      )
    : section.serializeReason;
}
export function getBindingSerializeReason(
  section: Section,
  binding: Binding,
  prefix?: AccessorPrefix | symbol,
) {
  return section.serializeReasons.get(
    getBindingSerializeReasonKey(binding, prefix),
  );
}

function getSectionPropSerializeReasonKey(
  section: Section,
  prop: AccessorProp | symbol,
) {
  const keys = (serializeKeyBySourceModifier[prop] ||= new WeakMap());
  let key = keys.get(section);
  if (!key) {
    keys.set(
      section,
      (key = Symbol(
        typeof prop === "symbol" ? `Symbol(${prop.description})` : prop,
      ) as SerializeKey),
    );
  }

  return key;
}

function getBindingSerializeReasonKey(
  binding: Binding,
  prefix?: AccessorPrefix | symbol,
) {
  const keys = prefix
    ? (serializeKeyBySourceModifier[prefix] ||= new WeakMap())
    : serializeKeysByBinding;

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

export function applySerializeReasonExprs(section: Section) {
  const keyedExprs = keyedReasonExprs.get(section);
  if (keyedExprs) {
    keyedReasonExprs.delete(section);
    for (const [key, exprs] of keyedExprs) {
      const reason = getSerializeSourcesForExprs(exprs);
      if (reason) {
        setSectionKeyedSerializeReason(
          section,
          key,
          mergeSerializeReasons(section.serializeReasons.get(key), reason)!,
        );
      }
    }
  }

  const reason = getSerializeSourcesForExprs(reasonExprs.get(section));
  if (reason) {
    setSectionSerializeReason(
      section,
      mergeSerializeReasons(section.serializeReason, reason),
    );
  }

  reasonExprs.delete(section);
}

export function finalizeSectionSerializeReasons(section: Section) {
  let reason = section.serializeReason;

  if (reason !== true) {
    // Merge all keyed reasons into the section reason.
    for (const [, keyedReason] of section.serializeReasons) {
      if (keyedReason === true) {
        reason = true;
        break;
      }

      reason = mergeSerializeReasons(reason, keyedReason);
    }

    setSectionSerializeReason(section, reason);
  }
}

export function getSerializeSourcesForExpr(expr: t.NodeExtra) {
  if (isReferencedExtra(expr)) {
    return getSerializeSourcesForRef(expr.referencedBindings);
  }
}

export function getSerializeSourcesForExprs(exprs: Opt<t.NodeExtra>) {
  if (exprs) {
    if (Array.isArray(exprs)) {
      let serializeSource: Opt<InputBinding>;
      for (const expr of exprs) {
        const exprSources = getSerializeSourcesForExpr(expr);
        if (exprSources === true) return true as const;
        serializeSource = bindingUtil.union(serializeSource, exprSources);
      }
      return serializeSource;
    } else {
      return getSerializeSourcesForExpr(exprs);
    }
  }
}

export function getSerializeSourcesForRef(ref: ReferencedBindings) {
  if (ref) {
    let allSerializeSources: Opt<InputBinding>;
    if (Array.isArray(ref)) {
      for (const { serializeSources } of ref) {
        if (serializeSources === true) return serializeSources;
        allSerializeSources = bindingUtil.union(
          allSerializeSources,
          serializeSources,
        );
      }

      return allSerializeSources;
    } else {
      return ref.serializeSources;
    }
  }
}

export function mergeSerializeReasons<T extends undefined | SerializeReason>(
  a: T,
  b: T,
) {
  if (a === true || b === true) return true as T;
  return bindingUtil.union(a, b) as T;
}

// Exists as the single point of assigning section reasons to aid in debugging.
function setSectionSerializeReason(
  section: Section,
  reason: SerializeReason | undefined,
) {
  section.serializeReason = reason;
}

// Exists as the single point of assigning section reasons to aid in debugging.
function setSectionKeyedSerializeReason(
  section: Section,
  key: SerializeKey,
  reason: SerializeReason,
) {
  section.serializeReasons.set(key, reason);
}

import { types as t } from "@marko/compiler";

import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
} from "../../common/types";
import { concat, type Opt } from "./optional";
import {
  type Binding,
  bindingUtil,
  type InputBinding,
  isReferencedExtra,
  type ReferencedBindings,
} from "./references";
import type { Section } from "./sections";

const serializeReasonExprs = new WeakMap<
  Section,
  Map<symbol, Opt<t.NodeExtra>>
>();
const serializeKeysByBinding = new WeakMap<Binding, symbol>();
const serializeKeyBySourceModifier: Record<
  Accessor | symbol,
  WeakMap<t.NodeExtra | Binding, symbol>
> = {};

export function forcePropSerialize(
  section: Section,
  extra: t.NodeExtra,
  prop: AccessorProp | symbol,
) {
  forceSerialize(section, getPropSerializeReasonKey(extra, prop));
}
export function forceBindingSerialize(
  section: Section,
  binding: Binding,
  prefix?: AccessorPrefix,
) {
  forceSerialize(section, getBindingSerializeReasonKey(binding, prefix));
}
function forceSerialize(section: Section, key: symbol) {
  if (section.serializeReasons.get(key) !== true) {
    section.serializeReasons.set(key, true);
    serializeReasonExprs.get(section)?.delete(key);
  }
}

export function isPropForceSerialized(
  section: Section,
  extra: t.NodeExtra,
  prop: AccessorProp | symbol,
) {
  return (
    section.serializeReasons.get(getPropSerializeReasonKey(extra, prop)) ===
    true
  );
}
export function isBindingForceSerialized(
  section: Section,
  binding: Binding,
  prefix?: AccessorPrefix,
) {
  return (
    section.serializeReasons.get(
      getBindingSerializeReasonKey(binding, prefix),
    ) === true
  );
}

export function addPropSerializeReasonExpr(
  section: Section,
  extra: t.NodeExtra,
  prop: AccessorProp | symbol,
  expr: undefined | boolean | Opt<t.NodeExtra>,
) {
  return addSerializeReasonExpr(
    section,
    getPropSerializeReasonKey(extra, prop),
    expr,
  );
}
export function addBindingSerializeReasonExpr(
  section: Section,
  binding: Binding,
  expr: undefined | boolean | Opt<t.NodeExtra>,
  prefix?: AccessorPrefix,
) {
  return addSerializeReasonExpr(
    section,
    getBindingSerializeReasonKey(binding, prefix),
    expr,
  );
}
function addSerializeReasonExpr(
  section: Section,
  key: symbol,
  expr: undefined | boolean | Opt<t.NodeExtra>,
) {
  if (expr && section.serializeReasons.get(key) !== true) {
    if (expr === true) {
      forceSerialize(section, key);
    } else {
      let existingExpr: Opt<t.NodeExtra>;
      let exprsByKey = serializeReasonExprs.get(section);
      if (exprsByKey) {
        existingExpr = exprsByKey.get(key);
      } else {
        exprsByKey = new Map();
        serializeReasonExprs.set(section, exprsByKey);
      }

      exprsByKey.set(key, existingExpr ? concat(existingExpr, expr) : expr);
    }
  }
}

export function addPropSerializeReasonRef(
  section: Section,
  extra: t.NodeExtra,
  prop: AccessorProp | symbol,
  ref: undefined | boolean | ReferencedBindings,
) {
  addSerializeReasonRef(section, getPropSerializeReasonKey(extra, prop), ref);
}
export function addBindingSerializeReasonRef(
  section: Section,
  binding: Binding,
  ref: undefined | boolean | ReferencedBindings,
  prefix?: AccessorPrefix,
) {
  addSerializeReasonRef(
    section,
    getBindingSerializeReasonKey(binding, prefix),
    ref,
  );
}
function addSerializeReasonRef(
  section: Section,
  key: symbol,
  ref: undefined | boolean | ReferencedBindings,
) {
  if (ref) {
    const existingReason = section.serializeReasons.get(key);
    if (existingReason !== true) {
      if (ref === true) {
        forceSerialize(section, key);
      } else {
        const reason = getSerializeSourcesForRef(ref);

        if (reason === true) {
          forceSerialize(section, key);
        } else {
          section.serializeReasons.set(
            key,
            mergeSerializeReasons(existingReason, reason)!,
          );
        }
      }
    }
  }
}

export function addPropSerializeReason(
  section: Section,
  extra: t.NodeExtra,
  prop: AccessorProp | symbol,
  reason: boolean | Opt<InputBinding>,
) {
  addSerializeReason(section, getPropSerializeReasonKey(extra, prop), reason);
}
export function addBindingSerializeReason(
  section: Section,
  binding: Binding,
  reason: boolean | Opt<InputBinding>,
  prefix?: AccessorPrefix,
) {
  addSerializeReason(
    section,
    getBindingSerializeReasonKey(binding, prefix),
    reason,
  );
}
function addSerializeReason(
  section: Section,
  key: symbol,
  reason: boolean | Opt<InputBinding>,
) {
  if (reason) {
    const existingReason = section.serializeReasons.get(key);
    if (existingReason !== true) {
      if (reason === true) {
        forceSerialize(section, key);
      } else {
        section.serializeReasons.set(
          key,
          mergeSerializeReasons(existingReason, reason)!,
        );
      }
    }
  }
}

export function getPropSerializeReason(
  section: Section,
  extra: t.NodeExtra,
  prop: AccessorProp | symbol,
) {
  return section.serializeReasons.get(getPropSerializeReasonKey(extra, prop));
}

export function getBindingSerializeReason(
  section: Section,
  binding: Binding,
  prefix?: AccessorPrefix,
) {
  return section.serializeReasons.get(
    getBindingSerializeReasonKey(binding, prefix),
  );
}

function getPropSerializeReasonKey(
  extra: t.NodeExtra,
  prop: AccessorProp | symbol,
): symbol {
  return ((extra as any)[prop] ||= Symbol(
    typeof prop === "symbol" ? prop.description : prop,
  )) as symbol;
}

function getBindingSerializeReasonKey(
  binding: Binding,
  prefix?: AccessorPrefix,
): symbol {
  const keys = prefix
    ? (serializeKeyBySourceModifier[prefix] ||= new WeakMap())
    : serializeKeysByBinding;

  let key = keys.get(binding);
  if (!key) {
    keys.set(binding, (key = Symbol((prefix || "") + binding.name)));
  }

  return key;
}

export function consumeSerializeReasonExprs(section: Section) {
  const exprs = serializeReasonExprs.get(section);
  serializeReasonExprs.delete(section);
  return exprs;
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

export function mergeSerializeReasons<T extends true | Opt<InputBinding>>(
  a: T,
  b: T,
) {
  if (a === true || b === true) return true as T;
  return bindingUtil.union(a, b) as T;
}

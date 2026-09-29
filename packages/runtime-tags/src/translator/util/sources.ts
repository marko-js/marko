import {
  type Binding,
  type InputBinding,
  type ParamBinding,
  bindingUtil,
  compareReferences,
  someUpstream,
} from "./bindings";
import { type SortedOpt } from "./optional";

export interface Sources {
  state: SortedOpt<Binding>;
  param: SortedOpt<InputBinding | ParamBinding>;
  global: true | undefined;
  /** Serialized unconditionally; the sources still say what it reads. */
  forced: true | undefined;
}

// The reason of a value serialized for its own sake: forced, and the
// sources the other terms add to it survive the merge.
export const FORCED: Sources = {
  state: undefined,
  param: undefined,
  global: undefined,
  forced: true,
};

// `$global` is request identity: sources carry one bit (granularity lives
// in the global bindings' property aliases, not in invalidation).
export const globalSources: Sources = {
  state: undefined,
  param: undefined,
  global: true,
  forced: undefined,
};

export function sharesSources(a: Binding, b: Binding) {
  return (
    !!a.sources &&
    !!b.sources &&
    (bindingUtil.intersects(a.sources.state, b.sources.state) ||
      bindingUtil.intersects(a.sources.param, b.sources.param))
  );
}

export function createSources(
  state: Sources["state"],
  param: Sources["param"],
  global?: Sources["global"],
  forced?: Sources["forced"],
): Sources {
  /* v8 ignore next 6 -- every caller passes at least one source */
  if (!(state || param || global || forced)) {
    throw new Error(
      "Cannot create a serialize reason that does not reference state, a param, or $global.",
    );
  }

  return { state, param, global, forced };
}

// `sources` with other state and params, keeping everything else it says;
// unset once it says nothing.
export function withSources(
  sources: Sources,
  state: Sources["state"],
  param: Sources["param"],
): Sources | undefined {
  return state || param || sources.global || sources.forced
    ? createSources(state, param, sources.global, sources.forced)
    : undefined;
}

export function compareSources(a: Sources, b: Sources) {
  let delta: number;

  if (a.forced !== b.forced) return a.forced ? 1 : -1;
  if (a.global !== b.global) return a.global ? 1 : -1;

  if (a.param) {
    if (!b.param) return 1;
    if ((delta = compareReferences(a.param, b.param))) return delta;
  } else if (b.param) {
    return -1;
  }

  if (a.state) {
    if (!b.state) return 1;
    if ((delta = compareReferences(a.state, b.state))) return delta;
  } else if (b.state) {
    return -1;
  }

  return 0;
}

export function mergeSources(a: undefined | Sources, b: undefined | Sources) {
  if (!a) return b;
  if (!b) return a;
  if (
    a.state === b.state &&
    a.param === b.param &&
    a.global === b.global &&
    a.forced === b.forced
  ) {
    return a;
  }
  return createSources(
    bindingUtil.union(a.state, b.state),
    unionParamSources(a.param, b.param),
    a.global || b.global,
    a.forced || b.forced,
  );
}

function unionParamSources(a: Sources["param"], b: Sources["param"]) {
  const merged = bindingUtil.union(a, b);
  if (merged && Array.isArray(merged)) {
    // Filter out property aliases already in the merged set (eg drop `input.foo`
    // when `input` is present); params otherwise treat properties as discrete sources.
    return bindingUtil.filter(
      merged,
      (binding) => !someUpstream(binding.upstreamAlias, isInParams, merged),
    );
  }

  return merged;
}

export function isInParams(binding: Binding, params: Sources["param"]) {
  return bindingUtil.has(params, binding as ParamBinding);
}

export function isSupersetSources(a: Binding, b: Binding) {
  if (!b.sources) return true;
  if (!a.sources) return false;
  return (
    bindingUtil.isSuperset(a.sources.state, b.sources.state) &&
    bindingUtil.isSuperset(a.sources.param, b.sources.param)
  );
}

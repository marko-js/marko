import {
  type Binding,
  type ParamBinding,
  bindingUtil,
  compareReferences,
  someUpToAliasRoot,
} from "./bindings";
import { every, Sorted, some, type SortedOpt } from "./optional";
import { isKnownChild, isCallerParamAt, type Section } from "./sections";

export interface Sources {
  state: SortedOpt<Binding>;
  param: SortedOpt<ParamBinding>;
  global: true | undefined;
  /** Read whatever changes, as an effect or handler reads on resume; the
   * other fields still say what it reads. */
  always: true | undefined;
}

// The reason of something read for its own sake: what a merge adds to it
// survives.
export const ALWAYS: Sources = {
  state: undefined,
  param: undefined,
  global: undefined,
  always: true,
};

// `$global` is request identity: sources carry one bit (granularity lives
// in the global bindings' property aliases, not in invalidation).
export const globalSources: Sources = {
  state: undefined,
  param: undefined,
  global: true,
  always: undefined,
};

export function sharesSources(a: Binding, b: Binding) {
  return (
    !!a.sources &&
    !!b.sources &&
    (bindingUtil.intersects(a.sources.state, b.sources.state) ||
      some(a.sources.param, (param) =>
        isCoveredParam(param, b.sources!.param),
      ) ||
      some(b.sources.param, (param) => isCoveredParam(param, a.sources!.param)))
  );
}

export function createSources(
  state: Sources["state"],
  param: Sources["param"],
  global?: Sources["global"],
  always?: Sources["always"],
): Sources {
  /* v8 ignore next 6 -- every caller passes at least one source */
  if (!(state || param || global || always)) {
    throw new Error(
      "Cannot create sources that reference no state, param or $global.",
    );
  }

  return { state, param, global, always };
}

// `sources` with other state and params, keeping everything else it says;
// unset once it says nothing.
export function withSources(
  sources: Sources,
  state: Sources["state"],
  param: Sources["param"],
): Sources | undefined {
  return state || param || sources.global || sources.always
    ? createSources(state, param, sources.global, sources.always)
    : undefined;
}

export const sourcesUtil = new Sorted(compareSources);

export function compareSources(a: Sources, b: Sources) {
  let delta: number;

  if (a.always !== b.always) return a.always ? 1 : -1;
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

export function mergeSources(a: Sources, b: undefined | Sources): Sources;
export function mergeSources(a: undefined | Sources, b: Sources): Sources;
export function mergeSources(
  a: undefined | Sources,
  b: undefined | Sources,
): Sources | undefined;
export function mergeSources(a: undefined | Sources, b: undefined | Sources) {
  if (!a) return b;
  if (!b) return a;
  const state = bindingUtil.union(a.state, b.state);
  const param = unionParamSources(a.param, b.param);
  const global = a.global || b.global;
  const always = a.always || b.always;
  // A side the other adds nothing to is the merge itself.
  if (
    state === a.state &&
    param === a.param &&
    global === a.global &&
    always === a.always
  ) {
    return a;
  }
  if (
    state === b.state &&
    param === b.param &&
    global === b.global &&
    always === b.always
  ) {
    return b;
  }
  return createSources(state, param, global, always);
}

// Params treat properties as discrete sources, except a property alias beside
// its root (eg `input.foo` beside `input`), which the root covers and drops.
function unionParamSources(a: Sources["param"], b: Sources["param"]) {
  const merged = bindingUtil.union(a, b);
  // Every param list is already filtered, so an input returned as is needs none.
  if (merged === a || merged === b) return merged;
  // A side that covers the other loses nothing, so the union returns it.
  return bindingUtil.union(dropCovered(a, b), dropCovered(b, a));
}

// The params with no alias root in `other`.
function dropCovered(params: Sources["param"], other: Sources["param"]) {
  return bindingUtil.filter(
    params,
    (binding) => !isCoveredParam(binding.aliasOf, other),
  );
}

// Whether the sources read a param a caller passes (`isKnownChild`).
export function hasCallerParamSource(sources: Sources | undefined) {
  return some(sources?.param, isCallerParam);
}

// Whether a write in `section` gates on a group of the sources' params.
export function hasCallerParamSourceAt(
  sources: Sources | undefined,
  section: Section,
) {
  return some(sources?.param, (param) => isCallerParamAt(param, section));
}

// A source only the server changes that no caller group gates: `$global`, or a param of a
// section no known caller renders (a patch renders that section only with server input).
export function hasUngatedSource(sources: Sources | undefined) {
  return !!sources?.global || !every(sources?.param, isCallerParam);
}

function isCallerParam(binding: ParamBinding) {
  return isKnownChild(binding.section);
}

// Whether the sources read what the server supplies: params or `$global`.
export function hasParamOrGlobalSource(sources: Sources | undefined) {
  return !!(sources?.param || sources?.global);
}

function isInParams(binding: Binding, params: Sources["param"]) {
  return bindingUtil.has(params, binding as ParamBinding);
}

export function isSupersetSources(a: Binding, b: Binding) {
  if (!b.sources) return true;
  if (!a.sources) return false;
  return (
    bindingUtil.isSuperset(a.sources.state, b.sources.state) &&
    every(b.sources.param, (param) => isCoveredParam(param, a.sources!.param))
  );
}

// A property alias param changes only with its alias root, so the root covers it.
export function isCoveredParam(
  binding: Binding | undefined,
  params: Sources["param"],
) {
  return someUpToAliasRoot(binding, isInParams, params);
}

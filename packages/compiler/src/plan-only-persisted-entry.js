/**
 * Internal compile flag for plan-only persisted DOM entries.
 *
 * Set only by the @marko/vite host seam when the product client graph is
 * cutover (artifacts) on a production client build. Not part of public
 * Config — never document as an app option. Distinct from Babel `code:
 * false`, which must not by itself select plan-only semantics.
 */

export const PLAN_ONLY_PERSISTED_ENTRY = "__markoPlanOnlyPersistedEntry";

/** Tag a compiler config as plan-only for `entry: "persisted"`. */
export function withPlanOnlyPersistedEntry(config = {}) {
  return { ...config, [PLAN_ONLY_PERSISTED_ENTRY]: true };
}

/** True when this compile was tagged plan-only by the build host. */
export function isPlanOnlyPersistedEntry(config) {
  return !!(config && config[PLAN_ONLY_PERSISTED_ENTRY] === true);
}

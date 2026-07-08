import { AccessorPrefix, AccessorProp, type Scope } from "../common/types";
import { queueRender, runId } from "./queue";
import { _resume } from "./resume";
import { findBranchWithKey } from "./scope";
import { type SignalFn, subscribeToScopeSet } from "./signals";

// `<context>` client runtime; server-rendered immutable consumers read a
// serialized slot and pull nothing from this module.

// Immutable consume: the serialized slot when present (server-rendered),
// otherwise resolve the nearest provider (a reserved box or a
// client-created instance); the value signal populates the slot.
export function _context_read(
  scope: Scope,
  accessor: string,
  providerId: string,
  debugName?: string,
) {
  if (accessor in scope) return scope[accessor];

  const linkAccessor = AccessorPrefix.ContextLink + providerId;
  const provider = (findBranchWithKey(scope, linkAccessor)?.[linkAccessor] ||
    scope[AccessorProp.Global][linkAccessor]) as Scope | undefined;
  if (MARKO_DEBUG && !provider) {
    throw new Error(
      `No <context> provider found for ${JSON.stringify(debugName || providerId)}. Render a \`<context=value>\` (or \`<context:=value>\`) tag above this consumer in the render tree.`,
    );
  }
  return provider && provider[AccessorProp.ContextValue];
}

// Consumer fan-out signal: resolves the provider (serialized link, branch
// entry, or root $global), applies the value, and subscribes. `fn` always
// receives a provider scope (an empty one when missing in production, so
// consumers compile plain member reads); debug throws instead.
export function _context_closure(
  providerId: string,
  fn: (scope: Scope, provider: Scope) => void,
  resumeId: string,
  debugName?: string,
) {
  const linkAccessor = AccessorPrefix.ContextLink + providerId;
  const signal: SignalFn = (scope) => {
    let provider = (scope[linkAccessor] ||=
      findBranchWithKey(scope, linkAccessor)?.[linkAccessor] ||
      scope[AccessorProp.Global][linkAccessor]) as Scope | undefined;
    if (provider) {
      scope[AccessorPrefix.ContextSignal + providerId] = signal;
      subscribeToScopeSet(provider, AccessorProp.ContextScopes, scope);
    } else if (MARKO_DEBUG) {
      throw new Error(
        `No <context> provider found for ${JSON.stringify(debugName || providerId)}. Render a \`<context=value>\` (or \`<context:=value>\`) tag above this consumer in the render tree.`,
      );
    } else {
      provider = {} as Scope;
    }
    fn(scope, provider);
  };
  return _resume(resumeId, signal);
}

// Provider value write + fan-out, re-run whenever the value can change.
export function _context_value(
  scope: Scope,
  value: unknown,
  providerId: string,
) {
  if (
    scope[AccessorProp.ContextValue] !== value ||
    !(AccessorProp.ContextValue in scope)
  ) {
    scope[AccessorProp.ContextValue] = value;
    const subscribers = scope[AccessorProp.ContextScopes] as
      Set<Scope> | undefined;
    if (subscribers) {
      const signalAccessor = AccessorPrefix.ContextSignal + providerId;
      for (const subscriber of subscribers) {
        // Skip destroyed scopes and scopes rendering this pass (same
        // liveness guard as `_closure`).
        if (
          subscriber[AccessorProp.Gen] > 0 &&
          subscriber[AccessorProp.Gen] < runId
        ) {
          queueRender(subscriber, subscriber[signalAccessor] as SignalFn, -1);
        }
      }
    }
  }
}

// Branch entry so client-created consumers below resolve this provider
// (root providers stamp $global); mirrors the serialized entry for resume.
export function _context_branch(scope: Scope, providerId: string) {
  const target =
    scope[AccessorProp.ClosestBranch] || scope[AccessorProp.Global];
  const linkAccessor = AccessorPrefix.ContextLink + providerId;
  if (MARKO_DEBUG) {
    const existing = target[linkAccessor] as Scope | undefined;
    if (existing && existing !== scope && existing[AccessorProp.Gen] > 0) {
      throw new Error(
        `Multiple live instances of the <context> provider ${JSON.stringify(providerId)} share the same branch; consumers created client-side cannot tell them apart. Wrap each provider instance in its own control flow (eg a keyed \`<for>\` iteration or an \`<if>\`).`,
      );
    }
  }
  target[linkAccessor] = scope;
}

// The change handler rides the tag-variable-change prefix keyed by the
// context value prop, which no real binding accessor can collide with.
const changeAccessor =
  AccessorPrefix.TagVariableChange + AccessorProp.ContextValue;

// Installs the writable provider's change handler for consumer writes.
export function _context_change(
  scope: Scope,
  changeHandler: (value: unknown) => void,
) {
  scope[changeAccessor] = changeHandler;
}

// Writable consumer assignment: the write lands in provider state and fans
// back out; the local value updates then, not synchronously.
export function _context_write<T>(
  scope: Scope,
  providerId: string,
  value: T,
): T {
  const provider = scope[AccessorPrefix.ContextLink + providerId] as
    Scope | undefined;
  if (MARKO_DEBUG && !provider?.[changeAccessor]) {
    throw new Error(
      `Cannot write to the <context> value for ${JSON.stringify(providerId)}; no writable provider was found.`,
    );
  }
  provider?.[changeAccessor]?.(value);
  return value;
}

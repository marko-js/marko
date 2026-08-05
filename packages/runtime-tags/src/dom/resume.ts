import {
  branchesEnabled,
  decodeAccessor,
  dynamicHtmlEnabled,
} from "../common/helpers";
import { DEFAULT_RUNTIME_ID } from "../common/meta";
import { forEach, type Opt, push } from "../common/opt";
import {
  AccessorPrefix,
  AccessorProp,
  type AwaitCounter,
  type BranchScope,
  type EncodedAccessor,
  ResumeSymbol,
  type Scope,
} from "../common/types";
import { runEffects } from "./queue";
import { setParentBranch } from "./renderer";
import { destroyScope } from "./scope";
import { _el_read, type Signal } from "./signals";
import { getDebugKey } from "./walker";

type ResumeFn = (ctx: SerializeContext) => unknown;
type ResumeData = (string | number | (string | number)[] | ResumeFn)[];
interface SerializeContext {
  (data: number | (Scope | number)[], registryId?: string): unknown;
  _: Record<string, unknown>;
}
export interface Renders {
  (renderId: string): RenderData;
  [renderId: string]: RenderData;
}
export interface RenderData {
  // RuntimeID + ResumeID
  i: string;
  // Marked nodes to visit
  v: Comment[];
  // Resumes
  r?: ResumeData;
  // Walk
  w(): void;
  // Deserialize scopes and run scripts ("m" for marko)
  m?(effects: unknown[]): unknown[];
  // Blocking resumes keyed by ready id.
  b?: Record<string, ResumeData>;
  /* --- Used by inline runtime --- */

  // Document
  d: never;
  // Walked node lookup
  l: never;
  // Reorder-runtime
  x: never;
  // Reordered scripts
  j?: never;
  // Await counter lookup
  p?: Record<string | number, AwaitCounter>;
}
type RegisteredFn<S extends Scope = Scope> = (scope: S) => void;
type Patcher = (scope: Scope, key: string, value: unknown) => void;

export const registeredValues: Record<string, unknown> = {};
export const patchers: Record<string, Patcher> = {};
// Frame records ahead of the scope tree (`id;walks;template` shell
// strings), registered by the patch feature that understands them.
export let onPatchRecord: ((entry: string) => void) | undefined;
export const _patch_records = (handler: NonNullable<typeof onPatchRecord>) =>
  (onPatchRecord = handler);
// Rejects the applying patch: unwinds to `applyPatch`'s catch, and the
// caller falls back to a full document navigation.
export const failPatch = () => {
  throw 0;
};
// Construct application dispatch: everything in a setup envelope is
// REQUIRED, so misses fail (paired refresh via `patchers` stays soft —
// a shaken fill is a correct no-op).
export const constructPatchers: typeof patchers = {};
export const walkConstruct = (setup: Scope, live: Scope) => {
  for (const key in setup) {
    (
      constructPatchers[
        MARKO_DEBUG ? key.slice(0, key.indexOf(":") + 1) : key[0]
      ] || failPatch()
    )(live, key, setup[key as keyof Scope]);
  }
};
// Applies a patch partial to its live counterpart; structural patchers
// recurse back through here, so no scope is ever addressed by id. An
// entry kind this bundle has no patcher for rejects: skew, never a
// silently unapplied frame.
export const walkScope = (partial: Scope, live: Scope) => {
  for (const key in partial) {
    (
      patchers[
        // Debug accessor prefixes are multi-character, ending ":".
        MARKO_DEBUG ? key.slice(0, key.indexOf(":") + 1) : key[0]
      ] || failPatch()
    )(live, key, partial[key as keyof Scope]);
  }
};
let curRenders: Renders;
let embedRenders:
  | undefined
  | Map<Text, [renderId: string, scopes: Record<string | number, Scope>]>;
// Only assigned by `ready()`, so the lazy stream machinery guarded by
// `readyIds` checks is dropped from apps without lazy tags.
let readyIds: undefined | Set<string>;
let failedIds: undefined | Set<string>;
// Lazy load support latch, set as `dom/load.ts`'s runtime is evaluated, which
// is before any resume; a page without lazy tags folds it and the retention away.
let lazyEnabled: undefined | 1;
let patchRender: RenderData | 0 = 0;
let patching: 0 | 1 = 0;

export function beginPatch(renderId: string) {
  const render = (patchRender = curRenders[renderId]);
  patching = 1;
  return render;
}

export function abortPatch() {
  patchRender = patching = 0;
}

export function ready(readyId: string) {
  (readyIds ||= new Set()).add(readyId);
  for (const renderId in curRenders) {
    runResumeEffects(curRenders[renderId]);
  }
}

// A lazy module that will never arrive can never deliver its channel's
// pending resume data: the debug build records the failure per channel
// (repeat reports fold) and says so instead of staying silent. Production
// builds compile no reporting call sites, so this strips away entirely.
export function readyFailed(readyId: string) {
  if (MARKO_DEBUG) {
    if (failedIds?.has(readyId) || readyIds?.has(readyId)) return;
    (failedIds ||= new Set()).add(readyId);
    console.error(
      `The lazy module for "${readyId}" failed to load; its server-rendered content cannot become interactive.`,
    );
  }
}

export function withLazy<T>(runtime: T) {
  lazyEnabled = 1;
  return runtime;
}

export function initEmbedded(readyId: string, runtimeId?: string) {
  if (!embedRenders) {
    embedRenders = new Map();
    new MutationObserver(() => {
      for (const [anchor, [renderId, scopes]] of embedRenders!) {
        if (!anchor.isConnected) {
          embedRenders!.delete(anchor);
          delete curRenders[renderId];
          for (const id in scopes) {
            destroyScope(scopes[id]);
          }
        }
      }
    }).observe(document, { childList: true, subtree: true });
  }
  ready(readyId);
  init(runtimeId);
}
export function init(runtimeId = DEFAULT_RUNTIME_ID) {
  if (curRenders) {
    if (MARKO_DEBUG) {
      if (curRenders !== (self as any)[runtimeId]) {
        throw new Error(
          `Marko initialized multiple times with different $global.runtimeId's.`,
        );
      }
    }

    return;
  }

  const renders = (self as any)[runtimeId] as Renders | undefined;
  const defineRuntime = (desc: PropertyDescriptor) =>
    Object.defineProperty(self, runtimeId, desc);
  const initRuntime = (renders: Renders) => {
    defineRuntime({
      value: (curRenders = ((renderId: string) => {
        const render = (curRenders[renderId] =
          renders[renderId] || renders(renderId));
        const walk = render.w;
        const scopeLookup: Record<string | number, Scope> = {};
        // Lazily creates scopes on first access so one that serialized no
        // props is indistinguishable from empty; scope 0 is the global.
        const getScope = (id: string | number) =>
          scopeLookup[id] ||
          (+id
            ? initScope((scopeLookup[id] = { [AccessorProp.Id]: +id } as Scope))
            : (initGlobal() as unknown as Scope));
        const initGlobal = () =>
          (scopeLookup[0] ||= {
            runtimeId,
            renderId,
          } as unknown as Scope) as unknown as Scope[typeof AccessorProp.Global];
        const initScope = (scope: Scope) => {
          scope[AccessorProp.Gen] = 1;
          scope[AccessorProp.Global] = initGlobal();
          if (branchesEnabled && scope[AccessorProp.ClosestBranchId]) {
            scope[AccessorProp.ClosestBranch] = getScope(
              scope[AccessorProp.ClosestBranchId],
            ) as BranchScope;
          }
          return scope;
        };
        const applyScopes = (partials: (Scope | number)[]) => {
          if (patching && patchRender === render) {
            // `[...shells, tree]`, anchored at the page root (scope 1); a
            // deferred run applies via `_()`, leaving only a trailing 0.
            let i = 0;
            while (typeof partials[i] === "string") {
              onPatchRecord!(partials[i++] as unknown as string);
            }
            if (partials[i]) {
              walkScope(partials[i] as Scope, getScope(1));
            }
            return;
          }

          let scopeId = partials[0] as number;
          for (let i = 1; i < partials.length; i++) {
            const partial = partials[i];
            if (typeof partial === "number") {
              scopeId += partial;
            } else {
              if (scopeId) {
                // Adopt the partial as the scope when new, else merge into
                // the existing one; re-init so a closest branch id applies.
                initScope(
                  Object.assign(
                    (scopeLookup[scopeId] ||=
                      ((partial[AccessorProp.Id] = scopeId), partial)),
                    partial,
                  ),
                );
              } else {
                Object.assign(initGlobal(), partial);
              }
              scopeId++;
            }
          }
        };
        const serializeContext = ((
          data: number | (Scope | number)[],
          registryId?: string,
        ) =>
          typeof data === "number"
            ? registryId
              ? (registeredValues[registryId] as RegisteredFn)(getScope(data))
              : getScope(data)
            : applyScopes(data)) as SerializeContext;
        const createVisitBranches = (
          branchScopesStack: Opt<BranchScope>[] = [],
          branchStarts: Comment[] = [],
          orphanBranches: BranchScope[] = [],
          deferredOwners: Scope[] = [],
          curBranchScopes?: Opt<BranchScope>,
        ) => {
          return (
            branchId?: number,
            branch?: BranchScope,
            endedBranches?: BranchScope[],
            accessor?: string,
            singleNode?: boolean,
            parent = visit.parentNode!,
            startVisit: ChildNode = visit,
            i = orphanBranches.length,
            j = deferredOwners.length,
          ) => {
            if (visitType !== ResumeSymbol.BranchStart) {
              visitScope[nextToken(/* read accessor */)] =
                visitType === ResumeSymbol.BranchEndOnlyChildInParent ||
                visitType === ResumeSymbol.BranchEndSingleNodeOnlyChildInParent
                  ? parent
                  : visit;
              accessor = AccessorPrefix.BranchScopes + lastToken;
              singleNode =
                visitType !== ResumeSymbol.BranchEnd &&
                visitType !== ResumeSymbol.BranchEndOnlyChildInParent;
              nextToken(/* read optional first branchId */);
            }

            while ((branchId = +lastToken)) {
              (endedBranches ||= []).push(
                (branch = getScope(branchId) as BranchScope),
              );
              setParentBranch(branch, branch[AccessorProp.ClosestBranch]);
              if ((branch[AccessorProp.AwaitCounter] = render.p?.[branchId])) {
                branch[AccessorProp.AwaitCounter].m = render.m;
              }

              if (singleNode) {
                // A set makes this linear but adds ~18 B brotli to every
                // bundle; the scan costs ~1 ms only past ~1000 branches here.
                while (
                  startVisit.previousSibling &&
                  ~visits.indexOf(
                    (startVisit = startVisit.previousSibling) as Comment,
                  )
                );
                branch[AccessorProp.Owner] ??= visitScope;
                branch[AccessorProp.EndNode] = branch[AccessorProp.StartNode] =
                  startVisit;
                if (visitType === ResumeSymbol.BranchEndNativeTag) {
                  branch[MARKO_DEBUG ? getDebugKey(0, startVisit) : "a"] =
                    startVisit;
                }
              } else {
                curBranchScopes = push(curBranchScopes, branch);
                if (accessor) {
                  visitScope[accessor] = curBranchScopes;
                  // Scope data is applied before visits, so a serialized
                  // owner wins; this fills only branches without one.
                  forEach(
                    curBranchScopes,
                    (scope) => (scope[AccessorProp.Owner] ??= visitScope),
                  );
                  curBranchScopes = branchScopesStack.pop();
                }
                startVisit = branchStarts.pop()!;
                if (parent !== startVisit.parentNode) {
                  parent.prepend(startVisit);
                }
                branch[AccessorProp.StartNode] = startVisit;
                branch[AccessorProp.EndNode] =
                  visit.previousSibling === startVisit
                    ? startVisit
                    : parent.insertBefore(new Text(), visit);
              }

              while (i && orphanBranches[i - 1][AccessorProp.Id] > branchId) {
                i--;
                setParentBranch(orphanBranches.pop()!, branch);
              }

              // Link deferred owners nested in this branch (see push below) so
              // their client-created branches join the tree; skips own branches.
              while (j && deferredOwners[j - 1][AccessorProp.Id] > branchId) {
                j--;
                const owner = deferredOwners.pop()!;
                if (owner[AccessorProp.ClosestBranch] !== owner) {
                  owner[AccessorProp.ClosestBranch] = branch;
                }
              }

              nextToken(/* read optional next branchId */);
            }

            if (endedBranches) {
              // Avoids spreading into push, which is capped by engine
              // argument limits for very large branch lists.
              for (const ended of endedBranches) orphanBranches.push(ended);
              if (singleNode) {
                visitScope[accessor!] =
                  endedBranches.length > 1
                    ? endedBranches.reverse()
                    : endedBranches[0];
              }
            }

            if (visitType === ResumeSymbol.BranchStart) {
              if (!endedBranches) {
                branchScopesStack.push(curBranchScopes);
                curBranchScopes = undefined;
              }
              branchStarts.push(visit);
            } else {
              // Defer this owner so its enclosing branch links it above,
              // avoiding a serialized closest-branch id.
              deferredOwners.push(visitScope);
            }
          };
        };
        const nextToken = () =>
          (lastToken = visitText.slice(
            lastTokenIndex,
            (lastTokenIndex =
              visitText.indexOf(" ", lastTokenIndex) + 1 ||
              visitText.length + 1) - 1,
          ));
        const processResumes = (
          resumes: ResumeData = [],
          effects: unknown[],
        ) => {
          let i = 0;
          for (; i < resumes.length; i++) {
            const serialized = resumes[i];
            if (typeof serialized === "string") {
              lastTokenIndex = 0;
              visitText = serialized;
              while (nextToken()) {
                if (/\D/.test(lastToken)) {
                  lastEffect = registeredValues[lastToken];
                } else {
                  effects.push(lastEffect, getScope(lastToken));
                }
              }
            } else if (Array.isArray(serialized)) {
              if (
                !(
                  readyIds &&
                  serialized.every(
                    // A dep's data is flushed before any marker naming it, so
                    // its resumes are present once its module has loaded.
                    (dep) =>
                      readyIds!.has(dep as string) && !render.b![dep].length,
                  )
                )
              ) {
                break;
              }
            } else if (readyIds && typeof serialized === "number") {
              // A reorder reservation gate, will swap
              // when the reordered content arrives.
              break;
            } else {
              // Gates can't reach here (only in ready streams, readyIds set);
              // a payload returns its fill or applies it and ends in `,0`.
              const scopes = (serialized as ResumeFn)(serializeContext);
              if (Array.isArray(scopes)) {
                applyScopes(scopes);
              } else if (patching && patchRender === render && scopes) {
                // A shell-less frame is its bare tree object.
                applyScopes([scopes as Scope]);
              }
            }
          }
          resumes.splice(0, i);
          return i;
        };
        let lastEffect: unknown;
        let visits: RenderData["v"];
        let visit: Comment;
        let visitText: string;
        let visitType: ResumeSymbol;
        let visitScope: Scope;
        let lastToken: string;
        let lastTokenIndex: number;
        let visitBranches: undefined | (() => void);
        let htmlStart: Comment | undefined;
        let embedAnchor: Text | undefined;
        serializeContext._ = registeredValues;

        if (MARKO_DEBUG) {
          if (render.m) {
            throw new Error(
              `Marko rendered multiple times with $global.runtimeId as ${JSON.stringify(runtimeId)} and $global.renderId as ${JSON.stringify(renderId)}. Ensure each render into a page has a unique $global.renderId.`,
            );
          }
        }

        render.m = (effects: unknown[]) => {
          processResumes(render.r, effects);

          if (readyIds && render.b) {
            // Process ready channels to a fixed point — draining one may
            // unblock another's deps marker.
            for (let progress: unknown = 1; progress;) {
              progress = 0;
              for (const readyId of readyIds) {
                const resumes = render.b[readyId];
                if (resumes && processResumes(resumes, effects)) {
                  progress = 1;
                }
              }
            }
          }

          let retained = 0;
          for (visit of (visits = render.v)) {
            lastTokenIndex = render.i.length;
            visitText = visit.data!;
            visitType = visitText[lastTokenIndex++] as ResumeSymbol;
            visitScope = getScope(nextToken(/* read scope id */));

            // Range checks sit behind their latch so they fold away with it;
            // a marker implies its consumer is bundled, so text needs no guard.
            if (
              dynamicHtmlEnabled &&
              visitType > ResumeSymbol.EmptyText &&
              visitType <= ResumeSymbol.HtmlEnd
            ) {
              if (visitType === ResumeSymbol.HtmlStart) {
                htmlStart = visit;
              } else {
                // Both markers join the claimed range so the first update
                // replaces them along with the server-rendered markup.
                visitScope[nextToken(/* read accessor */)] = htmlStart!;
                visitScope[AccessorPrefix.DynamicHTMLLastChild + lastToken] =
                  visit;
              }
            } else if (branchesEnabled && visitType > ResumeSymbol.HtmlEnd) {
              (visitBranches ||= createVisitBranches())();
            } else if (
              // Html and branch visits both retain (compact) here until the
              // lazy module that enables them lands, keeping html pairs whole.
              lazyEnabled &&
              render.b &&
              visitType > ResumeSymbol.EmptyText
            ) {
              visits[retained++] = visit;
            } else {
              visitScope[nextToken(/* read accessor */)] =
                visitType === ResumeSymbol.Node
                  ? visit.previousSibling!
                  : visit.parentNode!.insertBefore(new Text(), visit);
            }
          }

          if (embedRenders && !embedAnchor && visit) {
            // The anchor's disconnection marks the embedded render as
            // removed; the observer destroys its scopes.
            embedRenders.set(
              (embedAnchor = visit.parentNode!.insertBefore(
                new Text(),
                visit.nextSibling,
              )),
              [renderId, scopeLookup],
            );
          }

          visits.length = retained;
          return effects;
        };

        render.w = () => {
          walk();
          runResumeEffects(render);
        };

        return render;
      }) as Renders),
    });
  };
  if (renders) {
    initRuntime(renders);
    for (const renderId in renders) {
      runResumeEffects((curRenders as Renders)(renderId));
    }
  } else {
    defineRuntime({
      configurable: true,
      set: initRuntime,
    });
  }
}

export let isResuming: undefined | 0 | 1;

function runResumeEffects(render: RenderData) {
  try {
    isResuming = 1;
    runEffects(render.m!([]), 1);
  } finally {
    isResuming = 0;
  }
}

export function getRegisteredWithScope(id: string, scope?: Scope) {
  const val = registeredValues[id];
  return scope ? (val as RegisteredFn)(scope) : val;
}

export function _resume<T>(id: string, obj: T): T {
  return (registeredValues[id] = obj);
}

// Registers a branch's construct-init closure. Same behavior as `_resume`
// but every call site is `@__PURE__`, so the registration rides its
// signal's liveness: tree shaking drops both together and a construct
// needing the init fails closed instead of half-wiring.
export { _resume as _resume_init };

export function _var_resume<T extends Signal<unknown>>(
  id: string,
  signal: T,
): T {
  _resume(id, (scope: Scope) => (value: unknown) => signal(scope, value));
  return signal;
}

export function _el(id: string, accessor: EncodedAccessor) {
  if (MARKO_DEBUG) {
    return _resume(id, (scope: Scope) => () => _el_read(scope[accessor]));
  } else {
    accessor = decodeAccessor(accessor as number);
    return _resume(id, (scope: Scope) => () => scope[accessor]);
  }
}

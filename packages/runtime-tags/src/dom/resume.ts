import { decodeAccessor } from "../common/helpers";
import { DEFAULT_RUNTIME_ID } from "../common/meta";
import { type Opt, push } from "../common/opt";
import {
  AccessorPrefix,
  AccessorProp,
  type AwaitCounter,
  type BranchScope,
  type EncodedAccessor,
  ResumeSymbol,
  type Scope,
} from "../common/types";
import { runEffects, skipDestroyedRenders } from "./queue";
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

const registeredValues: Record<string, unknown> = {};
let curRenders: Renders;
let branchesEnabled: undefined | 1;
let embedRenders:
  | undefined
  | Map<Text, [renderId: string, scopes: Record<string | number, Scope>]>;
// Only assigned by `ready()`, so the lazy stream machinery guarded by
// `readyIds` checks is dropped from apps without lazy tags.
let readyIds: undefined | Set<string>;

export function enableBranches() {
  if (!branchesEnabled) {
    branchesEnabled = 1;
    skipDestroyedRenders();
  }
}

export function ready(readyId: string) {
  (readyIds ||= new Set()).add(readyId);
  for (const renderId in curRenders) {
    runResumeEffects(curRenders[renderId]);
  }
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
        // Scopes initialize on creation so a scope that serialized no
        // props (elided from the fill entirely) is indistinguishable from
        // an empty one when reached through visits/effects/references.
        // Globals are scope 0, so `_(0)` lets payloads reference values
        // first serialized within them.
        const getScope = (id: string | number) =>
          scopeLookup[id] ||
          (+id
            ? initScope((scopeLookup[id] = { [AccessorProp.Id]: +id } as Scope))
            : (initGlobal() as unknown as Scope));
        const initGlobal = () =>
          (scopeLookup[0] ||= {
            runtimeId,
            renderId,
          } as unknown as Scope) as unknown as Scope[AccessorProp.Global];
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
          let scopeId = partials[0] as number;
          for (let i = 1; i < partials.length; i++) {
            const partial = partials[i];
            if (typeof partial === "number") {
              scopeId += partial;
            } else {
              if (scopeId) {
                // Adopts the partial as the scope when it is new (assigning
                // it onto itself is a no-op); merging into an existing scope
                // re-initializes it so a closest branch id arriving in this
                // fill applies.
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
                while (
                  startVisit.previousSibling &&
                  ~visits.indexOf(
                    (startVisit = startVisit.previousSibling) as Comment,
                  )
                );
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

              while (i && orphanBranches[--i][AccessorProp.Id] > branchId) {
                setParentBranch(orphanBranches.pop()!, branch);
              }

              // Link deferred owners nested in this branch (see push below) so
              // their client-created branches join the tree; skips own branches.
              while (j && deferredOwners[--j][AccessorProp.Id] > branchId) {
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
                    // A dep's data is always flushed before a marker that
                    // names it (bindings only reference already written
                    // values), so its resumes are guaranteed present once
                    // its module has loaded.
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
              // Gates cannot reach here: they only occur in ready streams,
              // which are processed with `readyIds` set. A payload either
              // returns its fill array directly, or applies it through the
              // serialize context and ends in `,0` so its return value can
              // never be mistaken for a fill.
              const scopes = (serialized as ResumeFn)(serializeContext);
              if (Array.isArray(scopes)) applyScopes(scopes);
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
            for (let progress: unknown = 1; progress; ) {
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

            if (visitType === ResumeSymbol.Node) {
              const prev = visit.previousSibling;
              visitScope[nextToken(/* read accessor */)] =
                prev &&
                (prev.nodeType < 8 /* Node.COMMENT_NODE */ ||
                  (prev as Comment).data)
                  ? prev
                  : visit.parentNode!.insertBefore(new Text(), visit);
            } else if (branchesEnabled) {
              (visitBranches ||= createVisitBranches())();
            } else if (render.b) {
              // Pending ready data means a lazily loaded module may still
              // enable branches; its visits ride the same flush as the
              // ready data, so they are compacted in place to reprocess.
              visits[retained++] = visit;
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

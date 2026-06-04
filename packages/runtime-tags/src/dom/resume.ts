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
import { runEffects } from "./queue";
import { setParentBranch } from "./renderer";
import { destroyScope } from "./scope";
import { _el_read, type Signal } from "./signals";
import { getDebugKey } from "./walker";

type Resumes = (number | Scope)[];
type ResumeFn = (ctx: object) => Resumes;
type ResumeData = (string | ResumeFn)[] & { c?: number };
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
  // Scope lookup (just needed for compat layer)
  s?: Record<string, Scope>;
  // Walk
  w(): void;
  // Deserialize scopes and run scripts ("m" for marko)
  m?(): unknown[];
  // Reference node used for embedded renders.
  n?: Text;
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
let embedObserver: undefined | MutationObserver;
let readyIds: undefined | string[];

export function enableBranches() {
  branchesEnabled = 1;
}

export function ready(readyId: string, runtimeId?: string) {
  (readyIds ||= []).push(readyId);
  init(runtimeId);
  for (const renderId in curRenders) {
    runResumeEffects(curRenders[renderId]);
  }
}

export function initEmbedded(readyId: string, runtimeId?: string) {
  (embedObserver ||= new MutationObserver(() => {
    for (const renderId in curRenders) {
      const { s, n } = curRenders[renderId];
      if (n && !n.isConnected) {
        delete curRenders[renderId];
        for (const id in s) {
          destroyScope(s[id]);
        }
      }
    }
  })).observe(document, { childList: true, subtree: true });
  ready(readyId, runtimeId);
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
        const scopeLookup: Record<string | number, Scope> = (render.s = {});
        const getScope = (id: string | number) =>
          (scopeLookup[id] ||= { [AccessorProp.Id]: +id } as Scope);
        const serializeContext: Record<string, unknown> = {
          _: registeredValues,
        };
        const visitBranches =
          branchesEnabled &&
          ((
            branchScopesStack: Opt<BranchScope>[] = [],
            branchStarts: Comment[] = [],
            orphanBranches: BranchScope[] = [],
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
            ) => {
              if (visitType !== ResumeSymbol.BranchStart) {
                visitScope[nextToken(/* read accessor */)] =
                  visitType === ResumeSymbol.BranchEndOnlyChildInParent ||
                  visitType ===
                    ResumeSymbol.BranchEndSingleNodeOnlyChildInParent
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
                if (
                  (branch[AccessorProp.AwaitCounter] = render.p?.[branchId])
                ) {
                  branch[AccessorProp.AwaitCounter].m = render.m;
                }

                if (singleNode) {
                  while (
                    startVisit.previousSibling &&
                    ~visits.indexOf(
                      (startVisit = startVisit.previousSibling) as Comment,
                    )
                  );
                  branch[AccessorProp.EndNode] = branch[
                    AccessorProp.StartNode
                  ] = startVisit;
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

                nextToken(/* read optional next branchId */);
              }

              if (endedBranches) {
                orphanBranches.push(...endedBranches);
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
              }
            };
          })();
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
          let lastScopeId = resumes.c || 0;
          for (const serialized of resumes) {
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
            } else {
              for (let scope of serialized(serializeContext)) {
                if (!$global) {
                  $global = (scope || {}) as Scope[AccessorProp.Global];
                  $global.runtimeId = runtimeId;
                  $global.renderId = renderId;
                } else if (typeof scope === "number") {
                  lastScopeId += scope;
                } else {
                  scope[AccessorProp.Id] = ++lastScopeId;
                  if (scopeLookup[lastScopeId]) {
                    scope = Object.assign(scopeLookup[lastScopeId], scope);
                  } else {
                    scopeLookup[lastScopeId] = scope;
                  }
                  scope[AccessorProp.Global] = $global;
                  if (branchesEnabled) {
                    scope[AccessorProp.ClosestBranch] = getScope(
                      scope[AccessorProp.ClosestBranchId]!,
                    ) as BranchScope;
                  }
                }
              }
            }
          }
          resumes.c = lastScopeId;
          resumes.length = 0;
        };
        let $global: Scope[AccessorProp.Global] | undefined;
        let lastEffect: unknown;
        let visits: RenderData["v"];
        let visit: Comment;
        let visitText: string;
        let visitType: ResumeSymbol;
        let visitScope: Scope;
        let lastToken: string;
        let lastTokenIndex: number;

        if (MARKO_DEBUG) {
          if (render.m) {
            throw new Error(
              `Marko rendered multiple times with $global.runtimeId as ${JSON.stringify(runtimeId)} and $global.renderId as ${JSON.stringify(renderId)}. Ensure each render into a page has a unique $global.renderId.`,
            );
          }
        }

        render.m = (effects: unknown[] = []) => {
          if (readyIds) {
            readyIds.forEach((renderId) =>
              processResumes(render.b?.[renderId], effects),
            );
          }

          processResumes(render.r, effects);

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
              visitBranches!();
            }
          }

          if (embedObserver) {
            render.n ||= visit?.parentNode!.insertBefore(
              new Text(),
              visit.nextSibling,
            );
          }

          visits.length = 0;
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
    runEffects(render.m!(), 1);
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

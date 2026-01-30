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
import { _el_read, type Signal } from "./signals";
import { getDebugKey } from "./walker";

type Resumes = (number | Scope)[];
type ResumeFn = (ctx: object) => Resumes;
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
  r?: (string | ResumeFn)[];
  // Scope lookup (just needed for compat layer)
  s?: Record<string, Scope>;
  // Walk
  w(): void;
  // Deserialize scopes and run scripts ("m" for marko)
  m(): unknown[];

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
let branchesEnabled: undefined | 1;
export function enableBranches() {
  branchesEnabled = 1;
}
export function init(runtimeId = DEFAULT_RUNTIME_ID) {
  if (MARKO_DEBUG) {
    const descriptor = Object.getOwnPropertyDescriptor(self, runtimeId);
    if (descriptor && (descriptor.set || descriptor.configurable === false)) {
      throw new Error(
        `Marko initialized multiple times with the same $global.runtimeId of ${JSON.stringify(runtimeId)}. It could be that there are multiple copies of Marko running on the page.`,
      );
    }
  }

  const renders = (self as any)[runtimeId] as Renders | undefined;
  const defineRuntime = (desc: PropertyDescriptor) =>
    Object.defineProperty(self, runtimeId, desc);
  let resumeRender: Renders;
  const initRuntime = (renders: Renders) => {
    defineRuntime({
      value: (resumeRender = ((renderId: string) => {
        const render = (resumeRender[renderId] =
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
        let $global: Scope[AccessorProp.Global] | undefined;
        let lastEffect: unknown;
        let visits: RenderData["v"];
        let resumes: NonNullable<RenderData["r"]>;
        let visit: Comment;
        let visitText: string;
        let visitType: ResumeSymbol;
        let visitScope: Scope;
        let lastToken: string;
        let lastTokenIndex: number;
        let lastScopeId = 0;
        const nextToken = () =>
          (lastToken = visitText.slice(
            lastTokenIndex,
            (lastTokenIndex =
              visitText.indexOf(" ", lastTokenIndex) + 1 ||
              visitText.length + 1) - 1,
          ));

        render.m = (effects: unknown[] = []) => {
          for (const serialized of (resumes = render.r || [])) {
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
              for (const scope of serialized(serializeContext)) {
                if (!$global) {
                  $global = (scope || {}) as Scope[AccessorProp.Global];
                  $global.runtimeId = runtimeId;
                  $global.renderId = renderId;
                } else if (typeof scope === "number") {
                  lastScopeId += scope;
                } else {
                  scopeLookup[(scope[AccessorProp.Id] = ++lastScopeId)] = scope;
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

          for (visit of (visits = render.v)) {
            lastTokenIndex = render.i.length;
            visitText = visit.data!;
            visitType = visitText[lastTokenIndex++] as ResumeSymbol;
            visitScope = getScope(nextToken(/* read scope id */));

            // TODO: switch?
            if (visitType === ResumeSymbol.Node) {
              visitScope[nextToken(/* read accessor */)] =
                visit.previousSibling;
            } else if (branchesEnabled) {
              visitBranches!();
            }
          }

          visits.length = resumes.length = 0;

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
      runResumeEffects(resumeRender!(renderId));
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
    runEffects(render.m(), 1);
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

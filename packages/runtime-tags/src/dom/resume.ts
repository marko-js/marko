import { decodeAccessor } from "../common/helpers";
import { DEFAULT_RUNTIME_ID } from "../common/meta";
import { type Opt, push } from "../common/opt";
import {
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  type EncodedAccessor,
  ResumeSymbol,
  type Scope,
} from "../common/types";
import { queueEffect, run } from "./queue";
import type { Signal } from "./signals";
import { getDebugKey } from "./walker";

type Resumes = (number | Scope)[];
type ResumeFn = (ctx: object) => Resumes;
interface Renders {
  (renderId: string): RenderData;
  [renderId: string]: RenderData;
}
interface RenderData {
  // RuntimeID + ResumeID
  i: string;
  // Marked nodes to visit
  v: Comment[];
  // Resumes
  r?: (string | number | ResumeFn)[];
  // Scope lookup (just needed for compat layer)
  s?: Record<string, Scope>;
  // Walk
  w(): void;
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
        const serializeContext: Record<string, unknown> = {
          _: registeredValues,
        };
        const visitBranches =
          branchesEnabled &&
          (() => {
            let curBranchScopes: Opt<BranchScope>;
            const branchScopesStack: Opt<BranchScope>[] = [];
            const branchStarts: Comment[] = [];
            const orphanBranches: BranchScope[] = [];
            const endBranch = (accessor?: string, singleNode?: boolean) => {
              const parent = visit.parentNode!;
              let startVisit: ChildNode = visit;
              let i = orphanBranches.length;
              let branchId: number;
              let branch: BranchScope;
              let childBranch: BranchScope;
              let endedBranches: BranchScope[] | undefined;

              while ((branchId = +lastToken)) {
                (endedBranches ||= []).push(
                  (branch = (scopeLookup[branchId] ||= {
                    [AccessorProp.Id]: branchId,
                  } as BranchScope) as BranchScope),
                );
                branch[AccessorProp.ClosestBranch] = branch;

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
                  (childBranch = orphanBranches.pop()!)[
                    AccessorProp.ParentBranch
                  ] = branch;
                  (branch[AccessorProp.BranchScopes] ||= new Set()).add(
                    childBranch,
                  );
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
            };

            return () => {
              if (visitType === ResumeSymbol.BranchStart) {
                if (lastToken) {
                  endBranch();
                } else {
                  branchScopesStack.push(curBranchScopes);
                  curBranchScopes = undefined;
                }
                branchStarts.push(visit);
              } else {
                visitScope[
                  AccessorPrefix.Getter + nextToken(/* read accessor */)
                ] = (
                  (node) => () =>
                    node
                )(
                  (visitScope[lastToken] =
                    visitType === ResumeSymbol.BranchEndOnlyChildInParent ||
                    visitType ===
                      ResumeSymbol.BranchEndSingleNodeOnlyChildInParent
                      ? visit.parentNode
                      : visit),
                );
                endBranch(
                  AccessorPrefix.BranchScopes + lastToken,
                  (nextToken(/* read optional first branchId */),
                  visitType !== ResumeSymbol.BranchEnd &&
                    visitType !== ResumeSymbol.BranchEndOnlyChildInParent),
                );
              }
            };
          })();
        let $global: Scope[AccessorProp.Global] | undefined;
        let lastScopeId = 0;
        let lastEffect: string | undefined;
        let visits: RenderData["v"];
        let resumes: NonNullable<RenderData["r"]>;
        let visit: Comment;
        let visitText: string;
        let visitType: ResumeSymbol;
        let visitScope: Scope;
        let lastToken: string | 0;
        let lastTokenIndex: number;
        const nextToken = () =>
          (lastToken = visitText.slice(
            lastTokenIndex,
            // eslint-disable-next-line no-cond-assign
            (lastTokenIndex = visitText.indexOf(" ", lastTokenIndex) + 1)
              ? lastTokenIndex - 1
              : visitText.length,
          ));

        render.w = () => {
          try {
            walk();
            isResuming = 1;

            for (const serialized of (resumes = render.r || [])) {
              if (typeof serialized === "string") {
                lastEffect = serialized;
              } else if (typeof serialized === "number") {
                queueEffect(
                  (scopeLookup[serialized] ||= {
                    [AccessorProp.Id]: serialized,
                  } as Scope),
                  registeredValues[lastEffect!] as any,
                );
              } else {
                for (const scope of serialized(serializeContext)) {
                  if (!$global) {
                    $global = (scope || {}) as Scope[AccessorProp.Global];
                    $global.runtimeId = runtimeId;
                    $global.renderId = renderId;
                  } else if (typeof scope === "number") {
                    lastScopeId += scope;
                  } else {
                    scopeLookup[(scope[AccessorProp.Id] = ++lastScopeId)] =
                      scope;
                    scope[AccessorProp.Global] = $global;
                    if (branchesEnabled) {
                      scope[AccessorProp.ClosestBranch] = scopeLookup[
                        scope[AccessorProp.ClosestBranchId]!
                      ] as BranchScope;
                    }
                  }
                }
              }
            }

            for (visit of (visits = render.v)) {
              lastTokenIndex = render.i.length;
              visitText = visit.data!;
              visitType = visitText[lastTokenIndex++] as ResumeSymbol;
              visitScope = scopeLookup[+(nextToken(/* read scope id */))] ||= {
                [AccessorProp.Id]: +lastToken,
              } as Scope;

              // TODO: switch?
              if (visitType === ResumeSymbol.Node) {
                // TODO: could we use attr marker?
                visitScope[AccessorPrefix.Getter + nextToken()] = (
                  (node) => () =>
                    node
                )((visitScope[lastToken] = visit.previousSibling));
              } else if (branchesEnabled) {
                visitBranches!();
              }
            }

            run();
          } finally {
            isResuming = visits.length = resumes.length = 0;
          }
        };
        return render;
      }) as Renders),
    });
  };
  if (renders) {
    initRuntime(renders);
    for (const renderId in renders) {
      resumeRender!(renderId).w();
    }
  } else {
    defineRuntime({
      configurable: true,
      set: initRuntime,
    });
  }
}

export let isResuming: undefined | 0 | 1;

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
  const getterAccessor =
    AccessorPrefix.Getter +
    (MARKO_DEBUG ? accessor : decodeAccessor(accessor as number));
  return _resume(id, (scope: Scope) => () => {
    return scope[getterAccessor]();
  });
}

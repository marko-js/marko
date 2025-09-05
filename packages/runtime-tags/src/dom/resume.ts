import { DEFAULT_RUNTIME_ID } from "../common/meta";
import {
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  ResumeSymbol,
  type Scope,
} from "../common/types";
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
        const branches =
          branchesEnabled &&
          (() => {
            const branchParents = new Map<number, number>();
            const branchStarts: Comment[] = [];
            const orphanBranches: number[] = [];
            const endBranch = (singleNode?: boolean) => {
              const parent = visit.parentNode!;
              let startVisit: ChildNode = visit;
              let i = orphanBranches.length;
              let claimed = 0;
              let branchId: number;
              let branch: BranchScope;

              while ((branchId = +lastToken)) {
                branch = (scopeLookup[branchId] ||=
                  {} as BranchScope) as BranchScope;

                if (singleNode) {
                  while (
                    startVisit.previousSibling &&
                    ~visits.indexOf(
                      (startVisit = startVisit.previousSibling) as Comment,
                    )
                  );
                  branch.___endNode = branch.___startNode = startVisit;
                  if (visitType === ResumeSymbol.BranchEndNativeTag) {
                    branch[MARKO_DEBUG ? getDebugKey(0, startVisit) : 0] =
                      startVisit;
                  }
                } else {
                  startVisit = branchStarts.pop()!;
                  if (parent !== startVisit.parentNode) {
                    parent.prepend(startVisit);
                  }
                  branch.___startNode = startVisit;
                  branch.___endNode =
                    visit.previousSibling === startVisit
                      ? startVisit
                      : parent.insertBefore(new Text(), visit);
                }

                while (i-- && orphanBranches[i] > branchId) {
                  branchParents.set(orphanBranches[i], branchId);
                  claimed++;
                }

                orphanBranches.push(branchId);
                branchParents.set(branchId, 0);

                nextToken(); // read optional next branchId
              }

              orphanBranches.splice(i, claimed);
            };

            return {
              ___visit() {
                if (visitType === ResumeSymbol.BranchStart) {
                  endBranch();
                  branchStarts.push(visit);
                } else {
                  visitScope[nextToken() /* read accessor */] =
                    visitType === ResumeSymbol.BranchEndOnlyChildInParent ||
                    visitType ===
                      ResumeSymbol.BranchEndSingleNodeOnlyChildInParent
                      ? visit.parentNode
                      : visit;
                  nextToken(); // read optional first branchId
                  endBranch(
                    visitType !== ResumeSymbol.BranchEnd &&
                      visitType !== ResumeSymbol.BranchEndOnlyChildInParent,
                  );
                }
              },
              ___scope(scope: Scope) {
                scope.___closestBranch = scopeLookup[
                  (scope[AccessorProp.ClosestBranchId] as number | undefined) ||
                    branchParents.get(scopeId)!
                ] as BranchScope;

                if (branchParents.has(scopeId)) {
                  if (scope.___closestBranch) {
                    (((scope as BranchScope).___parentBranch =
                      scope.___closestBranch).___branchScopes ||=
                      new Set()).add(scope as BranchScope);
                  }
                  scope.___closestBranch = scope as BranchScope;
                }
              },
            };
          })();
        let $global: Scope["$global"] | undefined;
        let lastScopeId = 0;
        let lastEffect: string | undefined;
        let visits: RenderData["v"];
        let resumes: NonNullable<RenderData["r"]>;
        let scopeId: number;
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

            for (visit of (visits = render.v)) {
              lastTokenIndex = render.i.length;
              visitText = visit.data!;
              visitType = visitText[lastTokenIndex++] as ResumeSymbol;

              if ((scopeId = +nextToken()) /* read scope id */) {
                visitScope = scopeLookup[scopeId] ||= {
                  ___id: scopeId,
                } as Scope;
              }

              // TODO: switch?
              if (visitType === ResumeSymbol.Node) {
                // TODO: could we use attr marker?
                visitScope[AccessorPrefix.Getter + nextToken()] = (
                  (node) => () =>
                    node
                )((visitScope[lastToken] = visit.previousSibling));
              } else if (branchesEnabled) {
                branches!.___visit();
              }
            }

            for (const serialized of (resumes = render.r || [])) {
              if (typeof serialized === "string") {
                lastEffect = serialized;
              } else if (typeof serialized === "number") {
                (registeredValues[lastEffect!] as any)(
                  (scopeLookup[serialized] ||= {
                    ___id: scopeId,
                  } as Scope),
                  scopeLookup[serialized],
                );
              } else {
                for (const scope of serialized(serializeContext)) {
                  if (!$global) {
                    $global = (scope || {}) as Scope["$global"];
                    $global.runtimeId = runtimeId;
                    $global.renderId = renderId;
                    $global.___nextScopeId = 1e6;
                  } else if (typeof scope === "number") {
                    lastScopeId += scope;
                  } else {
                    scopeId = ++lastScopeId;
                    scope.$global = $global;
                    scope.___id = scopeId;
                    if (scopeLookup[scopeId] !== scope) {
                      scopeLookup[scopeId] = Object.assign(
                        scope,
                        scopeLookup[scopeId],
                      ) as Scope;
                    }

                    if (branchesEnabled) {
                      branches!.___scope(scope);
                    }

                    if (MARKO_DEBUG) {
                      scope.___debugId = "server-" + scopeId;
                    }
                  }
                }
              }
            }
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

export function _resume<T>(id: string, obj: T): T {
  registeredValues[id] = obj;
  return obj;
}

export function _var_resume<T extends Signal<unknown>>(
  id: string,
  signal: T,
): T {
  registeredValues[id] = (scope: Scope) => (value: unknown) =>
    signal(scope, value);
  return signal;
}

export function getRegisteredWithScope(id: string, scope?: Scope) {
  const val = registeredValues[id];
  return scope ? (val as RegisteredFn)(scope) : val;
}

export function _el(id: string, key: string) {
  return _resume(id, (scope: Scope) => () => scope[key]());
}

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
        const commentPrefixLen = render.i.length;
        const scopeLookup: Record<string | number, Scope> = (render.s = {});
        const serializeContext: Record<string, unknown> = {
          _: registeredValues,
        };
        const branches =
          branchesEnabled &&
          (() => {
            const branchStack: number[] = [];
            const branchIds = new Set<number>();
            const parentBranchIds = new Map<number, number>();
            let lastEndNode: ChildNode | undefined;
            let currentBranchId: number | undefined;
            const endBranch = (branchId: number, reference: ChildNode) => {
              const branch = (scopeLookup[branchId] ||=
                {} as BranchScope) as BranchScope;
              let endNode = reference;
              let prevNode: ChildNode | null;

              while (
                (prevNode = endNode.previousSibling) !== branch.___startNode &&
                ~visits.indexOf((endNode = prevNode as Comment))
              );

              branch.___endNode = lastEndNode =
                endNode === lastEndNode
                  ? reference.parentNode!.insertBefore(new Text(), reference)
                  : endNode;
              branch.___startNode ||= lastEndNode;

              branchIds.add(branchId);
              return branch;
            };

            return {
              ___visit() {
                if (visitToken === ResumeSymbol.BranchStart) {
                  if (currentBranchId && visitDataIndex) {
                    endBranch(currentBranchId, visit);
                    currentBranchId = branchStack.pop();
                  }
                  if (currentBranchId) {
                    branchStack.push(currentBranchId);
                    parentBranchIds!.set(scopeId, currentBranchId);
                  }
                  currentBranchId = scopeId;
                  (visitScope as BranchScope).___startNode = visit;
                } else if (visitToken === ResumeSymbol.BranchEnd) {
                  const curParent = visit.parentNode!;
                  const startNode = endBranch(
                    currentBranchId!,
                    visit,
                  ).___startNode;
                  visitScope[visitData] = visit;

                  if (curParent !== startNode.parentNode) {
                    curParent.prepend(startNode);
                  }
                  currentBranchId = branchStack.pop();
                } else {
                  /**
                   * visitToken === ResumeSymbol.BranchNativeTag ||
                   * visitToken === ResumeSymbol.BranchSingleNode ||
                   * visitToken === ResumeSymbol.BranchSingleNodeOnlyChildInParent
                   */
                  let next = visitData.indexOf(" ");
                  let curNode: ChildNode = visit;
                  visitScope[~next ? visitData.slice(0, next) : visitData] =
                    visitToken ===
                    ResumeSymbol.BranchSingleNodeOnlyChildInParent
                      ? visit.parentNode
                      : visit;
                  while (~next) {
                    const start = next + 1;
                    next = visitData.indexOf(" ", start);
                    const childScopeId = +visitData.slice(
                      start,
                      ~next ? next : visitData.length,
                    );
                    curNode = endBranch(childScopeId, curNode).___endNode;
                    parentBranchIds.set(childScopeId, scopeId);

                    if (visitToken === ResumeSymbol.BranchNativeTag) {
                      const childBranch = scopeLookup[childScopeId];
                      // const childTag = curNode.previousSibling as Element;
                      childBranch[MARKO_DEBUG ? getDebugKey(0, curNode) : 0] =
                        childBranch.___startNode =
                        childBranch.___endNode =
                          curNode;
                    }
                  }
                }
              },
              ___scope(scope: Scope) {
                const parentBranchId =
                  (scope[AccessorProp.ClosestBranchId] as number | undefined) ||
                  parentBranchIds.get(scopeId);
                if (parentBranchId) {
                  scope.___closestBranch = scopeLookup[
                    parentBranchId
                  ] as BranchScope;
                }

                if (branchIds.has(scopeId)) {
                  const branch = scope as BranchScope;
                  const parentBranch = branch.___closestBranch;

                  scope.___closestBranch = branch;
                  if (parentBranch) {
                    branch.___parentBranch = parentBranch;
                    (parentBranch.___branchScopes ||= new Set()).add(branch);
                  }
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
        let visitData: string;
        let visitDataIndex: number;
        let visitToken: ResumeSymbol;
        let visitScope: Scope;
        render.w = () => {
          try {
            walk();
            isResuming = 1;

            for (visit of (visits = render.v)) {
              visitText = visit.data!;
              visitDataIndex = visitText.indexOf(" ") + 1;
              scopeId = +visitText.slice(
                commentPrefixLen + 1,
                visitDataIndex ? visitDataIndex - 1 : visitText.length,
              );
              visitData = visitDataIndex ? visitText.slice(visitDataIndex) : "";
              visitToken = visitText[commentPrefixLen] as ResumeSymbol;
              visitScope = scopeLookup[scopeId] ||= {
                ___id: scopeId,
              } as Scope;

              // TODO: switch?
              if (visitToken === ResumeSymbol.Node) {
                // TODO: could we use attr marker?
                visitScope[AccessorPrefix.Getter + visitData] = (
                  (node) => () =>
                    node
                )((visitScope[visitData] = visit.previousSibling));
              } else if (branches) {
                branches.___visit();
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

                    if (branches) {
                      branches.___scope(scope);
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

export function register<T>(id: string, obj: T): T {
  registeredValues[id] = obj;
  return obj;
}

export function registerBoundSignal<T extends Signal<unknown>>(
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

export function nodeRef(id: string, key: string) {
  return register(id, (scope: Scope) => () => scope[key]());
}

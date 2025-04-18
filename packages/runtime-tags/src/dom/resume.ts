import { DEFAULT_RUNTIME_ID } from "../common/meta";
import {
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  ResumeSymbol,
  type Scope,
} from "../common/types";
import type { Signal } from "./signals";

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
export let branchesEnabled: undefined | 1;
export function enableBranches() {
  branchesEnabled = 1;
}
export function init(runtimeId = DEFAULT_RUNTIME_ID) {
  if (MARKO_DEBUG) {
    if (!runtimeId.match(/^[_$a-z][_$a-z0-9]*$/i)) {
      throw new Error(
        `Invalid runtimeId: "${runtimeId}". The runtimeId must be a valid JavaScript identifier.`,
      );
    }

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
        const branchStack: number[] = [];
        const scopeLookup: Record<string | number, Scope> = (render.s = {});
        const serializeContext: Record<string, unknown> = {
          _: registeredValues,
        };
        const branchIds = new Set<number>();
        const parentBranchIds = new Map<number, number>();
        const branchEnd = (branchId: number, reference: ChildNode) => {
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
        let currentBranchId: number | undefined;
        let $global: Scope["$global"] | undefined;
        let lastScopeId = 0;
        let lastEffect: string | undefined;
        let lastEndNode: ChildNode | undefined;
        let visits: RenderData["v"];
        let resumes: NonNullable<RenderData["r"]>;
        render.w = () => {
          try {
            walk();
            isResuming = 1;

            for (const visit of (visits = render.v)) {
              const commentText = visit.data!;
              const dataIndex = commentText.indexOf(" ") + 1;
              const scopeId = +commentText.slice(
                commentPrefixLen + 1,
                dataIndex ? dataIndex - 1 : commentText.length,
              );
              const scope = (scopeLookup[scopeId] ||= {
                ___id: scopeId,
              } as Scope);
              const data = dataIndex ? commentText.slice(dataIndex) : "";
              const token = commentText[commentPrefixLen];

              // TODO: switch?
              if (token === ResumeSymbol.Node) {
                // TODO: could we use attr marker?
                const node = (scope[data] = visit.previousSibling);
                scope[AccessorPrefix.Getter + data] = () => node;
              } else if (branchesEnabled) {
                if (token === ResumeSymbol.BranchStart) {
                  if (currentBranchId && dataIndex) {
                    branchEnd(currentBranchId, visit);
                    currentBranchId = branchStack.pop();
                  }
                  if (currentBranchId) {
                    branchStack.push(currentBranchId);
                    parentBranchIds.set(scopeId, currentBranchId);
                  }
                  currentBranchId = scopeId;
                  (scope as BranchScope).___startNode = visit;
                } else if (token === ResumeSymbol.BranchEnd) {
                  scope[data] = visit;
                  const curParent = visit.parentNode!;
                  const startNode = branchEnd(
                    currentBranchId!,
                    visit,
                  ).___startNode;
                  if (curParent !== startNode.parentNode) {
                    curParent.prepend(startNode);
                  }
                  currentBranchId = branchStack.pop();
                } else if (
                  token === ResumeSymbol.BranchSingleNode ||
                  token === ResumeSymbol.BranchSingleNodeOnlyChildInParent
                ) {
                  let next = data.indexOf(" ");
                  let curNode: ChildNode = visit;
                  scope[~next ? data.slice(0, next) : data] =
                    token === ResumeSymbol.BranchSingleNodeOnlyChildInParent
                      ? visit.parentNode
                      : visit;
                  while (~next) {
                    const start = next + 1;
                    next = data.indexOf(" ", start);
                    const childScopeId = +data.slice(
                      start,
                      ~next ? next : data.length,
                    );
                    curNode = branchEnd(childScopeId, curNode).___endNode;
                    parentBranchIds.set(childScopeId, scopeId);
                  }
                }
              }
            }

            for (const serialized of (resumes = render.r || [])) {
              if (typeof serialized === "string") {
                lastEffect = serialized;
              } else if (typeof serialized === "number") {
                (registeredValues[lastEffect!] as any)(
                  scopeLookup[serialized],
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
                    const scopeId = ++lastScopeId;
                    const prevScope = scopeLookup[scopeId];
                    scope.$global = $global;
                    scope.___id = scopeId;
                    if (prevScope !== scope) {
                      scopeLookup[scopeId] = Object.assign(
                        scope,
                        prevScope,
                      ) as Scope;
                    }

                    if (branchesEnabled) {
                      const parentBranchId =
                        (scope[AccessorProp.ClosestBranchId] as
                          | number
                          | undefined) || parentBranchIds.get(scopeId);
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
                          (parentBranch.___branchScopes ||= new Set()).add(
                            branch,
                          );
                        }
                      }
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

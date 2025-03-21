import { DEFAULT_RUNTIME_ID } from "../common/meta";
import {
  AccessorPrefix,
  type BranchScope,
  ResumeSymbol,
  type Scope,
} from "../common/types";
import type { Signal } from "./signals";

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
  r?: (string | number | ((ctx: object) => Record<string, Scope>))[];
  // Scope lookup (just needed for compat layer)
  s?: Record<string, Scope>;
  // Walk
  w(): void;
}
type RegisteredFn<S extends Scope = Scope> = (scope: S) => void;

const registeredValues: Record<string, unknown> = {};

export function init(runtimeId = DEFAULT_RUNTIME_ID) {
  if (MARKO_DEBUG) {
    if (!runtimeId.match(/^[_$a-z][_$a-z0-9]*$/i)) {
      throw new Error(
        `Invalid runtimeId: "${runtimeId}". The runtimeId must be a valid JavaScript identifier.`,
      );
    }

    const descriptor = Object.getOwnPropertyDescriptor(window, runtimeId);
    if (descriptor && (descriptor.set || descriptor.configurable === false)) {
      throw new Error(
        `Marko initialized multiple times with the same $global.runtimeId of ${JSON.stringify(runtimeId)}. It could be that there are multiple copies of Marko running on the page.`,
      );
    }
  }

  const renders = (window as any)[runtimeId] as Renders | undefined;
  const defineRuntime = (desc: PropertyDescriptor) =>
    Object.defineProperty(window, runtimeId, desc);
  let resumeRender: Renders;
  const initRuntime = (renders: Renders) => {
    defineRuntime({
      value: (resumeRender = ((renderId: string) => {
        const render = (resumeRender[renderId] =
          renders[renderId] || renders(renderId));
        const walk = render.w;
        const commentPrefixLen = render.i.length;
        const scopeStack: string[] = [];
        const scopeLookup: Record<string, Scope> = (render.s = {});
        const serializeContext: Record<string, unknown> = {
          _: registeredValues,
        };
        const branchIds = new Set<string>();
        const parentBranchIds = new Map<string, string>();
        const closestBranchMarkers = new Map<string, Comment>();
        let currentScopeId: string | undefined;
        render.w = () => {
          walk.call(render);

          const visits = render.v;
          const resumes = render.r;

          if (visits.length) {
            const visitNodes = new Set<ChildNode>(visits);
            let lastEndNode: ChildNode | undefined;
            render.v = [];

            const branchEnd = (
              branchId: string,
              visit: Comment,
              reference: ChildNode,
            ) => {
              const branch = (scopeLookup[branchId] ||=
                {} as BranchScope) as BranchScope;

              let endNode = reference;
              while (visitNodes.has((endNode = endNode.previousSibling!)));
              if (endNode === lastEndNode) {
                endNode = reference.parentNode!.insertBefore(
                  new Text(),
                  reference,
                );
              }

              branch.___endNode = lastEndNode = endNode;
              branch.___startNode ||= endNode;

              for (const [markerScopeId, markerNode] of closestBranchMarkers) {
                if (
                  branch.___startNode.compareDocumentPosition(markerNode) &
                    4 /* FOLLOWING */ &&
                  reference!.compareDocumentPosition(markerNode) &
                    2 /* PRECEDING */
                ) {
                  parentBranchIds.set(markerScopeId, branchId);
                  closestBranchMarkers.delete(markerScopeId);
                }
              }

              branchIds.add(branchId);
              closestBranchMarkers.set(branchId, visit);
              return branch;
            };

            for (const visit of visits) {
              const commentText = visit.data!;
              const dataIndex = commentText.indexOf(" ") + 1;
              const scopeId = commentText.slice(
                commentPrefixLen + 1,
                dataIndex ? dataIndex - 1 : commentText.length,
              );
              const scope = (scopeLookup[scopeId] ||= {
                ___id: +scopeId,
              } as Scope);
              const data = dataIndex ? commentText.slice(dataIndex) : "";
              const token = commentText[commentPrefixLen];

              // TODO: switch?
              if (token === ResumeSymbol.Node) {
                // TODO: could we use attr marker?
                const node = (scope[data] = visit.previousSibling);
                scope[AccessorPrefix.Getter + data] = () => node;
              } else if (token === ResumeSymbol.ClosestBranch) {
                closestBranchMarkers.set(scopeId, visit);
              } else if (token === ResumeSymbol.BranchStart) {
                if (currentScopeId) {
                  if (dataIndex) {
                    branchEnd(currentScopeId, visit, visit);
                  }
                  scopeStack.push(currentScopeId);
                }
                currentScopeId = scopeId;
                (scope as BranchScope).___startNode = visit;
              } else if (token === ResumeSymbol.BranchEnd) {
                scope[data] = visit;
                const curParent = visit.parentNode!;
                const startNode = branchEnd(
                  currentScopeId!,
                  visit,
                  visit,
                ).___startNode;
                if (curParent !== startNode.parentNode) {
                  curParent.prepend(startNode);
                }
                currentScopeId = scopeStack.pop();
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
                  const childScopeId = data.slice(
                    start,
                    ~next ? next : data.length,
                  );
                  curNode = branchEnd(childScopeId, visit, curNode).___endNode;
                }
              }
            }
          }

          if (resumes) {
            try {
              render.r = [];
              isResuming = true;
              for (let i = 0; i < resumes.length; i++) {
                const serialized = resumes[i];
                if (typeof serialized === "function") {
                  const scopes = serialized(serializeContext);
                  let { $global } = scopeLookup;

                  if (!$global) {
                    scopeLookup.$global = $global = scopes.$ || {};
                    $global.runtimeId = runtimeId;
                    $global.renderId = renderId;
                    $global.___nextScopeId = 1e6;
                  }

                  for (const scopeId in scopes) {
                    if (scopeId !== "$") {
                      const scope = scopes[scopeId];
                      const prevScope = scopeLookup[scopeId];
                      scope.$global = $global as unknown as Scope["$global"];
                      scope.___id = +scopeId;
                      if (prevScope !== scope) {
                        scopeLookup[scopeId] = Object.assign(
                          scope,
                          prevScope,
                        ) as Scope;
                      }

                      const parentBranchId = parentBranchIds.get(scopeId);
                      if (parentBranchId) {
                        scope.___closestBranch = scopes[
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

                      if (MARKO_DEBUG) {
                        scope.___debugId = "server-" + scopeId;
                      }
                    }
                  }
                } else {
                  (registeredValues[resumes[++i] as string] as any)(
                    scopeLookup[serialized],
                    scopeLookup[serialized],
                  );
                }
              }
            } finally {
              isResuming = false;
            }
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

export let isResuming = false;

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

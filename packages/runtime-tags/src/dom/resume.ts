import { DEFAULT_RUNTIME_ID } from "../common/meta";
import {
  AccessorChar,
  type BranchScope,
  ResumeSymbol,
  type Scope,
} from "../common/types";
import type { Signal } from "./signals";

interface Renders {
  (renderId: string): Render | RenderData;
  [renderId: string]: Render | RenderData;
}
interface RenderData {
  // RuntimeID + ResumeID
  i: string;
  // Marked nodes to visit
  v: Comment[];
  // Resumes
  r?: (string | number | ((ctx: object) => Record<string, Scope>))[];
  w(): void;
}
type RegisteredFn<S extends Scope = Scope> = (scope: S) => void;

const registeredValues: Record<string, unknown> = {};

class Render implements RenderData {
  declare i: RenderData["i"];
  declare v: RenderData["v"];
  declare r?: RenderData["r"];
  declare private ___currentScopeId: string | undefined;
  declare private ___data: RenderData;
  declare private ___renders: Renders;
  declare private ___runtimeId: string;
  declare private ___renderId: string;
  private ___scopeStack: string[] = [];
  private ___scopeLookup: Record<string, Scope> = {};
  private ___serializeContext: Record<string, unknown> = {
    _: registeredValues,
  };
  constructor(renders: Renders, runtimeId: string, renderId: string) {
    this.___renders = renders;
    this.___runtimeId = runtimeId;
    this.___renderId = renderId;
    this.___data = renders[renderId] as RenderData;
    this.___resume();
  }
  w() {
    this.___data.w();
    this.___resume();
  }
  ___resume() {
    const data = this.___data;
    const serializeContext = this.___serializeContext;
    const scopeLookup = this.___scopeLookup;
    const visits = data.v;
    const branchIds = new Set<string>();
    const parentBranchIds = new Map<string, string>();

    if (visits.length) {
      const commentPrefix = data.i;
      const commentPrefixLen = commentPrefix.length;
      const closestBranchMarkers = new Map<string, Comment>();
      const visitNodes = new Set<ChildNode>(visits);
      let lastEndNode: ChildNode | undefined;

      data.v = [];

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
          endNode = reference.parentNode!.insertBefore(new Text(), reference);
        }

        branch.___endNode = lastEndNode = endNode;
        branch.___startNode ||= endNode;

        for (const [markerScopeId, markerNode] of closestBranchMarkers) {
          if (
            branch.___startNode.compareDocumentPosition(markerNode) &
              4 /* FOLLOWING */ &&
            reference!.compareDocumentPosition(markerNode) & 2 /* PRECEDING */
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
        const scope = (scopeLookup[scopeId] ||= { ___id: +scopeId } as Scope);
        const data = dataIndex ? commentText.slice(dataIndex) : "";
        const token = commentText[commentPrefixLen];

        // TODO: switch?
        if (token === ResumeSymbol.Node) {
          // TODO: could we use attr marker?
          const node = (scope[data] = visit.previousSibling);
          scope[data + AccessorChar.Getter] = () => node;
        } else if (token === ResumeSymbol.ClosestBranch) {
          closestBranchMarkers.set(scopeId, visit);
        } else if (token === ResumeSymbol.BranchStart) {
          if (this.___currentScopeId) {
            if (dataIndex) {
              branchEnd(this.___currentScopeId, visit, visit);
            }
            this.___scopeStack.push(this.___currentScopeId);
          }
          this.___currentScopeId = scopeId;
          (scope as BranchScope).___startNode = visit;
        } else if (token === ResumeSymbol.BranchEnd) {
          scope[data] = visit;
          const curParent = visit.parentNode!;
          const startNode = branchEnd(
            this.___currentScopeId!,
            visit,
            visit,
          ).___startNode;
          if (curParent !== startNode.parentNode) {
            curParent.prepend(startNode);
          }
          this.___currentScopeId = this.___scopeStack.pop();
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
            const childScopeId = data.slice(start, ~next ? next : data.length);
            curNode = branchEnd(childScopeId, visit, curNode).___endNode;
          }
        }
      }
    }

    const resumes = data.r;
    if (resumes) {
      data.r = [];
      const len = resumes.length;
      let i = 0;
      try {
        isResuming = true;
        while (i < len) {
          const resumeData = resumes[i++];
          if (typeof resumeData === "function") {
            const scopes = resumeData(serializeContext);
            let { $global } = scopeLookup;

            if (!$global) {
              scopeLookup.$global = $global = scopes.$ || {};
              $global.runtimeId = this.___runtimeId;
              $global.renderId = this.___renderId;
            }

            for (const scopeId in scopes) {
              if (scopeId !== "$") {
                const scope = scopes[scopeId];
                const prevScope = scopeLookup[scopeId];
                scope.$global = $global;
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
                    (parentBranch.___branchScopes ||= new Set()).add(branch);
                  }
                }

                if (MARKO_DEBUG) {
                  scope.___debugId = "server-" + scopeId;
                }
              }
            }
          } else if (i === len || typeof resumes[i] !== "string") {
            delete this.___renders[this.___renderId];
          } else {
            (registeredValues[resumes[i++] as string] as any)(
              scopeLookup[resumeData],
              scopeLookup[resumeData],
            );
          }
        }
      } finally {
        isResuming = false;
      }
    }
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

export function init(runtimeId = DEFAULT_RUNTIME_ID) {
  if (MARKO_DEBUG) {
    if (!runtimeId.match(/^[_$a-z][_$a-z0-9]*$/i)) {
      throw new Error(
        `Invalid runtimeId: "${runtimeId}". The runtimeId must be a valid JavaScript identifier.`,
      );
    }
  }

  const resumeRender = ((renderId: string) =>
    (resumeRender[renderId] = renders![renderId] =
      new Render(renders!, runtimeId, renderId))) as Renders;
  let renders: Renders | undefined;

  if ((window as any)[runtimeId] as Renders | undefined) {
    setRenders((window as any)[runtimeId] as Renders);
  } else {
    Object.defineProperty(window, runtimeId, {
      configurable: true,
      set: setRenders,
    });
  }

  function setRenders(v: Renders) {
    if (MARKO_DEBUG) {
      if (renders) {
        throw new Error(
          "Marko tried to initialize multiple times. It could be that there are multiple instances of Marko running on the page.",
        );
      }
    }

    renders = v;
    for (const renderId in v) {
      resumeRender(renderId);
    }

    Object.defineProperty(window, runtimeId, {
      configurable: true,
      value: resumeRender,
    });
  }
}

export function nodeRef(id: string, key: string) {
  return register(id, (scope: Scope) => {
    let fn = () => (fn = scope[key])();
    return fn;
  });
}

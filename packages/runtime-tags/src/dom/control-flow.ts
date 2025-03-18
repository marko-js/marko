import { forIn, forOf, forTo } from "../common/for";
import { normalizeDynamicRenderer } from "../common/helpers";
import {
  type Accessor,
  AccessorChar,
  type BranchScope,
  NodeType,
  type Scope,
} from "../common/types";
import { attrs } from "./dom";
import { prepareEffects, runEffects } from "./queue";
import { reconcile } from "./reconcile";
import {
  createAndSetupBranch,
  createBranch,
  type Renderer,
  setupBranch,
} from "./renderer";
import {
  destroyBranch,
  insertBranchBefore,
  removeAndDestroyBranch,
  tempDetatchBranch,
} from "./scope";
import { setTagVar, type Signal, subscribeToScopeSet } from "./signals";

export function awaitTag(nodeAccessor: Accessor, renderer: Renderer) {
  const promiseAccessor = nodeAccessor + AccessorChar.Promise;
  const branchAccessor = nodeAccessor + AccessorChar.ConditionalScope;
  return (scope: Scope, promise: Promise<unknown>) => {
    // TODO: !isPromise, render synchronously

    let tryBranch = scope.___closestBranch;
    let awaitBranch = scope[branchAccessor];
    const referenceNode = scope[nodeAccessor];
    const namespaceNode = (awaitBranch?.___startNode ?? referenceNode)
      .parentNode!;

    while (tryBranch && !tryBranch[AccessorChar.PlaceholderContent]) {
      tryBranch = tryBranch.___parentBranch;
    }

    const thisPromise = (scope[promiseAccessor] = promise
      .then((data) => {
        if (
          scope.___closestBranch?.___destroyed ||
          scope[promiseAccessor] !== thisPromise
        ) {
          return;
        }

        scope[promiseAccessor] = undefined;

        const effects = prepareEffects(() => {
          if (!awaitBranch || !tryBranch) {
            // TODO: this preserves the existing scope, but we need to defer closures executing in this existing scope while it is pending.
            // Not ideal, but we could destroy and recreate the scope everytime the promise changes to avoid this.
            insertBranchBefore(
              (awaitBranch ??= scope[branchAccessor] =
                createAndSetupBranch(
                  scope.$global,
                  renderer,
                  scope,
                  namespaceNode,
                )),
              referenceNode.parentNode!,
              referenceNode,
            );
            referenceNode.remove();
          }

          renderer.___params?.(awaitBranch, [data]);
        });

        if (tryBranch) {
          // TODO: store effects with the try branch so we can trigger them when all await branches are resolved
          if (!--tryBranch[AccessorChar.PendingCount]) {
            const placeholderBranch = tryBranch[
              AccessorChar.PlaceholderBranch
            ] as BranchScope;
            if (placeholderBranch) {
              insertBranchBefore(
                tryBranch,
                placeholderBranch.___startNode.parentNode!,
                placeholderBranch.___startNode,
              );
              removeAndDestroyBranch(placeholderBranch);
            } else {
              insertBranchBefore(
                tryBranch,
                referenceNode.parentNode!,
                referenceNode,
              );
            }
            // TODO: trigger effects for the tryBranch
          }
        } else {
          runEffects(effects);
        }
      })
      .catch((error) => {
        let tryBranch = scope.___closestBranch;
        while (tryBranch && !tryBranch[AccessorChar.CatchContent]) {
          tryBranch = tryBranch.___parentBranch;
        }
        if (!tryBranch) {
          setTimeout(() => {
            throw error;
          });
        } else {
          setConditionalRenderer(
            tryBranch._!,
            tryBranch[AccessorChar.BranchAccessor],
            tryBranch[AccessorChar.CatchContent],
            createAndSetupBranch,
          );
          tryBranch[AccessorChar.CatchContent].___params?.(
            tryBranch._![
              tryBranch[AccessorChar.BranchAccessor] +
                AccessorChar.ConditionalScope
            ],
            [error],
          );
        }
      }));

    if (tryBranch) {
      if (!tryBranch[AccessorChar.PendingCount]) {
        tryBranch[AccessorChar.PendingCount] = 0;
        requestAnimationFrame(() => {
          if (tryBranch[AccessorChar.PendingCount] && !tryBranch.___destroyed) {
            const placeholderBranch = (tryBranch[
              AccessorChar.PlaceholderBranch
            ] = createAndSetupBranch(
              scope.$global,
              tryBranch[AccessorChar.PlaceholderContent],
              tryBranch._,
              tryBranch.___startNode.parentNode!,
            ));
            insertBranchBefore(
              placeholderBranch,
              tryBranch.___startNode.parentNode!,
              tryBranch.___startNode,
            );
            tempDetatchBranch(tryBranch);
          }
        });
      }

      tryBranch[AccessorChar.PendingCount]++;
    } else if (awaitBranch) {
      awaitBranch.___startNode.parentNode!.insertBefore(
        referenceNode,
        awaitBranch.___startNode,
      );
      tempDetatchBranch(awaitBranch);
    }
  };
}

export function createTry(nodeAccessor: Accessor, tryContent: Renderer) {
  const branchAccessor = nodeAccessor + AccessorChar.ConditionalScope;

  return (scope: Scope, input: { catch: unknown; placeholder: unknown }) => {
    if (!scope[branchAccessor]) {
      setConditionalRenderer(
        scope,
        nodeAccessor,
        tryContent,
        createAndSetupBranch,
      );
    }

    const branch = scope[branchAccessor];
    if (branch) {
      branch[AccessorChar.BranchAccessor] = nodeAccessor;
      branch[AccessorChar.CatchContent] = normalizeDynamicRenderer(input.catch);
      branch[AccessorChar.PlaceholderContent] = normalizeDynamicRenderer(
        input.placeholder,
      );
    }
  };
}

export function conditional(nodeAccessor: Accessor, ...branches: Renderer[]) {
  const branchAccessor = nodeAccessor + AccessorChar.ConditionalRenderer;
  return (scope: Scope, newBranch: number) => {
    if (newBranch !== (scope[branchAccessor] as number)) {
      setConditionalRenderer(
        scope,
        nodeAccessor,
        branches[(scope[branchAccessor] = newBranch)],
        createAndSetupBranch,
      );
    }
  };
}

export function patchDynamicTag(
  fn: <T extends typeof dynamicTag>(cond: T) => T,
) {
  // Injection point for compat layer.
  dynamicTag = fn(dynamicTag);
}
export let dynamicTag = function dynamicTag(
  nodeAccessor: Accessor,
  getContent?: ((scope: Scope) => Renderer) | 0,
  getTagVar?: (() => Signal<unknown>) | 0,
  inputIsArgs?: 1,
): Signal<Renderer | string | undefined> {
  const childScopeAccessor = nodeAccessor + AccessorChar.ConditionalScope;
  const rendererAccessor = nodeAccessor + AccessorChar.ConditionalRenderer;
  return (scope, newRenderer, getInput?: () => any) => {
    const normalizedRenderer = normalizeDynamicRenderer<Renderer>(newRenderer);
    if (
      scope[rendererAccessor] !==
        (scope[rendererAccessor] =
          (normalizedRenderer as Renderer | undefined)?.___id ||
          normalizedRenderer) ||
      (getContent && !(normalizedRenderer || scope[childScopeAccessor]))
    ) {
      setConditionalRenderer(
        scope,
        nodeAccessor,
        normalizedRenderer || (getContent ? getContent(scope) : undefined),
        createBranchWithTagNameOrRenderer,
      );

      if (getTagVar) {
        setTagVar(scope, childScopeAccessor, getTagVar());
      }

      if (typeof normalizedRenderer === "string") {
        if (getContent) {
          const content = getContent(scope);
          setConditionalRenderer(
            scope[childScopeAccessor],
            MARKO_DEBUG ? `#${normalizedRenderer}/0` : 0,
            content,
            createAndSetupBranch,
          );
          if (content.___accessor) {
            subscribeToScopeSet(
              content.___owner!,
              content.___accessor,
              scope[childScopeAccessor][
                (MARKO_DEBUG ? `#${normalizedRenderer}/0` : 0) +
                  AccessorChar.ConditionalScope
              ],
            );
          }
        }
      } else if (normalizedRenderer?.___accessor) {
        subscribeToScopeSet(
          normalizedRenderer.___owner!,
          normalizedRenderer.___accessor,
          scope[childScopeAccessor],
        );
      }
    }

    if (normalizedRenderer) {
      const args = getInput?.();
      if (typeof normalizedRenderer === "string") {
        attrs(
          scope[childScopeAccessor],
          MARKO_DEBUG ? `#${normalizedRenderer}/0` : 0,
          (inputIsArgs ? args[0] : args) || {},
        );
      } else if (normalizedRenderer.___params) {
        if (inputIsArgs) {
          normalizedRenderer.___params(
            scope[childScopeAccessor],
            (normalizedRenderer as any)._ ? args[0] : args,
          );
        } else {
          const inputWithContent = getContent
            ? {
                ...args,
                content: getContent(scope),
              }
            : args || {};
          normalizedRenderer.___params(
            scope[childScopeAccessor],
            (normalizedRenderer as any)._
              ? inputWithContent
              : [inputWithContent],
          );
        }
      }
    }
  };
};

export function setConditionalRenderer<T>(
  scope: Scope,
  nodeAccessor: Accessor,
  newRenderer: T,
  createBranch: (
    $global: Scope["$global"],
    renderer: NonNullable<T>,
    parentScope: Scope,
    parentNode: ParentNode,
  ) => BranchScope,
) {
  const referenceNode = scope[nodeAccessor] as Comment | Element;
  const prevBranch = scope[nodeAccessor + AccessorChar.ConditionalScope] as
    | BranchScope
    | undefined;
  const parentNode =
    referenceNode.nodeType > NodeType.Element
      ? (prevBranch?.___startNode || referenceNode).parentNode!
      : (referenceNode as ParentNode);
  const newBranch = (scope[nodeAccessor + AccessorChar.ConditionalScope] =
    newRenderer && createBranch(scope.$global, newRenderer, scope, parentNode));
  if (referenceNode === parentNode) {
    if (prevBranch) {
      destroyBranch(prevBranch);
      referenceNode.textContent = "";
    }

    if (newBranch) {
      insertBranchBefore(newBranch, parentNode, null);
    }
  } else if (prevBranch) {
    if (newBranch) {
      insertBranchBefore(newBranch, parentNode, prevBranch.___startNode);
    } else {
      parentNode.insertBefore(referenceNode, prevBranch.___startNode);
    }

    removeAndDestroyBranch(prevBranch);
  } else if (newBranch) {
    insertBranchBefore(newBranch, parentNode, referenceNode);
    referenceNode.remove();
  }
}

export function loopOf(nodeAccessor: Accessor, renderer: Renderer) {
  return loop<[all: unknown[], by?: (item: unknown, index: number) => unknown]>(
    nodeAccessor,
    renderer,
    ([all, by = bySecondArg], cb) => {
      if (typeof by === "string") {
        forOf(all, (item, i) =>
          cb((item as Record<string, unknown>)[by], [item, i]),
        );
      } else {
        forOf(all, (item, i) => cb(by(item, i), [item, i]));
      }
    },
  );
}

export function loopIn(nodeAccessor: Accessor, renderer: Renderer) {
  return loop<[obj: {}, by?: (key: string, v: unknown) => unknown]>(
    nodeAccessor,
    renderer,
    ([obj, by = byFirstArg], cb) =>
      forIn(obj, (key, value) => cb(by(key, value), [key, value])),
  );
}

export function loopTo(nodeAccessor: Accessor, renderer: Renderer) {
  return loop<
    [to: number, from: number, step: number, by?: (v: number) => unknown]
  >(nodeAccessor, renderer, ([to, from, step, by = byFirstArg], cb) =>
    forTo(to, from, step, (v) => cb(by(v), [v])),
  );
}

function loop<T extends unknown[] = unknown[]>(
  nodeAccessor: Accessor,
  renderer: Renderer,
  forEach: (value: T, cb: (key: unknown, args: unknown[]) => void) => void,
) {
  const params = renderer.___params;
  return (scope: Scope, value: T) => {
    const referenceNode = scope[nodeAccessor] as Element | Comment | Text;
    const oldMap = scope[nodeAccessor + AccessorChar.LoopScopeMap] as
      | Map<unknown, BranchScope>
      | undefined;
    const oldArray = oldMap
      ? scope[nodeAccessor + AccessorChar.LoopScopeArray] || [
          ...oldMap.values(),
        ]
      : [];
    const parentNode = (
      referenceNode.nodeType > NodeType.Element
        ? referenceNode.parentNode || oldArray[0].___startNode.parentNode
        : referenceNode
    ) as Element;
    const newMap: Map<unknown, BranchScope> = (scope[
      nodeAccessor + AccessorChar.LoopScopeMap
    ] = new Map());
    const newArray: BranchScope[] = (scope[
      nodeAccessor + AccessorChar.LoopScopeArray
    ] = []);
    forEach(value, (key, args) => {
      const branch =
        oldMap?.get(key) ||
        createAndSetupBranch(scope.$global, renderer, scope, parentNode);
      params?.(branch, args);
      newMap.set(key, branch);
      newArray.push(branch);
    });

    let afterReference: null | Node = null;
    if (referenceNode !== parentNode) {
      if (oldArray.length) {
        afterReference = oldArray[oldArray.length - 1].___endNode.nextSibling;
        if (!newArray.length) {
          parentNode.insertBefore(referenceNode, afterReference);
        }
      } else if (newArray.length) {
        afterReference = referenceNode.nextSibling;
        referenceNode.remove();
      }
    }

    reconcile(parentNode, oldArray, newArray, afterReference);
  };
}

function createBranchWithTagNameOrRenderer(
  $global: Scope["$global"],
  tagNameOrRenderer: Renderer | string,
  parentScope: Scope,
  parentNode: ParentNode,
) {
  const branch = createBranch(
    $global,
    tagNameOrRenderer,
    parentScope,
    parentNode,
  );
  if (typeof tagNameOrRenderer === "string") {
    branch[MARKO_DEBUG ? `#${tagNameOrRenderer}/0` : 0] =
      branch.___startNode =
      branch.___endNode =
        document.createElementNS(
          tagNameOrRenderer === "svg"
            ? "http://www.w3.org/2000/svg"
            : tagNameOrRenderer === "math"
              ? "http://www.w3.org/1998/Math/MathML"
              : (parentNode as Element).namespaceURI,
          tagNameOrRenderer,
        );
  } else {
    setupBranch(tagNameOrRenderer, branch);
  }

  return branch;
}

function bySecondArg(_item: unknown, index: unknown) {
  return index;
}

function byFirstArg(name: unknown) {
  return name;
}

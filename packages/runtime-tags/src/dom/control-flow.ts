import { forIn, forOf, forTo, forUntil } from "../common/for";
import { normalizeDynamicRenderer } from "../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  NodeType,
  type Scope,
} from "../common/types";
import { _attrs, _attrs_content } from "./dom";
import {
  caughtError,
  pendingEffects,
  placeholderShown,
  prepareEffects,
  queueRender,
  runEffects,
} from "./queue";
import { reconcile } from "./reconcile";
import {
  createAndSetupBranch,
  createBranch,
  type Renderer,
  setupBranch,
} from "./renderer";
import { enableBranches } from "./resume";
import { schedule } from "./schedule";
import {
  destroyBranch,
  findBranchWithKey,
  insertBranchBefore,
  removeAndDestroyBranch,
  tempDetachBranch,
} from "./scope";
import { _var, type Signal, subscribeToScopeSet } from "./signals";

export function _await(nodeAccessor: Accessor, renderer: Renderer) {
  const promiseAccessor = AccessorPrefix.Promise + nodeAccessor;
  const branchAccessor = AccessorPrefix.ConditionalScope + nodeAccessor;
  return (scope: Scope, promise: Promise<unknown>) => {
    // TODO: !isPromise, render synchronously
    const referenceNode = scope[nodeAccessor] as Text | Comment;
    const tryWithPlaceholder = findBranchWithKey(
      scope,
      AccessorProp.PlaceholderContent,
    );
    let awaitBranch = scope[branchAccessor] as BranchScope | undefined;

    if (tryWithPlaceholder) {
      placeholderShown.add(pendingEffects);
      if (
        !scope[promiseAccessor] &&
        (tryWithPlaceholder.___pendingAsyncCount =
          (tryWithPlaceholder.___pendingAsyncCount || 0) + 1) === 1
      ) {
        requestAnimationFrame(
          () =>
            tryWithPlaceholder.___pendingAsyncCount &&
            runEffects(
              prepareEffects(() =>
                queueRender(
                  tryWithPlaceholder,
                  () => {
                    insertBranchBefore(
                      (tryWithPlaceholder[AccessorProp.PlaceholderBranch] =
                        createAndSetupBranch(
                          scope.$global,
                          tryWithPlaceholder[
                            AccessorProp.PlaceholderContent
                          ] as Renderer,
                          tryWithPlaceholder[AccessorProp.Owner],
                          tryWithPlaceholder.___startNode.parentNode!,
                        )),
                      tryWithPlaceholder.___startNode.parentNode!,
                      tryWithPlaceholder.___startNode,
                    );
                    tempDetachBranch(tryWithPlaceholder);
                  },
                  -1,
                ),
              ),
            ),
        );
      }
    } else if (awaitBranch && !scope[promiseAccessor]) {
      awaitBranch.___startNode.parentNode!.insertBefore(
        referenceNode,
        awaitBranch.___startNode,
      );
      tempDetachBranch(awaitBranch);
    }
    const thisPromise = (scope[promiseAccessor] = promise.then(
      (data) => {
        if (thisPromise === scope[promiseAccessor]) {
          scope[promiseAccessor] = 0;

          schedule();
          queueRender(
            scope,
            () => {
              if (awaitBranch) {
                // Since this is temp detached the parent node is a document fragment with all of the children in the branch.
                if (!tryWithPlaceholder) {
                  referenceNode.replaceWith(
                    awaitBranch.___startNode.parentNode!,
                  );
                }
              } else {
                // TODO: this preserves the existing scope, but we need to defer closures executing in this existing scope while it is pending.
                // Not ideal, but we could destroy and recreate the scope everytime the promise changes to avoid this.
                insertBranchBefore(
                  (awaitBranch = scope[branchAccessor] =
                    createAndSetupBranch(
                      scope.$global,
                      renderer,
                      scope,
                      referenceNode.parentNode!,
                    )),
                  referenceNode.parentNode!,
                  referenceNode,
                );
                referenceNode.remove();
              }

              renderer.___params?.(awaitBranch, [data]);

              if (tryWithPlaceholder) {
                placeholderShown.add(pendingEffects);

                if (!--tryWithPlaceholder.___pendingAsyncCount!) {
                  const placeholderBranch = tryWithPlaceholder[
                    AccessorProp.PlaceholderBranch
                  ] as BranchScope;
                  tryWithPlaceholder[AccessorProp.PlaceholderBranch] = 0;
                  if (placeholderBranch) {
                    // Since this is temp detached the parent node is a document fragment with all of the children in the branch.
                    placeholderBranch.___startNode.parentNode!.insertBefore(
                      tryWithPlaceholder.___startNode.parentNode!,
                      placeholderBranch.___startNode,
                    );
                    removeAndDestroyBranch(placeholderBranch);
                  }

                  const pendingEffects = tryWithPlaceholder.___effects;
                  if (pendingEffects) {
                    tryWithPlaceholder.___effects = [];
                    runEffects(pendingEffects, true);
                  }
                }
              }
            },
            -1,
          );
        }
      },
      (error) => {
        if (thisPromise === scope[promiseAccessor]) {
          if (tryWithPlaceholder) tryWithPlaceholder.___pendingAsyncCount = 0;
          scope[promiseAccessor] = 0;
          schedule();
          queueRender(scope, renderCatch, -1, error);
        }
      },
    ));
  };
}

export function _try(nodeAccessor: Accessor, content: Renderer) {
  const branchAccessor = AccessorPrefix.ConditionalScope + nodeAccessor;

  return (scope: Scope, input: { catch: unknown; placeholder: unknown }) => {
    if (!scope[branchAccessor]) {
      setConditionalRenderer(
        scope,
        nodeAccessor,
        content,
        createAndSetupBranch,
      );
    }

    const branch = scope[branchAccessor];
    if (branch) {
      branch[AccessorProp.BranchAccessor] = nodeAccessor;
      branch[AccessorProp.CatchContent] = normalizeDynamicRenderer(input.catch);
      branch[AccessorProp.PlaceholderContent] = normalizeDynamicRenderer(
        input.placeholder,
      );
    }
  };
}

export function renderCatch(scope: Scope, error: unknown) {
  const tryWithCatch = findBranchWithKey(scope, AccessorProp.CatchContent);
  if (!tryWithCatch) {
    throw error;
  } else {
    const owner = tryWithCatch[AccessorProp.Owner]!;
    const placeholderBranch = tryWithCatch[
      AccessorProp.PlaceholderBranch
    ] as BranchScope;
    if (placeholderBranch) {
      tryWithCatch.___pendingAsyncCount = 0;
      owner[
        AccessorPrefix.ConditionalScope +
          tryWithCatch[AccessorProp.BranchAccessor]
      ] = placeholderBranch;
      destroyBranch(tryWithCatch);
    }
    caughtError.add(pendingEffects);
    setConditionalRenderer(
      owner,
      tryWithCatch[AccessorProp.BranchAccessor],
      tryWithCatch[AccessorProp.CatchContent],
      createAndSetupBranch,
    );
    tryWithCatch[AccessorProp.CatchContent].___params?.(
      owner[
        AccessorPrefix.ConditionalScope +
          tryWithCatch[AccessorProp.BranchAccessor]
      ],
      [error],
    );
  }
}

export function _if(nodeAccessor: Accessor, ...branches: Renderer[]) {
  const branchAccessor = AccessorPrefix.ConditionalRenderer + nodeAccessor;
  enableBranches();
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
  fn: <T extends typeof _dynamic_tag>(cond: T) => T,
) {
  // Injection point for compat layer.
  _dynamic_tag = fn(_dynamic_tag);
}
export let _dynamic_tag = function dynamicTag(
  nodeAccessor: Accessor,
  getContent?: ((scope: Scope) => Renderer) | 0,
  getTagVar?: (() => Signal<unknown>) | 0,
  inputIsArgs?: 1,
): Signal<Renderer | string | undefined> {
  const childScopeAccessor = AccessorPrefix.ConditionalScope + nodeAccessor;
  const rendererAccessor = AccessorPrefix.ConditionalRenderer + nodeAccessor;
  enableBranches();
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
        _var(scope, childScopeAccessor, getTagVar());
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
                AccessorPrefix.ConditionalScope +
                  (MARKO_DEBUG ? `#${normalizedRenderer}/0` : 0)
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
      const childScope = scope[childScopeAccessor] as Scope;
      const args = getInput?.();
      if (typeof normalizedRenderer === "string") {
        (getContent ? _attrs : _attrs_content)(
          childScope,
          MARKO_DEBUG ? `#${normalizedRenderer}/0` : 0,
          (inputIsArgs ? args[0] : args) || {},
        );
      } else {
        for (const accessor in normalizedRenderer.___localClosures) {
          normalizedRenderer.___localClosures[accessor](
            childScope,
            normalizedRenderer.___localClosureValues![accessor],
          );
        }

        if (normalizedRenderer.___params) {
          if (inputIsArgs) {
            normalizedRenderer.___params(
              childScope,
              (normalizedRenderer as any)._ ? args[0] : args,
            );
          } else {
            const inputWithContent = getContent
              ? { ...args, content: getContent(scope) }
              : args || {};
            normalizedRenderer.___params(
              childScope,
              (normalizedRenderer as any)._
                ? inputWithContent
                : [inputWithContent],
            );
          }
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
  const prevBranch = scope[AccessorPrefix.ConditionalScope + nodeAccessor] as
    | BranchScope
    | undefined;
  const parentNode =
    referenceNode.nodeType > NodeType.Element
      ? (prevBranch?.___startNode || referenceNode).parentNode!
      : (referenceNode as ParentNode);
  const newBranch = (scope[AccessorPrefix.ConditionalScope + nodeAccessor] =
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

export function _for_of(nodeAccessor: Accessor, renderer: Renderer) {
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

export function _for_in(nodeAccessor: Accessor, renderer: Renderer) {
  return loop<[obj: {}, by?: (key: string, v: unknown) => unknown]>(
    nodeAccessor,
    renderer,
    ([obj, by = byFirstArg], cb) =>
      forIn(obj, (key, value) => cb(by(key, value), [key, value])),
  );
}

export function _for_to(nodeAccessor: Accessor, renderer: Renderer) {
  return loop<
    [to: number, from: number, step: number, by?: (v: number) => unknown]
  >(nodeAccessor, renderer, ([to, from, step, by = byFirstArg], cb) =>
    forTo(to, from, step, (v) => cb(by(v), [v])),
  );
}

export function _for_until(nodeAccessor: Accessor, renderer: Renderer) {
  return loop<
    [until: number, from: number, step: number, by?: (v: number) => unknown]
  >(nodeAccessor, renderer, ([until, from, step, by = byFirstArg], cb) =>
    forUntil(until, from, step, (v) => cb(by(v), [v])),
  );
}

function loop<T extends unknown[] = unknown[]>(
  nodeAccessor: Accessor,
  renderer: Renderer,
  forEach: (value: T, cb: (key: unknown, args: unknown[]) => void) => void,
) {
  const params = renderer.___params;
  enableBranches();
  return (scope: Scope, value: T) => {
    const referenceNode = scope[nodeAccessor] as Element | Comment | Text;
    const oldMap = scope[AccessorPrefix.LoopScopeMap + nodeAccessor] as
      | Map<unknown, BranchScope>
      | undefined;
    const oldArray = oldMap
      ? scope[AccessorPrefix.LoopScopeArray + nodeAccessor] || [
          ...oldMap.values(),
        ]
      : [];
    const parentNode = (
      referenceNode.nodeType > NodeType.Element
        ? referenceNode.parentNode || oldArray[0].___startNode.parentNode
        : referenceNode
    ) as Element;
    const newMap: Map<unknown, BranchScope> = (scope[
      AccessorPrefix.LoopScopeMap + nodeAccessor
    ] = new Map());
    const newArray: BranchScope[] = (scope[
      AccessorPrefix.LoopScopeArray + nodeAccessor
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

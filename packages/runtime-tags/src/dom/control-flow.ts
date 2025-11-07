import { assertValidTagName } from "../common/errors";
import { forIn, forOf, forTo, forUntil } from "../common/for";
import { decodeAccessor, normalizeDynamicRenderer } from "../common/helpers";
import { DYNAMIC_TAG_SCRIPT_REGISTER_ID } from "../common/meta";
import { toArray } from "../common/opt";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  type EncodedAccessor,
  NodeType,
  type Scope,
} from "../common/types";
import { _attrs, _attrs_content, _attrs_script } from "./dom";
import {
  caughtError,
  pendingEffects,
  placeholderShown,
  prepareEffects,
  queueEffect,
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
import { _resume, enableBranches } from "./resume";
import { schedule } from "./schedule";
import {
  destroyBranch,
  findBranchWithKey,
  insertBranchBefore,
  removeAndDestroyBranch,
  tempDetachBranch,
} from "./scope";
import { type Signal, subscribeToScopeSet } from "./signals";

export function _await(nodeAccessor: EncodedAccessor, renderer: Renderer) {
  if (!MARKO_DEBUG) nodeAccessor = decodeAccessor(nodeAccessor as number);
  const promiseAccessor = AccessorPrefix.Promise + nodeAccessor;
  const branchAccessor = AccessorPrefix.BranchScopes + nodeAccessor;
  enableBranches();
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
        (tryWithPlaceholder[AccessorProp.PendingAsyncCount] =
          (tryWithPlaceholder[AccessorProp.PendingAsyncCount] || 0) + 1) === 1
      ) {
        requestAnimationFrame(
          () =>
            tryWithPlaceholder[AccessorProp.PendingAsyncCount] &&
            runEffects(
              prepareEffects(() =>
                queueRender(
                  tryWithPlaceholder,
                  () => {
                    insertBranchBefore(
                      (tryWithPlaceholder[AccessorProp.PlaceholderBranch] =
                        createAndSetupBranch(
                          scope[AccessorProp.Global],
                          tryWithPlaceholder[
                            AccessorProp.PlaceholderContent
                          ] as Renderer,
                          tryWithPlaceholder[AccessorProp.Owner],
                          tryWithPlaceholder[AccessorProp.StartNode]
                            .parentNode!,
                        )),
                      tryWithPlaceholder[AccessorProp.StartNode].parentNode!,
                      tryWithPlaceholder[AccessorProp.StartNode],
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
      awaitBranch[AccessorProp.StartNode].parentNode!.insertBefore(
        referenceNode,
        awaitBranch[AccessorProp.StartNode],
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
                    awaitBranch[AccessorProp.StartNode].parentNode!,
                  );
                }
              } else {
                // TODO: this preserves the existing scope, but we need to defer closures executing in this existing scope while it is pending.
                // Not ideal, but we could destroy and recreate the scope everytime the promise changes to avoid this.
                insertBranchBefore(
                  (awaitBranch = scope[branchAccessor] =
                    createAndSetupBranch(
                      scope[AccessorProp.Global],
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

                if (!--tryWithPlaceholder[AccessorProp.PendingAsyncCount]!) {
                  const placeholderBranch = tryWithPlaceholder[
                    AccessorProp.PlaceholderBranch
                  ] as BranchScope;
                  tryWithPlaceholder[AccessorProp.PlaceholderBranch] = 0;
                  if (placeholderBranch) {
                    // Since this is temp detached the parent node is a document fragment with all of the children in the branch.
                    placeholderBranch[
                      AccessorProp.StartNode
                    ].parentNode!.insertBefore(
                      tryWithPlaceholder[AccessorProp.StartNode].parentNode!,
                      placeholderBranch[AccessorProp.StartNode],
                    );
                    removeAndDestroyBranch(placeholderBranch);
                  }

                  queueEffect(tryWithPlaceholder, (scope) => {
                    const pendingEffects = scope[AccessorProp.Effects];
                    if (pendingEffects) {
                      scope[AccessorProp.Effects] = [];
                      runEffects(pendingEffects, true);
                    }
                  });
                }
              }
            },
            -1,
          );
        }
      },
      (error) => {
        if (thisPromise === scope[promiseAccessor]) {
          if (tryWithPlaceholder)
            tryWithPlaceholder[AccessorProp.PendingAsyncCount] = 0;
          scope[promiseAccessor] = 0;
          schedule();
          queueRender(scope, renderCatch, -1, error);
        }
      },
    ));
  };
}

export function _try(nodeAccessor: EncodedAccessor, content: Renderer) {
  if (!MARKO_DEBUG) nodeAccessor = decodeAccessor(nodeAccessor as number);
  const branchAccessor = AccessorPrefix.BranchScopes + nodeAccessor;

  return (scope: Scope, input: { catch: unknown; placeholder: unknown }) => {
    if (!scope[branchAccessor]) {
      setConditionalRenderer(
        scope,
        nodeAccessor as string,
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
      tryWithCatch[AccessorProp.PendingAsyncCount] = 0;
      owner[
        AccessorPrefix.BranchScopes + tryWithCatch[AccessorProp.BranchAccessor]
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
        AccessorPrefix.BranchScopes + tryWithCatch[AccessorProp.BranchAccessor]
      ],
      [error],
    );
  }
}

export function _if(nodeAccessor: EncodedAccessor, ...branches: Renderer[]) {
  if (!MARKO_DEBUG) nodeAccessor = decodeAccessor(nodeAccessor as number);
  const branchAccessor = AccessorPrefix.ConditionalRenderer + nodeAccessor;
  enableBranches();
  return (scope: Scope, newBranch: number) => {
    if (newBranch !== (scope[branchAccessor] as number)) {
      setConditionalRenderer(
        scope,
        nodeAccessor as string,
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
  nodeAccessor: EncodedAccessor,
  getContent?: ((scope: Scope) => Renderer) | 0,
  getTagVar?: (() => Signal<unknown>) | 0,
  inputIsArgs?: 1,
): Signal<Renderer | string | undefined> {
  if (!MARKO_DEBUG) nodeAccessor = decodeAccessor(nodeAccessor as number);
  const childScopeAccessor = AccessorPrefix.BranchScopes + nodeAccessor;
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
        nodeAccessor as string,
        normalizedRenderer || (getContent ? getContent(scope) : undefined),
        createBranchWithTagNameOrRenderer,
      );

      if (getTagVar) {
        scope[childScopeAccessor][AccessorProp.TagVariable] = (
          value: unknown,
        ) => getTagVar()(scope, value);
      }

      if (typeof normalizedRenderer === "string") {
        if (getContent) {
          const content = getContent(scope);
          setConditionalRenderer(
            scope[childScopeAccessor],
            MARKO_DEBUG ? `#${normalizedRenderer}/0` : "a",
            content,
            createAndSetupBranch,
          );
          if (content.___accessor) {
            subscribeToScopeSet(
              content.___owner!,
              content.___accessor,
              scope[childScopeAccessor][
                AccessorPrefix.BranchScopes +
                  (MARKO_DEBUG ? `#${normalizedRenderer}/0` : "a")
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
          MARKO_DEBUG ? `#${normalizedRenderer}/0` : "a",
          (inputIsArgs ? args[0] : args) || {},
        );

        if (
          childScope[
            AccessorPrefix.EventAttributes +
              (MARKO_DEBUG ? `#${normalizedRenderer}/0` : "a")
          ] ||
          childScope[
            AccessorPrefix.ControlledHandler +
              (MARKO_DEBUG ? `#${normalizedRenderer}/0` : "a")
          ]
        ) {
          queueEffect(childScope, dynamicTagScript);
        }
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

export function _resume_dynamic_tag() {
  _resume(DYNAMIC_TAG_SCRIPT_REGISTER_ID, dynamicTagScript);
}

function dynamicTagScript(branch: Scope) {
  _attrs_script(
    branch,
    MARKO_DEBUG ? `#${branch[AccessorProp.Renderer]}/0` : "a",
  );
}

export function setConditionalRenderer<T>(
  scope: Scope,
  nodeAccessor: Accessor,
  newRenderer: T,
  createBranch: (
    $global: Scope[AccessorProp.Global],
    renderer: NonNullable<T>,
    parentScope: Scope,
    parentNode: ParentNode,
  ) => BranchScope,
) {
  const referenceNode = scope[nodeAccessor] as Comment | Element;
  const prevBranch = scope[AccessorPrefix.BranchScopes + nodeAccessor] as
    | BranchScope
    | undefined;
  const parentNode =
    referenceNode.nodeType > NodeType.Element
      ? (prevBranch?.[AccessorProp.StartNode] || referenceNode).parentNode!
      : (referenceNode as ParentNode);
  const newBranch = (scope[AccessorPrefix.BranchScopes + nodeAccessor] =
    newRenderer &&
    createBranch(scope[AccessorProp.Global], newRenderer, scope, parentNode));
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
      insertBranchBefore(
        newBranch,
        parentNode,
        prevBranch[AccessorProp.StartNode],
      );
    } else {
      parentNode.insertBefore(
        referenceNode,
        prevBranch[AccessorProp.StartNode],
      );
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
  nodeAccessor: EncodedAccessor,
  renderer: Renderer,
  forEach: (value: T, cb: (key: unknown, args: unknown[]) => void) => void,
) {
  const params = renderer.___params;
  const scopesAccessor = AccessorPrefix.BranchScopes + nodeAccessor;
  const scopesByKeyAccessor = AccessorPrefix.BranchScopesByKey + nodeAccessor;
  if (!MARKO_DEBUG) nodeAccessor = decodeAccessor(nodeAccessor as number);
  enableBranches();
  return (scope: Scope, value: T) => {
    const referenceNode = scope[nodeAccessor] as Element | Comment | Text;
    const oldScopes = toArray<BranchScope>(scope[scopesAccessor]);
    const oldScopesByKey: Map<unknown, BranchScope> =
      scope[scopesByKeyAccessor] ||
      oldScopes.reduce(
        (map, scope) => map.set(scope[AccessorProp.LoopKey], scope),
        new Map<unknown, BranchScope>(),
      );
    const newScopes: BranchScope[] = (scope[scopesAccessor] = []);
    const newScopesByKey: Map<unknown, BranchScope> = (scope[
      scopesByKeyAccessor
    ] = new Map());
    const parentNode = (
      referenceNode.nodeType > NodeType.Element
        ? referenceNode.parentNode ||
          oldScopes[0][AccessorProp.StartNode].parentNode
        : referenceNode
    ) as Element;
    forEach(value, (key, args) => {
      if (MARKO_DEBUG) {
        if (newScopesByKey.has(key)) {
          console.error(
            `A <for> tag's \`by\` attribute must return a unique value for each item, but a duplicate was found matching:`,
            key,
          );
        }
      }

      const branch =
        oldScopesByKey?.get(key) ||
        createAndSetupBranch(
          scope[AccessorProp.Global],
          renderer,
          scope,
          parentNode,
        );
      params?.(branch, args);
      newScopesByKey.set(key, branch);
      newScopes.push(branch);
    });

    let afterReference: null | Node = null;
    if (referenceNode !== parentNode) {
      if (oldScopes.length) {
        afterReference =
          oldScopes[oldScopes.length - 1][AccessorProp.EndNode].nextSibling;
        if (!newScopes.length) {
          parentNode.insertBefore(referenceNode, afterReference);
        }
      } else if (newScopes.length) {
        afterReference = referenceNode.nextSibling;
        referenceNode.remove();
      }
    }

    reconcile(parentNode, oldScopes, newScopes, afterReference);
  };
}

function createBranchWithTagNameOrRenderer(
  $global: Scope[AccessorProp.Global],
  tagNameOrRenderer: Renderer | string,
  parentScope: Scope,
  parentNode: ParentNode,
) {
  if (MARKO_DEBUG && typeof tagNameOrRenderer === "string") {
    assertValidTagName(tagNameOrRenderer);
  }

  const branch = createBranch(
    $global,
    tagNameOrRenderer,
    parentScope,
    parentNode,
  );
  if (typeof tagNameOrRenderer === "string") {
    branch[MARKO_DEBUG ? `#${tagNameOrRenderer}/0` : "a"] =
      branch[AccessorProp.StartNode] =
      branch[AccessorProp.EndNode] =
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

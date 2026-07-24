import { assertValidLoopKey, assertValidTagName } from "../common/errors";
import { forIn, forOf, forTo, forUntil } from "../common/for";
import {
  decodeAccessor,
  isPromise,
  normalizeDynamicRenderer,
} from "../common/helpers";
import { DYNAMIC_TAG_SCRIPT_REGISTER_ID } from "../common/meta";
import { toArray } from "../common/opt";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type AwaitCounter,
  type BranchScope,
  type EncodedAccessor,
  NodeType,
  RendererProp,
  type Scope,
} from "../common/types";
import { _attrs, _attrs_content, _attrs_script } from "./dom";
import { _hold, holdCommit, holdEnabled, holding } from "./hold";
import {
  _enable_catch,
  caughtError,
  pendingEffects,
  type PendingRender,
  placeholderShown,
  prepareEffects,
  queueAsyncRender,
  queueEffect,
  queuePendingRender,
  queueRender,
  runEffects,
} from "./queue";
import {
  _content,
  createAndSetupBranch,
  createBranch,
  type Renderer,
  setupBranch,
  type SetupFn,
} from "./renderer";
import { _resume, enableBranches } from "./resume";
import {
  collectScopes,
  destroyBranch,
  findBranchWithKey,
  insertBranchBefore,
  removeAndDestroyBranch,
  syncGen,
  tempDetachBranch,
} from "./scope";
import { type Signal, subscribeToScopeSet } from "./signals";

export function _await_promise(
  nodeAccessor: EncodedAccessor,
  params?: Signal<unknown>,
) {
  if (!MARKO_DEBUG) nodeAccessor = decodeAccessor(nodeAccessor as number);
  const promiseAccessor = AccessorPrefix.Promise + nodeAccessor;
  const branchAccessor = AccessorPrefix.BranchScopes + nodeAccessor;
  _enable_catch();
  return (scope: Scope, promise: Promise<unknown>) => {
    if (!isPromise(promise)) {
      if (!scope[promiseAccessor]) {
        const resolve = () =>
          resolveAwait(
            scope,
            branchAccessor,
            nodeAccessor,
            scope[nodeAccessor] as ChildNode,
            params,
            promise,
          );
        if (scope[branchAccessor]) {
          resolve();
        } else {
          scope[promiseAccessor] = resolve;
        }
        return;
      }
      promise = Promise.resolve(promise);
    }

    let awaitBranch = scope[branchAccessor] as BranchScope;
    const tryPlaceholder = findBranchWithKey(
      scope,
      AccessorProp.PlaceholderContent,
    );
    const tryBranch = tryPlaceholder || awaitBranch;
    let awaitCounter = tryBranch[AccessorProp.AwaitCounter];

    placeholderShown.add(pendingEffects);

    if (tryPlaceholder) {
      if (!scope[promiseAccessor]) {
        if (awaitBranch) {
          awaitBranch[AccessorProp.PendingRenders] ||= [];
        }
        awaitCounter = addAwaitCounter(scope, tryPlaceholder)!;
      }
    } else {
      if (!awaitCounter?.i) {
        awaitCounter = tryBranch[AccessorProp.AwaitCounter] = {
          i: 0,
          c() {
            if (--awaitCounter!.i) return 1;
            const commit = () => {
              if (tryBranch === scope[branchAccessor]) {
                const anchor = scope[nodeAccessor] as ChildNode;
                if (anchor.parentNode) {
                  const detachedParent = (scope[branchAccessor] as BranchScope)[
                    AccessorProp.StartNode
                  ].parentNode!;
                  if (detachedParent === anchor.parentNode) {
                    // Branch never detached (re-await raced its resolution);
                    // replacing the anchor with its own parent would cycle.
                    anchor.remove();
                  } else {
                    anchor.replaceWith(detachedParent);
                  }
                }
              } else {
                dismissPlaceholder(tryBranch);
              }
            };
            if (holding) {
              _hold(commit);
            } else {
              commit();
            }
            queueEffect(tryBranch, runPendingEffects);
          },
        };
      }

      if (!scope[promiseAccessor]) {
        if (awaitBranch) {
          awaitBranch[AccessorProp.PendingRenders] ||= [];
        }
        if (!awaitCounter.i++) {
          requestAnimationFrame(
            () =>
              awaitCounter!.i &&
              runEffects(
                prepareEffects(() =>
                  queueRender(
                    scope,
                    () => {
                      if (!awaitBranch[AccessorProp.DetachedAwait]) {
                        const commit = () => {
                          awaitBranch[
                            AccessorProp.StartNode
                          ].parentNode!.insertBefore(
                            scope[nodeAccessor] as Node,
                            awaitBranch[AccessorProp.StartNode],
                          );
                          tempDetachBranch(tryBranch);
                        };
                        if (holding) {
                          _hold(commit);
                        } else {
                          commit();
                        }
                      }
                    },
                    -1,
                  ),
                ),
              ),
          );
        }
      }
    }

    const thisPromise = (scope[promiseAccessor] = promise.then(
      (data) => {
        if (thisPromise === scope[promiseAccessor]) {
          const referenceNode = scope[nodeAccessor] as ChildNode;
          scope[promiseAccessor] = 0;

          queueAsyncRender(scope, () => {
            awaitBranch = resolveAwait(
              scope,
              branchAccessor,
              nodeAccessor,
              referenceNode,
              params,
              data,
            );

            const pendingRenders = awaitBranch[AccessorProp.PendingRenders] as
              | PendingRender[]
              | undefined;
            awaitBranch[AccessorProp.PendingRenders] = 0;
            pendingRenders?.forEach(queuePendingRender);

            placeholderShown.add(pendingEffects); // TODO: check if still needed

            awaitCounter!.c();
            if (awaitCounter!.m) {
              const fnScopes = new Map<unknown, Set<Scope>>();
              const effects = awaitCounter!.m([]);
              for (let i = 0; i < pendingEffects.length;) {
                const fn = pendingEffects[i++] as any;
                let scopes = fnScopes.get(fn);
                if (!scopes) {
                  fnScopes.set(fn, (scopes = new Set()));
                }
                scopes.add(pendingEffects[i++] as Scope);
              }
              for (let i = 0; i < effects.length;) {
                const fn = effects[i++] as any;
                const scope = effects[i++] as Scope;
                if (!fnScopes.get(fn)?.has(scope)) {
                  queueEffect(scope, fn);
                }
              }
            }
          });
        }
      },
      (error) => {
        if (thisPromise === scope[promiseAccessor]) {
          scope[promiseAccessor] = 0;
          // Complete the counter to dismiss an ancestor `@placeholder` (renderCatch
          // only unwinds the catch's own try); zero a placeholder-less or resumed one.
          if (tryPlaceholder && !awaitCounter!.m) {
            awaitCounter!.c();
          } else {
            awaitCounter!.i = 0;
          }
          queueAsyncRender(scope, renderCatch, error);
        }
      },
    ));
  };
}

function resolveAwait(
  scope: Scope,
  branchAccessor: string,
  nodeAccessor: EncodedAccessor,
  referenceNode: ChildNode,
  params: Signal<unknown> | undefined,
  value: unknown,
) {
  const awaitBranch = scope[branchAccessor] as BranchScope;
  if (awaitBranch[AccessorProp.DetachedAwait]) {
    awaitBranch[AccessorProp.PendingScopes] =
      awaitBranch[AccessorProp.PendingScopes]?.forEach(syncGen);
    setupBranch(awaitBranch[AccessorProp.DetachedAwait], awaitBranch);
    awaitBranch[AccessorProp.DetachedAwait] = 0;

    const anchor = scope[nodeAccessor] as ChildNode;
    const parentNode = anchor.parentNode!;
    // Held alongside the awaitCounter's anchor op below so that, at drain, the
    // insert-then-remove runs before the counter re-checks the (now gone)
    // anchor and no-ops — keeping the reveal coordinated.
    const commit = () => {
      insertBranchBefore(awaitBranch, parentNode, anchor);
      referenceNode.remove();
    };
    if (holding) {
      _hold(commit);
    } else {
      commit();
    }
  }
  params?.(awaitBranch, [value]);
  return awaitBranch;
}

export function _await_content(
  nodeAccessor: EncodedAccessor,
  template?: string | 0,
  walks?: string | 0,
  setup?: SetupFn | 0,
) {
  if (!MARKO_DEBUG) nodeAccessor = decodeAccessor(nodeAccessor as number);
  const branchAccessor = AccessorPrefix.BranchScopes + nodeAccessor;
  const promiseAccessor = AccessorPrefix.Promise + nodeAccessor;
  const renderer = _content("", template, walks, setup)();
  return (scope: Scope) => {
    const pendingScopes = collectScopes(
      () =>
        ((scope[branchAccessor] = createBranch(
          scope[AccessorProp.Global],
          renderer,
          scope,
          (scope[nodeAccessor] as ChildNode).parentNode!,
        ))[AccessorProp.DetachedAwait] = renderer),
    );
    (scope[branchAccessor] as BranchScope)[AccessorProp.PendingScopes] =
      pendingScopes;

    const resolveSync = scope[promiseAccessor];
    if (typeof resolveSync === "function") {
      scope[promiseAccessor] = 0;
      resolveSync();
    }
  };
}

export function addAwaitCounter(
  scope: Scope,
  tryBranch = findBranchWithKey(scope, AccessorProp.PlaceholderContent),
): AwaitCounter | undefined {
  if (!tryBranch) return;
  let awaitCounter = tryBranch[AccessorProp.AwaitCounter];
  if (!awaitCounter?.i) {
    awaitCounter = tryBranch[AccessorProp.AwaitCounter] = {
      i: 0,
      c() {
        if (--awaitCounter!.i) return 1;
        dismissPlaceholder(tryBranch);
        queueEffect(tryBranch, runPendingEffects);
      },
    };
  }
  placeholderShown.add(pendingEffects);
  if (!awaitCounter.i++) {
    requestAnimationFrame(
      () =>
        awaitCounter!.i &&
        runEffects(
          prepareEffects(() =>
            queueRender(
              tryBranch,
              () => {
                // Building the placeholder proceeds; only swapping it in for
                // the detached try content is held.
                const placeholderBranch = (tryBranch[
                  AccessorProp.PlaceholderBranch
                ] = createAndSetupBranch(
                  tryBranch[AccessorProp.Global],
                  tryBranch[AccessorProp.PlaceholderContent] as Renderer,
                  tryBranch[AccessorProp.Owner]!,
                  tryBranch[AccessorProp.StartNode].parentNode!,
                ));
                const commit = () => {
                  insertBranchBefore(
                    placeholderBranch,
                    tryBranch[AccessorProp.StartNode].parentNode!,
                    tryBranch[AccessorProp.StartNode],
                  );
                  tempDetachBranch(tryBranch);
                };
                if (holding) {
                  _hold(commit);
                } else {
                  commit();
                }
              },
              -1,
            ),
          ),
        ),
    );
  }
  return awaitCounter;
}

function runPendingEffects(scope: BranchScope) {
  const effects = scope[AccessorProp.PendingEffects];
  if (effects) {
    scope[AccessorProp.PendingEffects] = [];
    runEffects(effects, 1);
  }
}

function dismissPlaceholder(tryBranch: BranchScope) {
  const placeholderBranch = tryBranch[AccessorProp.PlaceholderBranch];
  if (placeholderBranch) {
    tryBranch[AccessorProp.PlaceholderBranch] = 0;
    // The temporarily detached try branch has a DocumentFragment parent
    // containing its complete DOM range.
    const commit = () => {
      placeholderBranch[AccessorProp.StartNode].parentNode!.insertBefore(
        tryBranch[AccessorProp.StartNode].parentNode!,
        placeholderBranch[AccessorProp.StartNode],
      );
      removeAndDestroyBranch(placeholderBranch);
    };
    if (holding) {
      _hold(commit);
    } else {
      commit();
    }
  }
}

export function _try(
  nodeAccessor: EncodedAccessor,
  template?: string | 0,
  walks?: string | 0,
  setup?: SetupFn | 0,
) {
  if (!MARKO_DEBUG) nodeAccessor = decodeAccessor(nodeAccessor as number);
  const branchAccessor = AccessorPrefix.BranchScopes + nodeAccessor;
  const renderer = _content("", template, walks, setup)();

  return (scope: Scope, input: { catch: unknown; placeholder: unknown }) => {
    if (!scope[branchAccessor]) {
      setConditionalRenderer(
        scope,
        nodeAccessor as string,
        renderer,
        createAndSetupBranch,
      );
    }

    const branch = scope[branchAccessor];
    if (branch) {
      branch[AccessorProp.BranchAccessor] = nodeAccessor;
      branch[AccessorProp.CatchContent] =
        input.catch && (normalizeDynamicRenderer(input.catch) || 0);
      branch[AccessorProp.PlaceholderContent] = normalizeDynamicRenderer(
        input.placeholder,
      );
    }
  };
}

// Catching destroys the content branch (and its subscriptions) for good: a new
// promise can't recover the boundary, only re-rendering the `<try>` itself.
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
      if (tryWithCatch[AccessorProp.AwaitCounter])
        (tryWithCatch[AccessorProp.AwaitCounter] as AwaitCounter).i = 0;
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
    tryWithCatch[AccessorProp.CatchContent]?.[RendererProp.Params]?.(
      owner[
        AccessorPrefix.BranchScopes + tryWithCatch[AccessorProp.BranchAccessor]
      ],
      [error],
    );
  }
}

export function _if(
  nodeAccessor: EncodedAccessor,
  ...branchesArgs: (string | SetupFn | 0)[]
) {
  if (!MARKO_DEBUG) nodeAccessor = decodeAccessor(nodeAccessor as number);
  const branchAccessor = AccessorPrefix.ConditionalRenderer + nodeAccessor;
  const branches: Renderer[] = [];
  let i = 0;
  while (i < branchesArgs.length) {
    branches.push(
      _content(
        "",
        branchesArgs[i++] as string | 0 | undefined,
        branchesArgs[i++] as string | 0 | undefined,
        branchesArgs[i++] as SetupFn | 0 | undefined,
      )(),
    );
  }
  enableBranches();
  return (scope: Scope, newBranch: number) => {
    // Resume elides a renderer index of 0, so a resumed scope's absent index
    // means 0 -- gated on having branch scopes so a fresh scope still renders.
    if (
      newBranch !==
      ((scope[branchAccessor] as number) ??
        (scope[AccessorPrefix.BranchScopes + nodeAccessor] && 0))
    ) {
      setConditionalRenderer(
        scope,
        nodeAccessor as string,
        branches[(scope[branchAccessor] = newBranch)],
        createAndSetupBranch,
      );
    }
  };
}

// The `<show>` body always exists, so this signal never renders; it only moves
// the body's range in/out of a detached fragment (SSR hides it in a `<t hidden>` wrapper).
export function _show(
  nodeAccessor: EncodedAccessor,
  startNodeAccessor?: EncodedAccessor,
) {
  if (!MARKO_DEBUG) {
    nodeAccessor = decodeAccessor(nodeAccessor as number);
    if (startNodeAccessor !== undefined) {
      startNodeAccessor = decodeAccessor(startNodeAccessor as number);
    }
  }
  const rangeAccessor = AccessorPrefix.BranchScopes + nodeAccessor;
  enableBranches();
  return (scope: Scope, display: unknown) => {
    // The reference node is the parent element when the `<show>` is its only
    // child, otherwise a marker node just after the body.
    const referenceNode = scope[nodeAccessor] as ChildNode;
    const onlyChild = referenceNode.nodeType === NodeType.Element;
    const parentNode = onlyChild
      ? (referenceNode as unknown as ParentNode & Element)
      : referenceNode.parentNode!;
    let range = scope[rangeAccessor] as BranchScope | undefined;

    if (!range) {
      // Client render: derive the range from the template's static shape.
      range = scope[rangeAccessor] = {} as BranchScope;
      range[AccessorProp.StartNode] = onlyChild
        ? parentNode.firstChild!
        : (scope[startNodeAccessor as Accessor] as ChildNode);
      range[AccessorProp.EndNode] = onlyChild
        ? parentNode.lastChild!
        : referenceNode.previousSibling!;
    }

    let startNode = range[AccessorProp.StartNode];
    if (
      range[AccessorProp.Id] &&
      startNode === range[AccessorProp.EndNode] &&
      (startNode as Partial<Element>).tagName === "T"
    ) {
      // First update after resuming hidden: dissolve the `<t>` wrapper, leaving its
      // children. Replacing it with a plain holder ensures a body `<t>` is never mistaken for it.
      const wrapper = startNode as Element;
      if (!wrapper.firstChild) wrapper.appendChild(new Text());
      range = scope[rangeAccessor] = {} as BranchScope;
      range[AccessorProp.StartNode] = startNode = wrapper.firstChild!;
      range[AccessorProp.EndNode] = wrapper.lastChild!;
      wrapper.replaceWith(...wrapper.childNodes);
    }

    const shownRange = range;
    // Re-reads whether the range is on screen at apply time, so a superseding
    // render only has to retarget the display value.
    const commit = (_from: unknown, show: unknown) => {
      const inDom =
        shownRange[AccessorProp.StartNode].parentNode === parentNode;
      if (show) {
        if (!inDom) {
          insertBranchBefore(
            shownRange,
            parentNode,
            onlyChild ? null : referenceNode,
          );
        }
      } else if (inDom) {
        tempDetachBranch(shownRange);
      }
    };
    if (holding && (parentNode as Node).isConnected) {
      holdCommit(
        scope,
        AccessorPrefix.HeldCommit + nodeAccessor,
        0,
        display,
        commit,
      );
    } else {
      commit(0, display);
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
          (normalizedRenderer as Renderer | undefined)?.[RendererProp.Id] ||
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
          if (content[RendererProp.Accessor]) {
            subscribeToScopeSet(
              content[RendererProp.Owner]!,
              content[RendererProp.Accessor],
              scope[childScopeAccessor][
                AccessorPrefix.BranchScopes +
                  (MARKO_DEBUG ? `#${normalizedRenderer}/0` : "a")
              ],
            );
          }
        }
      } else if (normalizedRenderer?.[RendererProp.Accessor]) {
        subscribeToScopeSet(
          normalizedRenderer[RendererProp.Owner]!,
          normalizedRenderer[RendererProp.Accessor],
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
        for (const accessor in normalizedRenderer[RendererProp.LocalClosures]) {
          normalizedRenderer[RendererProp.LocalClosures]![accessor](
            childScope,
            normalizedRenderer[RendererProp.LocalClosureValues]![accessor],
          );
        }

        if (normalizedRenderer[RendererProp.Params]) {
          if (inputIsArgs) {
            normalizedRenderer[RendererProp.Params]!(
              childScope,
              (normalizedRenderer as any)._ ? args[0] : args,
            );
          } else {
            const inputWithContent = getContent
              ? { ...args, content: getContent(scope) }
              : args || {};
            normalizedRenderer[RendererProp.Params]!(
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

// Specialized `_dynamic_tag` for a content passthrough: the caller guarantees a
// normalized content `Renderer` (or undefined) rendered with no input or parameters.
export function _dynamic_tag_content(
  nodeAccessor: EncodedAccessor,
): Signal<Renderer | undefined> {
  if (!MARKO_DEBUG) nodeAccessor = decodeAccessor(nodeAccessor as number);
  const childScopeAccessor = AccessorPrefix.BranchScopes + nodeAccessor;
  const rendererAccessor = AccessorPrefix.ConditionalRenderer + nodeAccessor;
  enableBranches();
  return (scope, renderer) => {
    if (
      scope[rendererAccessor] !==
      (scope[rendererAccessor] = renderer?.[RendererProp.Id] || renderer)
    ) {
      setConditionalRenderer(
        scope,
        nodeAccessor as string,
        renderer,
        createAndSetupBranch,
      );

      if (renderer?.[RendererProp.Accessor]) {
        subscribeToScopeSet(
          renderer[RendererProp.Owner]!,
          renderer[RendererProp.Accessor],
          scope[childScopeAccessor],
        );
      }
    }

    if (renderer) {
      for (const accessor in renderer[RendererProp.LocalClosures]) {
        renderer[RendererProp.LocalClosures]![accessor](
          scope[childScopeAccessor] as Scope,
          renderer[RendererProp.LocalClosureValues]![accessor],
        );
      }
    }
  };
}

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
  // Creating and setting up the branch proceeds even while holding, so its
  // content is built (detached) during the flush; only the visible swap is
  // deferred until the hold drains.
  const newBranch = (scope[AccessorPrefix.BranchScopes + nodeAccessor] =
    newRenderer &&
    createBranch(scope[AccessorProp.Global], newRenderer, scope, parentNode));
  // Reads the swap's endpoints as arguments, so a superseding render can retarget
  // it to the latest branch while it still starts from what is on screen.
  const commit = (prev: BranchScope | undefined, next: BranchScope) => {
    if (referenceNode === parentNode) {
      if (prev) {
        destroyBranch(prev);
        referenceNode.textContent = "";
      }

      if (next) {
        insertBranchBefore(next, parentNode, null);
      }
    } else if (prev) {
      if (next) {
        insertBranchBefore(next, parentNode, prev[AccessorProp.StartNode]);
      } else {
        parentNode.insertBefore(referenceNode, prev[AccessorProp.StartNode]);
      }

      removeAndDestroyBranch(prev);
    } else if (next) {
      insertBranchBefore(next, parentNode, referenceNode);
      referenceNode.remove();
    }
  };
  if (holding && (parentNode as Node).isConnected) {
    holdCommit(
      scope,
      AccessorPrefix.HeldCommit + nodeAccessor,
      prevBranch,
      newBranch,
      commit,
      dropBranch,
    );
  } else {
    commit(prevBranch, newBranch);
  }
}

// A branch a superseding render replaced before it was ever shown: its DOM is
// still detached, so releasing the scope is all that is needed.
function dropBranch(superseded: BranchScope | undefined) {
  if (superseded) destroyBranch(superseded);
}

export const _for_of = loop<
  [all: unknown[], by?: (item: unknown, index: number) => unknown]
>(([all, by = bySecondArg], cb) => {
  if (typeof by === "string") {
    forOf(all, (item, i) =>
      cb((item as Record<string, unknown>)[by], [item, i]),
    );
  } else {
    forOf(all, (item, i) => cb(by(item, i), [item, i]));
  }
});

export const _for_in = loop<
  [obj: {}, by?: (key: string, v: unknown) => unknown]
>(([obj, by = byFirstArg], cb) =>
  forIn(obj, (key, value) => cb(by(key, value), [key, value])),
);

export const _for_to = loop<
  [to: number, from: number, step: number, by?: (v: number) => unknown]
>(([to, from, step, by = byFirstArg], cb) =>
  forTo(to, from, step, (v) => cb(by(v), [v])),
);

export const _for_until = loop<
  [until: number, from: number, step: number, by?: (v: number) => unknown]
>(([until, from, step, by = byFirstArg], cb) =>
  forUntil(until, from, step, (v) => cb(by(v), [v])),
);

/* @__NO_SIDE_EFFECTS__ */
function loop<T extends unknown[] = unknown[]>(
  forEach: (value: T, cb: (key: unknown, args: unknown[]) => void) => void,
) {
  return (
    nodeAccessor: EncodedAccessor,
    template?: string | 0,
    walks?: string | 0,
    setup?: SetupFn | 0,
    params?: Signal<unknown>,
  ) => {
    if (!MARKO_DEBUG) nodeAccessor = decodeAccessor(nodeAccessor as number);
    const scopesAccessor = AccessorPrefix.BranchScopes + nodeAccessor;
    const keyedScopesAccessor = AccessorPrefix.KeyedScopes + nodeAccessor;
    const renderer = _content("", template, walks, setup)();
    enableBranches();
    return (scope: Scope, value: T) => {
      const referenceNode = scope[nodeAccessor] as Element | Comment | Text;
      const oldScopes = toArray<BranchScope>(scope[scopesAccessor]);
      const newScopes: BranchScope[] = (scope[scopesAccessor] = []);
      scope[keyedScopesAccessor] = null;
      const oldLen = oldScopes.length;
      const parentNode = (
        referenceNode.nodeType > NodeType.Element
          ? referenceNode.parentNode ||
            oldScopes[0]?.[AccessorProp.StartNode].parentNode
          : referenceNode
      ) as Element;
      let oldScopesByKey: Map<unknown, BranchScope> | undefined;
      let hasPotentialMoves: boolean | undefined;
      let start = 0;

      if (MARKO_DEBUG) {
        // eslint-disable-next-line no-var
        var seenKeys = new Set<unknown>();
      }

      forEach(value, (key, args) => {
        if (MARKO_DEBUG) {
          assertValidLoopKey(key, seenKeys);
        }

        const i = newScopes.length;
        const oldScope = oldScopes[i];
        let branch =
          oldLen &&
          (oldScopesByKey || key !== (oldScope?.[AccessorProp.LoopKey] ?? i)
            ? (oldScopesByKey ||= oldScopes.reduce(
                (map, scope, j) =>
                  j < i
                    ? map
                    : ((scope[AccessorProp.LoopIndex] = j),
                      map.set(scope[AccessorProp.LoopKey] ?? j, scope)),
                new Map<unknown, BranchScope>(),
              )).get(key)
            : oldScope && (start++, oldScope));
        if (branch) {
          hasPotentialMoves = true;
          oldScopesByKey?.delete(key);
        } else {
          branch = createAndSetupBranch(
            scope[AccessorProp.Global],
            renderer,
            scope,
            parentNode,
          );
        }
        branch[AccessorProp.LoopKey] = key;
        newScopes.push(branch);
        params?.(branch, args);
      });

      // Building the branches above proceeds even while holding; the
      // reconciliation reads and mutates the live list as it goes, so it must
      // run as one atomic step — held whole (not op-by-op) when connected.
      // Both lists are arguments so a superseding render can retarget it while
      // it still starts from the branches that are on screen.
      const commit = (from: BranchScope[], to: BranchScope[]) => {
        if (holdEnabled && from !== oldScopes) {
          [oldScopesByKey, start, hasPotentialMoves] = reindexLoop(from, to);
        }

        const fromLen = from.length;
        const newLen = to.length;
        const hasSiblings = referenceNode !== parentNode;
        let afterReference: null | Node = null;
        let oldEnd = fromLen - 1;
        let newEnd = newLen - 1;

        if (hasSiblings) {
          if (fromLen) {
            afterReference = from[oldEnd][AccessorProp.EndNode].nextSibling;
            if (!newLen) {
              parentNode.insertBefore(referenceNode, afterReference);
            }
          } else if (newLen) {
            afterReference = referenceNode.nextSibling;
            referenceNode.remove();
          }
        }

        if (!hasPotentialMoves) {
          // Fast path: if we never match an existing branch, we can directly add or remove all scopes.
          if (fromLen) {
            from.forEach(hasSiblings ? removeAndDestroyBranch : destroyBranch);
            if (!hasSiblings) {
              parentNode.textContent = "";
            }
          }

          for (const newScope of to) {
            insertBranchBefore(newScope, parentNode, afterReference);
          }

          return;
        }

        if (oldScopesByKey) {
          oldScopesByKey.forEach(removeAndDestroyBranch);
        } else {
          for (let i = newLen; i < fromLen; i++) {
            removeAndDestroyBranch(from[i]);
          }
        }

        // Skip common suffix
        while (
          oldEnd >= start &&
          newEnd >= start &&
          from[oldEnd] === to[newEnd]
        ) {
          oldEnd--;
          newEnd--;
        }

        // Update afterReference to account for common suffix
        if (oldEnd + 1 < fromLen) {
          afterReference = from[oldEnd + 1][AccessorProp.StartNode];
        }

        if (start > oldEnd || start > newEnd) {
          for (let i = start; i <= newEnd; i++) {
            insertBranchBefore(to[i], parentNode, afterReference);
          }
          return;
        }

        // Handle mixed new/moves
        const diffLen = newEnd - start + 1;
        const sources = new Array<number>(diffLen);
        const pred = new Array<number>(diffLen);
        const tails: number[] = [];
        let tail: number = -1;
        let lo: number;
        let hi: number;
        let mid: number;

        for (let i = diffLen; i--;) {
          sources[i] = to[start + i][AccessorProp.LoopIndex] ?? -1;
        }

        for (let i = 0; i < diffLen; i++) {
          if (~sources[i]) {
            if (tail < 0 || sources[tails[tail]] < sources[i]) {
              if (~tail) pred[i] = tails[tail];
              tails[++tail] = i;
            } else {
              lo = 0;
              hi = tail;
              while (lo < hi) {
                mid = ((lo + hi) / 2) | 0;
                if (sources[tails[mid]] < sources[i]) lo = mid + 1;
                else hi = mid;
              }
              if (sources[i] < sources[tails[lo]]) {
                if (lo > 0) pred[i] = tails[lo - 1];
                tails[lo] = i;
              }
            }
          }
        }

        // Backtrack to build LIS indices (reuse tails array)
        hi = tails[tail];
        lo = tail + 1;
        while (lo-- > 0) {
          tails[lo] = hi;
          hi = pred[hi];
        }

        for (let i = diffLen; i--;) {
          if (~tail && i === tails[tail]) {
            tail--;
          } else {
            insertBranchBefore(to[start + i], parentNode, afterReference);
          }

          afterReference = to[start + i][AccessorProp.StartNode];
        }
      };
      if (holding && parentNode.isConnected) {
        holdCommit(
          scope,
          AccessorPrefix.HeldCommit + nodeAccessor,
          oldScopes,
          newScopes,
          commit,
          dropLoopBranches,
        );
      } else {
        commit(oldScopes, newScopes);
      }
    };
  };
}

// A superseding render diffed against branches that were never shown, so the
// keyed lookup, common prefix, and source indexes are rebuilt against the
// branches actually on screen.
function reindexLoop(from: BranchScope[], to: BranchScope[]) {
  const byKey = new Map<unknown, BranchScope>();
  let common = 0;
  let moves: boolean | undefined;

  // Forward, so the leftovers this map yields are removed in document order.
  for (let i = 0; i < from.length; i++) {
    from[i][AccessorProp.LoopIndex] = i;
    byKey.set(from[i][AccessorProp.LoopKey] ?? i, from[i]);
  }

  while (common < to.length && to[common] === from[common]) common++;

  for (const branch of to) {
    if (byKey.get(branch[AccessorProp.LoopKey]) === branch) {
      moves = true;
      byKey.delete(branch[AccessorProp.LoopKey]);
    } else {
      branch[AccessorProp.LoopIndex] = -1;
    }
  }

  return [byKey, common, moves] as const;
}

// Branches a superseding render built but never showed; the ones still on screen
// stay for the drain's own reconciliation to remove.
function dropLoopBranches(
  superseded: BranchScope[],
  to: BranchScope[],
  from: BranchScope[],
) {
  const kept = new Set(to);
  for (const branch of from) kept.add(branch);
  for (const branch of superseded) {
    if (!kept.has(branch)) destroyBranch(branch);
  }
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

import { assertValidLoopKey, assertValidTagName } from "../common/errors";
import { forIn, forOf, forTo, forUntil } from "../common/for";
import {
  decodeAccessor,
  withBranches,
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
import { controllableRenders } from "./controllable";
import { _attrs, _attrs_content, _attrs_script } from "./dom";
import {
  caughtError,
  runEffects,
  pendingEffects,
  type PendingRender,
  placeholderShown,
  prepareEffects,
  queueAsyncRender,
  queueEffect,
  queuePendingRender,
  queueRender,
  run,
} from "./queue";
import {
  _content,
  createAndSetupBranch,
  createBranch,
  type Renderer,
  setupBranch,
  type SetupFn,
} from "./renderer";
import { _resume } from "./resume";
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
  const resolveAwait = (
    scope: Scope,
    referenceNode: ChildNode,
    value: unknown,
  ) => {
    const awaitBranch = scope[branchAccessor] as BranchScope;
    if (awaitBranch[AccessorProp.DetachedAwait]) {
      awaitBranch[AccessorProp.PendingScopes] =
        awaitBranch[AccessorProp.PendingScopes]?.forEach(syncGen);
      setupBranch(awaitBranch[AccessorProp.DetachedAwait], awaitBranch);
      awaitBranch[AccessorProp.DetachedAwait] = 0;

      insertBranchBefore(
        awaitBranch,
        (scope[nodeAccessor] as ChildNode).parentNode!,
        scope[nodeAccessor] as ChildNode,
      );
      referenceNode.remove();
    }
    params?.(awaitBranch, [value]);
    return awaitBranch;
  };
  const awaitPromise = (scope: Scope, promise: Promise<unknown>) => {
    if (!isPromise(promise) && scope[promiseAccessor]) {
      promise = Promise.resolve(promise);
    }

    let awaitBranch = scope[branchAccessor] as BranchScope;
    const tryPlaceholder = findBranchWithKey(
      scope,
      AccessorProp.PlaceholderContent,
    );
    const tryBranch = tryPlaceholder || awaitBranch;
    if (!(isPromise(promise) ? tryBranch : awaitBranch)) {
      // `_await_content` creates the branch and can run after this signal, so
      // hand the promise back to it to replay once the branch exists.
      scope[promiseAccessor] = () => awaitPromise(scope, promise);
      return;
    }

    if (!isPromise(promise)) {
      resolveAwait(scope, scope[nodeAccessor] as ChildNode, promise);
      return;
    }

    let awaitCounter = tryBranch[AccessorProp.AwaitCounter];

    placeholderShown.add(pendingEffects);

    if (!tryPlaceholder && !awaitCounter?.i) {
      awaitCounter = createAwaitCounter(tryBranch, () => {
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
      });
    }

    if (!scope[promiseAccessor]) {
      if (awaitBranch) {
        awaitBranch[AccessorProp.PendingRenders] ||= [];
      }
      if (tryPlaceholder) {
        awaitCounter = addAwaitCounter(scope, tryPlaceholder)!;
      } else {
        scheduleAwaitFrame(awaitCounter!, scope, () => {
          if (!awaitBranch[AccessorProp.DetachedAwait]) {
            awaitBranch[AccessorProp.StartNode].parentNode!.insertBefore(
              scope[nodeAccessor] as Node,
              awaitBranch[AccessorProp.StartNode],
            );
            tempDetachBranch(tryBranch);
          }
        });
      }
    }

    const thisPromise = (scope[promiseAccessor] = promise.then(
      (data) => {
        if (thisPromise === scope[promiseAccessor]) {
          const referenceNode = scope[nodeAccessor] as ChildNode;
          scope[promiseAccessor] = 0;

          if (scope[AccessorProp.ClosestBranch]?.[AccessorProp.Gen] === 0) {
            // The branch holding this await is gone, so the render below is
            // dropped; complete here or an ancestor `@placeholder` never
            // dismisses.
            awaitCounter!.c();
            run();
            return;
          }

          queueAsyncRender(scope, () => {
            awaitBranch = resolveAwait(scope, referenceNode, data);

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

  return awaitPromise;
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
    awaitCounter = createAwaitCounter(tryBranch, () =>
      dismissPlaceholder(tryBranch),
    );
  }
  placeholderShown.add(pendingEffects);
  scheduleAwaitFrame(awaitCounter, tryBranch, () => {
    insertBranchBefore(
      (tryBranch[AccessorProp.PlaceholderBranch] = createAndSetupBranch(
        tryBranch[AccessorProp.Global],
        tryBranch[AccessorProp.PlaceholderContent] as Renderer,
        tryBranch[AccessorProp.Owner]!,
        tryBranch[AccessorProp.StartNode].parentNode!,
      )),
      tryBranch[AccessorProp.StartNode].parentNode!,
      tryBranch[AccessorProp.StartNode],
    );
    tempDetachBranch(tryBranch);
  });
  return awaitCounter;
}

function scheduleAwaitFrame(
  awaitCounter: AwaitCounter,
  scope: Scope,
  render: () => void,
) {
  if (!awaitCounter.i++) {
    requestAnimationFrame(
      () =>
        awaitCounter.i &&
        runEffects(prepareEffects(() => queueRender(scope, render, -1))),
    );
  }
}

export function createAwaitCounter(tryBranch: BranchScope, done: () => void) {
  const awaitCounter: AwaitCounter = (tryBranch[AccessorProp.AwaitCounter] = {
    i: 0,
    c() {
      if (--awaitCounter.i) return 1;
      done();
      queueEffect(tryBranch, runPendingEffects);
    },
  });
  return awaitCounter;
}

function runPendingEffects(scope: BranchScope) {
  const effects = scope[AccessorProp.PendingEffects];
  if (effects) {
    scope[AccessorProp.PendingEffects] = [];
    runEffects(effects, 1);
  }
}

export function dismissPlaceholder(tryBranch: BranchScope) {
  const placeholderBranch = tryBranch[AccessorProp.PlaceholderBranch];
  if (placeholderBranch) {
    tryBranch[AccessorProp.PlaceholderBranch] = 0;
    // The temporarily detached try branch has a DocumentFragment parent
    // containing its complete DOM range.
    placeholderBranch[AccessorProp.StartNode].parentNode!.insertBefore(
      tryBranch[AccessorProp.StartNode].parentNode!,
      placeholderBranch[AccessorProp.StartNode],
    );
    removeAndDestroyBranch(placeholderBranch);
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

export const _if = /*@__PURE__*/ withBranches(
  (
    nodeAccessor: EncodedAccessor,
    ...branchesArgs: (string | SetupFn | 0)[]
  ) => {
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
  },
);

// The `<show>` body always exists, so this signal never renders; it only moves
// the body's range in/out of a detached fragment (SSR hides it in a `<t hidden>` wrapper).
export const _show = /*@__PURE__*/ withBranches(
  (
    nodeAccessor: EncodedAccessor,
    startNodeAccessor?: EncodedAccessor,
    endNodeAccessor?: EncodedAccessor,
  ) => {
    if (!MARKO_DEBUG) {
      nodeAccessor = decodeAccessor(nodeAccessor as number);
      if (startNodeAccessor !== undefined) {
        startNodeAccessor = decodeAccessor(startNodeAccessor as number);
      }
      if (endNodeAccessor !== undefined) {
        endNodeAccessor = decodeAccessor(endNodeAccessor as number);
      }
    }
    const rangeAccessor = AccessorPrefix.BranchScopes + nodeAccessor;
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
          : endNodeAccessor === undefined
            ? // A single static node body bounds itself.
              referenceNode.previousSibling!
            : (scope[endNodeAccessor as Accessor] as ChildNode);
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

      // An only child owns every node in the parent, so the parent being empty is
      // what says it is hidden; its cached marker may have been replaced by the body.
      const inDom = onlyChild
        ? !!parentNode.firstChild
        : startNode.parentNode === parentNode;
      if (display) {
        if (!inDom) {
          insertBranchBefore(
            range,
            parentNode,
            onlyChild ? null : referenceNode,
          );
        }
      } else if (inDom) {
        if (onlyChild) {
          // An only child has no markers; body control flow can replace the
          // parent's first and last child, so read them at each hide.
          range[AccessorProp.StartNode] = parentNode.firstChild!;
          range[AccessorProp.EndNode] = parentNode.lastChild!;
        }
        tempDetachBranch(range);
      }
    };
  },
);

// `_content` bakes one id per section, so two instances of it share that id and
// only their owner tells them apart. Ownerless renderers and string tags keep
// the bare id, so nothing but owner-bound content pays the suffix.
export function rendererKey(renderer: Renderer | string | undefined) {
  // Only owner-bound content is qualified; a Class-API interop renderer has no
  // owner, so its non-string id keeps comparing as it always has.
  return (renderer as Renderer | undefined)?.[RendererProp.Owner]
    ? (renderer as Renderer)[RendererProp.Id] +
        " " +
        (renderer as Renderer)[RendererProp.Owner]![AccessorProp.Id]
    : (renderer as Renderer | undefined)?.[RendererProp.Id] || renderer;
}

export function patchDynamicTag(
  fn: <T extends typeof _dynamic_tag>(cond: T) => T,
) {
  // Injection point for compat layer.
  _dynamic_tag = fn(_dynamic_tag);
}
export let _dynamic_tag = /*@__PURE__*/ withBranches(
  (
    nodeAccessor: EncodedAccessor,
    getContent?: ((scope: Scope) => Renderer) | 0,
    getTagVar?: (() => Signal<unknown>) | 0,
    inputIsArgs?: 1,
  ): Signal<Renderer | string | undefined> => {
    if (!MARKO_DEBUG) nodeAccessor = decodeAccessor(nodeAccessor as number);
    const childScopeAccessor = AccessorPrefix.BranchScopes + nodeAccessor;
    const rendererAccessor = AccessorPrefix.ConditionalRenderer + nodeAccessor;
    return (scope, newRenderer, getInput?: () => any) => {
      const normalizedRenderer =
        normalizeDynamicRenderer<Renderer>(newRenderer);
      if (
        scope[rendererAccessor] !==
          (scope[rendererAccessor] = rendererKey(normalizedRenderer)) ||
        (getContent && !(normalizedRenderer || scope[childScopeAccessor]))
      ) {
        setConditionalRenderer(
          scope,
          nodeAccessor as string,
          normalizedRenderer || (getContent ? getContent(scope) : undefined),
          createBranchWithTagNameOrRenderer,
        );

        if (getTagVar) {
          if (scope[childScopeAccessor]) {
            scope[childScopeAccessor][AccessorProp.TagVariable] = (
              value: unknown,
            ) => getTagVar()(scope, value);
          } else {
            // The branch tore down; clear the tag variable with it.
            getTagVar()(scope, undefined);
          }
        }

        if (typeof normalizedRenderer === "string") {
          if (getContent) {
            const content = getContent(scope);
            setConditionalRenderer(
              scope[childScopeAccessor],
              MARKO_DEBUG ? `#${normalizedRenderer.toLowerCase()}/0` : "a",
              content,
              createAndSetupBranch,
            );
            if (content[RendererProp.Accessor]) {
              subscribeToScopeSet(
                content[RendererProp.Owner]!,
                content[RendererProp.Accessor],
                scope[childScopeAccessor][
                  AccessorPrefix.BranchScopes +
                    (MARKO_DEBUG
                      ? `#${normalizedRenderer.toLowerCase()}/0`
                      : "a")
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
          const nodeAccessor = MARKO_DEBUG
            ? `#${normalizedRenderer.toLowerCase()}/0`
            : "a";
          (getContent ? _attrs : _attrs_content)(
            childScope,
            nodeAccessor,
            (inputIsArgs ? args[0] : args) || {},
            controllableRenders[(childScope[nodeAccessor] as Element).tagName],
          );

          if (
            childScope[AccessorPrefix.EventAttributes + nodeAccessor] ||
            childScope[AccessorPrefix.ControlledHandler + nodeAccessor]
          ) {
            queueEffect(childScope, dynamicTagScript);
          }
        } else {
          for (const accessor in normalizedRenderer[
            RendererProp.LocalClosures
          ]) {
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
  },
);

// Specialized `_dynamic_tag` for a content passthrough: the caller guarantees a
// normalized content `Renderer` (or undefined) rendered with no input or parameters.
export const _dynamic_tag_content = /*@__PURE__*/ withBranches(
  (nodeAccessor: EncodedAccessor): Signal<Renderer | undefined> => {
    if (!MARKO_DEBUG) nodeAccessor = decodeAccessor(nodeAccessor as number);
    const childScopeAccessor = AccessorPrefix.BranchScopes + nodeAccessor;
    const rendererAccessor = AccessorPrefix.ConditionalRenderer + nodeAccessor;
    return (scope, renderer) => {
      if (
        scope[rendererAccessor] !==
        (scope[rendererAccessor] = rendererKey(renderer))
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
  },
);

// `dynamicTagScript` runs on a branch scope, so resume-only bundles (where
// `_dynamic_tag` itself is tree-shaken) still need branch visits processed.
export const _resume_dynamic_tag = /*@__PURE__*/ withBranches(() =>
  _resume(DYNAMIC_TAG_SCRIPT_REGISTER_ID, dynamicTagScript),
);

function dynamicTagScript(branch: Scope) {
  _attrs_script(
    branch,
    MARKO_DEBUG
      ? `#${(branch[AccessorProp.Renderer] as string).toLowerCase()}/0`
      : "a",
  );
}

export function setConditionalRenderer<T>(
  scope: Scope,
  nodeAccessor: Accessor,
  newRenderer: T,
  createBranch: (
    $global: Scope[typeof AccessorProp.Global],
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

const loop = /*@__PURE__*/ withBranches(
  <T extends unknown[] = unknown[]>(
    forEach: (value: T, cb: (key: unknown, args: unknown[]) => void) => void,
  ) =>
    (
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

        const newLen = newScopes.length;
        const hasSiblings = referenceNode !== parentNode;
        let afterReference: null | Node = null;
        let oldEnd = oldLen - 1;
        let newEnd = newLen - 1;

        if (hasSiblings) {
          if (oldLen) {
            afterReference =
              oldScopes[oldEnd][AccessorProp.EndNode].nextSibling;
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
          if (oldLen) {
            oldScopes.forEach(
              hasSiblings ? removeAndDestroyBranch : destroyBranch,
            );
            if (!hasSiblings) {
              parentNode.textContent = "";
            }
          }

          for (const newScope of newScopes) {
            insertBranchBefore(newScope, parentNode, afterReference);
          }

          return;
        }

        if (oldScopesByKey) {
          oldScopesByKey.forEach(removeAndDestroyBranch);
        } else {
          for (let i = newLen; i < oldLen; i++) {
            removeAndDestroyBranch(oldScopes[i]);
          }
        }

        // Skip common suffix
        while (
          oldEnd >= start &&
          newEnd >= start &&
          oldScopes[oldEnd] === newScopes[newEnd]
        ) {
          oldEnd--;
          newEnd--;
        }

        // Update afterReference to account for common suffix
        if (oldEnd + 1 < oldLen) {
          afterReference = oldScopes[oldEnd + 1][AccessorProp.StartNode];
        }

        if (start > oldEnd || start > newEnd) {
          for (let i = start; i <= newEnd; i++) {
            insertBranchBefore(newScopes[i], parentNode, afterReference);
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
          sources[i] = newScopes[start + i][AccessorProp.LoopIndex] ?? -1;
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
            insertBranchBefore(
              newScopes[start + i],
              parentNode,
              afterReference,
            );
          }

          afterReference = newScopes[start + i][AccessorProp.StartNode];
        }
      };
    },
);

export const _for_of = /*@__PURE__*/ loop<
  [all: unknown[], by?: (item: unknown, index: number) => unknown]
>(([all, by], cb) => {
  by ||= bySecondArg;
  if (typeof by === "string") {
    forOf(all, (item, i) =>
      cb((item as Record<string, unknown>)[by], [item, i]),
    );
  } else {
    forOf(all, (item, i) => cb(by(item, i), [item, i]));
  }
});

export const _for_in = /*@__PURE__*/ loop<
  [obj: {}, by?: (key: string, v: unknown) => unknown]
>(([obj, by], cb) => {
  by ||= byFirstArg;
  forIn(obj, (key, value) => cb(by(key, value), [key, value]));
});

export const _for_to = /*@__PURE__*/ loop<
  [to: number, from: number, step: number, by?: (v: number) => unknown]
>(([to, from, step, by], cb) => {
  by ||= byFirstArg;
  forTo(to, from, step, (v) => cb(by(v), [v]));
});

export const _for_until = /*@__PURE__*/ loop<
  [until: number, from: number, step: number, by?: (v: number) => unknown]
>(([until, from, step, by], cb) => {
  by ||= byFirstArg;
  forUntil(until, from, step, (v) => cb(by(v), [v]));
});

function createBranchWithTagNameOrRenderer(
  $global: Scope[typeof AccessorProp.Global],
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
    branch[MARKO_DEBUG ? `#${tagNameOrRenderer.toLowerCase()}/0` : "a"] =
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

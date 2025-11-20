import { assertValidTagName } from "../common/errors";
import { forIn, forOf, forTo, forUntil } from "../common/for";
import { decodeAccessor, normalizeDynamicRenderer } from "../common/helpers";
import { DYNAMIC_TAG_SCRIPT_REGISTER_ID } from "../common/meta";
import { toArray } from "../common/opt";
import {
  type $Global,
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type AwaitCounter,
  type BranchScope,
  type EncodedAccessor,
  NodeType,
  type Scope,
} from "../common/types";
import { _attrs, _attrs_content, _attrs_script } from "./dom";
import {
  _enable_catch,
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
  _content,
  createAndSetupBranch,
  createBranch,
  type Renderer,
  setupBranch,
  type SetupFn,
} from "./renderer";
import {
  _resume,
  enableBranches,
  type RenderData,
  type Renders,
} from "./resume";
import { schedule } from "./schedule";
import {
  destroyBranch,
  findBranchWithKey,
  insertBranchBefore,
  removeAndDestroyBranch,
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
  const rendererAccessor = AccessorPrefix.ConditionalRenderer + nodeAccessor;
  _enable_catch();
  return (scope: Scope, promise: Promise<unknown>) => {
    // TODO: !isPromise, render synchronously

    let awaitCounter: AwaitCounter | undefined;
    let renderData: RenderData | undefined;
    const tryWithPlaceholder = findBranchWithKey(
      scope,
      AccessorProp.PlaceholderContent,
    );

    if (tryWithPlaceholder) {
      renderData = (self as unknown as Record<string, Renders>)[
        (tryWithPlaceholder[AccessorProp.Global] as $Global).runtimeId!
      ]?.[(tryWithPlaceholder[AccessorProp.Global] as $Global).renderId!];
      awaitCounter = tryWithPlaceholder[AccessorProp.AwaitCounter] ||=
        renderData?.p?.[tryWithPlaceholder[AccessorProp.Id]];
      if (!awaitCounter?.i) {
        awaitCounter = tryWithPlaceholder[AccessorProp.AwaitCounter] = {
          d: 1,
          i: 0,
          c() {
            if (!--awaitCounter!.i) {
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
                const pendingEffects = scope[AccessorProp.PendingEffects];
                if (pendingEffects) {
                  scope[AccessorProp.PendingEffects] = [];
                  runEffects(pendingEffects, true);
                }
              });
            }
          },
        };
      }

      placeholderShown.add(pendingEffects);
      if (!scope[promiseAccessor] && !awaitCounter.i++) {
        requestAnimationFrame(
          () =>
            awaitCounter!.i &&
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
    } else if (scope[branchAccessor] && !scope[promiseAccessor]) {
      (scope[branchAccessor] as BranchScope)[
        AccessorProp.StartNode
      ].parentNode!.insertBefore(
        scope[nodeAccessor] as Node,
        (scope[branchAccessor] as BranchScope)[AccessorProp.StartNode],
      );
      tempDetachBranch(scope[branchAccessor] as BranchScope);
    }
    const thisPromise = (scope[promiseAccessor] = promise.then(
      (data) => {
        if (thisPromise === scope[promiseAccessor]) {
          scope[promiseAccessor] = 0;

          schedule();
          queueRender(
            scope,
            () => {
              if (scope[branchAccessor]) {
                // Since this is temp detached the parent node is a document fragment with all of the children in the branch.
                if (!tryWithPlaceholder) {
                  (scope[nodeAccessor] as ChildNode).replaceWith(
                    (scope[branchAccessor] as BranchScope)[
                      AccessorProp.StartNode
                    ].parentNode!,
                  );
                }
              } else {
                // TODO: this preserves the existing scope, but we need to defer closures executing in this existing scope while it is pending.
                // Not ideal, but we could destroy and recreate the scope everytime the promise changes to avoid this.
                insertBranchBefore(
                  (scope[branchAccessor] = createAndSetupBranch(
                    scope[AccessorProp.Global],
                    scope[rendererAccessor],
                    scope,
                    (scope[nodeAccessor] as ChildNode).parentNode!,
                  )),
                  (scope[nodeAccessor] as ChildNode).parentNode!,
                  scope[nodeAccessor] as ChildNode,
                );
                (scope[nodeAccessor] as ChildNode).remove();
              }

              params?.(scope[branchAccessor] as BranchScope, [data]);

              if (awaitCounter) {
                placeholderShown.add(pendingEffects);
                awaitCounter.c();
                if (!awaitCounter.d) {
                  const fnScopes = new Map<unknown, Set<Scope>>();
                  const effects = renderData!.m();
                  for (let i = 0; i < pendingEffects.length; ) {
                    const fn = pendingEffects[i++] as any;
                    let scopes = fnScopes.get(fn);
                    if (!scopes) {
                      fnScopes.set(fn, (scopes = new Set()));
                    }
                    scopes.add(pendingEffects[i++] as Scope);
                  }
                  for (let i = 0; i < effects.length; ) {
                    const fn = effects[i++] as any;
                    const scope = effects[i++] as Scope;
                    if (!fnScopes.get(fn)?.has(scope)) {
                      queueEffect(scope, fn);
                    }
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
          if (awaitCounter) awaitCounter.i = 0;
          scope[promiseAccessor] = 0;
          schedule();
          queueRender(scope, renderCatch, -1, error);
        }
      },
    ));
  };
}

export function _await_content(
  nodeAccessor: EncodedAccessor,
  template?: string | 0,
  walks?: string | 0,
  setup?: SetupFn | 0,
) {
  const rendererAccessor =
    AccessorPrefix.ConditionalRenderer +
    (MARKO_DEBUG ? nodeAccessor : decodeAccessor(nodeAccessor as number));
  const renderer = _content("", template, walks, setup)();
  return (scope: Scope) => {
    scope[rendererAccessor] = renderer;
  };
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
    tryWithCatch[AccessorProp.CatchContent].___params?.(
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
    const scopesByKeyAccessor = AccessorPrefix.BranchScopes + scopesAccessor;
    const renderer = _content("", template, walks, setup)();
    enableBranches();
    return (scope: Scope, value: T) => {
      const referenceNode = scope[nodeAccessor] as Element | Comment | Text;
      const oldScopes = toArray<BranchScope>(scope[scopesAccessor]);
      const oldScopesByKey: Map<unknown, BranchScope> =
        scope[scopesByKeyAccessor] ||
        oldScopes.reduce(
          (map, scope, i) => map.set(scope[AccessorProp.LoopKey] ?? i, scope),
          new Map<unknown, BranchScope>(),
        );
      const newScopes: BranchScope[] = (scope[scopesAccessor] = []);
      const newScopesByKey: Map<unknown, BranchScope> = (scope[
        scopesByKeyAccessor
      ] = new Map());
      const parentNode = (
        referenceNode.nodeType > NodeType.Element
          ? referenceNode.parentNode ||
            oldScopes[0]?.[AccessorProp.StartNode].parentNode
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
          oldScopesByKey.get(key) ||
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

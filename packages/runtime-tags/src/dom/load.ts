import { decodeAccessor } from "../common/helpers";
import {
  AccessorProp,
  type BranchScope,
  type EncodedAccessor,
  RendererProp,
  type Scope,
  type Template,
} from "../common/types";
import { addAwaitCounter, renderCatch } from "./control-flow";
import { queueAsyncRender, queueRender, runId } from "./queue";
import { _content, type Renderer, setupBranch, type SetupFn } from "./renderer";
import { withLazy } from "./resume";
import { insertBranchBefore, syncGen } from "./scope";
import type { Signal } from "./signals";
import { _template } from "./template";

/** Input chunks buffered until the tag's module lands, keyed by the chunk's
 * load so a re-set attribute replaces its own entry: the value, and the
 * `_load_signal` that applies it once its module is cached. */
type LoadValues = Map<Promise<LoadSignal>, [value: unknown, apply: LoadApply]>;
/** A `_load_signal`: applies a chunk's value, and caches the chunk's
 * signal on itself once loaded. */
interface LoadApply extends Signal {
  _?: Signal;
}
interface LoadModule {
  _: [template: string, walks: string, setup: SetupFn];
}
interface LoadSignal {
  _: Signal;
}
export interface LoadTrigger {
  <T>(load: () => Promise<T>): () => Promise<T>;
}

export const _load_template = /*@__PURE__*/ withLazy(
  (id: string, load: () => Promise<Renderer>) => {
    let pending: ReturnType<typeof load> | undefined;
    const lazyTemplate = _template(
      id,
      0,
      0,
      (branch) => {
        const awaitCounter = addAwaitCounter(branch);
        branch[AccessorProp.Load] ||= new Map() as LoadValues;
        (pending ||= load()).then(
          (renderer) => {
            Object.assign(lazyTemplate, renderer);
            queueAsyncRender(branch as BranchScope, (branch) =>
              insertLoaded(
                renderer,
                branch,
                branch[AccessorProp.StartNode],
                awaitCounter,
              ),
            );
          },
          loadFailed(branch as BranchScope, awaitCounter),
        );
      },
      _load_signal(() =>
        (pending ||= load()).then((r) => ({ _: r[RendererProp.Params]! })),
      ),
    ) as Template & Renderer;
    return lazyTemplate;
  },
);

export const _load_setup = /*@__PURE__*/ withLazy(
  (
    nodeAccessor: EncodedAccessor,
    childScopeAccessor: EncodedAccessor,
    load: () => Promise<LoadModule>,
  ) => {
    if (!MARKO_DEBUG) {
      nodeAccessor = decodeAccessor(nodeAccessor as number);
      childScopeAccessor = decodeAccessor(childScopeAccessor as number);
    }

    let pending: ReturnType<typeof load> | undefined;
    let renderer: Renderer | undefined;
    const insertCached = (child: BranchScope, marker: ChildNode) =>
      insertLoaded(renderer!, child, marker);

    return (owner: Scope) => {
      const child = owner[childScopeAccessor] as BranchScope;
      if (renderer) {
        // Later in this run, once the rest of the owner's setup has
        // buffered every input chunk for the batch below.
        queueRender(child, insertCached, -1, owner[nodeAccessor] as ChildNode);
      } else {
        const awaitCounter = addAwaitCounter(owner);
        child[AccessorProp.Load] ||= new Map() as LoadValues;
        (pending ||= load()).then(
          (mod) => {
            renderer = _content("", ...mod._)();
            queueAsyncRender(child, (child) =>
              insertLoaded(
                renderer!,
                child,
                owner[nodeAccessor] as ChildNode,
                awaitCounter,
              ),
            );
          },
          loadFailed(child, awaitCounter),
        );
      }
    };
  },
);

function insertLoaded(
  renderer: Renderer,
  branch: BranchScope,
  marker: ChildNode,
  awaitCounter?: ReturnType<typeof addAwaitCounter>,
) {
  const parent = marker.parentNode as Element,
    values = branch[AccessorProp.Load] as LoadValues,
    // Clone in the run that sets up: nested scopes take the generation of
    // the run that creates them, and a `<let>` seeded by setup in a later
    // run is dropped as stale, taking the nested tag's `<return>` with it.
    clone = () => {
      syncGen(branch);
      renderer[RendererProp.Clone]!(branch, parent.namespaceURI!);
      branch[AccessorProp.Load] = 0;
    },
    insert = () => {
      insertBranchBefore(branch, parent, marker);
      marker.remove();
      awaitCounter?.c();
    };
  let remaining: number;
  if ((remaining = values?.size as number)) {
    const fail = loadFailed(branch, awaitCounter);
    // Each entry's signal is cached as its chunk lands, so the replay
    // applies every entry synchronously.
    values!.forEach(([, apply], promise) =>
      promise.then(
        (mod) =>
          (apply._ = mod._) &&
          !--remaining &&
          queueAsyncRender(branch, (branch) => {
            clone();
            renderer[RendererProp.Setup]?.(branch);
            values.forEach(([value, apply]) => apply(branch, value));
            insert();
          }),
        // A rejected input chunk drives the same `@catch` boundary as a setup
        // failure; `remaining = 0` stops later chunks re-firing either arm.
        (error) => remaining > 0 && ((remaining = 0), fail(error)),
      ),
    );
  } else {
    clone();
    setupBranch(renderer, branch);
    insert();
  }
}

function loadFailed(
  scope: BranchScope,
  awaitCounter?: ReturnType<typeof addAwaitCounter>,
) {
  return (error: unknown) => {
    if (awaitCounter) {
      // Complete to dismiss an ancestor `@placeholder` (renderCatch only unwinds
      // the catch's own try); zero a resumed reorder record (its `c()` reorders).
      if (awaitCounter.m) awaitCounter.i = 0;
      else awaitCounter.c();
    }
    queueAsyncRender(scope, renderCatch, error);
  };
}

export const _load_signal = /*@__PURE__*/ withLazy(
  (load: () => Promise<LoadSignal>): Signal => {
    let pending: Promise<LoadSignal> | undefined;
    const apply: LoadApply = (scope: Scope, value: unknown) => {
      pending ||= load();
      if (
        scope[AccessorProp.Load] ||
        (!(AccessorProp.Load in scope) && scope[AccessorProp.Gen] === runId)
      ) {
        (scope[AccessorProp.Load] ||= new Map() as LoadValues).set(pending, [
          value,
          apply,
        ]);
      } else if (apply._) {
        apply._(scope, value);
      } else {
        pending.then(
          (mod) => queueAsyncRender(scope, (apply._ = mod._), value),
          () => 0,
        );
      }
    };
    return apply;
  },
);

export function _load_visible_trigger(
  selector: string,
  options?: IntersectionObserverInit,
): LoadTrigger {
  let pending: Promise<unknown> | undefined;
  let el: Element | undefined;
  return (load) => () =>
    (pending ||= new Promise(
      (resolve) =>
        (el = getSelectorOrResolve(selector, resolve)) &&
        new IntersectionObserver(
          (entries, io) =>
            entries.some((entry) => entry.isIntersecting) &&
            resolve(io.disconnect()),
          options,
        ).observe(el),
    )).then(load);
}

export function _load_idle_trigger(options?: {
  timeout?: number;
}): LoadTrigger {
  let pending: Promise<unknown> | undefined;
  return (load) => () =>
    (pending ||= new Promise((resolve) =>
      (self.requestIdleCallback || resolve)(resolve, options),
    )).then(load);
}

export function _load_event_trigger(
  event: string,
  selector: string,
): LoadTrigger {
  let pending: Promise<unknown> | undefined;
  return (load) => () =>
    (pending ||= new Promise((resolve) =>
      getSelectorOrResolve(selector, resolve)?.addEventListener(
        event,
        resolve,
        { once: true },
      ),
    )).then(load);
}

export function _load_media_trigger(query: string): LoadTrigger {
  let pending: Promise<unknown> | undefined;
  let mql: MediaQueryList;
  return (load) => () =>
    (pending ||= new Promise((resolve) =>
      (mql = matchMedia(query)).matches
        ? (resolve as () => void)()
        : mql.addEventListener("change", resolve, { once: true }),
    )).then(load);
}

export function _load_race_trigger(...triggers: LoadTrigger[]): LoadTrigger {
  const noop = () => Promise.resolve();
  let pending: Promise<unknown> | undefined;
  return (load) => () =>
    (pending ||= Promise.race(triggers.map((t) => t(noop)()))).then(load);
}

function getSelectorOrResolve(
  selector: string,
  resolve: (value?: unknown) => void,
) {
  return (
    document.querySelector(selector) ||
    (MARKO_DEBUG &&
      console.warn(
        `A lazy load trigger could not find an element matching "${selector}". The module was loaded immediately.`,
      ),
    resolve() as undefined)
  );
}

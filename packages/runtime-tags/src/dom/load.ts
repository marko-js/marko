import {
  AccessorProp,
  type BranchScope,
  RendererProp,
  type Scope,
  type Template,
} from "../common/types";
import { startAwait, renderCatch } from "./control-flow";
import { queueAsyncRender, queueRender, runId } from "./queue";
import { _content, type Renderer, setupBranch, type SetupFn } from "./renderer";
import { onReady } from "./resume";
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
interface LoadSignal {
  _: Signal;
}
// One of a load import's triggers: arms its listener, which calls `resolve`.
type LoadTrigger = (resolve: (value?: unknown) => void) => unknown;

// A stand-in signal or load: the callers ignore its result.
const noop = (_?: unknown): any => 0;

export function _load_template(id: string, load: () => Promise<Renderer>) {
  let pending: ReturnType<typeof load> | undefined;
  const lazyTemplate = _template(
    id,
    0,
    0,
    (branch) => {
      const awaitCounter = startAwait(branch);
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
    // A template reading no input has no params signal; the loaded value
    // still has to count as applied so the content inserts.
    _load_signal((_?: never) =>
      (pending ||= load()).then((r) => ({
        _: r[RendererProp.Params] || noop,
      })),
    ),
  ) as Template & Renderer;
  if (MARKO_DEBUG) lazyTemplate[RendererProp.Lazy] = 1;
  return lazyTemplate;
}

export function _load_setup(
  load: () => Promise<{ _: [template: string, walks: string, setup: SetupFn] }>,
) {
  let pending: ReturnType<typeof load> | undefined;
  let renderer: Renderer | undefined;
  const insertCached = (child: BranchScope, marker: ChildNode) =>
    insertLoaded(renderer!, child, marker);

  return (owner: Scope, child: BranchScope, marker: ChildNode) => {
    child[AccessorProp.Load] ||= new Map() as LoadValues;
    if (renderer) {
      // Later in this run, once the rest of the owner's setup has
      // buffered every input chunk for the batch below.
      queueRender(child, insertCached, -1, marker);
    } else {
      const awaitCounter = startAwait(owner);
      (pending ||= load()).then(
        (mod) => {
          renderer ||= _content("", ...mod._)();
          queueAsyncRender(child, (child) =>
            insertLoaded(renderer!, child, marker, awaitCounter),
          );
        },
        loadFailed(child, awaitCounter),
      );
    }
  };
}

// Inserts once each chunk's import resolves, relying on the bundler's import to
// also wait for that chunk's stylesheets.
function insertLoaded(
  renderer: Renderer,
  branch: BranchScope,
  marker: ChildNode,
  awaitCounter?: ReturnType<typeof startAwait>,
) {
  // Read when it inserts: a pending `<try>` moves its range into a fragment
  // while its placeholder shows, and back once it is dismissed.
  const parent = (_?: never) => marker.parentNode as Element,
    values = branch[AccessorProp.Load] as LoadValues,
    // Clone and set up in one run: a `<let>` that setup writes into a scope
    // cloned in an earlier run is dropped as stale, and its `<return>` with it.
    create = (_?: never) => {
      syncGen(branch);
      renderer[RendererProp.Clone]!(branch, parent().namespaceURI!);
      branch[AccessorProp.Load] = 0;
      setupBranch(renderer, branch);
    },
    insert = (_?: never) => {
      insertBranchBefore(branch, parent(), marker);
      marker.remove();
      awaitCounter?.c();
    };
  let remaining: number;
  if ((remaining = values.size)) {
    // A module already loaded still waits on its input's chunks, which a pending
    // `<try>` counts before it dismisses its placeholder.
    awaitCounter ||= startAwait(branch);
    const fail = loadFailed(branch, awaitCounter);
    // Each entry's signal is cached as its chunk lands, so the render
    // applies every entry synchronously.
    values.forEach(([, apply], promise) =>
      promise.then(
        (mod) =>
          (apply._ = mod._) &&
          !--remaining &&
          queueAsyncRender(branch, (branch) => {
            create();
            values.forEach(([value, apply]) => apply(branch, value));
            insert();
          }),
        // A rejected input chunk drives the same `@catch` boundary as a setup
        // failure; `remaining = 0` stops later chunks re-firing either arm.
        (error) => remaining > 0 && ((remaining = 0), fail(error)),
      ),
    );
  } else {
    create();
    insert();
  }
}

function loadFailed(
  scope: BranchScope,
  awaitCounter?: ReturnType<typeof startAwait>,
) {
  return (error: unknown) => {
    if (awaitCounter) {
      // Complete to dismiss an ancestor `@placeholder`, unless renderCatch zeroed
      // it with its try; zero a resumed reorder record (its `c()` reorders).
      if (awaitCounter.m) awaitCounter.i = 0;
      else if (awaitCounter.i) awaitCounter.c();
    }
    queueAsyncRender(scope, renderCatch, error);
  };
}

export function _load_signal(load: () => Promise<LoadSignal>): Signal {
  let pending: Promise<LoadSignal> | undefined;
  const apply: LoadApply = (scope: Scope, value: unknown) => {
    // `insertLoaded` reads a buffered chunk's rejection only once the setup chunk
    // lands; when that fails too, the setup's own rejection drives `@catch`.
    if (!pending) (pending = load()).catch(noop);
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
        noop,
      );
    }
  };
  return apply;
}

// Waits for the first of a load import's triggers; a resumed page's trigger
// script may already have loaded its module, or be loading it.
export function _load_trigger(
  readyId: string,
  ...triggers: LoadTrigger[]
): <T>(load: () => Promise<T>) => () => Promise<T> {
  let pending: Promise<unknown> | undefined;
  return (load) => (_?: never) =>
    (pending ||= new Promise((resolve: (value?: unknown) => void) =>
      onReady(readyId, resolve)
        ? resolve()
        : triggers.forEach((trigger) => trigger(resolve)),
    )).then(load);
}

export function _load_visible_trigger(
  selector: string,
  options?: IntersectionObserverInit,
): LoadTrigger {
  let el: Element | undefined;
  return (resolve) =>
    (el = getSelectorOrResolve(selector, resolve)) &&
    new IntersectionObserver(
      (entries, io) =>
        entries.some((entry) => entry.isIntersecting) &&
        resolve(io.disconnect()),
      options,
    ).observe(el);
}

export function _load_idle_trigger(options?: {
  timeout?: number;
}): LoadTrigger {
  return (resolve) => (self.requestIdleCallback || resolve)(resolve, options);
}

export function _load_event_trigger(
  event: string,
  selector: string,
): LoadTrigger {
  return (resolve) =>
    getSelectorOrResolve(selector, resolve)?.addEventListener(event, resolve, {
      once: true,
    });
}

export function _load_media_trigger(query: string): LoadTrigger {
  let mql: MediaQueryList;
  return (resolve) =>
    (mql = matchMedia(query)).matches
      ? resolve()
      : mql.addEventListener("change", resolve, { once: true });
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

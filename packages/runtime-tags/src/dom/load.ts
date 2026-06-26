import { LoadSignalValue } from "../common/accessor.debug";
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
import { _enable_catch, queueAsyncRender, runId } from "./queue";
import { _content, type Renderer, setupBranch, type SetupFn } from "./renderer";
import { insertBranchBefore, syncGen } from "./scope";
import type { Signal } from "./signals";
import { _template } from "./template";

type LoadValues = Map<Promise<LoadSignal>, LoadValue>;
interface LoadModule {
  _: [template: string, walks: string, setup: SetupFn];
}
interface LoadSignal {
  _: Signal;
}
interface LoadValue {
  [LoadSignalValue.Value]: unknown;
  [LoadSignalValue.Signal]?: LoadSignal;
}
export interface LoadTrigger {
  <T>(load: () => Promise<T>): (scope: Scope) => Promise<T>;
}

declare global {
  // Shared counter used only to give `has` sentinel elements globally unique
  // tag names (see `hasWatcher`). A plain monotonic integer (`-~undefined` is
  // `1`), so distinct Marko runtimes can share it without conflicting.
  var $i: number;
}

// `has` watchers are keyed on `self` by `$h` + the render's `runtimeId` so the
// SSR inline trigger scripts and this runtime share one watcher per runtime,
// while distinct runtimes stay isolated.
const hasWatchers = self as unknown as Record<
  `$h${string}`,
  ReturnType<typeof hasWatcher> | undefined
>;

export function _load_template(id: string, load: () => Promise<Renderer>) {
  _enable_catch();
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
}

export function _load_setup(
  nodeAccessor: EncodedAccessor,
  childScopeAccessor: EncodedAccessor,
  load: (scope: Scope) => Promise<LoadModule>,
) {
  if (!MARKO_DEBUG) {
    nodeAccessor = decodeAccessor(nodeAccessor as number);
    childScopeAccessor = decodeAccessor(childScopeAccessor as number);
  }

  let pending: ReturnType<typeof load> | undefined;
  let renderer: Renderer | undefined;

  _enable_catch();
  return (owner: Scope) => {
    const child = owner[childScopeAccessor] as BranchScope;
    if (renderer) {
      insertLoaded(renderer, child, owner[nodeAccessor] as ChildNode);
    } else {
      const awaitCounter = addAwaitCounter(owner);
      child[AccessorProp.Load] ||= new Map() as LoadValues;
      (pending ||= load(owner)).then(
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
}

function insertLoaded(
  renderer: Renderer,
  branch: BranchScope,
  marker: ChildNode,
  awaitCounter?: ReturnType<typeof addAwaitCounter>,
) {
  const parent = marker.parentNode as Element,
    values = branch[AccessorProp.Load] as LoadValues,
    insert = () => {
      insertBranchBefore(branch, parent, marker);
      marker.remove();
      awaitCounter?.c();
    };
  let remaining: number;
  syncGen(branch);
  renderer[RendererProp.Clone]!(branch, parent.namespaceURI!);
  branch[AccessorProp.Load] = 0;
  if ((remaining = values?.size as number)) {
    for (const [promise, entry] of values!) {
      promise.then(
        (signal) => {
          entry[LoadSignalValue.Signal] = signal;
          if (!--remaining) {
            queueAsyncRender(branch, (branch) => {
              syncGen(branch);
              renderer[RendererProp.Setup]?.(branch);
              values.forEach((e) =>
                e[LoadSignalValue.Signal]!._(branch, e[LoadSignalValue.Value]),
              );
              insert();
            });
          }
        },
        () => 0,
      );
    }
  } else {
    setupBranch(renderer, branch);
    insert();
  }
}

function loadFailed(
  scope: BranchScope,
  awaitCounter?: ReturnType<typeof addAwaitCounter>,
) {
  return (error: unknown) => {
    if (awaitCounter) awaitCounter.i = 0;
    queueAsyncRender(scope, renderCatch, error);
  };
}

export function _load_signal(
  load: (scope: Scope) => Promise<LoadSignal>,
): Signal {
  let pending: ReturnType<typeof load> | undefined;
  let signal: Signal | undefined;
  return (scope: Scope, value: unknown) => {
    pending ||= load(scope);
    if (
      scope[AccessorProp.Load] ||
      (!(AccessorProp.Load in scope) && scope[AccessorProp.Gen] === runId)
    ) {
      (scope[AccessorProp.Load] ||= new Map() as LoadValues).set(pending, {
        [LoadSignalValue.Value]: value,
      });
    } else if (signal) {
      signal(scope, value);
    } else {
      pending.then(
        (mod) => queueAsyncRender(scope, (signal = mod._), value),
        () => 0,
      );
    }
  };
}

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

// The `has` trigger watches for a `:has(selector)` match anywhere in the
// document via a no-op CSS animation on a sentinel element -- the sentinel's
// animation starts (firing `animationstart` once) the first time the selector
// matches. The watcher is shared with the SSR inline trigger scripts (same
// `self` slot, keyed by `runtimeId`) so its matched-selector memory and
// `<style>` carry across SSR and CSR, and a selector that has ever matched
// resolves later watchers synchronously.
export function _load_has_trigger(selector: string): LoadTrigger {
  let pending: Promise<unknown> | undefined;
  return (load) => (scope) =>
    (pending ||= new Promise<void>((resolve) => {
      const key = `$h${scope[AccessorProp.Global].runtimeId}` as const;
      (hasWatchers[key] ||= hasWatcher())(selector, resolve);
    })).then(load);
}

function hasWatcher() {
  const matched: Record<string, 1> = {};
  let style: HTMLStyleElement;
  return (selector: string, cb: () => void) => {
    if (matched[selector] === 1) {
      cb();
    } else {
      const tag = "m-" + (self.$i = -~self.$i);
      const sentinel = document.documentElement.appendChild(
        document.createElement(tag),
      );
      sentinel.onanimationstart = () => {
        matched[selector] = 1;
        sentinel.remove();
        cb();
      };
      (style ||= document.head.appendChild(
        document.createElement("style"),
      )).append(`:has(${selector})>${tag}{animation:1ms m-h}@keyframes m-h{}`);
    }
  };
}

export function _load_race_trigger(...triggers: LoadTrigger[]): LoadTrigger {
  const noop = () => Promise.resolve();
  let pending: Promise<unknown> | undefined;
  return (load) => (scope) =>
    (pending ||= Promise.race(triggers.map((t) => t(noop)(scope)))).then(load);
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

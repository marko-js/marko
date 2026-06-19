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
  <T>(load: () => Promise<T>): () => Promise<T>;
}

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
  load: () => Promise<LoadModule>,
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
}

function insertLoaded(
  renderer: Renderer,
  branch: BranchScope,
  marker: ChildNode,
  awaitCounter?: ReturnType<typeof addAwaitCounter>,
) {
  const parent = marker.parentNode as Element;
  syncGen(branch);
  renderer[RendererProp.Clone]!(branch, parent.namespaceURI!);
  setupBranch(renderer, branch);
  applyLoad(branch, () => {
    insertBranchBefore(branch, parent, marker);
    marker.remove();
    awaitCounter?.c();
  });
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

function applyLoad(scope: BranchScope, insert: () => void) {
  const values = scope[AccessorProp.Load] as LoadValues;
  let remaining: number;
  scope[AccessorProp.Load] = 0;
  if ((remaining = values?.size as number)) {
    for (const [promise, entry] of values!) {
      promise.then(
        (signal) => {
          entry[LoadSignalValue.Signal] = signal;
          if (!--remaining) {
            queueAsyncRender(scope, (scope) => {
              syncGen(scope);
              values.forEach((e) =>
                e[LoadSignalValue.Signal]!._(scope, e[LoadSignalValue.Value]),
              );
              insert();
            });
          }
        },
        () => 0,
      );
    }
  } else {
    insert();
  }
}

export function _load_signal(load: () => Promise<LoadSignal>): Signal {
  let pending: ReturnType<typeof load> | undefined;
  let signal: Signal | undefined;
  return (scope: Scope, value: unknown) => {
    pending ||= load();
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

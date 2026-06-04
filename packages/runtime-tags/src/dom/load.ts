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
import { _enable_catch, pendingScopes, queueAsyncRender } from "./queue";
import { _content, type Renderer, setupBranch, type SetupFn } from "./renderer";
import { insertBranchBefore } from "./scope";
import type { Signal } from "./signals";
import { _template } from "./template";
type LoadModule = [template: string, walks: string, setup: SetupFn];
type LoadValues = Map<Promise<Signal>, LoadValue>;
interface LoadValue {
  [LoadSignalValue.Value]: unknown;
  [LoadSignalValue.Signal]?: Signal;
}
export interface LoadTrigger {
  <T>(load: () => Promise<T>): () => Promise<T>;
}

export function _load_template(id: string, load: () => Promise<Renderer>) {
  _enable_catch();
  let pending: Promise<Renderer> | undefined;
  const getTemplate = () =>
    (pending ||= load().then((r) => Object.assign(lazyTemplate, r)));
  const lazyTemplate = _template(
    id,
    0,
    0,
    (branch) => {
      const awaitCounter = addAwaitCounter(branch);
      branch[AccessorProp.Load] ||= new Map() as LoadValues;
      getTemplate().then(
        (r) =>
          queueAsyncRender(
            branch as BranchScope,
            (branch) => {
              const marker = branch[AccessorProp.StartNode];
              const parent = marker.parentNode as Element;
              branch[AccessorProp.Creating] = 1;
              lazyTemplate[RendererProp.Clone]!(branch, parent.namespaceURI!);
              insertBranchBefore(branch, parent, marker);
              marker.remove();
              pendingScopes.push(branch);
              setupBranch(r, branch);
              applyLoad(branch);
              awaitCounter?.c();
            },
            -1,
          ),
        (error) => {
          if (awaitCounter) awaitCounter.i = 0;
          queueAsyncRender(branch as BranchScope, renderCatch, -1, error);
        },
      );
    },
    _load_signal(() =>
      getTemplate().then((r) => ({ _: r[RendererProp.Params]! })),
    ),
  ) as Template & Renderer;
  return lazyTemplate;
}

export function _load_setup(
  nodeAccessor: EncodedAccessor,
  childScopeAccessor: EncodedAccessor,
  load: () => Promise<{ _: LoadModule }>,
) {
  if (!MARKO_DEBUG) {
    nodeAccessor = decodeAccessor(nodeAccessor as number);
    childScopeAccessor = decodeAccessor(childScopeAccessor as number);
  }

  let pending: Promise<{ _: LoadModule }> | undefined;
  let renderer: Renderer | undefined;
  const insert = (child: BranchScope, owner: Scope) => {
    const marker = owner[nodeAccessor] as ChildNode;
    const parent = marker.parentNode as Element;
    child[AccessorProp.Creating] = 1;
    renderer![RendererProp.Clone]!(child, parent.namespaceURI!);
    insertBranchBefore(child, parent, marker);
    marker.remove();
    pendingScopes.push(child);
    setupBranch(renderer!, child);
    applyLoad(child);
  };

  _enable_catch();
  return (owner: Scope) => {
    const child = owner[childScopeAccessor] as BranchScope;
    if (renderer) {
      insert(child, owner);
    } else {
      const awaitCounter = addAwaitCounter(owner);
      child[AccessorProp.Load] ||= new Map() as LoadValues;
      (pending ||= load()).then(
        (mod) => {
          renderer = _content("", ...mod._)();
          queueAsyncRender(
            child,
            (child) => {
              insert(child, owner);
              awaitCounter?.c();
            },
            -1,
          );
        },
        (error) => {
          if (awaitCounter) awaitCounter.i = 0;
          child[AccessorProp.Load] = 0;
          queueAsyncRender(child, renderCatch, -1, error);
        },
      );
    }
  };
}

function applyLoad(scope: BranchScope) {
  const values = scope[AccessorProp.Load] as LoadValues;
  let remaining: number;
  scope[AccessorProp.Load] = 0;
  if ((remaining = values?.size as number)) {
    for (const [promise, entry] of values!) {
      promise.then(
        (signal) => {
          entry[LoadSignalValue.Signal] = signal;
          if (!--remaining) {
            scope[AccessorProp.Creating] = 1;
            pendingScopes.push(scope);
            queueAsyncRender(
              scope,
              (scope, buf) =>
                (buf as LoadValues).forEach((e) =>
                  e[LoadSignalValue.Signal]!(scope, e[LoadSignalValue.Value]),
                ),
              -1,
              values,
            );
          }
        },
        () => 0,
      );
    }
  }
}

export function _load_signal(load: () => Promise<{ _: Signal }>): Signal {
  let pending: Promise<Signal> | undefined;
  let signal: Signal | undefined;
  return (scope: Scope, value: unknown) => {
    pending ||= load().then((s) => (signal = s._));
    if (
      scope[AccessorProp.Load] ||
      (!(AccessorProp.Load in scope) && scope[AccessorProp.Creating])
    ) {
      (scope[AccessorProp.Load] ||= new Map() as LoadValues).set(pending, {
        [LoadSignalValue.Value]: value,
      });
    } else if (signal) {
      signal(scope, value);
    } else {
      pending.then(
        (signal) => queueAsyncRender(scope, signal, 0, value),
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
          (_, io) => resolve(io.disconnect()),
          options,
        ).observe(el),
    )).then(load);
}

export function _load_idle_trigger(options?: {
  timeout?: number;
}): LoadTrigger {
  const requestIdleCallback = self.requestIdleCallback;
  let pending: Promise<unknown> | undefined;
  return (load) =>
    requestIdleCallback
      ? () =>
          (pending ||= new Promise((resolve) =>
            requestIdleCallback(resolve, options),
          )).then(load)
      : load;
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
  return document.querySelector(selector) || (resolve() as undefined);
}

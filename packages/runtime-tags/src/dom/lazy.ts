import { LazySignalValue } from "../common/accessor.debug";
import { decodeAccessor } from "../common/helpers";
import {
  AccessorProp,
  type AwaitCounter,
  type BranchScope,
  type EncodedAccessor,
  RendererProp,
  type Scope,
} from "../common/types";
import { addAwaitCounter, renderCatch } from "./control-flow";
import { _enable_catch, pendingScopes, queueAsyncRender } from "./queue";
import { _content, type Renderer, setupBranch, type SetupFn } from "./renderer";
import { insertBranchBefore } from "./scope";
import type { Signal } from "./signals";
import { _template } from "./template";
type LazyModule = [template: string, walks: string, setup: SetupFn];
type LazyValues = Map<Promise<Signal>, LazyValue>;
type LazyValue = {
  [LazySignalValue.Value]: unknown;
  [LazySignalValue.Signal]?: Signal;
};

export function _lazy_template(id: string, load: () => Promise<Renderer>) {
  _enable_catch();
  let pending: Promise<Renderer> | undefined;
  let params: Signal | undefined;
  const getLazy = (): Promise<Renderer> =>
    (pending ||= load().then((r) => {
      params = r[RendererProp.Params];
      return r;
    }));

  return _template(
    id,
    0,
    0,
    (branch) => {
      let awaitCounter: AwaitCounter | undefined;
      if (!params) awaitCounter = addAwaitCounter(branch);

      getLazy().then(
        (r) =>
          queueAsyncRender(
            branch as BranchScope,
            (branch) => {
              const marker = branch[AccessorProp.StartNode];
              const parent = marker.parentNode as Element;
              const value = branch[AccessorProp.Lazy] as LazyValue;
              branch[AccessorProp.Lazy] = 0;
              branch[AccessorProp.Creating] = 1;
              r[RendererProp.Clone]!(branch, parent.namespaceURI!);
              insertBranchBefore(branch, parent, marker);
              marker.remove();
              pendingScopes.push(branch);
              setupBranch(r, branch);
              if (value) {
                params!(branch, value[LazySignalValue.Value]);
              }
              awaitCounter?.c();
            },
            -1,
          ),
        (error) => {
          if (awaitCounter) awaitCounter.i = 0;
          branch[AccessorProp.Lazy] = 0;
          queueAsyncRender(branch, renderCatch, -1, error);
        },
      );
    },
    (scope, value) => {
      getLazy();
      if (scope[AccessorProp.Lazy] != 0) {
        scope[AccessorProp.Lazy] = { [LazySignalValue.Value]: value };
      } else if (params) {
        params(scope, value);
      } else {
        pending!.then(
          () => queueAsyncRender(scope, params!, 0, value),
          () => 0,
        );
      }
    },
  );
}

export function _lazy_setup(
  nodeAccessor: EncodedAccessor,
  childScopeAccessor: EncodedAccessor,
  load: () => Promise<{ _: LazyModule }>,
) {
  if (!MARKO_DEBUG) {
    nodeAccessor = decodeAccessor(nodeAccessor as number);
    childScopeAccessor = decodeAccessor(childScopeAccessor as number);
  }

  let pending: Promise<{ _: LazyModule }> | undefined;
  let renderer: Renderer | undefined;
  const apply = (child: BranchScope, owner: Scope) => {
    const marker = owner[nodeAccessor] as ChildNode;
    const parent = marker.parentNode as Element;
    const values = child[AccessorProp.Lazy] as LazyValues | undefined;
    let remaining: number;
    child[AccessorProp.Lazy] = 0;
    child[AccessorProp.Creating] = 1;
    renderer![RendererProp.Clone]!(child, parent.namespaceURI!);
    insertBranchBefore(child, parent, marker);
    marker.remove();
    pendingScopes.push(child);
    setupBranch(renderer!, child);
    if ((remaining = values?.size as number)) {
      for (const [promise, entry] of values!) {
        promise.then(
          (signal) => {
            entry[LazySignalValue.Signal] = signal;
            if (!--remaining) {
              child[AccessorProp.Creating] = 1;
              pendingScopes.push(child);
              queueAsyncRender(
                child,
                (scope, buf) =>
                  buf.forEach((e) =>
                    e[LazySignalValue.Signal]!(scope, e[LazySignalValue.Value]),
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
  };

  _enable_catch();
  return (owner: Scope) => {
    const child = owner[childScopeAccessor] as BranchScope;
    if (renderer) {
      apply(child, owner);
    } else {
      const awaitCounter = addAwaitCounter(owner);
      child[AccessorProp.Lazy] ||= new Map() as LazyValues;
      (pending ||= load()).then(
        (mod) => {
          renderer = _content("", ...mod._)();
          queueAsyncRender(
            child,
            awaitCounter
              ? (child, owner) => {
                  apply(child, owner);
                  awaitCounter.c();
                }
              : apply,
            -1,
            owner,
          );
        },
        (error) => {
          if (awaitCounter) awaitCounter.i = 0;
          child[AccessorProp.Lazy] = 0;
          queueAsyncRender(child, renderCatch, -1, error);
        },
      );
    }
  };
}

export function _lazy_signal(load: () => Promise<{ _: Signal }>): Signal {
  let pending: Promise<Signal> | undefined;
  let signal: Signal | undefined;
  return (scope: Scope, value: unknown) => {
    pending ||= load().then((s) => (signal = s._));
    if (scope[AccessorProp.Lazy] != 0) {
      (scope[AccessorProp.Lazy] ||= new Map() as LazyValues).set(pending, {
        [LazySignalValue.Value]: value,
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

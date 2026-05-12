import { decodeAccessor } from "../common/helpers";
import {
  AccessorProp,
  type BranchScope,
  type EncodedAccessor,
  RendererProp,
  type Scope,
} from "../common/types";
import { renderCatch } from "./control-flow";
import { insertChildNodes } from "./dom";
import { pendingScopes, queueRender, run } from "./queue";
import { _content, type Renderer, type SetupFn } from "./renderer";
import { schedule } from "./schedule";
import type { Signal } from "./signals";

type SignalFn = (scope: Scope, value: unknown) => void;

// Accessor for the lazy buffer on a child scope (stores pending signal promises until setup completes)
const LazyBuffer = "^";

type BufferedSignal = {
  promise: Promise<SignalFn>;
  value: unknown;
  cached?: SignalFn;
};

export function _lazy_setup(
  nodeAccessor: EncodedAccessor,
  childScopeAccessor: EncodedAccessor,
  load: () => Promise<[template: string, walks: string, setup: SetupFn]>,
) {
  let cached: [string, string, SetupFn] | undefined;
  let pending: Promise<NonNullable<typeof cached>> | undefined;
  if (!MARKO_DEBUG) {
    nodeAccessor = decodeAccessor(nodeAccessor as number);
    childScopeAccessor = decodeAccessor(childScopeAccessor as number);
  }

  return (ownerScope: Scope) => {
    // Child scope was created by the walker (BeginChild/EndChild).
    // Initialize the buffer so _lazy_signal can push to it synchronously.
    const childScope = ownerScope[childScopeAccessor] as Scope;
    childScope[LazyBuffer] = childScope[LazyBuffer] || [];

    if (cached) {
      applyLazyModule(cached, ownerScope, nodeAccessor as string, childScope);
    } else {
      (pending ||= load()).then(
        (mod) => {
          cached = mod;
          applyLazyModule(mod, ownerScope, nodeAccessor as string, childScope);
        },
        (error) => {
          childScope[LazyBuffer] = undefined;
          schedule();
          queueRender(childScope, renderCatch, -1, error);
          run();
        },
      );
    }
  };
}

function applyLazyModule(
  [template, walks, setup]: [template: string, walks: string, setup: SetupFn],
  ownerScope: Scope,
  nodeAccessor: string,
  childScope: Scope,
) {
  applyLazyRenderer(
    _content("", template, walks, setup)(),
    ownerScope[nodeAccessor] as ChildNode,
    childScope,
  );
}

function applyLazyRenderer(
  renderer: Renderer,
  placeholder: ChildNode,
  childScope: Scope,
) {
  if (!placeholder.parentNode) return;

  const ns =
    (placeholder.parentNode as Element).namespaceURI ||
    "http://www.w3.org/1999/xhtml";

  // Clone template and walk into child scope (populates DOM bindings)
  renderer[RendererProp.Clone]!(childScope as BranchScope, ns);

  // Move cloned nodes from detached parent into live DOM at placeholder
  const startNode = (childScope as BranchScope)[AccessorProp.StartNode];
  const endNode = (childScope as BranchScope)[AccessorProp.EndNode];
  insertChildNodes(placeholder.parentNode!, placeholder, startNode, endNode);
  placeholder.remove();

  // Collect buffered signal promises and apply them all in one render pass
  const buffer = childScope[LazyBuffer] as BufferedSignal[];
  childScope[LazyBuffer] = undefined;

  // Mark scope as creating so _let and other guards allow initial values
  childScope[AccessorProp.Creating] = 1;
  pendingScopes.push(childScope);

  schedule();
  if (renderer[RendererProp.Setup]) {
    queueRender(
      childScope,
      renderer[RendererProp.Setup] as Signal<unknown>,
      -1,
    );
  }

  // Apply buffered signals
  if (buffer.length) {
    const allCached = buffer.every((b) => b.cached);
    if (allCached) {
      for (let i = 0; i < buffer.length; i++) {
        queueRender(
          childScope,
          buffer[i].cached as Signal<unknown>,
          i,
          buffer[i].value,
        );
      }
    } else {
      Promise.all(buffer.map((b) => b.promise)).then((signals) => {
        schedule();
        childScope[AccessorProp.Creating] = 1;
        pendingScopes.push(childScope);
        for (let i = 0; i < signals.length; i++) {
          queueRender(
            childScope,
            signals[i] as Signal<unknown>,
            i,
            buffer[i].value,
          );
        }
        run();
      });
    }
  }

  run();
}

export function _lazy_signal(load: () => Promise<SignalFn>): SignalFn {
  let signalPromise: Promise<SignalFn>;
  let cachedSignal: SignalFn | undefined;
  return (scope: Scope, value: unknown) => {
    if (!signalPromise) {
      signalPromise = load();
      signalPromise.then((s) => (cachedSignal = s));
    }

    if (!(LazyBuffer in scope)) {
      // Called before _lazy_setup — self-initialize buffer for closures in conditionals
      scope[LazyBuffer] = [];
    }

    const buffer = scope[LazyBuffer] as BufferedSignal[] | undefined;
    if (buffer) {
      // Setup hasn't completed yet — buffer synchronously for later replay
      buffer.push({ promise: signalPromise, value, cached: cachedSignal });
    } else if (cachedSignal) {
      // Signal already resolved — apply synchronously
      cachedSignal(scope, value);
    } else {
      // Setup completed (buffer set to undefined) — apply asynchronously
      signalPromise.then((signal) => {
        schedule();
        queueRender(scope, signal as Signal<unknown>, 0, value);
        run();
      });
    }
  };
}

export function _lazy_renderer(
  id: string,
  load: () => Promise<{ default: Renderer }>,
): Renderer & { _: unknown } {
  let pending: Promise<Renderer> | undefined;

  const getLazy = (): Promise<Renderer> =>
    (pending ||= load().then((mod) => mod.default));

  const params: SignalFn = _lazy_signal(() =>
    getLazy().then((r) => (r[RendererProp.Params] as SignalFn) ?? (() => {})),
  );

  const setup: SetupFn = (branch) => {
    getLazy().then(
      (renderer) => {
        if ((branch as BranchScope)[AccessorProp.Destroyed]) return;
        // Pre-fill cached on buffer entries so applyLazyRenderer's allCached
        // fast path applies params synchronously in the same render pass.
        // (The signal promise resolves to the same value but in a later microtask.)
        const buffer = branch[LazyBuffer] as BufferedSignal[] | undefined;
        const paramsSignal =
          (renderer[RendererProp.Params] as SignalFn) ?? (() => {});
        if (buffer) {
          for (const entry of buffer) {
            entry.cached ??= paramsSignal;
          }
        }
        applyLazyRenderer(
          renderer,
          (branch as BranchScope)[AccessorProp.StartNode],
          branch,
        );
      },
      (error) => {
        branch[LazyBuffer] = undefined;
        schedule();
        queueRender(branch as BranchScope, renderCatch, -1, error);
        run();
      },
    );
  };

  const renderer = {
    [RendererProp.Id]: id,
    [RendererProp.Clone]: (branch: BranchScope) => {
      // Placeholder text node inserted by _dynamic_tag until the module loads.
      branch[AccessorProp.StartNode] = branch[AccessorProp.EndNode] =
        new Text();
      // Initialize the signal buffer so _lazy_signal can push to it synchronously.
      branch[LazyBuffer] = branch[LazyBuffer] || [];
    },
    [RendererProp.Setup]: setup,
    [RendererProp.Params]: params,
    [RendererProp.Owner]: undefined,
    [RendererProp.Accessor]: undefined,
    _: undefined as unknown,
  } satisfies Renderer & { _: unknown };

  // Mirrors _template's sentinel so _dynamic_tag passes the plain input object
  // rather than wrapping it in an array.
  renderer._ = renderer;

  return renderer;
}

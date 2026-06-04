import { readFileSync } from "node:fs";
import vm from "node:vm";

import { type ResolveOptions, resolveSync } from "resolve-sync";

interface State {
  cache: Map<string, Promise<vm.Module>>;
  pending: number;
  promise: Promise<void>;
  resolve: () => void;
}

const stateForCtx = new WeakMap<WeakKey, State>();

export async function importWithContext<T>(
  entry: string,
  resolveOpts: Omit<ResolveOptions, "from">,
  context: vm.Context,
): Promise<T> {
  vm.createContext(context);
  const state =
    stateForCtx.get(context) ||
    ((state: State) => (stateForCtx.set(context, state), state))({
      cache: new Map(),
      pending: 0,
      promise: undefined as any,
      resolve: undefined as any,
    });
  return (await load(entry)).namespace as T;

  function load(id: string): Promise<vm.Module> {
    let cached = state.cache.get(id);
    if (!cached) {
      const mod = new vm.SourceTextModule(readFileSync(id, "utf8"), {
        context,
        identifier: id,
        importModuleDynamically,
      });

      if (!state.pending++) {
        state.promise = new Promise((r) => (state.resolve = r));
      }

      state.cache.set(
        id,
        (cached = mod
          .link(importModuleDynamically)
          .then(() => mod.evaluate())
          .then(() => mod)),
      );

      cached.then(tick).finally(afterEvaluate);
    }

    return cached;
  }

  function importModuleDynamically(id: string, parent: vm.Module) {
    const from = parent.identifier;
    const resolved = resolveSync(id, { ...resolveOpts, from });

    if (!resolved) {
      throw new Error(
        `Could not resolve ${JSON.stringify(id)} from ${JSON.stringify(from)}`,
      );
    }

    return load(resolved);
  }

  function afterEvaluate() {
    if (!--state.pending) {
      state.resolve();
    }
  }
}

export function waitForPendingModules(context: vm.Context): Promise<void> {
  return stateForCtx.get(context)?.promise ?? Promise.resolve();
}

function tick() {
  return Promise.resolve();
}

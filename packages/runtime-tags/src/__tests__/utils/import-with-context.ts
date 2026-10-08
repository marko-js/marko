import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import vm from "node:vm";

import { type ResolveOptions, resolveSync } from "resolve-sync";

import { resolveAfter } from "./resolve";

/** Imports an ESM file into the *current* realm through vm modules, so its
 * namespace is collectable once the caller drops it — Node's ESM loader cache
 * (`ModuleLoader.loadCache`) retains ordinary dynamic imports for the life of
 * the process. Path imports (chunks, the prebuilt runtime) load the same way,
 * so module state stays per caller; bare specifiers use the host loader. */
export async function importEvictable<T>(entry: string): Promise<T> {
  // One graph per call: chunks importing the same file share an instance, and
  // nothing outlives the namespace returned.
  const cache = new Map<string, Promise<vm.Module>>();
  return (await load(pathToFileURL(entry).href)).namespace as T;

  function load(url: string): Promise<vm.Module> {
    let cached = cache.get(url);
    if (!cached) {
      const mod = new vm.SourceTextModule(
        readFileSync(fileURLToPath(url), "utf8"),
        {
          identifier: url,
          initializeImportMeta(meta) {
            meta.url = url;
          },
          importModuleDynamically: link,
        },
      );
      cache.set(
        url,
        (cached = mod
          .link(link)
          .then(() => mod.evaluate())
          .then(() => mod)),
      );
    }
    return cached;
  }

  async function link(id: string, parent: vm.Module | vm.Script) {
    if (/^[./]/.test(id)) {
      return load(new URL(id, (parent as vm.Module).identifier).href);
    }
    // Server bundles only; anything but a node builtin means a browser-side
    // module is about to run in the wrong realm.
    if (!id.startsWith("node:")) {
      throw new Error(`Unexpected host import ${JSON.stringify(id)}`);
    }
    const target = await import(id);
    const keys = Object.keys(target);
    return new vm.SyntheticModule(
      keys,
      function (this: vm.SyntheticModule) {
        for (const key of keys) this.setExport(key, target[key]);
      },
      { identifier: id },
    );
  }
}

interface State {
  cache: Map<string, Promise<vm.Module>>;
  pending: number;
  promise: Promise<void> | undefined;
  resolve: (() => void) | undefined;
  // Dynamic imports a fixture keeps in flight until a `release` step.
  held: (() => Promise<vm.Module>)[];
}

const stateForCtx = new WeakMap<WeakKey, State>();

// Simulates the network for a lazy chunk import: a load failure, a chunk that
// lands on the next `resolveAfter` tick, or one held until a `release` step.
export type LoadFault = (id: string) => "reject" | "delay" | "hold" | undefined;

export async function importWithContext<T>(
  entry: string,
  resolveOpts: Omit<ResolveOptions, "from">,
  context: vm.Context,
  loadFault?: LoadFault,
): Promise<T> {
  vm.createContext(context);
  const state =
    stateForCtx.get(context) ||
    ((state: State) => (stateForCtx.set(context, state), state))({
      cache: new Map(),
      pending: 0,
      promise: undefined,
      resolve: undefined,
      held: [],
    });
  return (await load(entry)).namespace as T;

  function load(id: string, delay?: boolean): Promise<vm.Module> {
    let cached = state.cache.get(id);
    if (!cached) {
      const mod = new vm.SourceTextModule(readFileSync(id, "utf8"), {
        context,
        identifier: id,
        importModuleDynamically: importDynamic,
      });

      state.pending++;
      const linked = mod.link(importModuleDynamically);
      state.cache.set(
        id,
        (cached = (delay ? linked.then(() => resolveAfter(0)) : linked)
          .then(() => mod.evaluate())
          .then(() => mod)),
      );

      // The importer receives evaluation failures through `cached`; this
      // bookkeeping chain must not float them as unhandled rejections.
      cached.then(tick).finally(afterEvaluate).catch(noop);
    }

    return cached;
  }

  function importModuleDynamically(id: string, parent: vm.Module) {
    // Simulate a network-level chunk load failure (e.g. deploy skew) for the
    // matched dynamic import while its siblings resolve normally.
    const resolved = resolveId(id, parent);
    const fault = loadFault?.(resolved || id);
    if (fault === "reject") {
      return Promise.reject(new Error(`simulated chunk load failure: ${id}`));
    }

    if (!resolved) {
      throw new Error(
        `Could not resolve ${JSON.stringify(id)} from ${JSON.stringify(parent.identifier)}`,
      );
    }

    return load(resolved, fault === "delay");
  }

  // A dynamic import a fixture holds (as it holds lazy load scripts) lands
  // at its `release` step; static links never hold.
  function importDynamic(id: string, parent: vm.Module) {
    const resolved = resolveId(id, parent);
    if (
      resolved &&
      loadFault?.(resolved) === "hold" &&
      !state.cache.has(resolved)
    ) {
      return new Promise<vm.Module>((resolve, reject) => {
        state.held.push(() => {
          const loading = load(resolved);
          loading.then(resolve, reject);
          return loading;
        });
      });
    }
    return importModuleDynamically(id, parent);
  }

  // The shared debug runtime bundle is linked by absolute path.
  function resolveId(id: string, parent: vm.Module) {
    return path.isAbsolute(id)
      ? id
      : resolveSync(id, { ...resolveOpts, from: parent.identifier });
  }

  function afterEvaluate() {
    if (!--state.pending) {
      state.promise = undefined;
      state.resolve?.();
    }
  }
}

export function releaseHeldImports(context: vm.Context) {
  const state = stateForCtx.get(context);
  return Promise.all(state ? state.held.splice(0).map((load) => load()) : []);
}

export function waitForPendingModules(context: vm.Context) {
  const state = stateForCtx.get(context);
  return (
    state?.pending &&
    (state.promise ||= new Promise((r) => (state.resolve = r)))
  );
}

function tick() {
  return Promise.resolve();
}

function noop() {}

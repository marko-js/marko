import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import vm from "node:vm";

import { type ResolveOptions, resolveSync } from "resolve-sync";

/** Imports an ESM file into the *current* realm through vm modules, so its
 * namespace is collectable once the caller drops it — Node's ESM loader cache
 * (`ModuleLoader.loadCache`) retains ordinary dynamic imports for the life of
 * the process. Path imports (chunks, the prebuilt runtime) load the same way,
 * so module state stays per caller; bare specifiers use the host loader. */
export async function importEvictable<T>(entry: string): Promise<T> {
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
}

const stateForCtx = new WeakMap<WeakKey, State>();

export async function importWithContext<T>(
  entry: string,
  resolveOpts: Omit<ResolveOptions, "from">,
  context: vm.Context,
  rejectLoad?: (id: string) => boolean,
): Promise<T> {
  vm.createContext(context);
  const state =
    stateForCtx.get(context) ||
    ((state: State) => (stateForCtx.set(context, state), state))({
      cache: new Map(),
      pending: 0,
      promise: undefined,
      resolve: undefined,
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

      state.pending++;
      state.cache.set(
        id,
        (cached = mod
          .link(importModuleDynamically)
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
    if (rejectLoad?.(id)) {
      return Promise.reject(new Error(`simulated chunk load failure: ${id}`));
    }
    const from = parent.identifier;
    // The shared debug runtime bundle is linked by absolute path.
    const resolved = path.isAbsolute(id)
      ? id
      : resolveSync(id, { ...resolveOpts, from });

    if (!resolved) {
      throw new Error(
        `Could not resolve ${JSON.stringify(id)} from ${JSON.stringify(from)}`,
      );
    }

    return load(resolved);
  }

  function afterEvaluate() {
    if (!--state.pending) {
      state.promise = undefined;
      state.resolve?.();
    }
  }
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

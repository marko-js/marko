import path from "path";

import type { Dependencies as DependenciesAPI } from "@marko/compiler";
import markoModules from "@marko/compiler/modules";

import { getFile } from "../babel-utils/get-file";
import { globalConfig } from "../config";
import type { FileSystem } from "../util/fs";
import tryLoadTranslator from "../util/try-load-translator";
import {
  clearCaches,
  CompileDependencies,
  Dependencies,
  LookupDependencies,
  type State,
  stateOf,
} from "./dependencies";
import { type Props, readJSON } from "./json";
import { Registry, type TaglibLookup, type Translator } from "./lookup";
import markoHTMLTaglib from "./marko-html.json" with { type: "json" };
import markoMathTaglib from "./marko-math.json" with { type: "json" };
import markoSVGTaglib from "./marko-svg.json" with { type: "json" };
import type { TaglibEntry } from "./taglib";

export { clearCaches } from "./dependencies";

type Cache = Map<unknown, unknown>;

const registeredTaglibs: TaglibEntry[] = [
  [markoHTMLTaglib["taglib-id"], markoHTMLTaglib],
  [markoSVGTaglib["taglib-id"], markoSVGTaglib],
  [markoMathTaglib["taglib-id"], markoMathTaglib],
];
const excludedDirs = new Set<string>();
const excludedPackages = new Set<string>();

export function buildLookup(
  dirname: string,
  requestedTranslator?: unknown,
  onError?: (err: Error) => void,
  fileSystem: FileSystem = globalConfig.fileSystem,
): TaglibLookup {
  const registry = getRegistry(requestedTranslator, onError, fileSystem);
  try {
    return LookupDependencies.getLayer(registry.dependencies(dirname));
  } catch (err) {
    if (!onError) throw err;
    onError(err as Error);
    return loadLookupAbove(registry, dirname);
  }
}

/**
 * Marks stale what read `paths`, one or several (changed, added or removed),
 * returning every template marked, and drops those `cache` holds.
 */
export function invalidate(
  paths: string | Iterable<string>,
  cache: Cache = globalConfig.cache!,
  fileSystem: FileSystem = globalConfig.fileSystem,
) {
  const state = stateOf(fileSystem);
  const resolved: string[] = [];
  // As tools have them: relative, not normalized, or with `/` on Windows.
  if (typeof paths === "string") resolved.push(path.resolve(paths));
  else for (const changed of paths) resolved.push(path.resolve(changed));
  return dropCached(cache, state, state.invalidate(resolved));
}

/** As `invalidate`, for every path read that changed on disk since. */
export function revalidate(
  cache: Cache = globalConfig.cache!,
  fileSystem: FileSystem = globalConfig.fileSystem,
) {
  const state = stateOf(fileSystem);
  return dropCached(cache, state, state.revalidate());
}

/** Records a file the current compile read, so a change to it marks the compile stale. */
export function addFileDependency(filename: string) {
  CompileDependencies.addFile(getFile().metadata.marko.dependencies, filename);
}

/**
 * Records that the current compile looks in `dir` for `names`, each alone or
 * with any extension, and returns the entries they name.
 */
export function addDirectoryDependency(dir: string, names: readonly string[]) {
  return CompileDependencies.addDirectory(
    getFile().metadata.marko.dependencies,
    dir,
    names,
  );
}

/** What the lookups of `dirnames` read with every tag loaded, each lookup's once. */
export function getDependencies(
  dirnames: Iterable<string>,
  requestedTranslator?: unknown,
  onError?: (err: Error) => void,
  fileSystem: FileSystem = globalConfig.fileSystem,
) {
  return Dependencies.flatten(
    loadLookups(dirnames, requestedTranslator, onError, fileSystem),
  );
}

/** Calls `visit` with each path `dependencies` read, by kind, skipping what `seen` has. */
export function forEachDependency(
  dependencies: DependenciesAPI,
  visit: (path: string, kind: "file" | "missing" | "directory") => void,
  seen?: WeakSet<DependenciesAPI>,
) {
  Dependencies.forEach(dependencies as Dependencies, visit, seen);
}

export function register(id: string, props?: Props) {
  registeredTaglibs.push(props === undefined ? resolveTaglib(id) : [id, props]);
  clearCaches();
}

export function excludeDir(dir: string) {
  excludedDirs.add(dir);
  clearCaches();
}

export function excludePackage(name: string) {
  excludedPackages.add(name);
  clearCaches();
}

// From the root package of the process's working directory, as installed: like
// any install, a change to them comes with one, after which callers `clearCaches`.
export function resolveOptionalTaglibs(
  taglibIds: string[],
  onError?: (err: Error) => void,
) {
  const resolvedTaglibs: TaglibEntry[] = [];
  for (const id of taglibIds) {
    if (hasRootDependency(id)) {
      try {
        resolvedTaglibs.push(resolveTaglib(id));
      } catch (err) {
        if (!onError) throw err;
        onError(err as Error);
      }
    }
  }

  return resolvedTaglibs;
}

/** A directory's lookup and what it read, for a compile there. */
export function getLookupDependencies(
  dirname: string,
  requestedTranslator: unknown,
  fileSystem: FileSystem,
) {
  return getRegistry(requestedTranslator, undefined, fileSystem).dependencies(
    dirname,
  );
}

// The lookups of `dirnames` and those they build on, each once, every tag of each
// loaded: what they read is then the same whichever tags were used first. Given
// `onError`, one that failed to build is kept with what it read, to watch.
function loadLookups(
  dirnames: Iterable<string>,
  requestedTranslator: unknown,
  onError: ((err: Error) => void) | undefined,
  fileSystem: FileSystem,
) {
  const registry = getRegistry(requestedTranslator, onError, fileSystem);
  const lookups = new Set<LookupDependencies>();
  for (const dirname of dirnames) {
    const own = registry.dependencies(dirname);
    try {
      LookupDependencies.getLayer(own);
    } catch (err) {
      if (!onError) throw err;
      onError(err as Error);
    }
    for (
      let deps: LookupDependencies | undefined = own;
      deps && !lookups.has(deps);
      deps = Dependencies.getParent(deps)
    ) {
      lookups.add(deps);
      LookupDependencies.loadTags(deps);
    }
  }
  return lookups;
}

// The closest directory above whose taglibs do load still has its tags.
function loadLookupAbove(registry: Registry, dirname: string) {
  for (let dir = dirname, parent; (parent = path.dirname(dir)) !== dir;) {
    try {
      return LookupDependencies.getLayer(registry.dependencies((dir = parent)));
    } catch {
      // ignore
    }
  }
  return registry.empty;
}

// Drops the marked templates from each translator's compile cache.
function dropCached(cache: Cache, state: State, marked: string[]) {
  if (marked.length) {
    for (const translator of state.registries.keys()) {
      const compileCache = cache.get(translator) as
        | Map<unknown, unknown>
        | undefined;
      if (compileCache) {
        for (const filename of marked) compileCache.delete(filename);
      }
    }
  }
  return marked;
}

function getRegistry(
  requestedTranslator: unknown,
  onError: ((err: Error) => void) | undefined,
  fileSystem: FileSystem,
) {
  const translator = tryLoadTranslator(requestedTranslator) as
    | Translator
    | undefined;
  if (!translator || !Array.isArray(translator.taglibs)) {
    throw new Error(
      "@marko/compiler: Invalid translator provided to buildLookup(dir, translator)",
    );
  }

  const state = stateOf(fileSystem);
  let registry = state.registries.get(translator);
  if (!registry) {
    registry = new Registry(
      state,
      translator,
      registeredTaglibs,
      resolveOptionalTaglibs(translator.optionalTaglibs || [], onError),
      excludedDirs,
      excludedPackages,
    );
    state.registries.set(translator, registry);
  }
  return registry;
}

function resolveTaglib(id: string): TaglibEntry {
  const isFile = /^[./\\]/.test(id) || path.isAbsolute(id);
  if (!isFile && !id.endsWith(".json")) {
    id = path.join(id, "marko.json");
  }

  const resolved = markoModules.resolve(id);
  // A file is read as discovered taglibs are, allowing comments.
  return [
    resolved,
    isFile && resolved.endsWith(".json")
      ? readJSON(globalConfig.fileSystem, resolved, undefined)
      : (markoModules.require(resolved) as Props),
  ];
}

function hasRootDependency(id: string) {
  const pkg = markoModules.pkg as {
    dependencies?: Props;
    devDependencies?: Props;
  } | null;
  return !!(pkg && (pkg.dependencies?.[id] || pkg.devDependencies?.[id]));
}

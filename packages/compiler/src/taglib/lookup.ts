import nodePath from "path";

import type { types as t } from "@marko/compiler";
import type {
  PluginDefinition,
  TagDefinition,
  TaglibLookup as TaglibLookupAPI,
} from "@marko/compiler/babel-utils";
import markoModules from "@marko/compiler/modules";

import {
  exists,
  type FileSystem,
  isDirectory,
  realpath,
  stat,
} from "../util/fs";
import { resolveRequire } from "../util/resolve";
import { inNodeModules, LookupDependencies, type State } from "./dependencies";
import { readJSON } from "./json";
import { createAttribute, definesTag, mergeTag } from "./tag";
import {
  discoveredTaglib,
  loadTaglib,
  type Taglib,
  TagEntries,
  type TaglibEntry,
  type TagSource,
} from "./taglib";

/** What the lookup reads from a translator. */
export interface Translator {
  taglibs: TaglibEntry[];
  tagDiscoveryDirs: string[];
  optionalTaglibs?: string[];
  /** Read class API declarations and renderers outside discovered `tags` dirs. */
  classTaglibs?: boolean;
}

type ProgramHooks = PluginDefinition<t.Program>[];
type RootPackage = NonNullable<ReturnType<typeof markoModules.readPackage>>;

const emptyHooks: ProgramHooks = [];
const emptyTaglibs: Taglib[] = [];
const endsInTagsDir = /[/\\]tags[/\\]?$/;
const backslashes = /\\/g;
const installedTaglibReg =
  /[\\/]node_modules[\\/]((?:@[^\\/]+[\\/])?[^\\/]+)[\\/]marko\.json$/;

/**
 * A translator's lookups by directory, each over its parent's up to the package
 * root, then the package's installed taglibs, then the built-in ones.
 */
export class Registry {
  readonly fs: FileSystem;
  readonly classTaglibs: boolean;
  /** The translator's own tags, which other taglibs can extend but not replace. */
  readonly coreTags = new Map<string, TagDefinition>();
  /** The built-in taglibs' ids, which installed taglibs are not loaded again for. */
  readonly builtinIds = new Set<string>();
  readonly empty: TaglibLookup;
  readonly #state: State;
  #tagDiscoveryDirs: string[];
  #excludedDirs: Set<string>;
  #excludedPackages: Set<string>;
  #builtin: Layer;
  /** Each directory's lookup and what it read. */
  #dirs = new Map<string, LookupDependencies<TaglibLookup>>();
  /** Each package's installed taglibs and what they read, by its root. */
  #packages = new Map<string, LookupDependencies>();

  constructor(
    state: State,
    translator: Translator,
    registered: TaglibEntry[],
    optional: TaglibEntry[],
    excludedDirs: Set<string>,
    excludedPackages: Set<string>,
  ) {
    this.fs = state.fs;
    this.#state = state;
    // Translators released before the flag (Marko 5.39 and earlier) are class
    // API ones when they discover `components` dirs.
    this.classTaglibs =
      translator.classTaglibs ??
      translator.tagDiscoveryDirs.includes("components");
    this.#tagDiscoveryDirs = translator.tagDiscoveryDirs;
    this.#excludedDirs = excludedDirs;
    this.#excludedPackages = excludedPackages;
    this.#builtin = createBuiltinLayer(
      this,
      registered,
      translator.taglibs,
      optional,
    );
    this.empty = new TaglibLookup(this, this.#builtin, emptyTaglibs, undefined);
  }

  /** A directory's lookup and what it read. */
  dependencies(dir: string): LookupDependencies<TaglibLookup> {
    let deps = this.#dirs.get(dir);

    if (!deps) {
      const { fs } = this;
      const time = Date.now();
      // Held by the state to index only once built, or once it fails to.
      deps = new LookupDependencies(this.#state, dir, this.#dirs, time);
      const reads = inNodeModules(dir) ? undefined : deps;
      let parent: LookupDependencies | undefined;
      let lookup: TaglibLookup | undefined;
      try {
        const pkgPath = nodePath.join(dir, "package.json");
        const pkgStats = stat(fs, pkgPath);
        const root = pkgStats && readOwnPackage(fs, dir);
        const parentDir = nodePath.dirname(dir);
        let parentLookup: TaglibLookup | undefined;
        if (root) {
          parent = this.#packageDependencies(root, pkgPath, time);
        } else if (
          parentDir !== dir &&
          (dir !== markoModules.cwd || this.#hasPackage(parentDir, reads))
        ) {
          const parentDeps = this.dependencies(parentDir);
          parent = parentDeps;
          parentLookup = LookupDependencies.getLayer(parentDeps);
        }
        LookupDependencies.addStat(reads, pkgPath, pkgStats);

        let config: Taglib | undefined;
        let taglibs: Taglib[] | undefined;
        const parentLayer = parent
          ? LookupDependencies.getLayer(parent)
          : this.#builtin;
        if (!this.#excludedDirs.has(dir)) {
          const configPath = nodePath.join(dir, "marko.json");
          if (exists(fs, configPath)) {
            config = loadTaglib(configPath, readJSON(fs, configPath, reads), {
              fs,
              classTaglibs: this.classTaglibs,
              deps: reads,
            });
          } else if (reads) {
            LookupDependencies.addMissing(reads, configPath);
          }
          taglibs = this.#loadDir(dir, parentLayer, config, reads);
        }

        lookup =
          parentLookup && !config && !taglibs
            ? parentLookup
            : new TaglibLookup(
                this,
                parentLayer,
                taglibs || emptyTaglibs,
                config,
              );
      } catch (err) {
        // Kept until what it read changes, as a lookup that built is.
        LookupDependencies.fail(deps, err);
      }

      LookupDependencies.built(deps, parent, lookup);
      this.#dirs.set(dir, deps);
    }

    return deps;
  }

  // Whether `dir` or one above has a `package.json` naming a package.
  #hasPackage(dir: string, deps: LookupDependencies | undefined) {
    for (let cur = dir; ;) {
      const pkgPath = nodePath.join(cur, "package.json");
      const pkgStats = stat(this.fs, pkgPath);
      LookupDependencies.addStat(deps, pkgPath, pkgStats);
      if (pkgStats && readOwnPackage(this.fs, cur)) return true;
      const parent = nodePath.dirname(cur);
      if (parent === cur) return false;
      cur = parent;
    }
  }

  // A directory's taglibs not already loaded below it: its `marko.json` with
  // its imports, then its discovered tags dirs.
  #loadDir(
    dir: string,
    parent: Layer,
    config: Taglib | undefined,
    deps: LookupDependencies | undefined,
  ) {
    let taglibs: Taglib[] | undefined;

    if (config) {
      // Loaded once per file, so a nearer `marko.json` reusing an ancestor's
      // `taglib-id` adds its tags, though the ancestor's stay in reach.
      pushTaglib((taglibs = []), config, notLoadedIn(parent));
      if (config.tagsDir !== undefined) return taglibs;
    }

    for (const name of this.#tagDiscoveryDirs) {
      const path = nodePath.join(dir, name);
      if (this.#excludedDirs.has(path)) continue;
      const stats = stat(this.fs, path);
      if (stats?.isDirectory()) {
        // A taglib of its own even when one below loads this directory, as a
        // discovered tag's `taglibId` is its directory's path: none is shared.
        (taglibs ||= []).push(
          discoveredTaglib(this.fs, this.classTaglibs, path, name, deps),
        );
      } else {
        // A tags dir made here later changes the lookup.
        LookupDependencies.addStat(deps, path, stats);
      }
    }

    return taglibs;
  }

  // A package's installed taglibs, from its `package.json` read since `time`.
  #packageDependencies(root: RootPackage, pkgPath: string, time: number) {
    const rootDir = root.__dirname;
    let deps = this.#packages.get(rootDir);

    if (!deps) {
      const { fs } = this;
      deps = new LookupDependencies(this.#state, rootDir, this.#packages, time);
      // Its dependencies, which name the taglibs installed.
      if (!inNodeModules(rootDir)) LookupDependencies.addFile(deps, pkgPath);
      let layer: Layer | undefined;
      try {
        const taglibs: Taglib[] = [];
        const ids = new Set<string>();
        // Searched for on the first dependency, as a package may have none.
        let nodeModules: string[] | undefined | false = false;
        const isNew = (taglib: Taglib) =>
          !this.builtinIds.has(taglib.id) &&
          !ids.has(taglib.id) &&
          !!ids.add(taglib.id);
        for (const name of dependencyNames(root)) {
          if (this.#excludedPackages.has(name)) continue;
          if (nodeModules === false) {
            nodeModules = findNodeModules(fs, rootDir);
          }
          let taglibPath: string | undefined;
          if (nodeModules) {
            const foundPath = findInstalledTaglib(fs, name, nodeModules);
            if (!foundPath) continue;
            // Realpathed as Node resolves it: a linked workspace package's files
            // are outside `node_modules`, where they are the project's.
            taglibPath = realpath(fs, foundPath);
          } else {
            // Found by resolution where there is no `node_modules`.
            taglibPath = resolveRequire(
              fs,
              rootDir,
              name + "/marko.json",
              deps,
            );
            if (!taglibPath) continue;
          }
          if (this.builtinIds.has(taglibPath)) continue;

          // Its realpath bears no relation to how it is imported, so its tags keep the
          // name it is installed as, which those its own templates look up lack.
          const taglibDeps = inNodeModules(taglibPath) ? undefined : deps;
          const taglib = loadTaglib(
            taglibPath,
            readJSON(fs, taglibPath, taglibDeps),
            {
              fs,
              packageName: name,
              classTaglibs: this.classTaglibs,
              isInstalled: true,
              deps: taglibDeps,
            },
          );
          pushTaglib(taglibs, taglib, isNew);
        }
        layer = new Layer(this, this.#builtin, taglibs);
      } catch (err) {
        LookupDependencies.fail(deps, err);
      }

      LookupDependencies.built(deps, undefined, layer);
      this.#packages.set(rootDir, deps);
    }

    return deps;
  }
}

/**
 * Taglibs searched nearest first, then the parent layer: a definition with a
 * template, renderer or `html` replaces any further away; any other extends it.
 */
export class Layer {
  readonly registry: Registry;
  readonly parent: Layer | undefined;
  readonly sources: TagSource[] = [];
  readonly taglibs: Taglib[];
  readonly migrators: ProgramHooks;
  readonly transformers: ProgramHooks;
  readonly translators: ProgramHooks;
  readonly manualTagsDirs: Set<string> | undefined;
  #tags = new Map<string, TagDefinition | null>();
  #errors: Map<string, Error> | undefined;
  #sorted: TagDefinition[] | undefined;

  constructor(
    registry: Registry,
    parent: Layer | undefined,
    taglibs: Taglib[],
  ) {
    this.registry = registry;
    this.taglibs = taglibs;
    this.parent = parent;

    let manualTagsDirs: Set<string> | undefined;

    for (const taglib of taglibs) {
      for (const source of taglib.sources) this.sources.push(source);
      if (
        typeof taglib.tagsDir === "string" &&
        endsInTagsDir.test(taglib.tagsDir)
      ) {
        // Copied once, the first time this layer adds to it.
        (manualTagsDirs ||= new Set(parent?.manualTagsDirs)).add(
          nodePath.resolve(taglib.dirname, taglib.tagsDir),
        );
      }
    }

    this.migrators = layerHooks(parent, taglibs, "migrators");
    this.transformers = layerHooks(parent, taglibs, "transformers");
    this.translators = layerHooks(parent, taglibs, "translators");
    this.manualTagsDirs = manualTagsDirs || parent?.manualTagsDirs;
  }

  resolve(name: string): TagDefinition | null {
    let tag = this.#tags.get(name);
    if (tag === undefined) {
      try {
        tag = this.#find(name);
      } catch (err) {
        // A tag that fails to load is not found, and `getError` has why.
        tag = null;
        (this.#errors ||= new Map()).set(name, err as Error);
      }
      this.#tags.set(name, tag);
    }
    return tag;
  }

  /** Why a tag `resolve` did not find failed to load, if it did. */
  getError(name: string) {
    return this.#errors?.get(name);
  }

  /** Whether this layer or one below it loaded the taglib file. */
  hasTaglib(filePath: string): boolean {
    for (const taglib of this.taglibs) {
      if (taglib.filePath === filePath) return true;
    }
    return this.parent !== undefined && this.parent.hasTaglib(filePath);
  }

  /** Adds the name of every tag in reach to `names`. */
  addNames(names: Set<string>) {
    for (const source of this.sources) {
      for (const name of source.names()) names.add(name);
    }
    this.parent?.addNames(names);
  }

  // Every tag in reach, so each source lists all it has.
  getTagsSorted() {
    let sorted = this.#sorted;
    if (!sorted) {
      const names = new Set<string>();
      this.addNames(names);

      sorted = [];
      for (const name of names) {
        // A tag that fails to load is reported where it is used, not here.
        const tag = this.resolve(name);
        if (tag) sorted.push(tag);
      }

      this.#sorted = sorted.sort(compareTagNames);
    }

    return sorted;
  }

  #find(name: string) {
    const coreTag = this.registry.coreTags.get(name);
    let exts: TagDefinition[] | undefined;

    for (const source of this.sources) {
      const tag = source.get(name);
      if (tag) {
        // A translator's own tag is extended even by a nearer definition, which
        // keeps its hooks while adding the definition's template.
        if (!definesTag(tag) || (coreTag && tag !== coreTag)) {
          (exts ||= []).push(tag);
        } else {
          return exts ? extendTag(tag, exts) : tag;
        }
      }
    }

    const { parent } = this;
    const base = parent ? parent.resolve(name) : null;
    const err = parent?.getError(name);
    if (err) throw err;
    return exts ? extendTag(base, exts) : base;
  }
}

/** The tags a template in a directory can use, and the taglib hooks it runs. */
export class TaglibLookup extends Layer implements TaglibLookupAPI {
  /** Discovered tags dirs in walk order (nearest first), for the interop's "is this file within a tags directory" check. */
  readonly discoveryDirs: string[] | undefined;
  /** The discovery dir name when the only kind found, `false` for a mix or a `tags-dir`. */
  readonly exclusiveTagDiscoveryDirs: string | false | undefined;

  constructor(
    registry: Registry,
    parent: Layer,
    taglibs: Taglib[],
    config: Taglib | undefined,
  ) {
    super(registry, parent, taglibs);

    // Atop a package's or the built-in layer, there are no discovery dirs or
    // watch files to inherit.
    const inherited = parent instanceof TaglibLookup ? parent : undefined;
    let discoveryDirs: string[] | undefined;
    // Only a directory's own `tags-dir` stands in for discovery, not an import's.
    let exclusiveTagDiscoveryDirs: string | false | undefined = config?.tagsDir
      ? false
      : undefined;

    for (const taglib of taglibs) {
      if (taglib.discoveryDir) {
        (discoveryDirs ||= []).push(taglib.filePath);
        exclusiveTagDiscoveryDirs = combineDiscoveryDir(
          exclusiveTagDiscoveryDirs,
          taglib.discoveryDir,
        );
      }
    }

    if (inherited) {
      if (inherited.discoveryDirs) {
        discoveryDirs = discoveryDirs
          ? discoveryDirs.concat(inherited.discoveryDirs)
          : inherited.discoveryDirs;
      }
      exclusiveTagDiscoveryDirs = combineDiscoveryDir(
        exclusiveTagDiscoveryDirs,
        inherited.exclusiveTagDiscoveryDirs,
      );
    }

    this.discoveryDirs = discoveryDirs;
    this.exclusiveTagDiscoveryDirs = exclusiveTagDiscoveryDirs;
  }

  getTag(name: string): TagDefinition | undefined {
    const tag = this.resolve(name);
    if (tag) return tag;
    // A tag named with a colon, or else a parent's nested tag.
    const i = name.lastIndexOf(":");
    if (i !== -1) {
      return this.getTag(name.slice(0, i))?.nestedTags?.[name.slice(i + 1)];
    }
  }

  /**
   * Why a tag `getTag` did not find failed to load, if it did: a compile
   * throws it for a template that uses the tag.
   */
  getTagError(name: string): Error | undefined {
    const i = name.lastIndexOf(":");
    return (
      this.getError(name) ||
      (i === -1 ? undefined : this.getTagError(name.slice(0, i)))
    );
  }

  // Released language servers still call these; remove once none do.
  getAttribute(): undefined {}
  forEachAttribute(): void {}
}

// Registered taglibs, then the translator's own, then its optional ones (so
// their hooks run after the translator's), each extending those before it.
function createBuiltinLayer(
  registry: Registry,
  registered: TaglibEntry[],
  core: TaglibEntry[],
  optional: TaglibEntry[],
) {
  const tags = new Map<string, TagDefinition>();
  const taglibs: Taglib[] = [];
  const ids = registry.builtinIds;
  const coreNames: string[] = [];
  const add = (taglib: Taglib, isCore: boolean) => {
    if (ids.has(taglib.id)) return;
    ids.add(taglib.id);
    taglibs.push(taglib);

    // Built-in taglibs extend one another's tags, the later winning.
    const [source] = taglib.sources;
    if (source instanceof TagEntries) {
      for (const name of source.names()) {
        const tag = source.get(name)!;
        const prev = tags.get(name);
        tags.set(name, prev ? mergeTag(prev, tag) : tag);
        // A translator's tag it compiles itself, not one it only extends.
        if (isCore && hasHooks(tag)) coreNames.push(name);
      }
    }
  };
  const load = (entries: TaglibEntry[], isCore: boolean) => {
    for (const [id, props] of entries) {
      // One registered from an installed package reads as that package does.
      const taglib = loadTaglib(id, props, {
        fs: registry.fs,
        classTaglibs: registry.classTaglibs,
        packageName: installedPackageName(id),
        deps: undefined,
      });
      add(taglib, isCore);
      if (taglib.imports) {
        for (const imported of taglib.imports) add(imported, isCore);
      }
    }
  };

  load(registered, false);
  load(core, true);
  load(optional, false);
  for (const name of coreNames) registry.coreTags.set(name, tags.get(name)!);

  // Marko 6 translators up to 6.4.11 allow `<meta content>` only when declared.
  const meta = tags.get("meta");
  if (meta && !meta.attributes) {
    meta.attributes = { content: createAttribute("content") };
  }

  // Nearest first, so a later taglib's tags dirs are searched first and its
  // hooks run last; the merged tags go last so a tags dir can replace one.
  const layer = new Layer(registry, undefined, taglibs.reverse());
  const { sources } = layer;
  let n = 0;
  for (const source of sources) {
    if (!(source instanceof TagEntries)) sources[n++] = source;
  }
  sources.length = n;
  sources.push({ get: (name) => tags.get(name), names: () => tags.keys() });
  return layer;
}

// Adds a taglib after its imports, nearest first, so an import's tags win over
// its importer's and its hooks run after them; `isNew` filters out loaded ones.
function pushTaglib(
  list: Taglib[],
  taglib: Taglib,
  isNew: (taglib: Taglib) => boolean,
) {
  const { imports } = taglib;
  if (imports) {
    for (let i = imports.length; i--;) {
      if (isNew(imports[i])) list.push(imports[i]);
    }
  }
  if (isNew(taglib)) list.push(taglib);
}

function notLoadedIn(layer: Layer) {
  return (taglib: Taglib) => !layer.hasTaglib(taglib.filePath);
}

// The directory's own `package.json` if it names a package; none in the
// browser build (where `readPackage` is null), or when it is malformed.
function readOwnPackage(fs: FileSystem, dir: string) {
  try {
    return markoModules.readPackage(dir, fs);
  } catch {
    return null;
  }
}

// The names of a package's dependencies of every kind.
function dependencyNames(pkg: Record<string, unknown>) {
  const deps = pkg.dependencies as Record<string, unknown> | undefined;
  const peerDeps = pkg.peerDependencies as Record<string, unknown> | undefined;
  const devDeps = pkg.devDependencies as Record<string, unknown> | undefined;
  const names: string[] = [];
  // A package listed under more than one kind of dependency is read once.
  for (const name in deps) names.push(name);
  for (const name in peerDeps) if (!deps?.[name]) names.push(name);
  for (const name in devDeps) {
    if (!deps?.[name] && !peerDeps?.[name]) names.push(name);
  }
  return names;
}

// The `node_modules` folders Node searches from `dir`, nearest first, found
// once per package; `undefined` without any, as with Yarn PnP.
function findNodeModules(fs: FileSystem, dir: string) {
  if (process.versions.pnp) return;

  let found: string[] | undefined;
  for (let cur = dir; ;) {
    const nodeModules = nodePath.join(cur, "node_modules");
    if (isDirectory(fs, nodeModules)) (found ||= []).push(nodeModules);
    const parent = nodePath.dirname(cur);
    if (parent === cur) return found;
    cur = parent;
  }
}

// The package's `marko.json` where Node would find it: in the nearest
// `node_modules` holding the package.
function findInstalledTaglib(
  fs: FileSystem,
  name: string,
  nodeModules: string[],
) {
  // Joined by hand, as `path.join` would: the folders are already normalized,
  // so only a scoped name's slash needs the platform's separator.
  const { sep } = nodePath;
  const packagePath = sep === "/" ? name : name.replace("/", sep);
  for (const folder of nodeModules) {
    const packageDir = folder + sep + packagePath;
    if (!isDirectory(fs, packageDir)) continue;
    const taglibPath = packageDir + sep + "marko.json";
    return exists(fs, taglibPath) ? taglibPath : undefined;
  }
}

// The package a taglib file directly under `node_modules` belongs to.
function installedPackageName(id: string) {
  const match = installedTaglibReg.exec(id);
  return match ? match[1].replace(backslashes, "/") : undefined;
}

function hasHooks(tag: TagDefinition) {
  return !!(
    tag.translator ||
    tag.analyzer ||
    tag.parser ||
    tag.migrators ||
    tag.transformers
  );
}

function extendTag(base: TagDefinition | null, exts: TagDefinition[]) {
  let i = exts.length;
  let tag = base || exts[--i];
  while (i--) tag = mergeTag(tag, exts[i]);
  return tag;
}

// The parent's hooks, then each taglib's from the furthest to the nearest, in
// one array sized up front; the parent's own array when no taglib adds any.
function layerHooks(
  parent: Layer | undefined,
  taglibs: Taglib[],
  key: "migrators" | "transformers" | "translators",
) {
  const inherited = parent ? parent[key] : emptyHooks;
  let size = inherited.length;
  for (const taglib of taglibs) {
    const own = taglib[key];
    if (own) size += own.length;
  }
  if (size === inherited.length) return inherited;

  const hooks: ProgramHooks = new Array(size);
  let n = 0;
  for (const hook of inherited) hooks[n++] = hook;
  for (let i = taglibs.length; i--;) {
    const own = taglibs[i][key];
    if (own) for (const hook of own) hooks[n++] = hook;
  }
  return hooks;
}

function combineDiscoveryDir(
  a: string | false | undefined,
  b: string | false | undefined,
) {
  return a === undefined ? b : b === undefined || a === b ? a : false;
}

function compareTagNames(a: TagDefinition, b: TagDefinition) {
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
}

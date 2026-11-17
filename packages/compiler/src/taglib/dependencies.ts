import nodePath from "path";

import type { TagDefinition } from "@marko/compiler/babel-utils";

import { exists, type FileSystem, isDirectory, stat } from "../util/fs";
import type { Layer, Registry, Translator } from "./lookup";

/**
 * Entry names looked for in a directory, alone or with an extension (`named` after the directory's name
 * and a dot, `exact` alone only); `undefined` for every template and directory, and `tagEntries` besides.
 */
export type Names =
  | readonly string[]
  | {
      readonly names: readonly string[];
      readonly named: readonly string[];
      /** The state's own, from paths its readers did not find. */
      readonly exact?: Set<string>;
      readonly tagEntries?: true;
    }
  | undefined;

/** What goes stale with a path it read: a template, by filename, or a lookup. */
type Reader = string | LookupDependencies;
/** Most paths have one reader, kept without a set. */
type Readers = Reader | Set<Reader>;

interface FileRead {
  readers: Readers;
  /** When its earliest reader began reading (`Date.now()`). */
  time: number;
}

interface DirectoryRead {
  readers: Map<Reader, Names> | undefined;
  entries: string[];
  /** When `entries` began to be listed. */
  time: number;
  /** Its entries by name, and by name without the last extension, once a second compile asks. */
  byName: Map<string, string | string[]> | undefined;
  /** Whether a compile has asked for some of its entries, which it scanned for. */
  asked: boolean;
}

let states = new WeakMap<FileSystem, State>();

/** Forgets everything read, so every lookup and compile is stale. */
export function clearCaches() {
  states = new WeakMap();
}

export function stateOf(fs: FileSystem) {
  let state = states.get(fs);
  if (!state) states.set(fs, (state = new State(fs)));
  return state;
}

/** Every path read through a file system, and what read it. */
export class State {
  readonly fs: FileSystem;
  readonly registries = new Map<Translator, Registry>();
  /** Package files templates import, by directory and request (see `resolveImport`). */
  readonly imports = new Map<string, string>();
  readonly #files = new Map<string, FileRead>();
  readonly #missing = new Map<string, Readers>();
  readonly #directories = new Map<string, DirectoryRead>();
  /** Lookups with reads not yet indexed. */
  readonly #queued: LookupDependencies[] = [];
  /** The invalidation that last marked each template stale. */
  readonly #stale = new Map<string, number>();
  invalidations = 0;

  constructor(fs: FileSystem) {
    this.fs = fs;
  }

  /**
   * Marks stale what read a reported path, or listed a directory above it that it
   * was added to or removed from; returns the templates marked.
   */
  invalidate(paths: Iterable<string>) {
    const invalidation = ++this.invalidations;
    const marked: string[] = [];
    this.#indexQueued();
    for (const path of paths) {
      this.#markFileReaders(path, invalidation, marked);
      const listed = this.#directories.get(path);
      if (listed) this.#relist(path, listed, invalidation, marked);
      // A watcher may report only a file in a directory added with it.
      for (
        let cur = path, dir;
        (dir = nodePath.dirname(cur)) !== cur;
        cur = dir
      ) {
        if (this.#missing.has(cur) && exists(this.fs, cur)) {
          this.#markMissingReaders(cur, invalidation, marked);
        }
        const listed = this.#directories.get(dir);
        if (
          listed &&
          this.#updateEntry(dir, cur, listed, invalidation, marked)
        ) {
          break;
        }
      }
    }
    return marked;
  }

  /**
   * As `invalidate`, for every path read (or each of `paths`, as read) that changed
   * on disk since it was read.
   */
  revalidate(paths?: Iterable<string>) {
    const changed: string[] = [];
    this.#indexQueued();
    if (paths) {
      for (const path of paths) if (this.#changed(path)) changed.push(path);
    } else {
      for (const path of this.#files.keys()) {
        if (this.#changed(path)) changed.push(path);
      }
      for (const path of this.#missing.keys()) {
        if (exists(this.fs, path)) changed.push(path);
      }
      for (const dir of this.#directories.keys()) {
        if (this.#changed(dir)) changed.push(dir);
      }
    }
    return changed.length ? this.invalidate(changed) : changed;
  }

  #changed(path: string) {
    const { fs } = this;
    const file = this.#files.get(path);
    if (file) return modifiedSince(stat(fs, path), file.time);
    if (this.#missing.has(path)) return exists(fs, path);
    const dir = this.#directories.get(path);
    // Listed for no reader, as what is installed is, so its changes mark nothing.
    if (!dir?.readers) return false;
    const stats = stat(fs, path);
    return stats ? modifiedSince(stats, dir.time) : dir.entries.length > 0;
  }

  /** Whether a template compiled after `invalidations` was marked stale since. */
  isStale(template: string, invalidations: number) {
    return (this.#stale.get(template) ?? 0) > invalidations;
  }

  /** Records a file a reader began reading at `time`. */
  addFile(reader: Reader, path: string, time: number) {
    const read = this.#files.get(path);
    if (!read) {
      this.#files.set(path, { readers: reader, time });
    } else {
      read.readers = withReader(read.readers, reader);
      if (time < read.time) read.time = time;
    }
  }

  /**
   * Records a path looked for and not found: in a directory listed without it, as a
   * name its reader looks for there exactly.
   */
  addMissing(reader: Reader, path: string) {
    const start = path.lastIndexOf(nodePath.sep) + 1;
    const dir = nodePath.dirname(path);
    const listed = this.#directories.get(dir);
    if (!listed || hasEntry(listed.entries, path, start)) {
      this.#missing.set(path, withReader(this.#missing.get(path), reader));
      return;
    }
    const readers = (listed.readers ||= new Map());
    const names = readers.get(reader);
    const name = path.slice(start);
    if (names !== undefined && "named" in names && names.exact) {
      names.exact.add(name);
    } else {
      readers.set(reader, {
        names: names === undefined ? [] : namesOf(dir, names),
        named: [],
        exact: new Set<string>().add(name),
        tagEntries:
          readers.has(reader) && readsTagEntries(names) ? true : undefined,
      });
    }
  }

  /** Records a directory's reader and the names it looks for; returns its listing. */
  addDirectory(reader: Reader, dir: string, names: Names) {
    const read = this.listing(dir);
    const readers = (read.readers ||= new Map());
    if (readers.has(reader))
      names = mergeNames(dir, readers.get(reader), names);
    readers.set(reader, names);
    return read;
  }

  /**
   * A directory's entries as first listed here, so a check compares with what
   * its readers saw; throws as listing it does.
   */
  list(dir: string) {
    let read = this.#directories.get(dir);
    if (!read) {
      const time = Date.now();
      // Listed without options, as file systems adding virtual files expect.
      const entries = this.fs.readdirSync(dir);
      this.#directories.set(
        dir,
        (read = {
          readers: undefined,
          entries,
          time,
          byName: undefined,
          asked: false,
        }),
      );
    }
    return read.entries;
  }

  /** As `list`, but the whole record, empty for a directory that cannot be listed. */
  listing(dir: string) {
    let read = this.#directories.get(dir);
    if (!read) {
      const time = Date.now();
      const entries = listDir(this.fs, dir) || [];
      this.#directories.set(
        dir,
        (read = {
          readers: undefined,
          entries,
          time,
          byName: undefined,
          asked: false,
        }),
      );
    }
    return read;
  }

  /** Queues a lookup to index before the next invalidation. */
  queueIndex(deps: LookupDependencies) {
    this.#queued.push(deps);
  }

  removeFile(reader: Reader, path: string) {
    const read = this.#files.get(path);
    if (read) {
      const readers = withoutReader(read.readers, reader);
      if (readers) read.readers = readers;
      else this.#files.delete(path);
    }
  }

  /** Removes a reader's record of a path not found, and its name in the directory's listing. */
  removeMissing(reader: Reader, path: string) {
    const readers = this.#missing.get(path);
    if (readers) {
      const rest = withoutReader(readers, reader);
      if (rest) this.#missing.set(path, rest);
      else this.#missing.delete(path);
    }
    this.removeDirectory(reader, nodePath.dirname(path));
  }

  removeDirectory(reader: Reader, dir: string) {
    const read = this.#directories.get(dir);
    if (read?.readers!.delete(reader) && !read.readers!.size) {
      this.#directories.delete(dir);
    }
  }

  /** Marks a template stale, and each template whose analysis read it; drops a lookup. */
  markStale(reader: Reader, invalidation: number, marked: string[]) {
    if (typeof reader !== "string") {
      LookupDependencies.drop(reader, invalidation, marked);
    } else if (this.#stale.get(reader) !== invalidation) {
      this.#stale.set(reader, invalidation);
      marked.push(reader);
      // Its own file's record goes first, which ends a cycle of templates.
      this.#markFileReaders(reader, invalidation, marked);
    }
  }

  // Forgets the file, whose readers read it again when they next need it.
  #markFileReaders(path: string, invalidation: number, marked: string[]) {
    const read = this.#files.get(path);
    if (read) {
      this.#files.delete(path);
      this.#markReaders(read.readers, invalidation, marked);
    }
  }

  #markMissingReaders(path: string, invalidation: number, marked: string[]) {
    const readers = this.#missing.get(path);
    if (readers) {
      this.#missing.delete(path);
      this.#markReaders(readers, invalidation, marked);
    }
  }

  #markReaders(readers: Readers, invalidation: number, marked: string[]) {
    if (readers instanceof Set) {
      for (const reader of readers)
        this.markStale(reader, invalidation, marked);
    } else {
      this.markStale(readers, invalidation, marked);
    }
  }

  // Indexes the queued lookups' reads; their later reads count from now.
  #indexQueued() {
    const queued = this.#queued;
    if (!queued.length) return;
    const time = Date.now();
    for (let i = 0; i < queued.length; i++) {
      LookupDependencies.index(queued[i], time);
    }
    queued.length = 0;
  }

  // Lists a directory again, marking the readers of each entry added or removed.
  #relist(
    dir: string,
    listed: DirectoryRead,
    invalidation: number,
    marked: string[],
  ) {
    const time = Date.now();
    const entries = listDir(this.fs, dir) || [];
    const removed = new Set(listed.entries);
    listed.entries = entries;
    listed.time = time;
    listed.byName = undefined;
    for (const name of entries) {
      if (!removed.delete(name)) {
        const path = dir + nodePath.sep + name;
        this.#markEntryReaders(dir, listed, name, path, invalidation, marked);
        this.#markMissingReaders(path, invalidation, marked);
      }
    }
    for (const name of removed) {
      this.#markEntryReaders(dir, listed, name, "", invalidation, marked);
      this.#markFileReaders(dir + nodePath.sep + name, invalidation, marked);
    }
  }

  // Updates the listed entry for `path`, marking its readers if added or removed;
  // true when it was there and still is, so nothing above it changed.
  #updateEntry(
    dir: string,
    path: string,
    listed: DirectoryRead,
    invalidation: number,
    marked: string[],
  ) {
    const name = nodePath.basename(path);
    const i = listed.entries.indexOf(name);
    const there = exists(this.fs, path);
    if (there === (i !== -1)) return there;
    if (there) listed.entries.push(name);
    else listed.entries.splice(i, 1);
    listed.byName = undefined;
    this.#markEntryReaders(
      dir,
      listed,
      name,
      there ? path : "",
      invalidation,
      marked,
    );
    return false;
  }

  // Marks the readers looking for an entry added (at `path`) or removed (no `path`).
  #markEntryReaders(
    dir: string,
    listed: DirectoryRead,
    name: string,
    path: string,
    invalidation: number,
    marked: string[],
  ) {
    if (!listed.readers) return;
    let isTagEntry: boolean | undefined;
    // Asked once, of an entry removed (no `path`) or one there now.
    const isTemplateOrDir = () =>
      (isTagEntry ??=
        !path || name.endsWith(".marko") || isDirectory(this.fs, path));
    for (const [reader, names] of listed.readers) {
      if (readsEntry(dir, names, name, isTemplateOrDir)) {
        if (typeof reader === "string") listed.readers.delete(reader);
        this.markStale(reader, invalidation, marked);
      }
    }
  }
}

/**
 * What a compile or lookup read itself, atop what it builds on (see `index.d.ts`);
 * only static methods read or record it, so it has no member a tool could rely on.
 */
export class Dependencies<P extends Dependencies = Dependencies<any>> {
  readonly #files: string[] = [];
  readonly #missing: string[] = [];
  readonly #directories: string[] = [];
  /** The names looked for in each of `#directories`. */
  readonly #names: Names[] = [];
  #parent: P | undefined;

  constructor(parent: P | undefined) {
    this.#parent = parent;
  }

  /**
   * Calls `visit` with each path read, by kind, from `deps` up what it builds on,
   * stopping at a layer in `seen` and adding to it each one visited.
   */
  static forEach(
    deps: Dependencies,
    visit: (path: string, kind: "file" | "missing" | "directory") => void,
    seen: WeakSet<Dependencies> | undefined,
  ) {
    for (
      let layer: Dependencies | undefined = deps;
      layer && !seen?.has(layer);
      layer = layer.#parent
    ) {
      seen?.add(layer);
      for (const file of layer.#files) visit(file, "file");
      for (const path of layer.#missing) visit(path, "missing");
      for (const dir of layer.#directories) visit(dir, "directory");
    }
  }

  /** What `layers` read themselves, as one layer that builds on nothing. */
  static flatten(layers: Iterable<Dependencies>) {
    const deps = new Dependencies(undefined);
    for (const layer of layers) {
      for (const file of layer.#files) deps.#files.push(file);
      for (const path of layer.#missing) deps.#missing.push(path);
      for (let i = 0; i < layer.#directories.length; i++) {
        deps.#directories.push(layer.#directories[i]);
        deps.#names.push(layer.#names[i]);
      }
    }
    return deps;
  }

  static getParent<P extends Dependencies>(deps: Dependencies<P>) {
    return deps.#parent;
  }

  static setParent<P extends Dependencies>(
    deps: Dependencies<P>,
    parent: P | undefined,
  ) {
    deps.#parent = parent;
  }

  static getFiles(deps: Dependencies): readonly string[] {
    return deps.#files;
  }

  static getMissing(deps: Dependencies): readonly string[] {
    return deps.#missing;
  }

  static getDirectories(deps: Dependencies): readonly string[] {
    return deps.#directories;
  }

  static getNames(deps: Dependencies): readonly Names[] {
    return deps.#names;
  }

  static addFile(deps: Dependencies, path: string) {
    deps.#files.push(path);
  }

  static addMissing(deps: Dependencies, path: string) {
    deps.#missing.push(path);
  }

  static addDirectory(deps: Dependencies, dir: string, names: Names) {
    deps.#directories.push(dir);
    deps.#names.push(names);
  }
}

/** What a compile read itself, atop its directory's lookup or, for an output, its template's. */
export class CompileDependencies extends Dependencies<
  LookupDependencies | CompileDependencies
> {
  readonly #template: string;
  readonly #state: State;
  /** When the compile began reading. */
  readonly #time = Date.now();
  #tags: Set<TagDefinition> | undefined;

  /** A template's (by filename) atop its lookup, or an output's atop its template's. */
  constructor(
    parent: LookupDependencies | CompileDependencies,
    template?: string,
  ) {
    super(parent);
    if (parent instanceof CompileDependencies) {
      this.#template = parent.#template;
      this.#state = parent.#state;
    } else {
      this.#template = template!;
      this.#state = LookupDependencies.getState(parent);
      LookupDependencies.addTemplate(parent, template!);
    }
  }

  static override addFile(deps: CompileDependencies, path: string) {
    if (inNodeModules(path)) return;
    super.addFile(deps, path);
    deps.#state.addFile(deps.#template, path, deps.#time);
  }

  static override addMissing(deps: CompileDependencies, path: string) {
    if (inNodeModules(path)) return;
    super.addMissing(deps, path);
    deps.#state.addMissing(deps.#template, path);
  }

  /** Records a directory looked in for `names`, and returns the entries they name. */
  static override addDirectory(
    deps: CompileDependencies,
    dir: string,
    names: readonly string[],
  ): readonly string[] {
    const state = deps.#state;
    let read: DirectoryRead;
    if (inNodeModules(dir)) {
      read = state.listing(dir);
    } else {
      super.addDirectory(deps, dir, names);
      read = state.addDirectory(deps.#template, dir, names);
    }
    return namedIn(read, names);
  }

  /** Records a plugin's module, which the compile loads. */
  static addPlugin(
    deps: CompileDependencies,
    plugin: { path?: string } | undefined,
  ) {
    if (plugin?.path) CompileDependencies.addFile(deps, plugin.path);
  }

  /** Records a tag's plugins once, unless the template an output builds on did. */
  static addTag(deps: CompileDependencies, tag: TagDefinition) {
    const parent = Dependencies.getParent(deps);
    if (
      deps.#tags?.has(tag) ||
      (parent instanceof CompileDependencies && parent.#tags?.has(tag))
    ) {
      return;
    }
    (deps.#tags ||= new Set()).add(tag);
    CompileDependencies.addPlugin(deps, tag.parser);
    CompileDependencies.addPlugin(deps, tag.analyzer);
    CompileDependencies.addPlugin(deps, tag.translator);
    addPlugins(deps, tag.migrators);
    addPlugins(deps, tag.transformers);
  }
}

/** What a directory's lookup, or a package's installed taglibs, read beyond the layers below. */
export class LookupDependencies<
  L extends Layer = Layer,
> extends Dependencies<LookupDependencies> {
  readonly #state: State;
  #layer: L | undefined;
  /** Why it failed to build, in place of its layer. */
  #error: Error | undefined;
  /** What goes stale with it: lookups built on it, and templates compiled with it. */
  #children: Set<LookupDependencies> | undefined;
  #templates: Set<string> | undefined;
  readonly #dir: string;
  /** The registry's cache it is kept in, by `#dir`. */
  readonly #cache: Map<string, LookupDependencies<L>>;
  /** When its unindexed reads began: when made, then when last indexed. */
  #time: number;
  /** How much of each list the state has indexed. */
  #indexedFiles = 0;
  #indexedMissing = 0;
  #indexedDirs = 0;
  /** Whether the state has it queued to index, or it is still being built. */
  #queued = true;
  #dropped = false;

  constructor(
    state: State,
    dir: string,
    cache: Map<string, LookupDependencies<L>>,
    time: number,
  ) {
    super(undefined);
    this.#state = state;
    this.#dir = dir;
    this.#cache = cache;
    this.#time = time;
  }

  static getState(deps: LookupDependencies) {
    return deps.#state;
  }

  /**
   * Its layer; throws why it failed to build, each time a new error, so what a
   * caller adds to one (as prefixing its filename) stays with that throw.
   */
  static getLayer<L extends Layer>(deps: LookupDependencies<L>) {
    const layer = deps.#layer;
    if (!layer) {
      const error = deps.#error!;
      throw new Error(error.message, { cause: error });
    }
    return layer;
  }

  /** Loads every tag in reach, unless it failed to build. */
  static loadTags(deps: LookupDependencies) {
    deps.#layer?.getTagsSorted();
  }

  static addTemplate(deps: LookupDependencies, filename: string) {
    (deps.#templates ||= new Set()).add(filename);
  }

  static override addFile(deps: LookupDependencies, path: string) {
    super.addFile(deps, path);
    deps.#queueIndex();
  }

  static override addMissing(deps: LookupDependencies, path: string) {
    super.addMissing(deps, path);
    deps.#queueIndex();
  }

  /** Records what `stat` found at a path, a file or nothing, unless built in or installed (no `deps`). */
  static addStat(
    deps: LookupDependencies | undefined,
    path: string,
    stats: ReturnType<typeof stat>,
  ) {
    if (!deps) return;
    if (stats) LookupDependencies.addFile(deps, path);
    else LookupDependencies.addMissing(deps, path);
  }

  /** Lists a directory and records the names looked for; throws as listing does. */
  static list(deps: LookupDependencies, dir: string, names: Names) {
    const entries = deps.#state.list(dir);
    deps.#addDirectory(dir, names);
    return entries;
  }

  /** Records a tags dir read, for every template and directory in it, unless built in or installed (no `deps`). */
  static addTagsDir(deps: LookupDependencies | undefined, dir: string) {
    if (deps) {
      deps.#state.listing(dir);
      deps.#addDirectory(dir, undefined);
    }
  }

  /** Records a path found, whose existence matters but not its content. */
  static addFound(deps: LookupDependencies, path: string) {
    const directories = Dependencies.getDirectories(deps);
    const last = directories.length - 1;
    const dir = directories[last];
    const names = Dependencies.getNames(deps)[last];
    // Already looked for, as a tag directory's template its `marko-tag.json` names is.
    if (
      names !== undefined &&
      path.length > dir.length &&
      path[dir.length] === nodePath.sep &&
      path.startsWith(dir) &&
      path.indexOf(nodePath.sep, dir.length + 1) === -1 &&
      matchesEntry(dir, names, path, dir.length + 1)
    ) {
      return;
    }
    const found = nodePath.dirname(path);
    deps.#state.listing(found);
    deps.#addDirectory(found, [nodePath.basename(path)]);
  }

  /** Records why it failed to build, which it then has instead of a layer. */
  static fail(deps: LookupDependencies, error: unknown) {
    deps.#error = error as Error;
  }

  /**
   * Records what it builds on and the layer it describes, none when it failed,
   * and queues what it read to index.
   */
  static built<L extends Layer>(
    deps: LookupDependencies<L>,
    parent: LookupDependencies | undefined,
    layer: L | undefined,
  ) {
    Dependencies.setParent(deps, parent);
    deps.#layer = layer;
    if (parent) (parent.#children ||= new Set()).add(deps);
    deps.#state.queueIndex(deps);
  }

  /** Indexes what it read since last indexed; later reads count from `time`. */
  static index(deps: LookupDependencies, time: number) {
    deps.#queued = false;
    if (deps.#dropped) return;
    const state = deps.#state;
    const files = Dependencies.getFiles(deps);
    const missing = Dependencies.getMissing(deps);
    const directories = Dependencies.getDirectories(deps);
    const names = Dependencies.getNames(deps);
    for (; deps.#indexedFiles < files.length; deps.#indexedFiles++) {
      state.addFile(deps, files[deps.#indexedFiles], deps.#time);
    }
    for (; deps.#indexedMissing < missing.length; deps.#indexedMissing++) {
      state.addMissing(deps, missing[deps.#indexedMissing]);
    }
    for (; deps.#indexedDirs < directories.length; deps.#indexedDirs++) {
      const i = deps.#indexedDirs;
      state.addDirectory(deps, directories[i], names[i]);
    }
    deps.#time = time;
  }

  /**
   * Drops it and the lookups built on it, marking stale all their templates, not only
   * those using a changed tag: tags come and go rarely, and tools recompile lazily.
   */
  static drop(
    deps: LookupDependencies,
    invalidation: number,
    marked: string[],
  ) {
    if (deps.#dropped) return;
    deps.#dropped = true;
    deps.#cache.delete(deps.#dir);
    const parent = Dependencies.getParent(deps);
    if (parent) parent.#children!.delete(deps);
    const state = deps.#state;
    const files = Dependencies.getFiles(deps);
    const missing = Dependencies.getMissing(deps);
    const directories = Dependencies.getDirectories(deps);
    for (let i = 0; i < deps.#indexedFiles; i++) {
      state.removeFile(deps, files[i]);
    }
    for (let i = 0; i < deps.#indexedMissing; i++) {
      state.removeMissing(deps, missing[i]);
    }
    for (let i = 0; i < deps.#indexedDirs; i++) {
      state.removeDirectory(deps, directories[i]);
    }
    if (deps.#templates) {
      for (const filename of deps.#templates) {
        state.markStale(filename, invalidation, marked);
      }
    }
    if (deps.#children) {
      for (const child of deps.#children) {
        LookupDependencies.drop(child, invalidation, marked);
      }
    }
  }

  #addDirectory(dir: string, names: Names) {
    Dependencies.addDirectory(this, dir, names);
    this.#queueIndex();
  }

  #queueIndex() {
    if (!this.#queued) {
      this.#queued = true;
      this.#state.queueIndex(this);
    }
  }
}

/** Whether `names` looked for in `dir` match the end of `path` from `start`. */
export function matchesEntry(
  dir: string,
  names: NonNullable<Names>,
  path: string,
  start: number,
) {
  if (!("named" in names)) return namesEntry(names, path, start);
  return (
    namesEntry(names.names, path, start) ||
    namedEntry(dir, names.named, path, start) ||
    (names.exact !== undefined && names.exact.has(path.slice(start)))
  );
}

/** Whether a tags directory reads an entry by this name: not hidden, nor `node_modules`. */
export function isTagsDirName(name: string) {
  return name[0] !== "." && name !== "node_modules";
}

const nodeModulesDir = /[\\/]node_modules[\\/]/;

/**
 * Whether a path is in `node_modules`, whose reads are not recorded: what is installed
 * does not change while the process runs, and an install is followed by `clearCaches`.
 */
export function inNodeModules(path: string) {
  return nodeModulesDir.test(path);
}

// Whether `names` name the end of `path` from `start`, alone or with an extension.
function namesEntry(names: readonly string[], path: string, start: number) {
  const length = path.length - start;
  const dot = path.lastIndexOf(".") - start;
  for (const name of names) {
    if (
      (name.length === length || name.length === dot) &&
      path.startsWith(name, start)
    ) {
      return true;
    }
  }
  return false;
}

// As `namesEntry`, for names after the name of `dir` and a dot.
function namedEntry(
  dir: string,
  named: readonly string[],
  path: string,
  start: number,
) {
  const from = dir.lastIndexOf(nodePath.sep) + 1;
  const end = start + dir.length - from;
  if (path[end] !== ".") return false;
  for (let i = from, j = start; j < end; i++, j++) {
    if (dir.charCodeAt(i) !== path.charCodeAt(j)) return false;
  }
  return namesEntry(named, path, end + 1);
}

// Whether a reader of `names` in `dir` reads its entry `name`: one they name, or,
// reading every template and directory, one `isTemplateOrDir` says is one.
function readsEntry(
  dir: string,
  names: Names,
  name: string,
  isTemplateOrDir: (name: string) => boolean,
) {
  if (names !== undefined && matchesEntry(dir, names, name, 0)) return true;
  return readsTagEntries(names) && isTagsDirName(name) && isTemplateOrDir(name);
}

// Whether `names` read every template and directory, alone or beside names.
function readsTagEntries(names: Names) {
  return names === undefined || ("named" in names && names.tagEntries === true);
}

// The entries of a listing that `names` name, alone or with an extension: scanned for
// once, then found through an index by name, which a change to the listing drops.
function namedIn(read: DirectoryRead, names: readonly string[]) {
  let byName = read.byName;
  if (!byName && !read.asked) {
    read.asked = true;
    const named: string[] = [];
    for (const entry of read.entries) {
      if (namesEntry(names, entry, 0)) named.push(entry);
    }
    return named;
  }
  if (!byName) {
    read.byName = byName = new Map();
    for (const entry of read.entries) {
      addNamed(byName, entry, entry);
      const dot = entry.lastIndexOf(".");
      if (dot > 0) addNamed(byName, entry.slice(0, dot), entry);
    }
  }
  const named: string[] = [];
  for (const name of names) {
    const found = byName.get(name);
    if (typeof found === "string") {
      if (!named.includes(found)) named.push(found);
    } else if (found) {
      for (const entry of found) if (!named.includes(entry)) named.push(entry);
    }
  }
  return named;
}

// Adds an entry under a name, alone until a second shares it.
function addNamed(
  byName: Map<string, string | string[]>,
  key: string,
  entry: string,
) {
  const found = byName.get(key);
  if (found === undefined) byName.set(key, entry);
  else if (typeof found === "string") byName.set(key, [found, entry]);
  else found.push(entry);
}

// Whether a listing has the entry at the end of `path` from `start`.
function hasEntry(entries: string[], path: string, start: number) {
  const length = path.length - start;
  for (const entry of entries) {
    if (entry.length === length && path.startsWith(entry, start)) return true;
  }
  return false;
}

function addPlugins(
  deps: CompileDependencies,
  plugins: { path?: string }[] | undefined,
) {
  if (plugins) {
    for (const plugin of plugins) CompileDependencies.addPlugin(deps, plugin);
  }
}

// Whether a path is gone, or was modified at or after `time` (by its change time
// for a write that kept an older modified time, as extracting a package does).
function modifiedSince(stats: ReturnType<typeof stat>, time: number) {
  return !stats || stats.mtimeMs >= time || stats.ctimeMs >= time;
}

function withReader(readers: Readers | undefined, reader: Reader): Readers {
  if (readers === undefined || readers === reader) return reader;
  if (readers instanceof Set) return readers.add(reader);
  return new Set([readers, reader]);
}

function withoutReader(readers: Readers, reader: Reader) {
  if (readers === reader) return;
  if (readers instanceof Set) {
    readers.delete(reader);
    if (readers.size) return readers;
    return;
  }
  return readers;
}

// One reader's names in a directory, recorded twice as a recompiled template does,
// or as a tag directory and as a group: the first, unless the second adds to them.
function mergeNames(dir: string, a: Names, b: Names): Names {
  if (a === b) return a;
  const names = a === undefined ? [] : namesOf(dir, a);
  let merged: string[] | undefined;
  if (b !== undefined) {
    for (const name of namesOf(dir, b)) {
      if (!names.includes(name)) (merged ||= names.slice()).push(name);
    }
  }
  const exact = a !== undefined && "named" in a ? a.exact : undefined;
  const tagEntries = readsTagEntries(a) || readsTagEntries(b);
  if (!exact && !tagEntries) return merged || names;
  return {
    names: merged || names,
    named: [],
    exact,
    tagEntries: tagEntries || undefined,
  };
}

// Plain names, with any `named` after the directory's own name and a dot.
function namesOf(dir: string, names: NonNullable<Names>) {
  if (!("named" in names)) return names;
  const prefix = nodePath.basename(dir) + ".";
  const all = names.names.slice();
  for (const name of names.named) all.push(prefix + name);
  return all;
}

// Listed without options, as file systems adding virtual files expect.
function listDir(fs: FileSystem, dir: string) {
  try {
    return fs.readdirSync(dir);
  } catch {
    return undefined;
  }
}

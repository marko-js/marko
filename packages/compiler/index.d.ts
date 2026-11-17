import { Diagnostic, TaglibLookup } from "@marko/compiler/babel-utils";
import { SourceMap } from "magic-string";

import * as types from "./babel-types";
export { types };

type _Config = typeof import("./config");
export interface Config extends _Config {}
interface Dep {
  type: string;
  path: string;
  [x: string]: unknown;
}

interface VirtualDep {
  type: string;
  code: string;
  virtualPath: string;
  startPos?: number;
  endPos?: number;
  [x: string]: unknown;
}

/**
 * What a compile, or the tag lookups of some directories, read outside `node_modules`: visit
 * it with `taglib.forEachDependency`.
 */
export interface Dependencies {}

export interface MarkoMeta {
  id: string;
  component?: string;
  /** What the compile read beyond the template's own source, outside `node_modules`. */
  dependencies: Dependencies;
  /** @deprecated Use `dependencies`: the files it read, listed when first read. */
  watchFiles: string[];
  tags?: string[];
  deps: Array<string | Dep | VirtualDep>;
  /** @deprecated Use `dependencies`: the templates it read, listed when first read. */
  analyzedTags?: [string, ...string[]];
  diagnostics: Diagnostic[];
  api: undefined | string;
}

// Each field follows the flag that produces it; an omitted flag may be set by
// `configure`, so only `code` (on unless disabled) is assumed.
export interface CompileResult<C extends Config = Config> {
  ast: C extends { ast: true }
    ? types.File
    : C extends { ast: false }
      ? null
      : types.File | null;
  code: C extends { code: false } ? null : string;
  map: C extends { code: false }
    ? null
    : C extends { sourceMaps: true | "both" }
      ? SourceMap
      : C extends { sourceMaps: false | "inline" }
        ? null
        : SourceMap | null;
  meta: MarkoMeta;
}

export const version: string;

export const globalConfig: Config;

export function configure(config: Config): void;

export function compile<C extends Config = Config>(
  src: string,
  filename: string,
  config?: C,
): Promise<CompileResult<C>>;

export function compileSync<C extends Config = Config>(
  src: string,
  filename: string,
  config?: C,
): CompileResult<C>;

export function compileFile<C extends Config = Config>(
  filename: string,
  config?: C,
): Promise<CompileResult<C>>;

export function compileFileSync<C extends Config = Config>(
  filename: string,
  config?: C,
): CompileResult<C>;

export function getRuntimeEntryFiles(
  output: string,
  translator?: string | undefined,
): string[];

export function getRuntimeVersion(translator?: unknown): string;

export namespace taglib {
  export function resolveOptionalTaglibs(
    taglibIds: string[],
  ): [id: string, props: { [x: string]: unknown }][];
  export function excludeDir(dirname: string): void;
  export function excludePackage(packageName: string): void;
  export function register(id: string): void;
  export function register(id: string, props: { [x: string]: unknown }): void;
  /**
   * The tags a template in `dirname` can use. One handed out is never changed: once
   * something it read changes (see `invalidate`), asking again gives another object.
   */
  export function buildLookup(
    dirname: string,
    translator?: unknown,
    onError?: (err: Error) => void,
    /** Defaults to the configured `fileSystem`. */
    fileSystem?: Config["fileSystem"],
  ): TaglibLookup;
  /**
   * Forgets everything read, so every lookup and template is read again. Call it after an install:
   * nothing read in `node_modules` is recorded, as what is installed is taken not to change.
   */
  export function clearCaches(): void;
  /** Records a file the current compile read, so a change to it marks the compile stale. */
  export function addFileDependency(filename: string): void;
  /**
   * Records that the current compile looks in `dir` for `names`, each alone or with
   * any extension, and returns the entries they name, in no order.
   */
  export function addDirectoryDependency(
    dir: string,
    names: readonly string[],
  ): readonly string[];
  /**
   * Marks stale the tag lookups and templates that read any of `paths` (changed, added or
   * removed) outside `node_modules`, returning every template marked, whatever cache compiled
   * it and failed or not, and drops those `cache` holds.
   */
  export function invalidate(
    /**
     * One path or several, compared as `path.resolve` gives them (a link by its own path, not its
     * target's); several are one invalidation, whose result lists each template once.
     */
    paths: string | Iterable<string>,
    cache?: Config["cache"],
    fileSystem?: Config["fileSystem"],
  ): string[];
  /**
   * As `invalidate`, for each path read outside `node_modules` that changed on disk since
   * (by modified time), for a caller no watcher tells what changed.
   */
  export function revalidate(
    cache?: Config["cache"],
    fileSystem?: Config["fileSystem"],
  ): string[];
  /**
   * What the tag lookups of `dirnames` read with every tag loaded; given `onError`, one that fails
   * to build is handed to it, and what it read is kept, to watch for its fix.
   */
  export function getDependencies(
    dirnames: Iterable<string>,
    translator?: unknown,
    onError?: (err: Error) => void,
    fileSystem?: Config["fileSystem"],
  ): Dependencies;
  /**
   * Calls `visit` with each path to watch for `dependencies`, none in `node_modules`, maybe more than needed:
   * what to compile again comes from `invalidate`, not from these. Skips a layer in `seen` and those below,
   * adding the rest.
   */
  export function forEachDependency(
    dependencies: Dependencies,
    visit: (path: string, kind: "file" | "missing" | "directory") => void,
    seen?: WeakSet<Dependencies>,
  ): void;
}

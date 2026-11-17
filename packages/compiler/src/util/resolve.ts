import nodePath from "path";

import { type ResolveOptions, resolveSync } from "resolve-sync";

import {
  inNodeModules,
  LookupDependencies,
  stateOf,
} from "../taglib/dependencies";
import { type FileSystem, isFile, realpath, stat } from "./fs";

type ResolveFS = NonNullable<ResolveOptions["fs"]>;

// Each file system as resolve-sync reads it, reused by every resolution.
const resolveFileSystems = new WeakMap<FileSystem, ResolveFS>();

/** The entry field `require` reads, for resolutions that follow it. */
export const mainField = ["main"];

/**
 * Where a resolution from `dir` starts: its real location, as Node resolves
 * from, or where it would be when it does not exist (eg a virtual source).
 */
export function resolveFrom(fs: FileSystem, dir: string) {
  let real = dir;
  try {
    real = realpath(fs, dir);
  } catch {
    // ignore
  }
  return nodePath.join(real, "_");
}

/**
 * The file system as resolve-sync reads it, so it resolves what the compile
 * reads, recording what it reads in `deps` when given.
 */
export function resolveFS(fs: FileSystem, deps?: LookupDependencies) {
  if (deps) return recordingFS(fs, deps);
  let resolveFS = resolveFileSystems.get(fs);
  if (!resolveFS) {
    resolveFileSystems.set(
      fs,
      (resolveFS = {
        isFile: (file) => isFile(fs, file),
        readPkg: (file) => {
          try {
            return JSON.parse(fs.readFileSync(file, "utf8"));
          } catch {
            return undefined;
          }
        },
        realpath: (file) => realpath(fs, file),
      }),
    );
  }
  return resolveFS;
}

/**
 * A package's file a template in `dir` imports, as a bundler resolves it, kept
 * until `clearCaches`; a miss is tried again, so a file added since is found.
 */
export function resolveImport(fs: FileSystem, dir: string, request: string) {
  const { imports } = stateOf(fs);
  const key = dir + "\0" + request;
  let resolved = imports.get(key);
  if (!resolved) {
    resolved =
      resolveSync(request, {
        from: resolveFrom(fs, dir),
        silent: true,
        fs: resolveFS(fs),
      }) || undefined;
    if (resolved) imports.set(key, resolved);
  }
  return resolved;
}

/**
 * What `require` would load for `request` from `dir`, through the file system,
 * recording what it reads in `deps` when given.
 */
export function resolveRequire(
  fs: FileSystem,
  dir: string,
  request: string,
  deps?: LookupDependencies,
) {
  return (
    resolveSync(request, {
      from: resolveFrom(fs, dir),
      require: true,
      fields: mainField,
      silent: true,
      fs: resolveFS(fs, deps),
    }) || undefined
  );
}

// Records whether each path probed outside `node_modules` exists, and each
// `package.json`'s content.
function recordingFS(fs: FileSystem, deps: LookupDependencies): ResolveFS {
  return {
    isFile(file) {
      const stats = stat(fs, file);
      if (!inNodeModules(file)) {
        if (stats) LookupDependencies.addFound(deps, file);
        else LookupDependencies.addMissing(deps, file);
      }
      return !!stats && !stats.isDirectory();
    },
    readPkg(file) {
      const recorded = !inNodeModules(file);
      let source: string;
      try {
        source = fs.readFileSync(file, "utf8");
      } catch {
        if (recorded) LookupDependencies.addMissing(deps, file);
        return;
      }
      if (recorded) LookupDependencies.addFile(deps, file);
      try {
        return JSON.parse(source);
      } catch {
        // Malformed, which resolve-sync reads as no `package.json`.
      }
    },
    realpath: (file) => realpath(fs, file),
  };
}

import nodePath from "path";

import { type ResolveOptions, resolveSync } from "resolve-sync";

import { type FileSystem, isFile, realpath } from "./fs";

type ResolveFS = NonNullable<ResolveOptions["fs"]>;

// Each file system as resolve-sync reads it, reused by every resolution.
const resolveFileSystems = new WeakMap<FileSystem, ResolveFS>();
// Package files templates import, by file system, until the caches are cleared.
let imports: WeakMap<FileSystem, Map<string, string>> | undefined;

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

/** The file system as resolve-sync reads it, so it resolves what the compile reads. */
export function resolveFS(fs: FileSystem) {
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
 * A package's file a template in `dir` imports, as a bundler resolves it.
 * Kept until `clearImportCache`, as installed packages are; a miss is tried
 * again, so a file added since is found.
 */
export function resolveImport(fs: FileSystem, dir: string, request: string) {
  let byDir = imports?.get(fs);
  if (!byDir) (imports ||= new WeakMap()).set(fs, (byDir = new Map()));

  const key = dir + "\0" + request;
  let resolved = byDir.get(key);
  if (!resolved) {
    resolved =
      resolveSync(request, {
        from: resolveFrom(fs, dir),
        silent: true,
        fs: resolveFS(fs),
      }) || undefined;
    if (resolved) byDir.set(key, resolved);
  }
  return resolved;
}

export function clearImportCache() {
  imports = undefined;
}

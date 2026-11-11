import nodeFS from "fs";

import type { Config } from "@marko/compiler";

/** The file system a compile reads through, its `fileSystem` config. */
export type FileSystem = NonNullable<Config["fileSystem"]>;

const noThrowIfMissing = { throwIfNoEntry: false } as const;

/** Stats a path, or gives `undefined` for one that is missing or unreadable. */
// Only Node's `statSync`, or a patch over it, is told not to throw for a missing
// file; the catch covers custom file systems, and patches that ignore the option.
export function stat(fs: FileSystem, path: string) {
  try {
    return fs.statSync === nodeFS.statSync
      ? fs.statSync(path, noThrowIfMissing)
      : fs.statSync(path);
  } catch {
    return undefined;
  }
}

export function exists(fs: FileSystem, path: string) {
  return !!stat(fs, path);
}

export function isDirectory(fs: FileSystem, path: string) {
  return !!stat(fs, path)?.isDirectory();
}

// Judged by `isDirectory` alone, which every file system's stats have.
export function isFile(fs: FileSystem, path: string) {
  const stats = stat(fs, path);
  return !!stats && !stats.isDirectory();
}

// A file system that cannot resolve links is taken to have none.
export function realpath(fs: FileSystem, path: string) {
  return fs.realpathSync ? fs.realpathSync(path) : path;
}

import { basename, dirname } from "path";

// Registry of compiler-generated in-memory files (eg shadow templates for
// custom elements manifests). Every configured `fileSystem` is wrapped with
// `withVirtualFiles` so reads and stats inside the compiler resolve these
// paths transparently; bundler integrations serve them via `getVirtualFile`.
const virtualFiles = new Map();
const virtualDirs = new Map();
const wrappedFileSystems = new WeakMap();
const wrappers = new WeakSet();

export function registerVirtualFile(filename, source) {
  const existing = virtualFiles.get(filename);
  if (!existing || existing.source !== source) {
    virtualFiles.set(filename, { source, mtime: new Date() });

    const dir = dirname(filename);
    let names = virtualDirs.get(dir);
    if (!names) virtualDirs.set(dir, (names = new Set()));
    names.add(basename(filename));
  }
}

export function getVirtualFile(filename) {
  return virtualFiles.get(filename)?.source;
}

export function withVirtualFiles(fs) {
  if (wrappers.has(fs)) return fs;
  let wrapped = wrappedFileSystems.get(fs);
  if (!wrapped) {
    wrappedFileSystems.set(
      fs,
      (wrapped = Object.create(fs, {
        readFileSync: {
          value(filename, options) {
            const found = virtualFiles.get(filename);
            return found ? found.source : fs.readFileSync(filename, options);
          },
        },
        readFile: {
          value(filename, options, cb) {
            const found = virtualFiles.get(filename);
            if (found) {
              (cb || options)(null, found.source);
            } else {
              fs.readFile(filename, options, cb);
            }
          },
        },
        statSync: {
          value(filename) {
            const found = virtualFiles.get(filename);
            return found ? virtualStat(found) : fs.statSync(filename);
          },
        },
        readdirSync: {
          value(dir, options) {
            const names = virtualDirs.get(dir);
            if (!names) return fs.readdirSync(dir, options);

            let real = [];
            try {
              real = fs.readdirSync(dir, options);
            } catch (_) {
              // A purely virtual directory has no on-disk half to merge.
            }
            return [...new Set([...real, ...names])];
          },
        },
      })),
    );
    wrappers.add(wrapped);
  }
  return wrapped;
}

function virtualStat(found) {
  return {
    mtime: found.mtime,
    size: found.source.length,
    isFile: () => true,
    isDirectory: () => false,
  };
}

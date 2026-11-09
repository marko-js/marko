"use strict";

// Wont-fix: these nulls mean cryptic errors when a DOM global (eg jsdom) exists
// at first require — browser mode mainly serves the marko website; acceptable.
if (process.env.BUNDLE || typeof document === "object") {
  exports.cwd = "/";
  exports.root = "/";
  exports.pkg = null;
  exports.require = null;
  exports.resolve = null;
  exports.tryResolve = null;
  exports.getRootPackage = null;
} else {
  const fs = require("fs");
  const path = require("path");
  const { createRequire } = require("module");
  // One `require` per directory, so its realpath is looked up once; Node caches
  // the resolutions themselves.
  const requireFrom = new Map();
  let cwd = "/";
  let root = cwd;
  let pkg = null;

  if (typeof process === "object" && typeof process.cwd === "function") {
    try {
      cwd = process.cwd();
      pkg = getRootPackage(cwd, fs);
      if (pkg) root = pkg.__dirname;
    } catch {
      // ignore
    }
  }
  exports.cwd = cwd;
  exports.root = root;
  exports.pkg = pkg;
  exports.require = require;
  exports.getRootPackage = getRootPackage;
  exports.resolve = (id, from) => getRequire(from || root).resolve(id);
  exports.tryResolve = (id, from) => {
    try {
      return getRequire(from || root).resolve(id);
    } catch {
      return undefined;
    }
  };

  function getRequire(dir) {
    let req = requireFrom.get(dir);
    if (!req) {
      requireFrom.set(
        dir,
        (req = createRequire(path.join(realpath(dir), "_"))),
      );
    }
    return req;
  }

  // The nearest package.json at or above `dir` that names a package or its
  // dependencies, read through `fileSystem`, with its directory as `__dirname`.
  function getRootPackage(dir, fileSystem) {
    while (true) {
      const found = readPackage(dir, fileSystem);
      if (found) return found;
      const parent = path.dirname(dir);
      if (parent === dir) return null;
      dir = parent;
    }
  }

  // Skips a package.json that only marks a module type, as `{"type":"module"}` does.
  function readPackage(dir, fileSystem) {
    let source;
    try {
      source = fileSystem.readFileSync(path.join(dir, "package.json"), "utf8");
    } catch {
      return null;
    }
    const found = JSON.parse(source);
    if (
      found.name ||
      found.version ||
      found.dependencies ||
      found.devDependencies ||
      found.peerDependencies
    ) {
      found.__dirname = dir;
      return found;
    }
    return null;
  }

  // Resolves from where a symlinked directory really lives, as Node does for a
  // module's own requires; a directory not on disk resolves as written.
  function realpath(dir) {
    try {
      return fs.realpathSync(dir);
    } catch (err) {
      if (err.code !== "ENOENT") throw err;
      return path.resolve(dir);
    }
  }
}

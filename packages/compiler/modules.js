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
      pkg = require("lasso-package-root").getRootPackage(cwd);
      if (pkg) root = pkg.__dirname;
    } catch {
      // ignore
    }
  }
  exports.cwd = cwd;
  exports.root = root;
  exports.pkg = pkg;
  exports.require = require;
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

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
  const resolveFrom = require("resolve-from");
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
  exports.resolve = (id, from) => {
    return resolveFrom(from || root, id);
  };
  exports.tryResolve = (id, from) => {
    return resolveFrom.silent(from || root, id);
  };
}

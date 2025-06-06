"use strict";

if (process.env.BUNDLE || typeof document === "object") {
  exports.cwd = "/";
  exports.root = "/";
  exports.require = undefined;
  exports.resolve = undefined;
  exports.tryResolve = undefined;
} else {
  const resolveFrom = require("resolve-from");
  const cwd = process.cwd();
  const root = (() => {
    try {
      return require("lasso-package-root").getRootDir(cwd) || cwd;
    } catch {
      return cwd;
    }
  })();
  exports.cwd = cwd;
  exports.root = root;
  exports.require = require;
  exports.resolve = (id, from) => {
    return resolveFrom(from || root, id);
  };
  exports.tryResolve = (id, from) => {
    return resolveFrom.silent(from || root, id);
  };
}

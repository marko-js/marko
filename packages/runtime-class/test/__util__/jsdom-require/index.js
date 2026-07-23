"use strict";

const path = require("path");
const fs = require("fs");
const vm = require("vm");
const Module = require("module");
const { JSDOM } = require("jsdom");
const { resolveSync } = require("resolve-sync");

exports.createBrowser = createBrowser;

/**
 * Creates a jsdom instance with a `require` that loads CommonJS modules into
 * the jsdom vm context. The loader owns its own registry and never touches
 * `Module.prototype`, unlike context-require.
 */
function createBrowser({
  dir,
  html,
  extensions,
  beforeParse,
  ...jsdomOptions
}) {
  const browser = new JSDOM("", {
    runScripts: "dangerously",
    pretendToBeVisual: true,
    ...jsdomOptions,
  });
  const { window } = browser;
  const loader = new ContextLoader(browser, dir, extensions);

  // Pass through istanbul coverage.
  if ("__coverage__" in globalThis) {
    window.__coverage__ = globalThis.__coverage__;
  }

  // Expose some globals commonly shimmed by bundlers.
  window.global = window;
  window.Buffer = Buffer;
  window.process = { ...process, browser: true };
  window.setImmediate ||= (() => {
    const msg = `${Math.random()}`;
    let queue = [];
    let offset = 0;

    window.addEventListener("message", (ev) => {
      if (ev.data === msg) {
        const cbs = queue;
        offset += cbs.length;
        queue = [];
        for (const cb of cbs) {
          if (cb) {
            cb();
          }
        }
      }
    });

    window.clearImmediate = function clearImmediate(id) {
      const index = id - offset;
      if (index >= 0) {
        queue[index] = undefined;
      }
    };

    return function setImmediate(cb, ...args) {
      const index = queue.push(args.length ? () => cb(...args) : cb) - 1;
      if (!index) {
        window.postMessage(msg, "*");
      }
      return index + offset;
    };
  })();

  browser.require = loader.createRequire(null);
  browser.yield = () => new Promise((done) => window.setImmediate(done));
  browser.act = async (fn) => {
    let errors;
    let errorStage = 0;
    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleError);

    let result;
    try {
      result = await fn?.();
      await browser.yield();
    } catch (err) {
      trackError(err);
    }

    window.removeEventListener("error", handleError);
    window.removeEventListener("unhandledrejection", handleError);
    switch (errorStage) {
      case 0:
        return result;
      case 1:
        throw errors;
      default:
        throw new window.AggregateError(errors);
    }

    function handleError(ev) {
      if (!ev.defaultPrevented) {
        let error = "error" in ev ? ev.error : ev.reason || ev;
        if (typeof error === "object" && error !== null && "detail" in error) {
          error = error.detail;
        }
        trackError(error);
        ev.preventDefault();
      }
    }

    function trackError(err) {
      switch (errorStage) {
        case 0:
          errors = err;
          errorStage = 1;
          break;
        case 1:
          if (err !== errors) {
            errors = new Set([errors, err]);
            errorStage = 2;
          }
          break;
        default:
          errors.add(err);
          break;
      }
    }
  };

  if (beforeParse) {
    beforeParse(window, browser);
  }

  window.document.open();
  window.document.write(
    html || "<!DOCTYPE html><html><head></head><body></body></html>",
  );

  return browser;
}

class ContextLoader {
  constructor(browser, dir, hooks) {
    this.browser = browser;
    this.entryDir = dir;
    this.hooks = hooks || {};
    this.registry = new Map();
    this.resolveCache = new Map();
    this.extensions = [
      ...new Set([...Object.keys(this.hooks), ".js", ".cjs", ".json"]),
    ];
  }

  require(request, parentFilename) {
    if (Module.isBuiltin(request)) {
      return require(request);
    }

    const filename = this.resolveFrom(request, parentFilename);
    let mod = this.registry.get(filename);
    if (mod) {
      return mod.exports;
    }

    mod = new ContextModule(filename, this);
    this.registry.set(filename, mod);
    try {
      this.load(mod, filename);
      mod.loaded = true;
    } catch (err) {
      this.registry.delete(filename);
      throw err;
    }

    return mod.exports;
  }

  resolveFrom(request, parentFilename) {
    if (Module.isBuiltin(request)) {
      return request;
    }

    // An absolute request is already a resolved file (a require.resolve
    // result); only normalize it for the registry.
    if (path.isAbsolute(request)) {
      return fs.realpathSync(request);
    }

    const from = parentFilename || path.join(this.entryDir, "__entry__.js");
    const cacheKey = `${from}\0${request}`;
    let resolved = this.resolveCache.get(cacheKey);
    if (!resolved) {
      resolved = resolveSync(request, {
        from,
        browser: true,
        require: true,
        fields: ["browser", "main"],
        exts: this.extensions,
        silent: true,
      });
      if (!resolved) {
        throw Object.assign(
          new Error(`Cannot find module '${request}' from '${from}'`),
          { code: "MODULE_NOT_FOUND" },
        );
      }
      resolved = fs.realpathSync(resolved);
      this.resolveCache.set(cacheKey, resolved);
    }

    return resolved;
  }

  load(mod, filename) {
    const ext = path.extname(filename);
    const hook = this.hooks[ext];
    if (hook) {
      hook(mod, filename);
    } else if (ext === ".json") {
      mod.exports = JSON.parse(fs.readFileSync(filename, "utf8"));
    } else if (ext === ".node") {
      mod.exports = require(filename);
    } else {
      mod._compile(fs.readFileSync(filename, "utf8"), filename);
    }
  }

  createRequire(mod) {
    const parentFilename = mod && mod.filename;
    const req = (request) => this.require(request, parentFilename);
    req.resolve = (request) => this.resolveFrom(request, parentFilename);
    req.cache = this.registry;
    req.extensions = this.hooks;
    req.main = undefined;
    return req;
  }
}

class ContextModule {
  constructor(filename, loader) {
    this.id = filename;
    this.filename = filename;
    this.exports = {};
    this.loaded = false;
    this.loader = loader;
  }

  _compile(content, filename) {
    // compileFunction (not a Module.wrap-style source wrapper) keeps V8
    // coverage offsets aligned with the file on disk.
    const fn = vm.compileFunction(
      content,
      ["exports", "require", "module", "__filename", "__dirname"],
      {
        filename,
        parsingContext: this.loader.browser.getInternalVMContext(),
      },
    );
    return fn.call(
      this.exports,
      this.exports,
      this.loader.createRequire(this),
      this,
      filename,
      path.dirname(filename),
    );
  }
}

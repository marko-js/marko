"use strict";

const Module = require("module");
const { createBrowser } = require("jsdom-context-require");
const compiler = require("../../compiler");
// The outer (real) module cache, captured before `context-require` ever swaps
// `Module._cache` to a jsdom context's private cache.
const outerModuleCache = Module._cache;
const globals = [
  "console",
  "__coverage__",
  "Error",
  "describe",
  "before",
  "after",
  "beforeEach",
  "afterEach",
  "it",
];

const browserExtensions = {
  ".marko": compileMarkoModule,
  ".html": compileMarkoModule,
};

module.exports = function (dir, html, options) {
  options = options || {};
  return createBrowser({
    dir: dir,
    html: html,
    extensions: browserExtensions,
    // runScripts: 'dangerously', // JSDOM 10+
    beforeParse(window, browser) {
      window.global = window;
      window.alert = () => {};
      window.addEventListener("error", (e) => {
        browser.error = browser.error || e.error;
      });
      browser.require("complain").silence = true;
      globals.forEach(function (k) {
        window[k] = global[k];
      });
      if (options.beforeParse) {
        options.beforeParse(window, browser);
      }
    },
  });
};

function compileMarkoModule(module, filename) {
  // `context-require` runs this extension hook while `Module._cache` is swapped
  // to the jsdom context's cache. Compiling here would resolve the compiler's
  // lazily-loaded internals (e.g. the translator) into the browser realm,
  // creating a second @marko/compiler instance. Restore the outer cache so the
  // compile happens entirely in the outer realm, then evaluate only the
  // compiled output back in the context.
  const contextCache = Module._cache;
  Module._cache = outerModuleCache;
  let code;
  try {
    code = compiler.compileFile(filename, {
      writeToDisk: false,
      output: "vdom",
      browser: true,
      meta: true,
      modules: "cjs",
      babelConfig: {
        babelrc: false,
        configFile: false,
        browserslistConfigFile: false,
      },
    });
  } finally {
    Module._cache = contextCache;
  }
  return module._compile(code, filename);
}

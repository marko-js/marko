'use strict';

// Someday this will become a separate package.
const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
// const JSDOM = require('jsdom').JSDOM; // JSDOM 10+
const browserResolve = require('lasso-resolve-from');
const createContextModule = require('./create-context-module').createModule;

module.exports = function (options) {
  const html = options.html;
  const dir = options.dir;
  const extensions = options.extensions;
  const beforeParse = options.beforeParse;
  delete options.html;
  delete options.dir;
  delete options.extensions;
  delete options.beforeParse;
  const window = jsdom.jsdom('', options).defaultView;
  const context = {
    window: window,
    runVMScript(script) {
      return jsdom.evalVMScript(window, script);
    }
  }

  // const context = new JSDOM('', options); // JSDOM 10+
  // const window = context.window; // JSDOM 10+  

  const resolveConfig = {
    remaps: loadRemaps,
    extensions: extensions && []
      .concat(Object.keys(require.extensions))
      .concat(Object.keys(extensions))
      .filter(unique)
  }
  const module = createContextModule({
    dir: dir,
    context: context,
    resolve: resolve,
    extensions: extensions
  });

  context.require = module.require.bind(module);
  beforeParse && beforeParse(window, context);
  window.document.open();
  window.document.write(html);

  return context;

  function resolve (from, request) {
    return browserResolve(from, request, resolveConfig).path;
  }
}

/**
 * Array filter for uniqueness.
 */
function unique (item, i, list) {
  return list.indexOf(item) === i;
}

/**
 * Loads browser.json remaps.
 *
 * @param {string} dir 
 */
function loadRemaps (dir) {
  const remapFile = path.join(dir, "browser.json");

  if (fs.existsSync(remapFile)) {
    const remaps = require(remapFile).requireRemap;

    if (remaps) {
      return remaps.reduce(function (result, cur) {
        result[path.join(dir, cur.from)] = path.join(dir, cur.to);
        return result;
      }, {});
    }
  }
}

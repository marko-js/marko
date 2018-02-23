'use strict';

const jQuery = require('jquery');
const createJSDOMModule = require('./create-jsdom-module');
const compiler = require('../../compiler');
const noop = function () {};
const globals = [
  'console',
  '__coverage__',
  'Error',
  'describe',
  'before',
  'after',
  'beforeEach',
  'afterEach',
  'it'
];

const browserExtensions = {
    '.marko': function (module, filename) {
        return module._compile(compiler.compileFile(filename, {
            writeToDisk: false,
            output: 'vdom',
            browser: true,
            meta: true
        }), filename);
    }
};

module.exports = function (dir, html, options) {
  options = options || {};
  return createJSDOMModule({
    dir: dir,
    html: html,
    extensions: browserExtensions,
    // runScripts: 'dangerously', // JSDOM 10+
    beforeParse(window, browser) {
      jQuery(window);
      browser.require('complain').log = noop;
      globals.forEach(function (k) { window[k] = global[k]; });
      if (options.beforeParse) {
        options.beforeParse(window, browser);
      }
    }
  });
}

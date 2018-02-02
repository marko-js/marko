var path = require('path');
var lasso = require('lasso');
var MemoryFs = require('memory-fs');
var JSDOM = require('jsdom-global');
var memFs = new MemoryFs();
var bundler = lasso.create({
  outputDir: "/static",
  minify: false,
  bundlingEnabled: false,
  fingerprintsEnabled: false,
  plugins: [{
    plugin: 'lasso-fs-writer',
    config: { fileSystem: memFs }
  }, {
    plugin: 'lasso-marko',
    config: { output: 'vdom' }
  }].concat(process.env.NYC_CONFIG ? require('./lasso-istanbul-plugin') : [])
});

module.exports = function (template, options) {
  return template.render({
    components: options.components || [],
    browserDependencies: options.browserDependencies,
    lasso: bundler
  }).then(function (html) {
    var cleanup = JSDOM(html, {
      url: 'http://localhost',
      features: { FetchExternalResources: ["script", "iframe", "link"] },
      resourceLoader: function (resource, cb) {
        memFs.readFile(resource.url.path, cb);
      }
    });
    window.cleanup = cleanup;

    // Expose current instance of mocha to jsdom.
    [
      'describe',
      'before',
      'after',
      'beforeEach',
      'afterEach',
      'it',
      '__coverage__'
    ].forEach(function (k) { window[k] = global[k]; });

    return new Promise(function (resolve, reject) {
      window.addEventListener('error', function (ev) {
        reject(ev.error);
      });

      window.addEventListener('load', function () {
        resolve();
      });
    });
  });
}

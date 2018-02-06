var fs = require('fs');
var path = require('path');
var lasso = require('lasso');
var MemoryFs = require('memory-fs');
var cachingFS = require('lasso/lib/caching-fs');

var toMD5 = require('md5-hex');
var JSDOM = require('jsdom-global');
var NYC_DIR = path.join(__dirname, "../../.nyc_output");
var isNYC = process.env.NYC_CONFIG;

module.exports = function (template, options) {
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
    }].concat(isNYC ? require('./lasso-istanbul-plugin') : [])
  });
  var lassoCacheLookup = bundler.lassoCacheLookup;

  return template.render({
    components: options.components || [],
    browserDependencies: options.browserDependencies,
    lasso: bundler
  }).then(function (html) {
    JSDOM(html, {
      url: 'http://localhost',
      features: { FetchExternalResources: ["script", "iframe"] },
      resourceLoader: function (resource, cb) {
        memFs.readFile(resource.url.path, cb);
      }
    });

    if (isNYC) {
      // Provide window with coverage object for nyc.
      window.__coverage__ = {};
    }

    window.cleanup = function () {
      // Save coverage details after tests are done.
      isNYC && fs.writeFileSync(
        path.join(NYC_DIR, toMD5(options.name) + '.json'),
        JSON.stringify(window.__coverage__)
      );

      window.close();
      document.destroy();
      cachingFS.clearCaches();
      memFs.data = Object.create(null);
      Object.keys(lassoCacheLookup).forEach(function (key) {
        var cache = lassoCacheLookup[key];
        var caches = cache.cacheManager.caches;
        Object.keys(caches).forEach(function (key) {
          caches[key].free();
        });
      })
    };

    // Expose current instance of mocha to jsdom.
    [
      'describe',
      'before',
      'after',
      'beforeEach',
      'afterEach',
      'it'
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

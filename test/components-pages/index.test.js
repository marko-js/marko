require('../__util__/test-init');
require('../../node-require').install();

var path = require('path');
var MemoryFs = require('memory-fs');
var autotest = require('../autotest');
var runJSDOM = require('../__util__/run-jsdom');
var createBundler = require('../__util__/create-bundler');
var addAsyncTestSuites = require('../__util__/async-test-suite');

var memFs = new MemoryFs();
var TEST_NAME = path.basename(__dirname);
var HIDDEN_PROP = {
  writable: false,
  enumerable: false,
  configurable: false
};

describe(TEST_NAME, function () {
  autotest.scanDir(
    path.join(__dirname, './fixtures'),
    run,
    { type: 'describe', name: false }
  );

  describe('deprecated', function () {
    autotest.scanDir(
      path.join(__dirname, './fixtures-deprecated'),
      run.bind({ dependencies: ['require: jquery'] }),
      { type: 'describe', name: false }
    );
  });
});

/**
 * Builds a page with marko & lasso and then pipes it through jsdom, loading co-located tests.
 */
function run(dir) {
  var cleanup;
  var testFile = path.join(dir, 'tests.js');
  var pageTemplate = require(path.join(dir, 'template.marko'));
  var outputFile = path.join(dir, 'test.html');
  var templateData = Object.create(null, {
    lasso: Object.assign({
      value: createBundler({ outputDir: path.join(dir, 'static'), fs: memFs })
    }, HIDDEN_PROP),
    browserDependencies: Object.assign({
      value: ['require-run:' + testFile].concat(this.dependencies || []),
    }, HIDDEN_PROP),
  });

  addAsyncTestSuites(function () {
    return pageTemplate.render(templateData).then(function (html) {
      return runJSDOM({
        html: html,
        url: 'file://' + testFile,
        resolve: function (resource, cb) {
          memFs.readFile(resource.url.path, cb);
        }
      });
    });
  });

  after(function () { runJSDOM.cleanup(); });
}


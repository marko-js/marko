require('../__util__/test-init');
require('../../node-require').install();

var path = require('path');
var autotest = require('../autotest');
var renderRunJSDOM = require('../__util__/render-run-jsdom');
var addAsyncTestSuites = require('../__util__/async-test-suite');

describe(path.basename(__dirname), function () {
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
  var testFile = path.join(dir, 'tests.js');
  var pageTemplate = require(path.join(dir, 'template.marko'));

  addAsyncTestSuites(function () {
    return renderRunJSDOM(pageTemplate, {
      name: dir,
      browserDependencies: ((this && this.dependencies) || []).concat('require-run:' + testFile)
    });
  });

  after(function () { global.window && global.window.cleanup(); });
}


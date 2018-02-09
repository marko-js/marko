require('../__util__/test-init');

var path = require('path');
var autotest = require('../autotest');
var asyncTestSuite = require('../__util__/async-test-suite');
var createJSDOMModule = require('../__util__/create-marko-jsdom-module');
var TEST_NAME = path.basename(__dirname)

describe(TEST_NAME, function () {
  autotest.scanDir(
    path.join(__dirname, './fixtures'),
    run,
    { type: 'describe', name: false }
  );
});

describe(TEST_NAME + ' (deprecated)', function () {
  autotest.scanDir(
    path.join(__dirname, './fixtures-deprecated'),
    run,
    { type: 'describe', name: false }
  );
});

/**
 * Builds a page with marko & lasso and then pipes it through jsdom, loading co-located tests.
 */
function run(dir) {
  asyncTestSuite(function () {
    var testFile = path.join(dir, 'tests.js');
    var templateFile = path.join(dir, 'template.marko');
    var template = require(templateFile);
    return template
      .render({})
      .then(function (html) {
        var browser = createJSDOMModule(__dirname, String(html), {
          beforeParse(window,  browser) {
            browser.require('../../components');
            browser.require(templateFile);
          }
        });
        after(function () { browser.window.close(); });
        browser.require(testFile);
        browser.window.$initComponents();
      });
  });
}

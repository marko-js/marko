'use strict';

require('../__util__/test-init');
require('../../node-require').install();

var path = require('path');
var autotest = require('../autotest');
var renderJSDOM = require('../__util__/render-run-jsdom');
var pageTemplate = require('./template.marko');

describe(path.basename(__dirname), function () {
    autotest.scanDir(
        path.join(__dirname, './fixtures'),
        run
      );

    describe('deprecated', function () {
        autotest.scanDir(
            path.join(__dirname, './fixtures-deprecated'),
            run.bind({ dependencies: ['require: jquery'] })
        );
    });
});

/**
 * Builds a page with marko & lasso and then pipes it through jsdom, loading co-located tests.
 */
function run(dir, helpers, done) {
    var testFile = path.join(dir, 'test.js');
    var cleanup = function (err) {
        global.window && global.window.cleanup();
        done(err);
    }

    renderJSDOM(pageTemplate, {
        browserDependencies: ((this && this.dependencies) || []).concat({
            run: true,
            type: "require",
            virtualModule: {
                path: path.join(dir, 'test.init.js'),
                read() {
                    return `
                    window.TEST = require(${JSON.stringify(testFile)});
                    window.BrowserHelpers = require(${JSON.stringify(require.resolve('../__util__/BrowserHelpers'))});
                    `;
                }
            }
        })
    }).then(() => {
        var helpers = new window.BrowserHelpers();
        var testFunc = window.TEST;

        if (testFunc.length === 1) {
            testFunc(helpers);
        } else {
            return new Promise(function (resolve, reject) {
                testFunc(helpers, function (err) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            })
        }
    }).then(cleanup, cleanup);
  }

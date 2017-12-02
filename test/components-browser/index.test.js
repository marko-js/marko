'use strict';

require('../__util__/test-init');
require('../../node-require').install();

var fs = require('fs');
var path = require('path');
var MemoryFs = require('memory-fs');
var autotest = require('../autotest');
var runJSDOM = require('../__util__/run-jsdom');
var createBundler = require('../__util__/create-bundler');
var BrowserHelpers = require('../__util__/BrowserHelpers');
var pageTemplate = require('./template.marko');
var memFs = new MemoryFs();
var TEST_NAME = path.basename(__dirname);
var HIDDEN_PROP = {
    writable: false,
    enumerable: false,
    configurable: false
}

var FIXTURES_DIR = path.join(__dirname, './fixtures');
var FIXTURES_DEPRECATED_DIR = path.join(__dirname, './fixtures-deprecated');
var FIXTURES = fs
    .readdirSync(FIXTURES_DIR)
    .map(function (entry) { return path.join(FIXTURES_DIR, entry); })
    .concat(fs
        .readdirSync(FIXTURES_DEPRECATED_DIR)
        .map(function (entry) { return path.join(FIXTURES_DEPRECATED_DIR, entry); })
    )
    .filter(function (entry) { return !/\.skip$/.test(entry); });

describe(TEST_NAME, function () {
    var cleanup;
    var templateData = Object.create(null, {
        lasso: Object.assign({
            value: createBundler({ outputDir: path.join(__dirname, 'static'), fs: memFs })
        }, HIDDEN_PROP),
        browserDependencies: Object.assign({
            value: ['require: jquery'].concat(FIXTURES.map(function (entry) {
                return 'require-run:' + path.join(entry, 'test.js')
            })),
        }, HIDDEN_PROP),
    });

    before(function () {
        // Takes a time to build all tests into one page.
        this.timeout(10000);
        return pageTemplate.render(templateData).then(function (html) {
            return runJSDOM({
                html: html,
                url: 'file://' + path.join(__dirname, 'generated'),
                resolve: function (resource, cb) {
                    memFs.readFile(resource.url.path, cb);
                }
            });
        }).then(function (fn) { cleanup = fn });
    });

    after(function () { cleanup(); });

    FIXTURES.forEach(function (dir) {
        var fixturesDir = path.basename(path.dirname(dir));
        var testName = path.basename(dir);
        it(testName, function (done) {
            // Use test file was compiled with lasso but we need to run it with the outer mocha context.
            // This could probably be improved.
            var testFunc = window.$_mod.require(`/marko-test$1.0.0/components-browser/${fixturesDir}/${testName}/test`);
            var helpers = new BrowserHelpers();
    
            if (testFunc.length === 1) {
                testFunc(helpers);
                helpers._cleanup();
                done();
            } else {
                testFunc(helpers, function (err) {
                    helpers._cleanup();
                    done(err);
                });
            }
        });
    });
});

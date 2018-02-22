'use strict';
require('../__util__/test-init');

var path = require('path');
var autotest = require('../autotest');
var createJSDOMModule = require('../__util__/create-marko-jsdom-module');
var ssrTemplate = require('./template.marko');
var TEST_NAME = path.basename(__dirname);
var renderedCache = {};

describe(TEST_NAME, function () {
    var browser = createJSDOMModule(__dirname, '<div id="testsTarget"></div><div></div>');
    var BrowserHelpers = browser.require('../__util__/BrowserHelpers');
    var helpers;

    beforeEach(function () {
        helpers = new BrowserHelpers();
    })

    afterEach(function () {
        helpers.components.forEach(function (component) {
            component.instance.destroy();
        });

        helpers.targetEl.innerHTML = '';
    });

    after(function () {
        browser.window.close();
    });

    autotest.scanDir(
        path.join(__dirname, './fixtures'),
        runBrowserRender
    );

    describe('deprecated', function () {
        autotest.scanDir(
            path.join(__dirname, './fixtures-deprecated'),
            runBrowserRender
        );
    });

    function runBrowserRender(dir, _, done) {
        var testFile = path.join(dir, 'test.js');
        var testFunc = browser.require(testFile);
        var isAsync = testFunc.length > 1;
    
        if (isAsync) {
            testFunc(helpers, cleanupAndFinish);
        } else {
            testFunc(helpers);
            cleanupAndFinish();
        }
    
        function cleanupAndFinish (err) {
            // Cache components for use in hydrate run.
            renderedCache[dir] = helpers.components.map(function (component) {
                var file = component.type.replace(/^.*\/components-browser/, __dirname);
                return {
                    file: file,
                    template: require(file),
                    input: component.input,
                    $global: component.$global
                };
            });
    
            if (err) {
                done(err);
            } else {
                done();
            }
        }
    }
});

describe(TEST_NAME + ' (hydrated)', function () {
    autotest.scanDir(
        path.join(__dirname, './fixtures'),
        runServerRender
    );

    describe('deprecated', function () {
        autotest.scanDir(
            path.join(__dirname, './fixtures-deprecated'),
            runServerRender
        );
    });

    function runServerRender(dir, _, done) {
        var components = renderedCache[dir];
        var $global = components.reduce(($g, c) => Object.assign($g, c.$global), {});
        ssrTemplate
            .render({ components: components, $global: $global })
            .then(function (html) {
                var browser = createJSDOMModule(__dirname, String(html), {
                    beforeParse(window, browser) {
                        var rootComponent = browser.require(require.resolve('./template.component-browser.js'));
                        browser.require('marko/components').register(ssrTemplate.meta.id, rootComponent);
                        components.forEach(function (component) {
                            browser.require(component.file);
                        });
                    }
                });
                var testFile = path.join(dir, 'test.js');
                var testFunc = browser.require(testFile);
                var BrowserHelpers = browser.require('../__util__/BrowserHelpers');
                var helpers = new BrowserHelpers();
                var isAsync = testFunc.length > 1;
                var curInstance = 0;

                browser.window.$initComponents();
                helpers.isHydrate = true;

                helpers.mount = function () {
                    return browser.window.components[curInstance++];
                }
    
                if (isAsync) {
                    testFunc(helpers, done);
                } else {
                    testFunc(helpers);
                    done();
                }
            })
            .catch(done);
    }
});

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
        helpers.instances.forEach(function (instance) {
            instance.destroy();
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
            renderedCache[dir] = helpers.rendered;
    
            if (err) {
                done(err);
            } else {
                done();
            }
        }
    }
});

describe(TEST_NAME + ' (hydrated)', function () {
    var hydrateOptions = { 
        skip: (_, dir) => require(path.join(dir, 'test.js')).skipHydrate,
        fails: (_, dir) => require(path.join(dir, 'test.js')).failHydrate,
        file: (_, dir) => path.join(dir, 'test.js')
    };

    autotest.scanDir(
        path.join(__dirname, './fixtures'),
        runServerRender,
        hydrateOptions
    );

    describe('deprecated', function () {
        autotest.scanDir(
            path.join(__dirname, './fixtures-deprecated'),
            runServerRender,
            hydrateOptions
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
                        var marko = browser.require('marko/components');
                        var legacy = browser.require('marko/legacy-components');
                        legacy.load = (type) => legacy.defineWidget(browser.require(type.replace(/^.*\/components-browser/, __dirname)));
                        var rootComponent = browser.require(require.resolve('./template.component-browser.js'));
                        marko.register(ssrTemplate.meta.id, rootComponent);
                        components.forEach(function (def) {
                            Object.keys(def.components).forEach(type => {
                                marko.register(type, browser.require(def.components[type]));
                            })
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

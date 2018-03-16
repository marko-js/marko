"use strict";
require("../__util__/test-init");

var autotest = require("../autotest");
var createJSDOMModule = require("../__util__/create-marko-jsdom-module");
var ssrTemplate = require("./template.marko");
var hydrateComponentPath = require.resolve("./template.component-browser.js");
var browserHelpersPath = require.resolve("../__util__/BrowserHelpers");
var testTargetHTML = '<div id="testsTarget"></div><div></div>';
var browser = createJSDOMModule(__dirname, testTargetHTML);
var BrowserHelpers = browser.require(browserHelpersPath);

autotest("fixtures", {
    client: runClientTest,
    hydrate: runHydrateTest
});

autotest("fixtures-deprecated", {
    client: runClientTest,
    hydrate: runHydrateTest
});

function runClientTest({ test, resolve, context }) {
    test(done => {
        let helpers = new BrowserHelpers();
        let testFile = resolve("test.js");
        let testFunc = browser.require(testFile);
        let isAsync = testFunc.length > 1;

        if (isAsync) {
            testFunc(helpers, cleanupAndFinish);
        } else {
            testFunc(helpers);
            cleanupAndFinish();
        }

        function cleanupAndFinish(err) {
            // Cache components for use in hydrate run.
            context.rendered = helpers.rendered;
            helpers.instances.forEach(instance => instance.destroy());
            helpers.targetEl.innerHTML = "";
            done(err);
        }
    });
}

function runHydrateTest({ test, resolve, context }) {
    test(done => {
        var components = context.rendered;
        if (!components)
            throw new Error("No components rendered by client version of test");
        var $global = components.reduce(
            ($g, c) => Object.assign($g, c.$global),
            {}
        );
        ssrTemplate
            .render({ components: components, $global: $global })
            .then(function(html) {
                var browser = createJSDOMModule(__dirname, String(html), {
                    beforeParse(window, browser) {
                        var marko = browser.require("marko/components");
                        var legacy = browser.require("marko/legacy-components");
                        legacy.load = type =>
                            legacy.defineWidget(
                                browser.require(
                                    type.replace(
                                        /^.*\/components-browser/,
                                        __dirname
                                    )
                                )
                            );
                        var rootComponent = browser.require(
                            hydrateComponentPath
                        );
                        marko.register(ssrTemplate.meta.id, rootComponent);
                        components.forEach(function(def) {
                            Object.keys(def.components).forEach(type => {
                                marko.register(
                                    type,
                                    browser.require(def.components[type])
                                );
                            });
                        });
                    }
                });
                var testFile = resolve("test.js");
                var testFunc = browser.require(testFile);
                var BrowserHelpers = browser.require(browserHelpersPath);
                var helpers = new BrowserHelpers();
                var isAsync = testFunc.length > 1;
                var curInstance = 0;

                browser.window.$initComponents();
                helpers.isHydrate = true;

                helpers.mount = function() {
                    return browser.window.components[curInstance++];
                };

                if (isAsync) {
                    testFunc(helpers, done);
                } else {
                    testFunc(helpers);
                    done();
                }
            })
            .catch(done);
    });
}

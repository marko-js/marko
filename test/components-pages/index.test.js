"use strict";

require("../__util__/test-init");

var autotest = require("../autotest");
var asyncTestSuite = require("../__util__/async-test-suite");
var createBrowserWithMarko = require("../__util__/create-marko-jsdom-module");

autotest("fixtures", run);
autotest("fixtures-deprecated", run);

/**
 * Builds a page with marko & lasso and then pipes it through jsdom, loading co-located tests.
 */
function run(fixture) {
    let resolve = fixture.resolve;
    asyncTestSuite(function() {
        var testFile = resolve("tests.js");
        var templateFile = resolve("template.marko");
        var template = require(templateFile);
        return template
            .render({})
            .then(function(html) {
                var browser = createBrowserWithMarko(__dirname, String(html), {
                    beforeParse(window, browser) {
                        browser.require("../../components");
                        browser.window.$initComponents();
                        browser.require(templateFile);
                    }
                });
                after(function() {
                    browser.window.close();
                });
                return browser;
            })
            .then(function(browser) {
                browser.window.document.close();
                browser.require(testFile);
            });
    });
}

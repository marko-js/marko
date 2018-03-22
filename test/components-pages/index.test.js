require("../__util__/test-init");

var autotest = require("../autotest");
var asyncTestSuite = require("../__util__/async-test-suite");
var createJSDOMModule = require("../__util__/create-marko-jsdom-module");

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
        return template.render({}).then(function(html) {
            var browser = createJSDOMModule(__dirname, String(html), {
                beforeParse(window, browser) {
                    browser.require("../../components");
                    browser.require(templateFile);
                }
            });
            after(function() {
                browser.window.close();
            });
            browser.require(testFile);
            browser.window.$initComponents();
        });
    });
}

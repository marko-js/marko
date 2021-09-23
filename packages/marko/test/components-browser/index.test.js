"use strict";
require("../__util__/test-init");

var autotest = require("mocha-autotest").default;
var createBrowserWithMarko = require("../__util__/create-marko-jsdom-module");
var ssrTemplate = require("./template.marko").default;
var hydrateComponentPath = require.resolve("./template.component-browser.js");
var browserHelpersPath = require.resolve("../__util__/BrowserHelpers");
var testTargetHTML = '<div id="testsTarget"></div><div></div>';
var browser = createBrowserWithMarko(__dirname, testTargetHTML);
var BrowserHelpers = browser.require(browserHelpersPath);

autotest("fixtures", {
  client: runClientTest,
  hydrate: runHydrateTest
});

function runClientTest(fixture) {
  let test = fixture.test;
  let resolve = fixture.resolve;
  let context = fixture.context;
  test(done => {
    let helpers = new BrowserHelpers();
    let testFile = resolve("test.js");
    let testFunc = browser.require(testFile);
    let hasCallback = testFunc.length > 1;

    try {
      if (hasCallback) {
        testFunc(helpers, cleanupAndFinish);
      } else {
        const result = testFunc(helpers);
        if (result && result.then) {
          result.then(cleanupAndFinish, cleanupAndFinish);
        } else {
          cleanupAndFinish();
        }
      }
    } catch (err) {
      cleanupAndFinish(err);
    }

    function cleanupAndFinish(err) {
      // Cache components for use in hydrate run.
      if (!err) context.rendered = helpers.rendered;
      helpers.instances.forEach(instance => instance.destroy());
      helpers.targetEl.innerHTML = "";
      if (browser.error) {
        err = browser.error;
        browser.error = undefined;
      }
      done(err);
    }
  });
}

function runHydrateTest(fixture) {
  let test = fixture.test;
  let resolve = fixture.resolve;
  let context = fixture.context;
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
      .then(function (html) {
        var browser = createBrowserWithMarko(__dirname, String(html), {
          beforeParse(window, browser) {
            var marko = browser.require("marko/components");
            var rootComponent = browser.require(hydrateComponentPath);
            rootComponent = rootComponent.default || rootComponent;
            marko.register(ssrTemplate.meta.id, rootComponent);
            components.forEach(function (def) {
              Object.keys(def.components).forEach(type => {
                var component = browser.require(def.components[type]);
                component = component.default || component;
                marko.register(type, component);
              });
            });
          }
        });
        var testFile = resolve("test.js");
        var testFunc = browser.require(testFile);
        var BrowserHelpers = browser.require(browserHelpersPath);
        var helpers = new BrowserHelpers();
        var hasCallback = testFunc.length > 1;
        var curInstance = 0;

        browser.window.$initComponents();
        helpers.isHydrate = true;

        helpers.mount = function () {
          return browser.window.getComponent(curInstance++);
        };

        if (hasCallback) {
          testFunc(helpers, cleanupAndFinish);
        } else {
          const result = testFunc(helpers);
          if (result && result.then) {
            result.then(cleanupAndFinish, cleanupAndFinish);
          } else {
            cleanupAndFinish();
          }
        }

        function cleanupAndFinish(err) {
          if (browser.error) {
            err = browser.error;
            browser.error = undefined;
          }
          done(err);
        }
      })
      .catch(done);
  });
}

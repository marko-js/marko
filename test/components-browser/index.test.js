'use strict';
require('../__util__/test-init');

var path = require('path');
var autotest = require('../autotest');
var createJSDOMModule = require('../__util__/create-marko-jsdom-module');
var ssrTemplate = require('./template.marko');
var TEST_NAME = path.basename(__dirname);
var browser = createJSDOMModule(__dirname, '<div id="testsTarget"></div><div></div>');
var BrowserHelpers = browser.require('../__util__/BrowserHelpers');
var $testsTarget = browser.window.document.getElementById('testsTarget');
var helpers;
// var renderedCache = {};

describe(TEST_NAME, function () {
    afterEach(function () {
        helpers.components.forEach(function (component) {
            component.instance.destroy();
        });

        $testsTarget.innerHTML = '';
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
});

// describe.skip(TEST_NAME + ' (hydrated)', function () {
//     autotest.scanDir(
//         path.join(__dirname, './fixtures'),
//         runServerRender
//     );

//     describe('deprecated', function () {
//         autotest.scanDir(
//             path.join(__dirname, './fixtures-deprecated'),
//             runServerRender
//         );
//     });
// });


function runBrowserRender(dir, _, done) {
    var testFile = path.join(dir, 'test.js');
    var testFunc = browser.require(testFile);

    runTests(testFunc, function (err) {
        // Cache components for use in hydrate run.
        // renderedCache[dir] = helpers.components.map(function (component) {
        //     return {
        //         template: require(component.type.replace(/^.*\/components-browser/, __dirname)),
        //         input: component.input
        //     };
        // });
        if (err) {
            done(err);
        } else {
            done();
        }
    });
}

// function runServerRender(dir, _, done) {
//     var components = renderedCache[dir];
//     ssrTemplate
//         .render({ components: components })
//         .then(function (html) {
//             var browser = createJSDOMModule(__dirname, String(html));
//             var BrowserHelpers = browser.require('../__util__/BrowserHelpers');
//             var testFile = path.join(dir, 'test.js');
//             var testFunc = browser.require(testFile);
//             var helpers = new BrowserHelpers();
//             if (browser.window.$initComponents) {
//                 browser.window.$initComponents();
//             }
//             runTests(testFunc, helpers, done);
//         })
//         .catch(done);
// }

function runTests (fn, done) {
    helpers = new BrowserHelpers();
    var isAsync = fn.length > 1;

    if (isAsync) {
        fn(helpers, done);
    } else {
        fn(helpers);
        done();
    }
}

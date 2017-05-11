'use strict';
require('./util/test-init');

var chai = require('chai');
chai.config.includeStack = true;
var path = require('path');
var autotest = require('./autotest');

require('../node-require').install();

var runRenderTest = require('./util/runRenderTest');

describe('vdom-render', function() {
    var autoTestDir = path.join(__dirname, 'autotests/render');

    autotest.scanDir(
        autoTestDir,
        function run(dir, helpers, done) {
            runRenderTest(dir, helpers, done, {
                output: 'vdom'
            });
        });
});

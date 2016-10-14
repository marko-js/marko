'use strict';
require('./patch-module');
require('../node-require').install();

var chai = require('chai');
chai.config.includeStack = true;
var path = require('path');
var autotest = require('./autotest');
var runRenderTest = require('./util/runRenderTest');

describe('async render (vdom)', function() {
    var autoTestDir = path.join(__dirname, 'autotests/async-render');

    this.timeout(4000);
    autotest.scanDir(
        autoTestDir,
        function run(dir, helpers, done) {
            runRenderTest(dir, helpers, done, {
                output: 'vdom',
                checkAsyncEvents: true
            });
        });
});
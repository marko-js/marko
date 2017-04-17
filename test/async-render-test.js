'use strict';
require('./util/patch-module');
require('../node-require').install();

var chai = require('chai');
chai.config.includeStack = true;
var path = require('path');
var autotest = require('./autotest');
var runRenderTest = require('./util/runRenderTest');

describe('async-render', function() {
    var autoTestDir = path.join(__dirname, 'autotests/async-render');

    autotest.scanDir(
        autoTestDir,
        function run(dir, helpers, done) {
            runRenderTest(dir, helpers, done, {
                output: 'html',
                checkAsyncEvents: true
            });
        });
});
